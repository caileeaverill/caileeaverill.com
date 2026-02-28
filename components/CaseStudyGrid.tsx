import { FocusCards } from "@/components/ui/focus-cards";

export default function CaseStudyGrid({ limit }: { limit?: number }) {
  const cards = [
    {
      title: "Hewlett Packard Enterprise",
      src: "/case-studies/hpe.png",
      description: "Led front-end development for a global website rebrand, translating brand systems into scalable, production-ready enterprise experiences.",
      href: "/projects/forest-adventure"
    },
    {
      title: "Rockwell Automation",
      description: "Delivered enterprise front-end development, implementing modular, scalable architecture across Rockwell Automation’s global digital platform.",
      src: "/case-studies/rockwell.png",
      href: "/projects/forest-adventure"
    },
    {
      title: "Reltio",   
      description: "Led a full-scale enterprise rebrand and front-end rebuild, modernizing a previously delivered platform into a scalable digital experience.",   
      src: "/case-studies/reltio.png",
    },
    {
      title: "Project Management Institute",
      description: "Led front-end development for PMI’s Global Executive Council site, delivering a refined, high-performance executive digital experience.",
      src: "/case-studies/pmi.png",
    },
    {
      title: "American Institute of CPAs® and The Chartered Institute of Management Accountants®",
      description: "Implemented responsive, accessible front-end systems supporting one of the world’s largest global finance membership platforms.",
      src: "/case-studies/aicpa-cima.png",
    },
    {
      title: "Portfolio Project",
      description: "Designed and engineered a high-conversion portfolio platform focused on positioning, performance optimization, and scalable content systems.",
      src: "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];

  const visibleCards = limit ? cards.slice(0, limit) : cards;

  return <FocusCards cards={visibleCards} />;
}
