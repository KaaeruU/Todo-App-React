import { useState } from "react";
import type { TodoItemProps } from "../models/TodoItem";

function OneItem({ text, id, delete: deleteTodo }: TodoItemProps) {
  const [done] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white rounded shadow p-4 mb-2">
      <label
        className={`text-gray-800 font-medium ${
          done ? "line-through font-thin" : ""
        }`}
      >
        {id} - {text}
      </label>
      <div className="flex gap-10">
        <button
          onClick={() => {
            // setDone(!done);
          }}
          className={
            done
              ? "px-30 py-10 bg-gray-500 text-white rounded"
              : "px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition "
          }
        >
          {text}+{`${new Date()}`}
        </button>
        <button
          onClick={() => {
            deleteTodo(id);
          }}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default OneItem;
