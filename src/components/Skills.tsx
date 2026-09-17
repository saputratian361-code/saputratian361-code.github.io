import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { number: "01", name: "HTML", category: "FRONTEND" },
  { number: "02", name: "CSS", category: "FRONTEND" },
  { number: "03", name: "JAVASCRIPT", category: "FRONTEND" },
  { number: "04", name: "PHP", category: "BACKEND" },
  { number: "05", name: "MYSQL", category: "DATABASE" },
  { number: "06", name: "BOOTSTRAP", category: "FRONTEND" },
  { number: "07", name: "LARAVEL", category: "BACKEND" },
  { number: "08", name: "REACT", category: "FRONTEND" },
  { number: "09", name: "GIT / GITHUB", category: "TOOLS" },
  { number: "10", name: "UI / UX", category: "DESIGN" },
  { number: "11", name: "DATABASE", category: "SYSTEM" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-heading",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-heading",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".skill-row",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-list",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".skills-bottom",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-bottom",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative bg-foreground px-5 py-28 text-background md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="text-[10px] font-medium tracking-[0.2em] opacity-45">
              SKILLS / STACK
            </p>
          </div>

          <div className="skills-heading md:col-span-8 md:col-start-5">
            <h2 className="max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[0.88] tracking-[-0.055em]">
              TOOLS
              <br />
              I WORK WITH.
            </h2>
          </div>
        </div>

        {/* SKILLS LIST */}
        <div className="skills-list mt-20 md:mt-28">
          <div className="h-px w-full bg-background/20" />

          {skills.map((skill) => (
            <div
              key={skill.number}
              className="skill-row group grid grid-cols-12 items-center border-b border-background/15 py-5 transition-colors duration-300 hover:bg-background/[0.03] md:py-6"
            >
              <span className="col-span-2 font-mono text-[9px] opacity-35 md:col-span-1">
                {skill.number}
              </span>

              <h3 className="col-span-7 text-[clamp(1.35rem,2.5vw,2.5rem)] font-black leading-none tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-2">
                {skill.name}
              </h3>

              <span className="col-span-3 text-right text-[8px] tracking-[0.18em] opacity-40 md:col-span-4">
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="skills-bottom mt-24 grid grid-cols-1 md:mt-32 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="text-[10px] font-medium tracking-[0.2em] opacity-40">
              APPROACH
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-5">
            <p className="max-w-3xl text-[clamp(1.3rem,2.5vw,2.5rem)] font-medium leading-[1.12] tracking-[-0.03em]">
              I combine technical skills with visual thinking to build
              interfaces and systems that are simple, useful, and easy to
              understand.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}