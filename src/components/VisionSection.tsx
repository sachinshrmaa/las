import { Eye, Target, Heart } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Our Vision",
    content: "To nurture confident, capable, and compassionate learners by providing quality education rooted in equity, integrity, and opportunity—ensuring that students from rural backgrounds can stand equal in a wider world.",
  },
  {
    icon: Target,
    title: "Our Mission",
    content: null,
    list: [
      "Provide affordable and accessible English-medium education in a rural setting",
      "Uphold the founding principle that financial limitations should never hinder learning",
      "Deliver quality education up to Senior Secondary level, including Science streams",
      "Support first-generation learners with care, discipline, and academic guidance",
      "Create a learning environment grounded in values, responsibility, and respect",
      "Carry forward the Founder's vision through committed and ethical leadership",
    ],
  },
];

const VisionSection = () => (
  <section id="vision" className="py-20 bg-muted">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">What Drives Us</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">Vision & Mission</h2>
        <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cards.map((c, i) => (
          <div key={i} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
              <c.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{c.title}</h3>
            {c.content && <p className="text-muted-foreground leading-relaxed">{c.content}</p>}
            {c.list && (
              <ul className="space-y-2.5">
                {c.list.map((item, j) => (
                  <li key={j} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                    <Heart className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;
