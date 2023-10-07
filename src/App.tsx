import './App.css';
import FunctionAsChild from './components/FunctionAsChild';

function App() {
  return <FunctionAsChild>{() => <div>Hello, World!</div>}</FunctionAsChild>;
}

export default App;
