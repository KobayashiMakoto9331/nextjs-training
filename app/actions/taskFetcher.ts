"use server";

import { prisma } from "@/lib/prisma";
import { Task } from "@/types/task";
import { TaskStatus } from "@prisma/client/wasm";
import { revalidatePath } from "next/cache";

export async function fetchTasks(): Promise<Task[]> {
  return await prisma.task.findMany();
}

export async function addTaskAction(formdata: FormData, userId: string) {
  const title = formdata.get("title") as string;
  const description = formdata.get("description") as string;

  const trimmedTitle = title.trim();
  const trimmedDescription = description.trim();

  if (!trimmedTitle) return;

  try {
    await prisma.task.create({
      data: {
        title: trimmedTitle,
        description: trimmedDescription || "",
        status: "TODO",
        order: 0,
        userId: userId.toString(),
      },
    });
    revalidatePath("/");
  } catch (err) {
    if (err instanceof Error) {
      console.log("Error: ", err.stack);
    }
  }
}

export async function updateTaskAction(taskId: string, formdata: FormData) {
  const title = formdata.get("title") as string;
  const description = formdata.get("description") as string;
  try {
    await prisma.task.update({
      where: { id: taskId },
      data: {
        title,
        description,
      },
    });
    revalidatePath("/");
  } catch (err) {
    if (err instanceof Error) {
      console.log("Error: ", err.stack);
    }
  }
}

export async function updateTaskStatusAction(taskId: string, status: TaskStatus): Promise<void> {
  try {
    await prisma.task.update({
      where: { id: taskId },
      data: {
        status,
      },
    });
    console.log("updateTaskStatusAction");
    revalidatePath("/");
  } catch (err) {
    if (err instanceof Error) {
      console.log("Error: ", err.stack);
    }
  }
}

export async function deleteTaskAction(taskId: string) {
  console.log("deleteTaskAction");
  try {
    await prisma.task.delete({
      where: { id: taskId },
    });
    revalidatePath("/");
  } catch (err) {
    if (err instanceof Error) {
      console.log("Error: ", err.stack);
    }
  }
}
