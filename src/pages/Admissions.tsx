import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, GraduationCap, FileText, Calendar, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const classOptions = [
  "Nursery",
  "LKG",
  "UKG",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th (PCM)",
  "11th (PCB)",
  "12th (PCM)",
  "12th (PCB)",
];

const steps = [
  {
    icon: FileText,
    title: "Submit Enquiry",
    desc: "Fill the form below or visit the school office",
  },
  {
    icon: Calendar,
    title: "Campus Visit",
    desc: "Schedule a guided tour of our campus",
  },
  {
    icon: GraduationCap,
    title: "Admission Test",
    desc: "Age-appropriate assessment for the student",
  },
  {
    icon: Phone,
    title: "Confirmation",
    desc: "Complete formalities and secure your seat",
  },
];

const Admissions = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Enquiry Submitted!",
        description:
          "Thank you for your interest. We will contact you within 24 hours.",
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
            ADMISSIONS 2026-27
          </span>
          <h1 className="mt-5 text-3xl font-bold md:text-5xl">Admissions</h1>
          <p className="mt-3 max-w-2xl text-base text-green-100 md:text-lg">
            Begin your child&apos;s journey at Little Angel Senior Secondary
            School. We welcome students from Nursery to Class XII.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <div className="container py-16">
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 md:text-3xl">
          Admission Process
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                <step.icon className="h-6 w-6 text-green-700" />
              </div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-600">
                Step {i + 1}
              </div>
              <h3 className="mb-1 font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Enquiry Form */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">
              Admission Enquiry
            </h2>
            <p className="mb-8 text-slate-600">
              Fill in the details below and our team will get back to you
              shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent / Guardian Name *</Label>
                  <Input
                    id="parentName"
                    name="parentName"
                    required
                    maxLength={100}
                    placeholder="Full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={15}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="studentName">Student Name *</Label>
                  <Input
                    id="studentName"
                    name="studentName"
                    required
                    maxLength={100}
                    placeholder="Student's full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="classApplied">Class Applied For *</Label>
                  <select
                    id="classApplied"
                    name="classApplied"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select class</option>
                    {classOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  maxLength={1000}
                  rows={4}
                  placeholder="Any specific queries or information..."
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full gap-2 bg-green-700 hover:bg-green-800"
              >
                <Send size={16} />
                {submitting ? "Submitting..." : "Submit Enquiry"}
              </Button>
            </form>

            <div className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-600">
              Need help with the process?{" "}
              <Link
                to="/contact"
                className="font-semibold text-green-700 hover:text-green-800"
              >
                Speak with admissions office
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admissions;
