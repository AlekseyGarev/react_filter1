import { Portfolio } from "./components/Portfolio";
import './App.css';

function App() {
  return (
    <div className='container'>
      {/* Просто вызываем наш главный компонент с портфолио и фильтрами */}
      <Portfolio />
    </div>
  );
}

export default App;