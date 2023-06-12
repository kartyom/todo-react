import { useState } from "react";

export default function Item({ todo, onChange, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = (event) => {
    event.preventDefault();
    onChange(editedTodo);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <form onSubmit={handleSave}>
          <input
            type="text"
            value={editedTodo.text}
            onChange={(event) =>
              setEditedTodo({
                ...editedTodo,
                text: event.target.value,
              })
            }
          />
          <input
            type="time"
            value={editedTodo.deadline}
            onChange={(event) =>
              setEditedTodo({
                ...editedTodo,
                deadline: event.target.value,
              })
            }
          />
          <button type="submit">Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <label>
          <input
            type="checkbox"
            checked={todo.isComplited}
            onChange={(event) => {
              onChange({
                ...todo,
                isComplited: event.target.checked,
              });
            }}
          />
          <span>
            {todo.text} {todo.deadline}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button
            onClick={() => {
              onDelete(todo);
            }}
          >
            X
          </button>
        </label>
      )}
    </div>
  );
}
