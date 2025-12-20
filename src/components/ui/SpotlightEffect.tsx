import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const SPOTLIGHT_COLOR = "255, 215, 0"; // Yellow/Gold

const calculateSpotlightValues = (radius: number) => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75,
});

export const SpotlightEffect = () => {
    const spotlightRef = useRef<HTMLDivElement | null>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const tickingRef = useRef(false);

    useEffect(() => {
        // Create global spotlight element
        const spotlight = document.createElement("div");
        spotlight.className = "global-spotlight";
        spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${SPOTLIGHT_COLOR}, 0.15) 0%,
        rgba(${SPOTLIGHT_COLOR}, 0.08) 15%,
        rgba(${SPOTLIGHT_COLOR}, 0.04) 25%,
        rgba(${SPOTLIGHT_COLOR}, 0.02) 40%,
        rgba(${SPOTLIGHT_COLOR}, 0.01) 65%,
        transparent 70%
      );
      z-index: 9999;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
      will-change: transform, opacity;
    `;
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;

        // Throttle card queries. Only query DOM periodically or on init
        // Better yet, just throttle the heavy read batch
        let cardsCache: HTMLElement[] = [];

        // Function to update cache, call this on scroll or resize ideally.
        // For now, we will query on mouse move but with a check or just assume dynamic
        // To be safe and performant, we'll query every ~500ms or on scroll/resize

        const updateCardsCache = () => {
            const nodes = document.querySelectorAll(".spotlight-card");
            cardsCache = Array.from(nodes) as HTMLElement[];
        };

        updateCardsCache();
        // Update cache occasionally (simple strategy for dynamic content)
        const intervalId = setInterval(updateCardsCache, 1000);
        window.addEventListener('scroll', updateCardsCache, { passive: true });
        window.addEventListener('resize', updateCardsCache, { passive: true });


        const updateSpotlight = () => {
            if (!spotlightRef.current) return;
            const mouseX = mouseRef.current.x;
            const mouseY = mouseRef.current.y;

            // 1. READ PHASE: Get all dimensions
            const cardRects = cardsCache.map(card => ({
                card,
                rect: card.getBoundingClientRect()
            }));

            const { proximity, fadeDistance } = calculateSpotlightValues(DEFAULT_SPOTLIGHT_RADIUS);
            let minDistance = Infinity;

            // Calculate opacities/intensities
            const updates: { card: HTMLElement; glow: number; rx: number; ry: number }[] = [];

            cardRects.forEach(({ card, rect }) => {
                // Skip if not visual
                if (rect.width === 0 || rect.height === 0) return;

                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const distance =
                    Math.hypot(mouseX - centerX, mouseY - centerY) -
                    Math.max(rect.width, rect.height) / 2;

                const effectiveDistance = Math.max(0, distance);
                minDistance = Math.min(minDistance, effectiveDistance);

                // Only update style if card is somewhat close (optimization)
                if (effectiveDistance > fadeDistance * 1.5) {
                    // Reset glow if it was previously lit? 
                    // To strictly optimize, we should only reset if we know it was lit.
                    // But setting '0' is faster than calculating complex values.
                    updates.push({ card, glow: 0, rx: 0, ry: 0 });
                    return;
                }

                let glowIntensity = 0;
                if (effectiveDistance <= proximity) {
                    glowIntensity = 1;
                } else if (effectiveDistance <= fadeDistance) {
                    glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                }

                const relativeX = ((mouseX - rect.left) / rect.width) * 100;
                const relativeY = ((mouseY - rect.top) / rect.height) * 100;

                updates.push({
                    card,
                    glow: glowIntensity,
                    rx: relativeX,
                    ry: relativeY
                });
            });

            // 2. WRITE PHASE: Apply styles
            updates.forEach(({ card, glow, rx, ry }) => {
                card.style.setProperty("--glow-x", `${rx}%`);
                card.style.setProperty("--glow-y", `${ry}%`);
                card.style.setProperty("--glow-intensity", glow.toString());
                // Radius and color usually static but can be set once in CSS or here if needed dynamic
                // Assuming CSS has defaults or we set them:
                // card.style.setProperty("--glow-radius", `${DEFAULT_SPOTLIGHT_RADIUS}px`);
                // card.style.setProperty("--glow-color", SPOTLIGHT_COLOR);
            });


            // Spotlight movement
            gsap.to(spotlightRef.current, {
                left: mouseX,
                top: mouseY,
                duration: 0.1,
                ease: "power2.out",
                overwrite: "auto"
            });

            const targetOpacity =
                minDistance <= proximity
                    ? 0.8
                    : minDistance <= fadeDistance
                        ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                        : 0;

            gsap.to(spotlightRef.current, {
                opacity: targetOpacity,
                duration: targetOpacity > 0 ? 0.2 : 0.5,
                ease: "power2.out",
                overwrite: "auto"
            });

            tickingRef.current = false;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            if (!tickingRef.current) {
                requestAnimationFrame(updateSpotlight);
                tickingRef.current = true;
            }
        };

        const handleMouseLeave = () => {
            if (spotlightRef.current) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        };

        document.addEventListener("mousemove", handleMouseMove, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener('scroll', updateCardsCache);
            window.removeEventListener('resize', updateCardsCache);
            clearInterval(intervalId);
            spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
        };
    }, []);

    return null;
};
