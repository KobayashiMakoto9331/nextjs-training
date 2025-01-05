import { Task } from "@/types/task";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addTaskAction } from "@/app/actions/taskFetcher";

type AddTaskFormProps = {
  onAddTask: (task: Omit<Task, "id">) => void;
  allTasks: Task[];
};

export default function AddTaskForm({ allTasks, onAddTask }: AddTaskFormProps) {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (title.trim().length === 0) return;

  //   const todoTasks = allTasks.filter((task) => task.status === "todo");
  //   onAddTask({ title, description, status: "todo", queue: todoTasks.length + 1 });
  //   setTitle("");
  //   setDescription("");
  // };

  return (
    <form
      action={addTaskAction}
      // onSubmit={handleSubmit}
      className="mb-6 p-4 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
      <div className="space-y-4">
        <Input type="text" placeholder="Task title" name="title" required />
        <Textarea placeholder="Task description" name="description" />
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
}
