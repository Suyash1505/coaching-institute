
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Target,
  ClipboardCheck,
  BadgeCheck,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description:
      "Learn from knowledgeable educators who make complex concepts easier to understand.",
  },
  {
    icon: Users,
    title: "Personalized Attention",
    description:
      "Get individual guidance and support according to your learning needs.",
  },
  {
    icon: BookOpen,
    title: "Structured Learning",
    description:
      "Follow a well-organized curriculum designed for consistent academic progress.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Assessments",
    description:
      "Track your understanding through regular tests, feedback and performance reviews.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main About Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Image */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="aspect-5/4 overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
              <img
                src="/images/hero.jpg"
                alt="Students collaborating in a learning environment"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-7 -right-3 flex items-center gap-4 rounded-2xl bg-[#142B4A] p-5 text-white shadow-xl sm:-right-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F28C45]">
                <GraduationCap size={27} />
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold">
                  Student First
                </h3>
                <p className="mt-1 text-xs text-gray-300">
                  Learning with purpose
                </p>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="pt-6 lg:pt-0">

            {/* Section Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#F28C45]" />
              <span className="text-xs font-bold tracking-widest text-[#142B4A]">
                ABOUT OUR INSTITUTE
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl font-bold leading-tight text-[#142B4A] sm:text-4xl lg:text-5xl">
              More Than Education,
              <span className="text-[#F28C45]">
                {" "}We Build Futures.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 text-base leading-8 text-[#64748B]">
              At Apex Academy, we believe every student has the potential
              to achieve something extraordinary. Our approach combines
              quality teaching, structured learning and continuous
              guidance to help students move confidently towards their goals.
            </p>

            <p className="mt-4 text-base leading-8 text-[#64748B]">
              We focus not only on academic performance but also on
              building confidence, strengthening fundamentals and
              developing a genuine love for learning.
            </p>

            {/* Mission */}
            <div className="mt-8 flex gap-4 rounded-xl border border-gray-100 bg-[#F8F7F3] p-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#F28C45] shadow-sm">
                <Target size={23} />
              </div>

              <div>
                <h3 className="font-heading font-bold text-[#142B4A]">
                  Our Mission
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  To provide an encouraging learning environment where
                  students receive the knowledge, guidance and confidence
                  needed to reach their full potential.
                </p>
              </div>

            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#142B4A] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#203F65]"
            >
              Discover Our Story
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-28">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <span className="text-xs font-bold tracking-[3px] text-[#F28C45]">
              WHY CHOOSE US
            </span>

            <h2 className="mt-4 font-heading text-3xl font-bold text-[#142B4A] sm:text-4xl">
              Everything You Need to
              <span className="text-[#F28C45]"> Succeed.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#64748B]">
              We create the right learning environment to help every
              student learn better, grow stronger and achieve more.
            </p>

          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-100 bg-[#F8F7F3] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#F28C45]/40 hover:bg-white hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#F28C45] shadow-sm transition-colors group-hover:bg-[#142B4A]">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 font-heading text-lg font-bold text-[#142B4A]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#64748B]">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#142B4A]">
                    <span>0{index + 1}</span>
                    <span className="h-px w-8 bg-[#F28C45]" />
                    <span>Our Advantage</span>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
