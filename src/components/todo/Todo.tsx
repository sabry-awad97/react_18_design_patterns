import { FC, useState, useEffect, ChangeEvent } from 'react';
import { Todo } from './List';
import MemoizedList from './MemoizedList';

const initialTodos: Todo[] = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' },
];

const Todos: FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>(initialTodos);
  const [task, setTask] = useState<string>('');

  useEffect(() => {
    console.log('Rendering <Todos />');
  });

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task,
    };

    setTodoList([...todoList, newTodo]);

    setTask('');
  };

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <MemoizedList todoList={todoList} />
    </>
  );
};

export default Todos;
