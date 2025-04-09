import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.product-card', {
  scrollTrigger: {
    trigger: '.product-card',
    start: "top bottom",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 100, // Desplazamiento inicial hacia abajo
},
{
  opacity: 1,
  y: 0, // Posición final
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.2, // Efecto escalonado para múltiples tarjetas
});