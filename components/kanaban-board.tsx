import { Task } from "@/types/task";
import AddTaskForm from "@/components/add-task-form";
import { fetchTasks } from "@/app/actions/taskFetcher";
import { use } from "react";
import { TaskList } from "@/components/task-list";

export function KanbanBoard() {
  const tasks: Task[] = use(fetchTasks());

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}
