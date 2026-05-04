"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    return { error: "All fields are required" };
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user and initialize wallet with $10,000 test money
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        wallet: {
          create: {
            balance: 10000,
          },
        },
      },
    });

    await createSession(user.id);
  } catch (error) {
    console.error("Registration error:", error);
    return { error: "Something went wrong" };
  }

  redirect("/dashboard");
}

export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "All fields are required" };
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      return { error: "Invalid credentials" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return { error: "Invalid credentials" };
    }

    await createSession(user.id);
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Something went wrong" };
  }

  redirect("/dashboard");
}

export async function logoutUser() {
  await deleteSession();
  redirect("/login");
}
