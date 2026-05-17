import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Stars, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

/** Mappa rotta -> palette (HSL primary verdi) */
const ROUTE_PALETTE: Record<string, { a: string; b: string; c: string }> = {
  "/": { a: "#16a34a", b: "#84cc16", c: "#22d3ee" },
  "/agenda-2030": { a: "#2563eb", b: "#22c55e", c: "#fbbf24" },
  "/green-computing": { a: "#10b981", b: "#06b6d4", c: "#a3e635" },
  "/aziende": { a: "#15803d", b: "#65a30d", c: "#facc15" },
  "/sport": { a: "#0ea5e9", b: "#22c55e", c: "#f97316" },
  "/fotovoltaico": { a: "#f59e0b", b: "#fde047", c: "#16a34a" },
};

function FloatingPlanet({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.02;
    }
  });
  return (
    <Float speed={0.4} rotationIntensity={0.15} floatIntensity={0.35}>
      <Sphere ref={ref} args={[1.4, 64, 64]} position={[3.2, 0.4, -0.5]}>
        <MeshDistortMaterial
          color={color}
          distort={0.12}
          speed={0.4}
          roughness={0.3}
          metalness={0.35}
          opacity={0.92}
          transparent
        />
      </Sphere>
    </Float>
  );
}

function Crystal({ color, position }: { color: string; position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.4;
      ref.current.rotation.y += delta * 0.25;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={ref} args={[0.5, 0]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.15}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </Icosahedron>
    </Float>
  );
}

function Particles({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return arr;
  }, []);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.04} sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const SceneBackground = () => {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();
  const palette = ROUTE_PALETTE[pathname] ?? ROUTE_PALETTE["/"];
  const [webglOk, setWebglOk] = useState<boolean>(true);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    setWebglOk(detectWebGL());
  }, []);

  // Se il contesto WebGL si perde, riprova dopo un breve delay invece di restare in fallback
  useEffect(() => {
    if (webglOk) return;
    const t = setTimeout(() => {
      if (detectWebGL()) {
        setRetryKey((k) => k + 1);
        setWebglOk(true);
      }
    }, 1500);
    return () => clearTimeout(t);
  }, [webglOk]);

  // Su mobile o se WebGL non è disponibile: gradiente animato come fallback
  if (isMobile || !webglOk) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${palette.a}33, transparent 50%),
                       radial-gradient(circle at 80% 60%, ${palette.b}33, transparent 50%),
                       radial-gradient(circle at 50% 90%, ${palette.c}22, transparent 60%)`,
          transition: "background 0.8s ease",
        }}
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        key={retryKey}
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          const canvas = gl.domElement;
          canvas.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            setWebglOk(false);
          });
          canvas.addEventListener("webglcontextrestored", () => {
            setWebglOk(true);
          });
        }}
      >
        <color attach="background" args={["#f4faf2"]} />
        <fog attach="fog" args={["#f4faf2", 8, 18]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} />
        <pointLight position={[-4, -2, 2]} intensity={0.6} color={palette.c} />
        <Suspense fallback={null}>
          <FloatingPlanet color={palette.a} />
          <Crystal color={palette.b} position={[-2.5, 1.2, -1]} />
          <Crystal color={palette.c} position={[-3, -1.5, 0.5]} />
          <Crystal color={palette.a} position={[3, -1.8, -1.5]} />
          <Particles color={palette.b} />
          <Stars radius={20} depth={20} count={800} factor={2} fade speed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneBackground;