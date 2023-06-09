import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton text="I" color="red" />
      <ToggleButton text="Know" color="green" />
      <ToggleButton text="React" color="blue" />
    </div>
  );
}

export default App;
