import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/partials/NavBar';
import Error404 from './pages/Error404';
import HomePage from './pages/HomePage';
import "./styles/main.css"
import "./styles/normalize.css"
import SingleMavelPage from './pages/SingleMarvelPage';
import { ImageCardProps } from './ts/interface';


function App() {

  const apiKey = process.env.REACT_APP_API_KEY
  const hash = process.env.REACT_APP_HASH
  const timeStamp = process.env.REACT_APP_TIMESTAMP

  const [marvelData, setMarvelData] = useState<ImageCardProps[]>([])

  const getData = async (url: string) => {
        try {
            const response = await fetch(url)
            const {data}  =  await response.json()
            const newData = data.results
            setMarvelData(newData)
            
        } catch (error) {
          throw new Error("Error" + error)  
        }
      };

      
  useEffect(() => {
      try {
          getData(`https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}&ts=${timeStamp}&hash=${hash}`)  
      } catch (error) {
        console.log(error)
      }
    }, []);

  return (
    <div >
     <BrowserRouter>
        <NavBar marvelData={marvelData} />
        <Routes>
          <Route path='/' element={<HomePage marvelData={marvelData} />} />
          <Route path='marvel/:id' element={<SingleMavelPage />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
