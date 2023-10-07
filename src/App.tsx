import './App.css';
import Fetch from './components/Fetch';

interface Item {
  id: number;
  name: string;
}

function App() {
  return (
    <Fetch<Item[]> url="https://jsonplaceholder.typicode.com/users">
      {data => (
        <ul>{data && data.map(item => <li key={item.id}>{item.name}</li>)}</ul>
      )}
    </Fetch>
  );
}

export default App;
