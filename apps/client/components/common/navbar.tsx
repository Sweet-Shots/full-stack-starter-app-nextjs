import React from "react";

import Link from "next/link";
import { Button } from "@xjectro/react/components/button";
import {
  Navbar as NavbarRoot,
  NavbarContent,
  NavbarItem,
} from "@xjectro/react/components/navbar";
import { Typography } from "@xjectro/react/components/typography";

export function Navbar() {
  return (
    <NavbarRoot shouldHideOnScroll isBackground variant="floating">
      <NavbarContent justify="start">
        <NavbarItem>
          <Link href="/">
            <Typography
              color="primary"
              variant="shiny"
              as="h1"
              weight="bold"
              size="2xl"
            >
              {process.env.NEXT_PUBLIC_APP_TITLE}
            </Typography>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/login">
            <Button variant="ghost" size="md">
              Login
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/register">
            <Button variant="primary" size="md">
              Register
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NavbarRoot>
  );
}
