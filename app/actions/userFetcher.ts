"use server";

import { prisma } from "@/lib/prisma";

export async function loginAction(formData: FormData): Promise<string | undefined> {
  const email = formData.get("email") as string;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) return;

  const password = formData.get("password") as string;
  if (user.password === password) {
    console.log("Login Success");
    return user.id;
  }
}
