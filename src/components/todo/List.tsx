import { FC, useEffect } from 'react';
import MemoizedTask from './MemoizedTask';

export type Todo = {
  id: number;
  task: string;
};

interface Props {
  todoList: Todo[];
}

const List: FC<Props> = ({ todoList }) => {
  useEffect(() => {
    console.log('Rendering <List />');
  });

  return (
    <ul>
      {todoList.map((todo: Todo) => (
        <MemoizedTask key={todo.id} id={todo.id} task={todo.task} />
      ))}
    </ul>
  );
};

export default List;
