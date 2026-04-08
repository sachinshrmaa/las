const PhilosophySection = () => (
  <section id="philosophy" className="py-20 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Belief</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">Our Philosophy</h2>
        <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-primary rounded-2xl p-10 md:p-14 text-primary-foreground shadow-card">
          <blockquote className="text-lg md:text-xl leading-relaxed font-light italic mb-8">
            "We believe that education is not merely the delivery of curriculum, but the steady building of confidence, character, and clarity of thought—especially for children coming from rural and first-generation learning backgrounds."
          </blockquote>
          <div className="space-y-4 text-primary-foreground/85 leading-relaxed">
            <p>
              In a community where many students are the first in their families to experience English-medium education, we recognise that learning is as much emotional as it is academic. Our approach emphasises patience, encouragement, and discipline, allowing students to grow at a pace that strengthens understanding rather than pressure.
            </p>
            <p>
              We believe that affordability and quality must coexist, and that access to education should never depend on economic privilege. Every child who walks into our classrooms carries potential, and it is our responsibility to create an environment where that potential is recognised, guided, and nurtured.
            </p>
            <p>
              Above all, we believe education should prepare students not only for examinations, but for life—with values that foster responsibility, resilience, and respect for society.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PhilosophySection;
