import './App.scss';
import { Header } from './components/header/Header';
import { Converter } from './components/converter/Converter';

function App() {
  return (
    <div className='App'>
    <Header/>
    <Converter/>
    </div>
  );
}

export default App;
