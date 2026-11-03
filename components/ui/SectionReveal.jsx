"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const SectionReveal = ({ children, className = "", ...props }) => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

export default SectionReveal;
