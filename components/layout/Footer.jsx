import Link from "next/link";

import { GraduationCap, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Courses", href: "/courses" },
    { name: "Our Faculty", href: "/faculty" },
    { name: "Results", href: "/results" },
    { name: "Contact Us", href: "/contact" },
];

const courses = [
    "Class 9th & 10th",
    "Class 11th & 12th",
    "JEE Preparation",
    "NEET Preparation",
];

const Footer = () => {
    return (
        <footer className="bg-[#142B4A] text-white">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
                {/* Institute Information */}
                <div>
                    <Link href="/" className="mb-6 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#142B4A]">
                            <GraduationCap size={28} />
                        </div>

                        <div>
                            <h2 className="font-heading text-xl font-bold">Apex Academy</h2>
                            <p className="text-[10px] tracking-[2px] text-gray-300">
                                LEARN • GROW • SUCCEED
                            </p>
                        </div>
                    </Link>

                    <p className="mb-6 max-w-xs text-sm leading-7 text-gray-300">
                        Empowering students with quality education, experienced faculty and
                        the right guidance to achieve academic excellence.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {[FaInstagram, FaFacebook, FaYoutube].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                aria-label={["Instagram", "Facebook", "YouTube"][index]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-[#F28C45] hover:text-[#142B4A]"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-6 font-heading text-lg font-semibold">
                        Quick Links
                    </h3>

                    <ul className="space-y-4">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-gray-300 transition-colors hover:text-[#F28C45]"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Courses */}
                <div>
                    <h3 className="mb-6 font-heading text-lg font-semibold">
                        Our Courses
                    </h3>

                    <ul className="space-y-4">
                        {courses.map((course) => (
                            <li key={course}>
                                <Link
                                    href="/courses"
                                    className="text-sm text-gray-300 transition-colors hover:text-[#F28C45]"
                                >
                                    {course}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="mb-6 font-heading text-lg font-semibold">
                        Contact Us
                    </h3>

                    <div className="space-y-5">
                        <div className="flex items-start gap-3">
                            <MapPin size={19} className="mt-1 shrink-0 text-[#F28C45]" />
                            <p className="text-sm leading-6 text-gray-300">
                                H.no 752 Behind Mili Guha Hospital, Gupteshwar. Jabalpur, India
                            </p>
                        </div>

                        <a
                            href="tel:+919131703245"
                            className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#F28C45]"
                        >
                            <Phone size={18} className="text-[#F28C45]" />
                            +91 91317 03245
                        </a>

                        <a
                            href="mailto:adv.mks7171@gmail.com"
                            className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#F28C45]"
                        >
                            <Mail size={18} className="text-[#F28C45]" />
                            adv.mks7171@gmail.com
                        </a>
                    </div>

                    <Link
                        href="/contact"
                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#F28C45] hover:text-white"
                    >
                        Get in touch
                        <ArrowUpRight size={17} />
                    </Link>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/15">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-gray-400 sm:flex-row lg:px-8">
                    <p>©2026 Apex Academy. All rights reserved.</p>

                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-white">
                            Privacy Policy
                        </Link>

                        <Link href="/terms" className="hover:text-white">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
