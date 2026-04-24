interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

const PageHero = ({ eyebrow, title, subtitle, image }: PageHeroProps) => (
  <section className="relative overflow-hidden gradient-soft border-b border-border">
    <div className="container mx-auto py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <div className="reveal">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">{subtitle}</p>
      </div>
      <div className="reveal-x">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-3xl shadow-glow animate-float"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default PageHero;
