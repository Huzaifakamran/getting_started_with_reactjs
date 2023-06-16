import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <NavBar title = "Hazdor"/>
      <div className="container">
        <TextForm heading = "Enter your text below"/>
      </div>
    </>
  );
}

export default App;
