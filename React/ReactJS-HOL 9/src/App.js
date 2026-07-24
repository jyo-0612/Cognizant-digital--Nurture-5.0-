import './App.css';
import ListOfPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const flag = true;

  return (
    <>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </>
  );
}

export default App;