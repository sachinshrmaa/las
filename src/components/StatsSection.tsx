import { GraduationCap, Users, BookOpen, Award } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "25+", label: "Years of Excellence" },
  { icon: Users, value: "5000+", label: "Alumni Network" },
  { icon: BookOpen, value: "PCM/PCB", label: "Science Streams" },
  { icon: Award, value: "100%", label: "Fee Support for Deserving" },
];

const StatsSection = () => (
  <section className="relative -mt-16 z-10">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-card rounded-xl p-6 shadow-card text-center" style={{ animation: `count-up 0.5s ease-out ${i * 0.1}s both` }}>
            <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-serif font-bold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
