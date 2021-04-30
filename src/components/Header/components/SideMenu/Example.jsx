import { motion, useCycle } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "./use-dimensions";

const sidebar = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    visibility: "visible"
  }),
  closed: {
    clipPath: "circle(0px at -100px -100px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    visibility: "hidden"
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div  className="side-menu">
      <MenuToggle toggle={() => toggleOpen()} />
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        style={isOpen ? {visibility: "visible"} : {visibility: "hidden", transitionDelay: "1s"}}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};
