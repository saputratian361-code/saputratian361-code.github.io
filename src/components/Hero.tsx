import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.2,
      });

      tl.fromTo(
        ".hero-name",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
        }
      )
        .fromTo(
          ".hero-role",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .fromTo(
          ".hero-info",
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".hero-photo-wrap",
          {
            opacity: 0,
            y: 50,
            scale: 1.03,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );

      gsap.to(".hero-photo", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-background px-5 py-24 md:px-8 md:py-28"
    >
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1500px] items-center">
        <div className="grid w-full grid-cols-1 gap-14 md:grid-cols-12 md:items-center md:gap-10">

          {/* LEFT */}
          <div className="md:col-span-7">

            {/* NAME */}
            <div className="overflow-hidden">
              <h1 className="hero-name text-[clamp(3rem,5.5vw,5.5rem)] font-black leading-[0.86] tracking-[-0.06em]">
                TIAN
              </h1>
            </div>

            <div className="overflow-hidden">
              <h1 className="hero-name text-[clamp(3rem,5.5vw,5.5rem)] font-black leading-[0.86] tracking-[-0.06em]">
                SAPUTRA
              </h1>
            </div>

            {/* ROLE */}
            <div className="hero-role mt-10">
              <h2 className="text-lg font-bold leading-tight md:text-xl">
                INFORMATION SYSTEMS /
                <br />
                WEB DEVELOPER
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p className="hero-description mt-5 max-w-lg text-sm leading-6 opacity-65 md:text-[15px]">
              Membangun website yang fungsional, modern, dan mudah digunakan
              dengan menggabungkan teknologi, desain, dan pengalaman pengguna.
            </p>

            {/* INFO */}
            <div className="hero-info mt-8 grid max-w-xl grid-cols-3 gap-4">
              <div className="border-t border-foreground/20 pt-3">
                <p className="text-[9px] tracking-[0.15em] opacity-45">
                  FOCUS
                </p>
                <p className="mt-2 text-xs font-medium">
                  WEB DEV
                </p>
              </div>

              <div className="border-t border-foreground/20 pt-3">
                <p className="text-[9px] tracking-[0.15em] opacity-45">
                  INTEREST
                </p>
                <p className="mt-2 text-xs font-medium">
                  UI / UX
                </p>
              </div>

              <div className="border-t border-foreground/20 pt-3">
                <p className="text-[9px] tracking-[0.15em] opacity-45">
                  SYSTEM
                </p>
                <p className="mt-2 text-xs font-medium">
                  DATABASE
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — PHOTO */}
          <div className="md:col-span-4 md:col-start-9">
            <div className="hero-photo-wrap relative mx-auto w-full max-w-[450px]">

              {/* FRAME */}
              <div className="absolute -right-3 -top-3 h-full w-full border border-foreground/20 md:-right-5 md:-top-5" />

              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden bg-foreground">
                <img
                  src="/foto-tian.jpeg"
                  alt="Tian Saputra"
                  className="hero-photo absolute inset-0 h-full w-full scale-105 object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/10" />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM INDICATOR */}
      <div className="absolute bottom-7 left-5 right-5 mx-auto flex max-w-[1500px] items-center justify-between text-[9px] tracking-[0.18em] opacity-40 md:left-8 md:right-8">
        <span>SCROLL TO EXPLORE</span>
        <span>TS / 26</span>
      </div>
    </section>
  );
}