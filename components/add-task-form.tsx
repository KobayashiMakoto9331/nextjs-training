import { useState } from "react";
import { Task } from "@/types/task";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type AddTaskFormProps = {
  onAddTask: (task: Omit<Task, "id">) => void;
  allTasks: Task[];
};

export default function AddTaskForm({ allTasks, onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim().length === 0) return;

    const todoTasks = allTasks.filter((task) => task.status === "todo");
    onAddTask({ title, description, status: "todo", queue: todoTasks.length + 1 });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
}
