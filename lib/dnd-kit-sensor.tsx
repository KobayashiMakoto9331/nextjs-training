import { MouseEvent, PropsWithChildren, TouchEvent } from "react";
import {
  MouseSensor as LibMouseSensor,
  TouchSensor as LibTouchSensor,
  useSensor,
  useSensors,
  DndContext,
  DragEndEvent,
} from "@dnd-kit/core";

// Block DnD event propagation if element have "data-no-dnd" attribute
const handler = ({ nativeEvent: event }: MouseEvent | TouchEvent) => {
  let cur = event.target as HTMLElement;

  while (cur) {
    if (cur.dataset && cur.dataset.noDnd) {
      return false;
    }
    cur = cur.parentElement as HTMLElement;
  }

  return true;
};

// カスタムマウスセンサー
export class MouseSensor extends LibMouseSensor {
  static activators = [
    {
      eventName: "onMouseDown",
      handler,
    },
  ] as (typeof LibMouseSensor)["activators"];
}

// カスタムタッチセンサー
export class TouchSensor extends LibTouchSensor {
  static activators = [
    {
      eventName: "onTouchStart",
      handler,
    },
  ] as (typeof LibTouchSensor)["activators"];
}

type DndWrapperProps = {
  onDragEnd: (e: DragEndEvent) => void;
} & PropsWithChildren;

export function DndWrapper({ children, onDragEnd }: DndWrapperProps) {
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <DndContext id="builder-dnd" onDragEnd={onDragEnd} sensors={sensors}>
      {children}
    </DndContext>
  );
}
