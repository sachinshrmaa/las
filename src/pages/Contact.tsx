import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message Sent!",
        description:
          "Thank you for reaching out. We will respond within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, rgba(15,23,42,0.86) 0%, rgba(63,122,58,0.8) 50%, rgba(77,148,70,0.84) 100%), url('/la.jpeg') center/cover no-repeat",
        }}
      >
        <div className="container py-14 md:py-20 text-white">
          <span className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/20 px-4 py-1 text-xs font-semibold tracking-wider text-amber-200">
            CONTACT & SUPPORT
          </span>
          <h1 className="mt-5 text-3xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-base text-green-100 md:text-lg">
            Reach out with any questions about admissions, academics, school
            timings, or campus visits.
          </p>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      placeholder="Full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    maxLength={200}
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={2000}
                    rows={5}
                    placeholder="Write your message here..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full gap-2 bg-green-700 hover:bg-green-800"
                >
                  <Send size={16} />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-slate-900">
                Get in Touch
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
                    <MapPin className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Address
                    </p>
                    <p className="text-sm text-slate-600">
                      Village Nandok, District Office Road, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
                    <Phone className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Phone
                    </p>
                    <p className="text-sm text-slate-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
                    <Mail className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Email
                    </p>
                    <p className="text-sm text-slate-600">
                      office@littleangel.edu.in
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
                    <Clock className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Office Hours
                    </p>
                    <p className="text-sm text-slate-600">
                      Mon-Sat: 8:30 AM - 3:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-xs font-semibold tracking-wider text-amber-700">
                ADMISSIONS HELP DESK
              </p>
              <h4 className="mt-2 text-lg font-bold text-amber-900">
                Need guidance before applying?
              </h4>
              <p className="mt-2 text-sm text-amber-800">
                Our team can help with eligibility, required documents, and
                admission timelines.
              </p>
              <Link
                to="/admissions"
                className="mt-4 inline-flex text-sm font-semibold text-amber-900 underline"
              >
                Go to Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
