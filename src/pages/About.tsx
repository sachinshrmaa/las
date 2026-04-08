import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.replace("#", "");
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    // Delay ensures section exists and layout is stable before scrolling.
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, rgba(15,23,42,0.88) 0%, rgba(63,122,58,0.82) 52%, rgba(77,148,70,0.84) 100%), url('/la.jpeg') center/cover no-repeat",
        }}
      >
        <div className="container py-16 md:py-24 text-white">
          <span className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/20 px-4 py-1 text-xs font-semibold tracking-wider text-amber-200">
            ABOUT THE INSTITUTION
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Rooted in Rural Purpose, Growing with Generations
          </h1>
          <p className="mt-4 max-w-3xl text-base text-green-100 md:text-lg">
            Since 1997, Little Angel Senior Secondary School has worked to make
            quality English-medium education accessible, affordable, and
            meaningful for rural families.
          </p>
        </div>
      </section>

      <section
        id="about-school"
        className="container scroll-mt-24 py-12 md:py-16"
      >
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-3xl font-bold text-slate-900">
            About the School
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700 md:text-base">
            <p>
              Little Angel Senior Secondary School was founded in 1997 in the
              quiet rural village of Nandok, at a time when access to quality
              education was limited not by ability, but by geography and
              circumstance. The village had no proper road connectivity, few
              educational options, and no English-medium private school. For
              many families dependent on agriculture, education beyond the
              basics felt distant and uncertain.
            </p>
            <p>
              The school began with a clear purpose: to bring quality
              English-medium education to the doorstep of a rural community,
              making learning accessible, affordable, and meaningful. What
              started as a modest initiative gradually grew with the trust of
              parents, the commitment of teachers, and the aspirations of
              students.
            </p>
            <p>
              Over the years, the institution has evolved into a Senior
              Secondary School, now offering Science education at the Senior
              Secondary level (PCM/PCB). Students from different states have
              also chosen this school as a place to learn, grow, and complete
              their education, adding diversity to a campus deeply rooted in
              rural values.
            </p>
            <p>
              Despite this growth, the school has never moved away from its
              founding belief: education must remain inclusive. Supporting
              students from economically weaker sections through fee
              concessions, including full fee waivers in deserving cases,
              continues to be an integral part of the school&apos;s identity.
            </p>
          </div>
        </article>
      </section>

      <section id="legacy" className="bg-slate-50 scroll-mt-24 py-12 md:py-16">
        <div className="container">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-900">Our Legacy</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700 md:text-base">
              <p>
                Our legacy is not defined by buildings or numbers. It is defined
                by access, belief, and continuity.
              </p>
              <p>
                The Founder of the school belonged to this very village and
                experienced firsthand the struggle of seeking good education
                from a rural background. That lived experience shaped a lifelong
                conviction: no child should be limited by where they are born or
                what they can afford. From this belief emerged a school that
                dared to imagine first-generation English-medium learners rising
                from a remote village.
              </p>
              <p>
                For years, the institution quietly carried this responsibility:
                educating children, supporting families, and offering
                opportunities where none existed before. Many students studied
                here with dignity and support, some with complete fee
                concessions, not as beneficiaries of charity but as rightful
                learners.
              </p>
              <p>
                With the passing of the Founder, the responsibility of carrying
                this vision forward has passed to the next generation. The
                school continues under the stewardship of the Founder&apos;s
                family, with an unwavering commitment to preserve the original
                values while guiding the institution through changing
                educational needs.
              </p>
              <p>The legacy lives on, not as memory, but as purpose.</p>
            </div>
          </article>
        </div>
      </section>

      <section
        id="vision-mission"
        className="container scroll-mt-24 py-12 md:py-16"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              To nurture confident, capable, and compassionate learners by
              providing quality education rooted in equity, integrity, and
              opportunity, ensuring that students from rural backgrounds can
              stand equal in a wider world.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 md:text-base">
              <p>
                To provide affordable and accessible English-medium education in
                a rural setting.
              </p>
              <p>
                To uphold the founding principle that financial limitations
                should never hinder learning.
              </p>
              <p>
                To deliver quality education up to Senior Secondary level,
                including Science streams.
              </p>
              <p>
                To support first-generation learners with care, discipline, and
                academic guidance.
              </p>
              <p>
                To create a learning environment grounded in values,
                responsibility, and respect.
              </p>
              <p>
                To carry forward the Founder&apos;s vision through committed and
                ethical leadership.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        id="philosophy"
        className="bg-slate-50 scroll-mt-24 py-12 md:py-16"
      >
        <div className="container">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Our Philosophy
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700 md:text-base">
              <p>
                We believe that education is not merely the delivery of
                curriculum, but the steady building of confidence, character,
                and clarity of thought, especially for children coming from
                rural and first-generation learning backgrounds.
              </p>
              <p>
                In a community where many students are the first in their
                families to experience English-medium education, we recognise
                that learning is as much emotional as it is academic. Our
                approach therefore emphasises patience, encouragement, and
                discipline, allowing students to grow at a pace that strengthens
                understanding rather than pressure.
              </p>
              <p>
                We believe that affordability and quality must coexist, and that
                access to education should never depend on economic privilege.
                Every child who walks into our classrooms carries potential, and
                it is our responsibility to create an environment where that
                potential is recognised, guided, and nurtured.
              </p>
              <p>
                Above all, we believe education should prepare students not only
                for examinations, but for life, with values that foster
                responsibility, resilience, and respect for society.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        id="leadership"
        className="container scroll-mt-24 py-12 md:py-16"
      >
        <article className="rounded-2xl border border-green-200 bg-gradient-to-r from-green-700 to-green-900 p-8 text-white">
          <p className="text-xs font-semibold tracking-wider text-green-100">
            LEADERSHIP & CONTINUITY
          </p>
          <h2 className="mt-2 text-3xl font-bold">Leadership & Continuity</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-green-50 md:text-base">
            <p>
              The foundation of Little Angel Senior Secondary School rests on a
              vision shaped by lived experience, commitment, and service to the
              community. While the Founder is no longer with us, the principles
              upon which the school was built continue to guide every aspect of
              its functioning.
            </p>
            <p>
              The institution is presently guided by the Founder&apos;s family,
              ensuring continuity in leadership and responsibility. This
              transition is not one of change in direction, but of stewardship,
              carrying forward a mission that prioritises access, equity, and
              quality education for all.
            </p>
            <p>
              As the school moves forward, it remains rooted in its original
              purpose while responding thoughtfully to evolving educational
              needs. Growth is approached with care, decisions are guided by
              values, and the trust placed by parents and the community
              continues to be held as the school&apos;s greatest responsibility.
            </p>
            <p>
              The legacy is carried forward not in name alone, but in everyday
              practice.
            </p>
          </div>
        </article>
      </section>

      <section className="container py-12 md:py-16">
        <div className="rounded-2xl border border-green-200 bg-gradient-to-r from-green-700 to-green-900 p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-wider text-green-100">
                NEXT STEP
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                Explore Admissions and Campus Visits
              </h3>
            </div>
            <div className="flex gap-3">
              <Link
                to="/admissions"
                className="rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Contact Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
