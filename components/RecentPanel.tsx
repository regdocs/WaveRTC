import React from "react";
import TokyoContainer from "./TokyoContainer";
import { GoHistory } from "react-icons/go";

function RecentPanel() {
  return (
    <TokyoContainer heading='Recent rooms' Icon={GoHistory}>
      RecentPanel
    </TokyoContainer>
  );
}

export default RecentPanel;
