import React from "react";
import { slide as Menu } from "react-burger-menu";

import "./BurgerSidebar.css";
import { AwardProgress } from "../AwardProgress/AwardProgress";

interface IProps {
  awards: number[];
  progress: number;
}

function BurgerSidebar({ awards, progress }: IProps) {
  return (
    <Menu width="100%" right>
      <AwardProgress awards={awards} currentProgress={progress} />
    </Menu>
  );
}

export { BurgerSidebar };
