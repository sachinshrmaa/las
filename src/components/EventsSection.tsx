import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    date: "15 Apr 2026",
    title: "Admissions Open Day",
    desc: "Campus tour, meet teachers, and learn about our curriculum. All parents welcome.",
    time: "9:00 AM – 2:00 PM",
    location: "Main Campus",
    tag: "Admissions",
  },
  {
    date: "22 Apr 2026",
    title: "Annual Science Exhibition",
    desc: "Students from Class 6–12 showcase their innovative science projects and experiments.",
    time: "10:00 AM – 4:00 PM",
    location: "Science Block",
    tag: "Academic",
  },
  {
    date: "01 May 2026",
    title: "Summer Camp Registration",
    desc: "Registrations open for our summer camp featuring sports, arts, robotics, and personality development.",
    time: "All Day",
    location: "Online & Office",
    tag: "Activities",
  },
];

const news = [
  {
    date: "02 Apr 2026",
    title: "Board Exam Results: 98% Pass Rate",
    desc: "Our Class 12 students achieved outstanding results in the CBSE Board Examinations with 3 students in the district merit list.",
  },
  {
    date: "28 Mar 2026",
    title: "New Computer Lab Inaugurated",
    desc: "State-of-the-art computer lab with 30 systems inaugurated to enhance digital literacy among students.",
  },
  {
    date: "15 Mar 2026",
    title: "Inter-School Sports Championship Winners",
    desc: "Our athletics team secured 1st position in the district-level inter-school sports championship.",
  },
];

const tagColors: Record<string, string> = {
  Admissions: "bg-secondary/15 text-secondary",
  Academic: "bg-primary/15 text-primary",
  Activities: "bg-accent text-accent-foreground",
};

const EventsSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Stay Updated</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Events & News</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Latest happenings and upcoming events at Little Angel School
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Events */}
        <div className="lg:col-span-3">
          <h3 className="text-xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" /> Upcoming Events
          </h3>
          <div className="space-y-4">
            {events.map((e, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[e.tag] || "bg-muted text-muted-foreground"}`}>
                    {e.tag}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">{e.date}</span>
                </div>
                <h4 className="font-serif font-bold text-foreground text-lg mb-2">{e.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{e.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {e.time}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {e.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-serif font-bold text-foreground mb-6">Latest News</h3>
          <div className="space-y-4">
            {news.map((n, i) => (
              <div key={i} className="bg-card rounded-xl p-5 shadow-card">
                <span className="text-xs text-muted-foreground font-medium">{n.date}</span>
                <h4 className="font-semibold text-foreground mt-1 mb-1.5">{n.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
