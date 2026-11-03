import Link from "next/link";
import {
  Trophy,
  Medal,
  Award,
  Target,
  TrendingUp,
  ArrowRight,
  GraduationCap,
  Star,
} from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const achievements = [
  {
    value: "500+",
    end: 500,
    suffix: "+",
    label: "Successful Students",
    icon: GraduationCap,
  },
  {
    value: "95%",
    end: 95,
    suffix: "%",
    label: "Academic Success Rate",
    icon: TrendingUp,
  },
  {
    value: "50+",
    end: 50,
    suffix: "+",
    label: "Top Exam Selections",
    icon: Trophy,
  },
  {
    value: "15+",
    end: 15,
    suffix: "+",
    label: "Years of Excellence",
    icon: Award,
  },
];

const toppers = [
  {
    name: "Aarav Sharma",
    exam: "JEE Main",
    score: "99.5",
    rank: "Top Performer",
    initials: "AS",
  },
  {
    name: "Ananya Verma",
    exam: "NEET",
    score: "680",
    rank: "Top Performer",
    initials: "AV",
  },
  {
    name: "Rohan Gupta",
    exam: "Class 12 Boards",
    score: "96.8",
    rank: "Top Performer",
    initials: "RG",
  },
];

const ResultsSection = () => {
  return (
    <section className="bg-[#F8F7F3] py-20 md:py-28">
      <SectionReveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Heading */}
          <div className="scroll-reveal mx-auto mb-14 max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <Trophy size={17} className="text-[#F28C45]" />

              <span className="text-xs font-bold tracking-widest text-[#142B4A]">
                RESULTS & ACHIEVEMENTS
              </span>
            </div>

            <h2 className="font-heading text-3xl font-bold leading-tight text-[#142B4A] sm:text-4xl lg:text-5xl">
              Celebrating Every
              <span className="text-[#F28C45]">
                {" "}Success Story.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#64748B] sm:text-base">
              Every achievement represents dedication, consistent effort
              and the right academic guidance. We celebrate the journey
              behind every student&apos;s success.
            </p>

          </div>

          {/* Achievement Statistics */}
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

            {achievements.map((item, index) => {
              const Icon = item.icon;
              const staggerClass = `stagger-${index + 1}`;

              return (
                <div
                  key={item.label}
                  className={`group scroll-reveal ${staggerClass} rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-8`}
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-[#F28C45] transition-transform group-hover:scale-110">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 font-heading text-3xl font-bold text-[#142B4A]">
                    <AnimatedCounter end={item.end} suffix={item.suffix} />
                  </h3>

                  <p className="mt-2 text-xs font-medium text-[#64748B] sm:text-sm">
                    {item.label}
                  </p>

                </div>
              );
            })}

          </div>

          {/* Topper Section */}
          <div className="mt-20">

            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>
                <span className="text-xs font-bold tracking-[3px] text-[#F28C45]">
                  STUDENT SPOTLIGHT
                </span>

                <h3 className="mt-3 font-heading text-2xl font-bold text-[#142B4A] sm:text-3xl">
                  Recognizing Excellence
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">
                  Celebrating students who have demonstrated outstanding
                  dedication and academic performance.
                </p>
              </div>

              <Link
                href="/results"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#142B4A] hover:text-[#F28C45]"
              >
                View All Results
                <ArrowRight size={17} />
              </Link>

            </div>

            {/* Topper Cards */}
            <div className="grid gap-7 md:grid-cols-3">

              {toppers.map((student, index) => {
                const staggerClass = `stagger-${index + 1}`;

                return (
                  <div
                    key={student.id || student.name}
                    className={`group scroll-reveal ${staggerClass} relative overflow-hidden rounded-2xl bg-[#142B4A] p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                  >

                    {/* Background Decoration */}
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F28C45]/15 blur-2xl" />

                    <div className="relative">

                      <div className="flex items-center justify-between">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#F28C45] bg-white/10 font-heading text-xl font-bold">
                          {student.initials}
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F28C45] text-[#142B4A] transition-transform group-hover:scale-105">
                          {index === 0 ? (
                            <Trophy size={23} />
                          ) : index === 1 ? (
                            <Medal size={23} />
                          ) : (
                            <Award size={23} />
                          )}
                        </div>

                      </div>

                      <p className="mt-7 text-xs font-bold tracking-widest text-[#F28C45]">
                        {student.exam.toUpperCase()}
                      </p>

                      <h4 className="mt-2 font-heading text-xl font-bold">
                        {student.name}
                      </h4>

                      <div className="mt-6 flex items-end justify-between border-t border-white/20 pt-6">

                        <div>
                          <p className="text-xs text-gray-300">
                            Achievement
                          </p>

                          <p className="mt-1 font-heading text-3xl font-bold text-[#F28C45]">
                            {student.score}
                            {student.exam === "JEE Main" ? "%" : student.exam === "NEET" ? "/720" : "%"}
                          </p>
                        </div>

                        <div className="flex items-center gap-1 text-xs font-semibold text-gray-200">
                          <Star size={14} fill="#F28C45" stroke="#F28C45" />
                          {student.rank}
                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

          {/* Bottom CTA */}
          <div className="scroll-reveal-scale stagger-5 mt-20 rounded-2xl bg-white p-8 text-center shadow-sm md:p-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-[#F28C45]">
              <Target size={30} />
            </div>

            <h3 className="mt-6 font-heading text-2xl font-bold text-[#142B4A] sm:text-3xl">
              Your Success Story Starts Here.
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#64748B]">
              Take the first step towards your academic goals.
              Let our experienced educators guide your learning journey.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#142B4A] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#F28C45] hover:text-[#142B4A]"
            >
              Enquire for Admission
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </SectionReveal>
    </section>
  );
};

export default ResultsSection;
