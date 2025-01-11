"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addTaskAction } from "@/app/actions/taskFetcher";
import { useAppContext } from "@/provider/app-context";

export default function AddTaskForm() {
  const { userId } = useAppContext();

  async function handleAddTaskAction(formData: FormData) {
    if (!userId) return;
    await addTaskAction(formData, userId);
  }

  return (
    <form action={handleAddTaskAction} className="mb-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
      <div className="space-y-4">
        <Input type="text" placeholder="Task title" name="title" required />
        <Textarea placeholder="Task description" name="description" />
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
}
