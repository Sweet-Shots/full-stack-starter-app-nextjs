import type { User } from "@prisma/client";

export type CreateUserInput = Pick<
  User,
  "firstName" | "lastName" | "email" | "password"
>;

export type AuthenticateUserInput = Pick<User, "email" | "password">;
