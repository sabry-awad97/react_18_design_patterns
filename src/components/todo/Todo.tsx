import {
  FC,
  useState,
  useEffect,
  ChangeEvent,
  useMemo,
  useCallback,
} from 'react';
import { Todo } from './List';
import MemoizedList from './MemoizedList';

const initialTodos: Todo[] = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' },
];

const Todos: FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>(initialTodos);
  const [task, setTask] = useState<string>('');
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    setTerm(task);
  };

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

  const handleDelete = useCallback(
    (taskId: number) => {
      const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const printTodoList = useCallback(() => {
    console.log('Changing todoList', todoList);
  }, [todoList]);

  useEffect(() => {
    printTodoList();
  }, [todoList, printTodoList]);

  const filteredTodoList = useMemo(
    () =>
      todoList.filter((todo: Todo) => {
        console.log('Filtering...');
        return todo.task.toLowerCase().includes(term.toLowerCase());
      }),
    [term, todoList]
  );

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <MemoizedList todoList={filteredTodoList} handleDelete={handleDelete} />
    </>
  );
};

export default Todos;
