"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ScrollReveal({ children }: { children: ReactNode }) {
  useEffect(() => {
    let context: gsap.Context | undefined;
    let animationTimer = 0;
    let firstFrame = 0;
    let secondFrame = 0;

    const initializeAnimations = () => {
      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(() => {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

          context = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
              gsap.fromTo(
                element,
                { autoAlpha: 0, y: 22 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.75,
                  ease: "power2.out",
                  scrollTrigger: { trigger: element, start: "top 88%", once: true },
                },
              );
            });

            gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach((element) => {
              gsap.fromTo(
                element.children,
                { autoAlpha: 0, y: 20 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.1,
                  ease: "power2.out",
                  scrollTrigger: { trigger: element, start: "top 88%", once: true },
                },
              );
            });

            gsap.utils.toArray<HTMLElement>(".gold-rule").forEach((element) => {
              gsap.fromTo(
                element,
                { scaleX: 0, transformOrigin: "left center" },
                {
                  scaleX: 1,
                  duration: 0.9,
                  ease: "power2.inOut",
                  scrollTrigger: { trigger: element, start: "top 90%", once: true },
                },
              );
            });
          });
        });
      });
    };

    const scheduleAnimations = () => {
      animationTimer = window.setTimeout(initializeAnimations, 1000);
    };

    const onPageLoad = () => {
      scheduleAnimations();
    };

    if (document.readyState === "complete") {
      scheduleAnimations();
    } else {
      window.addEventListener("load", onPageLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", onPageLoad);
      window.clearTimeout(animationTimer);
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      context?.revert();
    };
  }, [children]);

  return <>{children}</>;
}
