
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Users,
  Trophy,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[#F8F7F3]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:px-8">

        {/* Left Content */}
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#142B4A]/10 bg-white px-4 py-2">
            <BadgeCheck size={17} className="text-[#F28C45]" />
            <span className="text-xs font-semibold tracking-wide text-[#142B4A]">
              YOUR JOURNEY TO SUCCESS STARTS HERE
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl font-bold leading-[1.2] tracking-tight text-[#142B4A] sm:text-5xl lg:text-6xl">
            Building Bright Futures Through{" "}
            <span className="text-[#F28C45]">
              Quality Education.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
            Discover your potential with expert guidance,
            experienced educators and a learning environment
            designed to help you achieve your academic goals.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#142B4A] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#142B4A]/10 transition-all hover:-translate-y-1 hover:bg-[#203F65]"
            >
              Explore Our Courses
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#142B4A]/20 bg-white px-7 py-4 text-sm font-semibold text-[#142B4A] transition-all hover:border-[#F28C45] hover:text-[#F28C45]"
            >
              Enquire Now
            </Link>

          </div>

          {/* Statistics */}
          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">

            <div>
              <div className="flex items-center gap-2">
                <Users size={19} className="text-[#F28C45]" />
                <h3 className="font-heading text-2xl font-bold text-[#142B4A]">
                  2K+
                </h3>
              </div>
              <p className="mt-2 text-xs text-[#64748B] sm:text-sm">
                Students Guided
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <BookOpen size={19} className="text-[#F28C45]" />
                <h3 className="font-heading text-2xl font-bold text-[#142B4A]">
                  15+
                </h3>
              </div>
              <p className="mt-2 text-xs text-[#64748B] sm:text-sm">
                Expert Faculty
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Trophy size={19} className="text-[#F28C45]" />
                <h3 className="font-heading text-2xl font-bold text-[#142B4A]">
                  95%
                </h3>
              </div>
              <p className="mt-2 text-xs text-[#64748B] sm:text-sm">
                Success Rate
              </p>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-xl">

          {/* Main Image */}
          <div
            className="relative aspect-4/5 overflow-hidden rounded-4xl bg-[#142B4A] bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage: "url('/images/hero.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-[#142B4A]/60 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm font-medium text-white/80">
                Your Success Is Our Mission
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-white">
                Learn Today.
                <br />
                Lead Tomorrow.
              </h2>
            </div>
          </div>

          {/* Floating Achievement Card */}
          <div className="absolute -left-5 top-12 flex items-center gap-3 rounded-xl bg-white p-4 shadow-xl sm:-left-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
              <Trophy className="text-[#F28C45]" size={24} />
            </div>

            <div>
              <p className="font-heading text-lg font-bold text-[#142B4A]">
                Excellence
              </p>
              <p className="text-xs text-gray-500">
                Starts with the right guidance
              </p>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute -bottom-5 -right-5 z-0 h-28 w-28 rounded-full bg-[#F28C45]/20 blur-2xl" />

        </div>

      </div>
    </section>
  );
};

export default Hero;
