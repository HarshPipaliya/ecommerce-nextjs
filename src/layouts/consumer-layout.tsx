"use client";

import { Navbar } from "@/components";
import React, { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {}

const ConsumerLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default ConsumerLayout;
