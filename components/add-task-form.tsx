import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addTaskAction } from "@/app/actions/taskFetcher";

export default function AddTaskForm() {
  return (
    <form action={addTaskAction} className="mb-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
      <div className="space-y-4">
        <Input type="text" placeholder="Task title" name="title" required />
        <Textarea placeholder="Task description" name="description" />
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
}
