import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Header from './component/header';
import { useEffect } from 'react';
import { fetchData } from './axiosCalls/getData';

function App() {

 const getDataClick = async () =>{

   let getResult =  await fetchData();

console.log(getResult.data);

 }
    

   
 


  return (
    <div className="App">
    <Header />
     Welcome our youtube channel

     <button onClick={getDataClick} >Fetch data </button>
    </div>
  );
}

export default App;
