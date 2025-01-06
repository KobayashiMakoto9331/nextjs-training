import { useState } from "react";
import { Task } from "@/types/task";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { updateTaskAction } from "@/app/actions/taskFetcher";

type EditTaskFormProps = {
  task: Task;
  onClose: () => void;
};

export function EditTaskForm({ task, onClose }: EditTaskFormProps) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const formAction = async (formData: FormData) => {
    formData.set("title", title);
    formData.set("description", description);
    await updateTaskAction(task.id, formData);
    onClose();
  };

  return (
    <form action={formAction} className="space-y-4">
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
      <div className="flex justify-end space-x-2">
        <Button type="submit" variant="default">
          Save
        </Button>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
