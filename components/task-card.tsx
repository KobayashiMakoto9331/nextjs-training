import { useState } from "react";
import { Task } from "@/types/task";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditTaskForm } from "./edit-task-form";
import { Draggable } from "@/components/ui/draggable";

type TaskCardProps = {
  task: Task;
  index: number;
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
};

export default function TaskCard({ task, onUpdateTask, onDeleteTask }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Draggable id={task.id}>
      <Card className="bg-white">
        <CardContent className="p-4">
          {isEditing ? (
            <EditTaskForm
              task={task}
              onUpdateTask={(updatedTask) => {
                onUpdateTask(updatedTask);
                setIsEditing(false);
              }}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            <>
              <h3 className="font-semibold mb-2">{task.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{task.description}</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => onDeleteTask(task.id)}>
                  Delete
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </Draggable>
  );
}
