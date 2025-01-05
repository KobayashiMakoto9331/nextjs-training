"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTaskAction(formdata: FormData) {
  const title = formdata.get("title") as string;
  const description = formdata.get("description") as string;

  if (!title) return;

  try {
    await prisma.task.create({
      data: {
        title,
        description: description || "",
        status: "TODO",
        order: 0,
      },
    });
    revalidatePath("/");
  } catch (err) {
    console.error(err);
  }
}
