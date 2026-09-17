import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    number: "01",
    company: "BANK BJB",
    role: "MAGANG — CUSTOMER SERVICE KREDIT",
    period: "2025",
  },
  {
    number: "02",
    company: "PT INVESTIGATOR JAYA MAKMUR",
    role: "ADMINISTRASI MEDIA",
    period: "2023",
  },

  {
    number: "04",
    company: "PT BIMA SAKTI",
    role: "CHECKER",
    period: "2022",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section intro
      gsap.fromTo(
        ".experience-heading",
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-heading",
            start: "top 80%",
            once: true,
          },
        }
      );

      // Timeline line
      gsap.fromTo(
        ".experience-line",
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 1.3,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".experience-list",
            start: "top 75%",
            once: true,
          },
        }
      );

      // Experience items
      const items = gsap.utils.toArray<HTMLElement>(".experience-item");

      items.forEach((item, index) => {
        const number = item.querySelector(".experience-number");
        const company = item.querySelector(".experience-company");
        const role = item.querySelector(".experience-role");
        const period = item.querySelector(".experience-period");

        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          number,
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          [company, role, period],
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-background px-5 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            
          </div>

          <div className="experience-heading md:col-span-8 md:col-start-5">
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-black leading-[0.86] tracking-[-0.06em]">
              WHERE
              <br />
              I&apos;VE
              <br />
              WORKED.
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="experience-list mt-20 md:mt-32">
          <div className="experience-line h-px w-full bg-foreground/20" />

          {experiences.map((experience) => (
            <div
              key={experience.number}
              className="experience-item group grid grid-cols-1 border-b border-foreground/15 py-8 md:grid-cols-12 md:items-center md:py-10"
            >
              {/* Number */}
              <div className="experience-number mb-5 md:col-span-2 md:mb-0">
                <span className="font-mono text-xs tracking-widest opacity-45">
                  {experience.number}
                </span>
              </div>

              {/* Company */}
              <div className="md:col-span-5">
              <h3 className="experience-company text-[clamp(1.4rem,2.3vw,2.4rem)] font-black leading-[0.95] tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2">
                  {experience.company}
                </h3>
              </div>

              {/* Role */}
              <div className="mt-4 md:col-span-3 md:mt-0">
                <p className="experience-role max-w-xs text-xs leading-5 tracking-[0.12em] opacity-55">
                  {experience.role}
                </p>
              </div>

              {/* Period */}
              <div className="mt-5 text-right md:col-span-2 md:mt-0">
                <span className="experience-period font-mono text-xs opacity-45">
                  {experience.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 md:mt-36">
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.18em] opacity-40">
              BACKGROUND
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-5">
            <p className="text-[clamp(1.5rem,3vw,3rem)] font-medium leading-[1.1] tracking-[-0.035em]">
              Experience across administration, customer service, drafting,
              and data checking has shaped how I approach digital projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}