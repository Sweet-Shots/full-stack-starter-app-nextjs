import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";
import { staticMetadata } from "@/lib/staticMetadata";
import { AuthWrapper } from "@/components/auth/wrapper";
import Link from "next/link";

export const metadata: Metadata = staticMetadata.login;

function Footer() {
  return (
    <p>
      Don&amp;t have an account?{" "}
      <Link href="/register" className="text-primary-500 font-medium">
        Register
      </Link>
    </p>
  );
}

export default function Page() {
  return (
    <AuthWrapper
      description="Login your account"
      form={<LoginForm />}
      footer={<Footer />}
    />
  );
}
