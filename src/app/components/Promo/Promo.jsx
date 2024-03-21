"use client";

import { useSpring } from "framer-motion";
import { useRef } from "react";
import Gallary from "./Gallary";

const gallary = [
  {
    id: 1,
    name: "jeans1",
    bg: "https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    vignette:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=3411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 2,
    name: "jeans2",

    bg: "https://plus.unsplash.com/premium_photo-1677234148135-2bb4f10f6332?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    vignette:
      "https://plus.unsplash.com/premium_photo-1677234148135-2bb4f10f6332?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 3,
    name: "sweatshirt",
    bg: "https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    vignette:
      "https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 4,
    name: "jacket",
    bg: "https://images.unsplash.com/photo-1542219550-2da790bf52e9?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    vignette:
      "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Promo() {
  const body = useRef(null);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;

    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <div onMouseMove={mouseMove} className=" h-full w-full">
      {gallary.map(({ bg, vignette, id }, i) => {
        return (
          <Gallary
            mousePosition={mousePosition}
            bg={bg}
            vigg={vignette}
            key={id}
          />
        );
      })}
    </div>
  );
}
