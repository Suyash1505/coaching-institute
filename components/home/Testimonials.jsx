
import Link from "next/link";
import {
  Star,
  Quote,
  ArrowRight,
  MessageSquareQuote,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    course: "JEE Preparation",
    initials: "AS",
    rating: 5,
    review:
      "The teaching approach made difficult concepts much easier to understand. Regular practice sessions helped me become more confident in solving problems.",
  },
  {
    id: 2,
    name: "Ananya Verma",
    course: "Class 12th Science",
    initials: "AV",
    rating: 5,
    review:
      "I really appreciate the supportive teachers and structured learning environment. The doubt-solving sessions helped me understand topics more clearly.",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    course: "NEET Preparation",
    initials: "RG",
    rating: 5,
    review:
      "The regular assessments helped me identify my weak areas. The faculty members were approachable and always willing to explain difficult topics.",
  },
  {
    id: 4,
    name: "Priya Singh",
    course: "Foundation Program",
    initials: "PS",
    rating: 5,
    review:
      "The classes helped me build stronger fundamentals. I particularly liked the way lessons were organized and concepts were explained step by step.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-14 text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2">
            <MessageSquareQuote
              size={17}
              className="text-[#F28C45]"
            />

            <span className="text-xs font-bold tracking-widest text-[#142B4A]">
              STUDENT EXPERIENCES
            </span>
          </div>

          <h2 className="font-heading text-3xl font-bold leading-tight text-[#142B4A] sm:text-4xl lg:text-5xl">
            Stories That Inspire
            <span className="text-[#F28C45]">
              {" "}Success.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
            Every learning journey is unique. Discover how the right
            guidance, supportive faculty and structured learning
            environment can make a difference.
          </p>

        </div>

        {/* Rating Highlight */}
        <div className="mb-12 flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#142B4A] px-8 py-8 text-center sm:flex-row sm:text-left">

          <div>
            <p className="font-heading text-4xl font-bold text-white">
              5.0/5
            </p>

            <div className="mt-2 flex justify-center gap-1 sm:justify-start">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  fill="#F28C45"
                  stroke="#F28C45"
                />
              ))}
            </div>
          </div>

          <div className="hidden h-14 w-px bg-white/20 sm:block" />

          <div>
            <h3 className="font-heading text-lg font-semibold text-white">
              Every Student Matters
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              Focused on creating meaningful learning experiences.
            </p>
          </div>

        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {testimonials.map((student) => (
            <div
              key={student.id}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-[#F8F7F3] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#F28C45]/40 hover:bg-white hover:shadow-xl"
            >

              {/* Quote Icon */}
              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#142B4A] text-[#F28C45] transition-colors group-hover:bg-[#F28C45] group-hover:text-[#142B4A]">
                  <Quote size={23} />
                </div>

                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      fill={star <= student.rating ? "#F28C45" : "none"}
                      stroke="#F28C45"
                    />
                  ))}
                </div>

              </div>

              {/* Review */}
              <p className="mt-7 flex-1 text-sm leading-7 text-[#64748B]">
                "{student.review}"
              </p>

              {/* Student Details */}
              <div className="mt-7 flex items-center gap-3 border-t border-gray-200 pt-5">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#142B4A] font-heading text-sm font-bold text-white">
                  {student.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-heading text-sm font-bold text-[#142B4A]">
                    {student.name}
                  </h3>

                  <p className="mt-1 truncate text-xs text-gray-500">
                    {student.course}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">

          <p className="text-sm text-[#64748B]">
            Want to begin your own learning journey?
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#142B4A] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#203F65]"
          >
            Start Your Journey
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;
