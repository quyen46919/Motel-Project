import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { NavLink } from 'react-router-dom';

const variants = {
  open: {
    transition: { 
      staggerChildren: 0.07,
       delayChildren: 0.2,
      //  display: "unset"
    },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1,isplay: "block" },
    // display: "none"
  }
};
const itemIds = [0, 1, 2, 3, 4];
export const Navigation = ({toggle}) => (
  <motion.ul variants={variants}>
      <NavLink to="/main/" onClick={toggle}>
        <MenuItem i={0} key={0} props="TRANG CHỦ"/>
      </NavLink>
      <NavLink to="/main/" onClick={toggle}>
        <MenuItem i={1} key={1} props="GHÉP TRỌ"/>
      </NavLink>
      <NavLink to="/main/post" onClick={toggle}>
        <MenuItem i={2} key={2} props="ĐĂNG TIN"/>
      </NavLink>
      <NavLink to="/login" onClick={toggle}>
        <MenuItem i={3} key={3} props="ĐĂNG NHẬP"/>
      </NavLink>
      <NavLink to="/register" onClick={toggle}>
        <MenuItem i={4} key={4} props="ĐĂNG KÝ"/>
      </NavLink>
  </motion.ul>
);


