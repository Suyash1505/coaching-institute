
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Phone,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const AdmissionCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F3] py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main CTA Container */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#142B4A] px-7 py-14 shadow-2xl sm:px-12 lg:px-16 lg:py-20">

          {/* Background Decorations */}
          <div className="absolute inset-0 dots-pattern opacity-20" />

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F28C45]/15 blur-[100px]" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-400/10 blur-[100px]" />

          {/* Content */}
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">

            {/* Left Content */}
            <div>

              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">

                <Sparkles size={16} className="text-[#F28C45]" />

                <span className="text-xs font-bold tracking-widest text-white">
                  ADMISSIONS ARE OPEN
                </span>

              </div>

              {/* Heading */}
              <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">

                Your Future
                <br />

                Starts With The
                <span className="gradient-text">
                  {" "}Right Guidance.
                </span>

              </h2>

              {/* Description */}
              <p className="mt-6 max-w-xl text-sm leading-8 text-gray-300 sm:text-base">
                Take the first step towards your academic goals.
                Connect with our team to explore the right courses,
                understand the admission process and find the
                learning support you need.
              </p>

              {/* CTA Buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#F28C45] px-7 py-4 text-sm font-bold text-[#142B4A] shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  Enquire for Admission
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  Explore Courses
                  <BookOpen size={18} />
                </Link>

              </div>

              {/* Supporting Text */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-gray-300">

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#F28C45]" />
                  Personalized Guidance
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#F28C45]" />
                  Expert Faculty
                </div>

              </div>

            </div>

            {/* Right Information Card */}
            <div>

              <div className="relative rounded-2xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-xl sm:p-9">

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F28C45] text-[#142B4A] shadow-lg">

                  <GraduationCap size={34} />

                </div>

                <h3 className="mt-7 font-heading text-2xl font-bold text-white">
                  Let's Plan Your Success.
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Have questions about courses, fees or admissions?
                  Our team is here to help you make an informed decision.
                </p>

                {/* Divider */}
                <div className="my-7 h-px bg-white/15" />

                {/* Information */}
                <div className="space-y-5">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F28C45]">
                      <Phone size={20} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Admission Assistance
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Speak With Our Team
                      </p>
                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F28C45]">
                      <BookOpen size={20} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Academic Guidance
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Find Your Right Course
                      </p>
                    </div>

                  </div>

                </div>

                {/* Bottom Link */}
                <Link
                  href="/contact"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-4 text-sm font-semibold text-white transition-all hover:border-[#F28C45] hover:bg-[#F28C45] hover:text-[#142B4A]"
                >
                  Contact Our Institute
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AdmissionCTA;
