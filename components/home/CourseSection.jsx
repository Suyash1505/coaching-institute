
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Atom,
  Stethoscope,
  Clock,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Foundation Program",
    category: "SCHOOL EDUCATION",
    description:
      "Build strong academic fundamentals with structured learning and expert guidance.",
    classes: "Class 9th & 10th",
    duration: "12 Months",
    fee: "₹18,000",
    icon: BookOpen,
    features: [
      "Concept-based learning",
      "Regular practice tests",
      "Personalized guidance",
    ],
    popular: false,
  },
  {
    id: 2,
    title: "Senior Secondary",
    category: "BOARD PREPARATION",
    description:
      "Prepare confidently for board examinations with comprehensive subject coverage.",
    classes: "Class 11th & 12th",
    duration: "12 Months",
    fee: "₹30,000",
    icon: GraduationCap,
    features: [
      "Complete syllabus coverage",
      "Doubt-solving sessions",
      "Mock examinations",
    ],
    popular: false,
  },
  {
    id: 3,
    title: "JEE Preparation",
    category: "ENGINEERING ENTRANCE",
    description:
      "Develop problem-solving skills and master concepts for engineering entrance exams.",
    classes: "Class 11th & 12th",
    duration: "12 Months",
    fee: "₹65,000",
    icon: Atom,
    features: [
      "Physics, Chemistry & Maths",
      "Advanced problem practice",
      "JEE mock test series",
    ],
    popular: true,
  },
  {
    id: 4,
    title: "NEET Preparation",
    category: "MEDICAL ENTRANCE",
    description:
      "Prepare for medical entrance examinations through focused learning and practice.",
    classes: "Class 11th & 12th",
    duration: "12 Months",
    fee: "₹60,000",
    icon: Stethoscope,
    features: [
      "Physics, Chemistry & Biology",
      "NCERT-focused preparation",
      "Regular assessment tests",
    ],
    popular: false,
  },
];

const CoursesSection = () => {
  return (
    <section className="bg-[#F8F7F3] py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
            <Sparkles size={16} className="text-[#F28C45]" />
            <span className="text-xs font-bold tracking-widest text-[#142B4A]">
              OUR ACADEMIC PROGRAMS
            </span>
          </div>

          <h2 className="font-heading text-3xl font-bold leading-tight text-[#142B4A] sm:text-4xl lg:text-5xl">
            Explore Our
            <span className="text-[#F28C45]"> Courses.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#64748B] sm:text-base">
            Discover learning programs designed to strengthen your
            fundamentals, improve your performance and help you
            achieve your academic goals.
          </p>

        </div>

        {/* Course Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <div
                key={course.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#F28C45]/50 hover:shadow-xl"
              >

                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-[#F28C45] px-3 py-1 text-[10px] font-bold tracking-wide text-[#142B4A]">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-6">

                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#142B4A] text-white transition-colors group-hover:bg-[#F28C45] group-hover:text-[#142B4A]">
                    <Icon size={27} />
                  </div>

                  {/* Category */}
                  <p className="text-[10px] font-bold tracking-widest text-[#F28C45]">
                    {course.category}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 font-heading text-xl font-bold text-[#142B4A]">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 min-h-21 text-sm leading-7 text-[#64748B]">
                    {course.description}
                  </p>

                  {/* Course Information */}
                  <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Users size={17} className="text-[#F28C45]" />
                      {course.classes}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock size={17} className="text-[#F28C45]" />
                      {course.duration}
                    </div>

                  </div>

                  {/* Features */}
                  <div className="mt-6 space-y-3">

                    {course.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-xs text-gray-600"
                      >
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-[#F28C45]"
                        />
                        {feature}
                      </div>
                    ))}

                  </div>

                  {/* Fee */}
                  <div className="mt-7 border-t border-gray-100 pt-5">

                    <p className="text-xs text-gray-500">
                      Course Fee
                    </p>

                    <p className="mt-1 font-heading text-2xl font-bold text-[#142B4A]">
                      {course.fee}
                    </p>

                    <p className="mt-1 text-[11px] text-gray-400">
                      Illustrative fee · Confirm with institute
                    </p>

                  </div>

                </div>

                {/* Course CTA */}
                <div className="mt-auto px-6 pb-6">

                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#142B4A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F28C45] hover:text-[#142B4A]"
                  >
                    Enquire About Course
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#142B4A] p-8 text-center sm:flex-row sm:text-left md:p-10">

          <div>
            <h3 className="font-heading text-2xl font-bold text-white">
              Not Sure Which Course Is Right for You?
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-300">
              Talk to our academic counsellors and find the right
              learning program for your goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#F28C45] px-7 py-4 text-sm font-bold text-[#142B4A] transition-all hover:-translate-y-1 hover:bg-white"
          >
            Get Course Guidance
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default CoursesSection;
