import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./ui/MagneticButton";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    name: "EMAIL",
    url: "mailto:saputratian361@gmail.com",
    type: "mail",
  },
  {
    name: "WHATSAPP",
    url: "https://wa.me/628985510907",
    type: "whatsapp",
  },
  {
    name: "GITHUB",
    url: "https://github.com/saputrian361-code",
    type: "github",
  },
  {
    name: "LINKEDIN",
    url: "https://id.linkedin.com/in/tian-saputra-35b508180",
    type: "linkedin",
  },
];

function SocialIcon({ type }: { type: string }) {
  if (type === "mail") {
    return <Mail size={22} strokeWidth={1.8} />;
  }

  if (type === "whatsapp") {
    return <MessageCircle size={22} strokeWidth={1.8} />;
  }

  if (type === "github") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3 4.4 4.4 0 0 1 .1-3.2s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.4 4.4 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v2.9c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3ZM8.3 18H5.6v-8.7h2.7V18ZM7 8.1a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM18.4 18h-2.7v-4.2c0-1-.1-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V18H10v-8.7h2.6v1.2h.1c.4-.7 1.2-1.5 2.5-1.5 2.7 0 3.2 1.8 3.2 4.1V18Z" />
    </svg>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.fromTo(
        ".contact-title span",
        {
          y: "120%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        }
      ).fromTo(
        ".contact-link",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      gsap.fromTo(
        ".contact-line",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-foreground/10 bg-background px-6 py-32 md:px-12 md:py-48"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* TITLE */}
        <h2 className="contact-title mx-auto mb-24 max-w-6xl text-center text-[clamp(3.2rem,8vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.065em]">
          <div className="overflow-hidden">
            <span className="inline-block">LET&apos;S BUILD</span>
          </div>

          <div className="overflow-hidden">
            <span className="inline-block">SOMETHING</span>
          </div>

          <div className="overflow-hidden">
            <span className="inline-block text-accent">
              USEFUL.
            </span>
          </div>
        </h2>

        {/* CONTACT LINKS */}
        <div className="contact-line mb-10 h-px w-full bg-foreground/15" />

        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-8">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target={contact.type === "mail" ? undefined : "_blank"}
              rel={
                contact.type === "mail"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="contact-link group block"
            >
              <MagneticButton
                variant="ghost"
                className="flex w-full items-center justify-between !px-0 text-base font-bold tracking-tight md:text-xl"
              >
                <span className="flex items-center gap-3 transition-transform duration-500 group-hover:translate-x-1">
                  <SocialIcon type={contact.type} />
                  {contact.name}
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.7}
                  className="opacity-40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </MagneticButton>
            </a>
          ))}
        </div>

        {/* SMALL FOOTER DETAIL */}
        <div className="mt-24 flex items-center justify-between text-[9px] tracking-[0.18em] opacity-40 md:mt-32">
          <span>LET&apos;S CONNECT</span>
          <span>TS / 26</span>
        </div>

      </div>
    </section>
  );
}