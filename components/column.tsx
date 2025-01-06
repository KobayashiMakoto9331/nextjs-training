import { Task } from "@/types/task";
import TaskCard from "./task-card";
import { Fragment } from "react";

type ColumnProps = {
  title: string;
  tasks: Task[];
};

export default function Column({ title, tasks }: ColumnProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-80">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <Fragment key={task.id}>
            <TaskCard task={task} index={index} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
