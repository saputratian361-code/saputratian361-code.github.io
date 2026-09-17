import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intro reveal
      gsap.fromTo(
        ".about-intro",
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-intro",
            start: "top 80%",
            once: true,
          },
        }
      );

      // Paragraph reveal
      gsap.fromTo(
        ".about-description",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-description",
            start: "top 82%",
            once: true,
          },
        }
      );

      // Info items
      gsap.fromTo(
        ".about-info",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-info-wrap",
            start: "top 82%",
            once: true,
          },
        }
      );

      // Decorative line
      gsap.fromTo(
        ".about-line",
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
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
      id="about"
      className="relative bg-background px-5 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Section header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          

          <div className="md:col-span-8 md:col-start-5">
            <div className="about-intro">
              <h2 className="max-w-5xl text-[clamp(2.5rem,5.5vw,6rem)] font-black leading-[0.92] tracking-[-0.055em]">
                I BUILD DIGITAL
                <br />
                EXPERIENCES WITH
                <br />
                PURPOSE.
              </h2>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="about-line mt-16 h-px w-full bg-foreground/20 md:mt-24" />

        {/* Main content */}
        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-[0.18em] opacity-50">
              PROFILE
            </p>
          </div>

          <div className="md:col-span-6">
            <p className="about-description text-lg leading-[1.6] opacity-70 md:text-xl">
              Saya adalah lulusan D3 Sistem Informasi yang tertarik pada web
              development, UI/UX, database, dan teknologi digital. Saya suka
              membangun website yang tidak hanya terlihat baik, tetapi juga
              memiliki struktur dan fungsi yang jelas.
            </p>
          </div>

          {/* Info */}
          <div className="about-info-wrap md:col-span-3">
            <div className="about-info border-t border-foreground/20 py-4">
              <p className="mb-2 text-[10px] tracking-[0.18em] opacity-50">
                EDUCATION
              </p>
              <p className="text-sm font-medium">
                D3 SISTEM INFORMASI
              </p>
            </div>

            <div className="about-info border-t border-foreground/20 py-4">
              <p className="mb-2 text-[10px] tracking-[0.18em] opacity-50">
                FOCUS
              </p>
              <p className="text-sm font-medium">
                WEB / UI/UX / DATABASE
              </p>
            </div>

            <div className="about-info border-y border-foreground/20 py-4">
              <p className="mb-2 text-[10px] tracking-[0.18em] opacity-50">
                BASED IN
              </p>
              <p className="text-sm font-medium">
                INDONESIA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 md:mt-36">
          <p className="max-w-4xl text-[clamp(1.5rem,3vw,3rem)] font-medium leading-[1.1] tracking-[-0.035em]">
            From ideas and layouts to functional systems, I enjoy turning
            concepts into useful digital products.
          </p>
        </div>
      </div>
    </section>
  );
}