import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "LAUNDRY",
    category: "WEB DEVELOPMENT",
    year: "2026",
    description:
      "Website layanan laundry dengan fokus pada informasi layanan, alur transaksi, dan pengalaman pengguna yang sederhana.",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    title: "LION PARCEL",
    category: "WEB DEVELOPMENT",
    year: "2026",
    description:
      "Website promosi layanan agen Lion Parcel untuk meningkatkan awareness layanan pengiriman di area sekitar.",
    image: "/lion-parcel.png",
  },
  {
    number: "03",
    title: "DATABASE SYSTEM",
    category: "DATABASE / SYSTEM",
    year: "2026",
    description:
      "Perancangan sistem database dengan struktur data yang terorganisir untuk mendukung proses pengelolaan informasi.",
    image: "/database-system.png",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card, index) => {
        const image = card.querySelector(".project-image");
        const imageWrap = card.querySelector(".project-image-wrap");
        const content = card.querySelector(".project-content");
        const number = card.querySelector(".project-number");

        // Card reveal
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );

        // Image reveal
        gsap.fromTo(
          imageWrap,
          {
            clipPath: "inset(12% 12% 12% 12%)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              once: true,
            },
          }
        );

        // Image parallax
        if (image) {
          gsap.fromTo(
            image,
            {
              yPercent: -8,
              scale: 1.12,
            },
            {
              yPercent: 8,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: imageWrap,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }

        // Content slide
        gsap.fromTo(
          content,
          {
            x: 40,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              once: true,
            },
          }
        );

        // Number movement
        gsap.fromTo(
          number,
          {
            x: -30,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
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
      id="work"
      className="relative bg-background px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-12 md:mb-32">
          <div className="md:col-span-3">
            
          </div>

          <div className="md:col-span-7 md:col-start-5">
            <h2 className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.85] tracking-[-0.06em]">
              THINGS
              <br />
              I&apos;VE
              <br />
              BUILT.
            </h2>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-28 md:space-y-44">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card group relative"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
                {/* Image */}
                <div
                  className={`md:col-span-8 ${
                    index % 2 !== 0 ? "md:col-start-5" : ""
                  }`}
                >
                  <div className="project-image-wrap relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image absolute inset-[-8%] h-[116%] w-[116%] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                    {/* Project number */}
                    <div className="project-number absolute left-5 top-5 font-mono text-xs tracking-widest text-white md:left-7 md:top-7">
                      {project.number} / 03
                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:opacity-100 md:bottom-7 md:right-7">
                    
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`project-content flex flex-col justify-end md:col-span-4 ${
                    index % 2 !== 0
                      ? "md:col-start-1 md:row-start-1"
                      : ""
                  }`}
                >
                  <div className="border-t border-foreground/20 pt-5">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-xs font-medium tracking-[0.15em]">
                        {project.category}
                      </span>

                      <span className="font-mono text-xs opacity-50">
                        {project.year}
                      </span>
                    </div>

                   <h3 className="mb-5 text-[clamp(2rem,3.5vw,4rem)] font-black leading-[0.9] tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-2">
                      {project.title}
                    </h3>

                    <p className="max-w-md text-sm leading-6 opacity-60 md:text-base">
                      {project.description}
                    </p>

                   <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:opacity-100 md:bottom-7 md:right-7">

                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-32 border-t border-foreground/20 pt-6 md:mt-44">
          <div className="flex items-center justify-between text-xs tracking-[0.15em] opacity-50">
            <span>SELECTED PROJECTS</span>
            <span>03 / 03</span>
          </div>
        </div>
      </div>
    </section>
  );
}