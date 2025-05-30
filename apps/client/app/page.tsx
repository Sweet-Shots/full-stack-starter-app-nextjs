"use client";

import * as React from "react";
import { CommonWrapper } from "@/components/common/wrapper";

import { Separator } from "@xjectro/react/components/separator";
import { ThemeContext } from "@/components/common/theme-context";
import { UserDetail } from "@/components/home/user-detail";

export default function HomePage() {
  return (
    <CommonWrapper>
      <ThemeContext />
      <Separator />
      <UserDetail />
    </CommonWrapper>
  );
}
