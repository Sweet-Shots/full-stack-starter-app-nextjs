"use client";

import Link from "next/link";
import { Typography } from "@xjectro/react/components/typography";

export function AuthWrapper({
  footer,
  form,
  description,
}: {
  footer: React.ReactNode;
  form: React.ReactNode;
  description: string;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 space-y-2 text-center">
          <Link href="/" className="inline-block">
            <Typography
              as="h1"
              align="center"
              variant="shiny"
              color="primary"
              weight="bold"
              size="3xl"
            >
              {process.env.NEXT_PUBLIC_APP_TITLE}
            </Typography>
          </Link>
          <Typography
            as="p"
            align="center"
            color="muted"
            weight="normal"
            size="base"
          >
            {description}
          </Typography>
        </div>

        <div className="bg-surface-100 border-surface-300 rounded-xl border p-8 shadow-lg">
          {form}

          <div className="mt-6 text-center text-sm">{footer}</div>
        </div>
      </div>
    </div>
  );
}
