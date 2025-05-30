"use client";

import { useAppSelector } from "@repo/utils/lib/redux";
import { Button } from "@xjectro/react/components/button";
import { Typography } from "@xjectro/react/components/typography";

export function UserDetail() {
  const { currentUser } = useAppSelector((state) => state.global);

  if (!currentUser) {
    return (
      <Button variant="primary" size="lg">
        Please Login
      </Button>
    );
  }

  return (
    <div className="flex flex-col items-start gap-5">
      <Typography size="4xl" color="primary" weight="bold" as="h1">
        Hello {currentUser.firstName}!
      </Typography>
    </div>
  );
}
