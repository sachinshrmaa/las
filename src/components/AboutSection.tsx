const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">About the School</h2>
        <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Little Angel Senior Secondary School was founded in 1997 in the quiet rural village of Nandok, at a time when access to quality education was limited not by ability, but by geography and circumstance. The village had no proper road connectivity, few educational options, and no English-medium private school.
          </p>
          <p>
            The school began with a clear purpose—to bring quality English-medium education to the doorstep of a rural community, making learning accessible, affordable, and meaningful. What started as a modest initiative gradually grew with the trust of parents, the commitment of teachers, and the aspirations of students.
          </p>
          <p>
            Over the years, the institution has evolved into a Senior Secondary School, now offering Science education at the Senior Secondary level (PCM/PCB). Students from different states have also chosen this school as a place to learn, grow, and complete their education.
          </p>
        </div>

        <div className="bg-accent rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Legacy</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our legacy is not defined by buildings or numbers—it is defined by access, belief, and continuity.
            </p>
            <p>
              The Founder belonged to this very village and experienced firsthand the struggle of seeking good education from a rural background. That lived experience shaped a lifelong conviction: no child should be limited by where they are born or what they can afford.
            </p>
            <p>
              With the passing of the Founder, the responsibility of carrying this vision forward has passed to the next generation, with an unwavering commitment to preserve the original values while guiding the institution through changing educational needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
