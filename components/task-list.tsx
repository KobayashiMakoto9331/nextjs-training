"use client";

import Column from "./column";
import { Droppable } from "@/components/ui/droppable";
import { Task, taskTypes } from "@/types/task";
import { DragEndEvent } from "@dnd-kit/core";
import { DndWrapper } from "@/lib/dnd-kit-sensor";
import { updateTaskStatusAction } from "@/app/actions/taskFetcher";

type TaskListProps = {
  tasks: Task[];
};

export const TaskList = ({ tasks }: TaskListProps) => {
  const onDragEnd = async (e: DragEndEvent) => {
    console.log(e);
    const { active, over } = e;
    if (!over || !active) return;

    // statusの更新
    await updateTaskStatusAction(active.id.toString(), over.id as Task["status"]);
  };

  return (
    <DndWrapper onDragEnd={onDragEnd}>
      <div className="flex space-x-4">
        {taskTypes.map((status) => (
          <Droppable key={status} id={status}>
            <Column title={status} tasks={tasks.filter((task) => task.status === status)} />
          </Droppable>
        ))}
      </div>
    </DndWrapper>
  );
};
