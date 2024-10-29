"use client";
import {  Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { deleteTodoAction } from "@/actions/todoActions";
import Spinner from "./ui/Spinner";
import { ITodo } from "@/interfaces";
import EditTodoForm from "./EditTodoForm";

const TodoTableAction = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id: todo.id.toString() });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoTableAction;
