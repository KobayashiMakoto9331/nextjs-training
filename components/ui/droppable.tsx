import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
  children: React.ReactNode;
  id: string;
  isOverAddClass?: string;
};

export function Droppable({ children, id, isOverAddClass }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className={isOver && isOverAddClass ? isOverAddClass : ""}>
      {children}
    </div>
  );
}
