import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Atom,
  FlaskConical,
  Calculator,
  Award,
} from "lucide-react";

const faculty = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    subject: "Physics Specialist",
    experience: "12+ Years Experience",
    qualification: "M.Sc. Physics",
    initials: "AS",
    icon: Atom,
    description:
      "Passionate about making complex physics concepts simple and practical.",
  },
  {
    id: 2,
    name: "Priya Verma",
    subject: "Chemistry Specialist",
    experience: "10+ Years Experience",
    qualification: "M.Sc. Chemistry",
    initials: "PV",
    icon: FlaskConical,
    description:
      "Focuses on conceptual understanding and application-based learning.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    subject: "Mathematics Expert",
    experience: "9+ Years Experience",
    qualification: "M.Sc. Mathematics",
    initials: "RM",
    icon: Calculator,
    description:
      "Helps students develop logical thinking and strong problem-solving skills.",
  },
  {
    id: 4,
    name: "Neha Gupta",
    subject: "Biology Specialist",
    experience: "8+ Years Experience",
    qualification: "M.Sc. Biology",
    initials: "NG",
    icon: BookOpen,
    description:
      "Dedicated to building strong biological concepts through structured learning.",
  },
];

const FacultySection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <SectionReveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Heading */}
          <div className="scroll-reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2">
                <GraduationCap size={17} className="text-[#F28C45]" />
                <span className="text-xs font-bold tracking-widest text-[#142B4A]">
                  MEET OUR FACULTY
                </span>
              </div>

              <h2 className="font-heading text-3xl font-bold leading-tight text-[#142B4A] sm:text-4xl lg:text-5xl">
                Learn From Those Who
                <span className="text-[#F28C45]">
                  {" "}Inspire Excellence.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#64748B] sm:text-base">
                Our educators bring knowledge, experience and dedication
                to create an engaging learning environment for every student.
              </p>

            </div>

            <Link
              href="/faculty"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-[#142B4A]/20 px-6 py-3 text-sm font-semibold text-[#142B4A] transition-all hover:border-[#F28C45] hover:bg-[#142B4A] hover:text-white"
            >
              View All Faculty
              <ArrowRight size={17} />
            </Link>

          </div>

          {/* Faculty Cards */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {faculty.map((teacher, index) => {
              const Icon = teacher.icon;

              return (
                <div
                  key={teacher.id}
                  className={`scroll-reveal stagger-${index + 1} group overflow-hidden rounded-2xl border border-gray-100 bg-[#F8F7F3] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                >

                  {/* Profile Area */}
                  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#142B4A] transition-colors duration-300 group-hover:bg-[#0D1B2A]">

                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F28C45]/20 blur-2xl" />

                    <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/20 bg-white/10 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-[#F28C45]">

                      <span className="font-heading text-4xl font-bold text-white">
                        {teacher.initials}
                      </span>

                    </div>

                    <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F28C45] text-[#142B4A] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={22} />
                    </div>

                    <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                      FACULTY MEMBER
                    </div>

                  </div>

                  {/* Teacher Information */}
                  <div className="p-6">

                    <h3 className="font-heading text-lg font-bold text-[#142B4A]">
                      {teacher.name}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-[#F28C45]">
                      {teacher.subject}
                    </p>

                    <p className="mt-4 min-h-18 text-sm leading-6 text-[#64748B]">
                      {teacher.description}
                    </p>

                    <div className="mt-5 space-y-3 border-t border-gray-200 pt-5">

                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Award size={16} className="text-[#F28C45]" />
                        {teacher.experience}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <GraduationCap size={16} className="text-[#F28C45]" />
                        {teacher.qualification}
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Bottom Highlight */}
          <div className="scroll-reveal-scale stagger-5 mt-14 rounded-2xl bg-[#142B4A] px-8 py-10 text-center md:px-14">

            <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Great Teachers Create Great Futures.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300">
              Discover how the right mentorship and academic guidance
              can make a difference in your learning journey.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#F28C45] px-7 py-4 text-sm font-bold text-[#142B4A] transition-all hover:-translate-y-1 hover:bg-white"
            >
              Connect With Our Team
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </SectionReveal>

    </section>
  );
};

export default FacultySection;
