import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";
import { staticMetadata } from "@/lib/staticMetadata";
import { AuthWrapper } from "@/components/auth/wrapper";
import Link from "next/link";

export const metadata: Metadata = staticMetadata.register;

function Footer() {
  return (
    <p>
      Do you already have an account?{" "}
      <Link href="/login" className="text-primary-500 font-medium">
        Login
      </Link>
    </p>
  );
}

export default function Page() {
  return (
    <AuthWrapper
      description="Create your account"
      form={<RegisterForm />}
      footer={<Footer />}
    />
  );
}
