import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <CustomButton text="I" color="red" />
      <CustomButton text="know" color="green" />
      <CustomButton text="React!" color="#ADD9E5" />
    </div>
  );
}

export default App;
