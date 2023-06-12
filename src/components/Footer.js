export default function Footer({ todos }) {
  return (
    <div>
      <span>complited {howAreComplited(todos)}</span>
      <span>not complited {todos.length - howAreComplited(todos)}</span>
    </div>
  );
}

function howAreComplited(list) {
  let result = 0;

  for(let i = 0; i < list.length; i++) {
    if(list[i].isComplited) {
      ++result;
    }
  }

  return result;
}
