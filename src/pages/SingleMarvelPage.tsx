import { Container } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Link, useParams} from "react-router-dom"
import LoadingAnimation from '../components/UI/LoadingAnimation';
import { singlePageProps } from '../ts/interface';
import styles from "./SingleMarvelPage.module.css"


const SingleMarvelPage:React.FC = () => {
    
    const apiKey = process.env.REACT_APP_API_KEY
    const hash = process.env.REACT_APP_HASH
    const timeStamp = process.env.REACT_APP_TIMESTAMP


    const [marvelData, setMarvelData] = useState<singlePageProps>({
        thumbnail: {path: "", extension : ""},
        title: ""
    })
    const {thumbnail, title } = marvelData;
    
    const imgPrev = `${thumbnail!.path}/portrait_incredible.${thumbnail!.extension}`

    
   const params = useParams()
    const marvelId = params.id


    const getSingleMarvel = async(url: string) => {
        
        try {
            const response = await fetch(url);
            let {data} = await response.json();
            data = data.results[0];
            setMarvelData(data)

        } catch (error) {
            throw new Error("Error" + error)
        }

    }
    useEffect(() => {
        getSingleMarvel(`https://gateway.marvel.com/v1/public/comics/${marvelId}?apikey=${apiKey}&ts=${timeStamp}&hash=${hash}`)
    }, [marvelId])
  return (
    <div>
        {
        marvelData === undefined ?
        <LoadingAnimation />
        :
        <Container maxWidth="lg">
        <div className={styles["single-page-root"]}>
            <div className={styles["single-page-inner"]} >
                <div  className={styles["text-part"]}>
                    <div  className={styles["title"]}> {title}</div>
                </div>
                <div className={styles["img-part"]}>
                    <img src={imgPrev} className={styles["single-page-img"]} alt={title} />
                </div>     
            </div> 
        </div> 

        <div className={styles["single-page-btn"]}>
           <Link to="/">
             <button className="button"> Home </button>  
           </Link>   
        </div>  
    </Container> 
    }
    </div>
  )
}

export default SingleMarvelPage