import { Metadata } from "next";

type RouteKey = "login" | "register";

const {
  NEXT_PUBLIC_APP_TITLE,
  NEXT_PUBLIC_CLIENT_URL,
  NEXT_PUBLIC_TWITTER_USERNAME = "xjectro", // if not set, default to "xjectro"
} = process.env;

export const staticMetadata: Record<RouteKey, Metadata> = {
  register: {
    title: `Sign Up`,
    keywords: [
      "auto sign up",
      "sign up",
      "create account",
      `${NEXT_PUBLIC_APP_TITLE}`,
    ],
    openGraph: {
      title: `Sign Up`,
      url: `${NEXT_PUBLIC_CLIENT_URL}/signup`,
      siteName: NEXT_PUBLIC_APP_TITLE,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Sign Up`,
      images: [`${NEXT_PUBLIC_CLIENT_URL}/assets/images/home.png`],
      creator: `@${NEXT_PUBLIC_TWITTER_USERNAME}`,
    },
    alternates: {
      canonical: `${NEXT_PUBLIC_CLIENT_URL}/register`,
    },
  },
  login: {
    title: `Log In`,
    keywords: [
      "auto login",
      "log in",
      "account login",
      `${NEXT_PUBLIC_APP_TITLE}`,
    ],
    openGraph: {
      title: `Log In`,
      description: `${NEXT_PUBLIC_APP_TITLE}`,
      url: `${NEXT_PUBLIC_CLIENT_URL}/login`,
      siteName: NEXT_PUBLIC_APP_TITLE,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Log In`,
      images: [`${NEXT_PUBLIC_CLIENT_URL}/assets/images/home.png`],
      creator: `@${NEXT_PUBLIC_TWITTER_USERNAME}`,
    },
    alternates: {
      canonical: `${NEXT_PUBLIC_CLIENT_URL}/login`,
    },
  },
};
