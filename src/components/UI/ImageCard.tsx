import React, { useEffect, useState }  from 'react'
import {ImageCardProps} from "../../ts/interface";
import { useSelector, RootStateOrAny} from "react-redux"
import { Link } from 'react-router-dom';



const ImageCard:React.FC<ImageCardProps> = ({thumbnail, alt, title, id, changeFavHandLer}) => {

  const [inFav, setInFav] = useState(false)
  const store = useSelector((state:RootStateOrAny) => state.favourite)
  
  const imgUrl = `${thumbnail!.path}/portrait_uncanny.${thumbnail!.extension}`
  

useEffect(() => {
   if (store && store.includes(id)) {
     setInFav(true)
   } else {
     setInFav(false)
   }
}, [store, id, inFav])

  return (
    <li className="comic-item">
        <div className="comic-card">
             <Link to={`marvel/${id}`}>
                 <img src={imgUrl} alt={alt} />
             </Link>
             <Link to={`marvel/${id}`}>
                <h2>{title}</h2>
             </Link>
             
            <button onClick={() => {
                changeFavHandLer(id)
            }} className={`button ${inFav ? "js-add" : ""}`}>{inFav ? "Remove from Favourite" :  "Add to favourites"}</button>
        </div>
    </li>
  );
}

export default ImageCard