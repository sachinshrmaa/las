import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Little Angel School transformed my son's future. Coming from a small village, I never imagined he would clear competitive exams and get into engineering. The teachers here truly care.",
    name: "Rajesh Kumar",
    role: "Parent, Class 12 Alumni (2019)",
  },
  {
    quote: "I am a first-generation learner in my family. This school gave me the confidence and knowledge to pursue higher education. The values I learned here still guide me every day.",
    name: "Priya Sharma",
    role: "Alumni, Batch of 2018",
  },
  {
    quote: "The school provides an environment where children feel safe and motivated. My daughter has grown so much—not just academically but as a responsible individual.",
    name: "Sunita Devi",
    role: "Parent, Class 8 Student",
  },
  {
    quote: "What sets Little Angel apart is their commitment to making quality education affordable. They truly live by the Founder's vision of equal opportunity for every child.",
    name: "Dr. Anil Verma",
    role: "Alumni & Community Leader",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">What People Say</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Testimonials</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Hear from parents and alumni about their experience with our school
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow relative">
            <Quote className="w-8 h-8 text-secondary/30 absolute top-6 right-6" />
            <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">{t.name.charAt(0)}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
