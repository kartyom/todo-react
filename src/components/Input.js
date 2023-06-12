import { useState } from "react";

export default function Input({ onAdd }) {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState(24);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onAdd(text, deadline);
        setText("");
        setDeadline(24);
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <input
        type="time"
        value={deadline}
        onChange={(event) => {
          setDeadline(event.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
