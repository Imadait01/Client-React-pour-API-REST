import logo from './logo.svg';
import './App.css';
import CompteList from './Components/CompteList';
import CompteForm from './Components/CompteForm';

function App() {
  return (
    <div className="App">
      <CompteForm />
      <CompteList />
    </div>
  );
}

export default App;
