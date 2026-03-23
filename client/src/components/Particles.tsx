import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  useEffect(() => {
    const loadParticles = async () => {
      await loadSlim(tsParticles); // ✅ pass engine here

      await tsParticles.load({
        id: "tsparticles",
        options: {
          fullScreen: false,

          particles: {
            number: { value: 80 },
            size: { value: 3 },

            move: {
              enable: true,
              speed: 2,
            },

            links: {
              enable: true,
              distance: 120,
              opacity: 0.3,
            },

            opacity: { value: 0.5 },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        },
      });
    };

    loadParticles();
  }, []);

  return <div id="tsparticles" className="w-full h-full" />;
}