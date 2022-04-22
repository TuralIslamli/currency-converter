import './App.css';
import Header from './components/header/Header';
import Converter from './components/converter/Converter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setConverterDataSaga } from './modules/saga/actionCreator';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setConverterDataSaga())
  }, [])
  return (
    <>
    <Header/>
    <Converter/>
    </>
  );
}

export default App;
