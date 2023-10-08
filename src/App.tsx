import './App.css';
import Circle from './components/svg/Circle';
import RedCircle from './components/svg/RedCircle';

function App() {
  return (
    <>
      <Circle x={40} y={40} radius={40} fill="blue" />
      <RedCircle x={40} y={40} radius={40} />
    </>
  );
}

export default App;
