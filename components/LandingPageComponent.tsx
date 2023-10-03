import { Button } from "@mui/material";
import React from "react";

type Props = {};

const LandingPageComponent = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col text-center my-10">
        <span className="text-3xl font-semibold">Convenient Cravings</span>
        <span className="text-base pt-2">
          Satisfying San Diego&apos;s Snack Desires, One Convenient Craving at a
          Time.
        </span>
      </div>
      <Button>Contained</Button>
    </div>
  );
};

export default LandingPageComponent;
