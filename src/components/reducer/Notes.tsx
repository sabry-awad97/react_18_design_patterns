import { useReducer, useState, FormEvent } from 'react';

interface Note {
  id: number;
  note: string;
}

enum ActionTypes {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

interface AddAction {
  type: ActionTypes.ADD;
  payload: Note;
}

interface DeleteAction {
  type: ActionTypes.DELETE;
  payload: number;
}

interface UpdateAction {
  type: ActionTypes.UPDATE;
  payload: Note;
}

type Action = AddAction | DeleteAction | UpdateAction;

const initialNotes: Note[] = [
  {
    id: 1,
    note: 'Note 1',
  },
  {
    id: 2,
    note: 'Note 2',
  },
];

const reducer = (state: Note[], action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return [...state, action.payload];

    case ActionTypes.DELETE:
      return state.filter(note => note.id !== action.payload);

    case ActionTypes.UPDATE:
      return state.map((n: Note) =>
        n.id === action.payload.id ? action.payload : n
      );

    default:
      return state;
  }
};

const Notes = () => {
  const [notes, dispatch] = useReducer(reducer, initialNotes);
  const [note, setNote] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newNote = { id: Date.now(), note };
    dispatch({ type: ActionTypes.ADD, payload: newNote });
  };

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((n: Note) => (
          <li key={n.id}>
            {n.note}{' '}
            <button
              onClick={() =>
                dispatch({ type: ActionTypes.DELETE, payload: n.id })
              }
            >
              X
            </button>
            <button
              onClick={() =>
                dispatch({ type: ActionTypes.UPDATE, payload: { ...n, note } })
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="New note"
          value={note}
          onChange={e => setNote(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Notes;
