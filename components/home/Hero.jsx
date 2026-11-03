
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Users,
  Trophy,
  Star,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#0D1B2A] via-[#142B4A] to-[#1B3A5C]">

      {/* ── Background Decorations ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="float-animation absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#F28C45]/10 blur-[100px]" />
        <div className="float-animation-slow absolute -bottom-40 -left-40 h-112.5 w-112.5 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-[#F28C45]/5 blur-[80px]" />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Vertical accent lines */}
        <div className="absolute left-1/4 top-0 h-full w-px bg-linear-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute right-1/3 top-0 h-full w-px bg-linear-to-b from-transparent via-white/5 to-transparent" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* ── Left Column ── */}
        <div className="max-w-2xl">

          {/* Animated Badge */}
          <div className="hero-fade-in hero-fade-in-1 shimmer-badge mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-sm">
            <BadgeCheck size={17} className="text-[#F28C45]" />
            <span className="text-xs font-semibold tracking-wider text-white/90">
              YOUR JOURNEY TO SUCCESS STARTS HERE
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-fade-in hero-fade-in-2 font-heading text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Building Bright Futures Through{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Quality Education.</span>
              <span className="absolute -bottom-1.5 left-0 h-1 w-full rounded-full bg-linear-to-r from-[#F28C45] to-[#FF6B6B] opacity-40" />
            </span>
          </h1>

          {/* Description */}
          <p className="hero-fade-in hero-fade-in-3 mt-8 max-w-xl text-base leading-8 text-white/55 sm:text-lg sm:leading-9">
            Discover your potential with expert guidance,
            experienced educators and a learning environment
            designed to help you achieve your academic goals.
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade-in hero-fade-in-4 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/courses"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F28C45] px-8 py-4 text-sm font-bold text-[#142B4A] shadow-lg shadow-[#F28C45]/25 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F28C45]/30"
            >
              Explore Our Courses
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#F28C45]/50 hover:bg-white/10"
            >
              Enquire Now
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="hero-fade-in hero-fade-in-5 mt-12 flex flex-wrap items-center gap-x-7 gap-y-3">
            {[
              { icon: CheckCircle2, text: "15+ Years Experience" },
              { icon: Users, text: "2000+ Students" },
              { icon: Star, text: "Expert Faculty" },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2">
                <badge.icon size={15} className="text-[#F28C45]/80" />
                <span className="text-xs font-medium text-white/40">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="hero-fade-in hero-fade-in-6 mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
            <div>
              <h3 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter end={2000} suffix="+" duration={2200} />
              </h3>
              <p className="mt-2 text-xs text-white/35 sm:text-sm">
                Students Guided
              </p>
            </div>

            <div>
              <h3 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter end={15} suffix="+" duration={1500} />
              </h3>
              <p className="mt-2 text-xs text-white/35 sm:text-sm">
                Expert Faculty
              </p>
            </div>

            <div>
              <h3 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter end={95} suffix="%" duration={1800} />
              </h3>
              <p className="mt-2 text-xs text-white/35 sm:text-sm">
                Success Rate
              </p>
            </div>
          </div>
        </div>

        {/* ── Right Column — Image ── */}
        <div className="hero-image-reveal relative mx-auto w-full max-w-xl">

          {/* Main Hero Image */}
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
            <Image
              src="/images/hero.jpg"
              alt="Students in a professional learning environment"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#142B4A]/70 via-[#142B4A]/20 to-transparent" />

            {/* Bottom text on image */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm font-medium text-white/70">
                Your Success Is Our Mission
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-white">
                Learn Today.
                <br />
                Lead Tomorrow.
              </h2>
            </div>
          </div>

          {/* ── Floating Card — Top Left ── */}
          <div className="float-animation glass-white absolute -left-4 top-12 rounded-2xl p-4 shadow-xl sm:-left-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#F28C45] to-[#FF6B6B] text-white shadow-lg shadow-[#F28C45]/30">
                <Trophy size={24} />
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
          </div>

          {/* ── Floating Card — Bottom Right ── */}
          <div className="float-animation-slow glass-white absolute -bottom-4 -right-4 rounded-2xl p-4 shadow-xl sm:-right-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#142B4A] text-[#F28C45] shadow-lg">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-[#142B4A]">
                  95% Results
                </p>
                <p className="text-xs text-gray-500">
                  Consistent excellence
                </p>
              </div>
            </div>
          </div>

          {/* Decorative blurs */}
          <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-[#F28C45]/15 blur-2xl" />
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-400/15 blur-2xl" />
        </div>
      </div>

      {/* ── Bottom Wave ── */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L1440 60L1440 25C1440 25 1200 0 720 0C240 0 0 25 0 25L0 60Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
