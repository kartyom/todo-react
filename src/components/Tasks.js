import Item from "./Item";

export default function Tasks({ todos, onDelete, onChange }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}
