import React from 'react';
import {Link} from "react-router-dom"
import { FavPanelProps } from '../../ts/interface';




const FavouriteItems:React.FC<FavPanelProps> = ({id,title, deleteFav }) => {

  return (
       <li>
           <Link to={`/marvel/${id}`}  >
                {title}
           </Link>
            <button onClick={() => {
                deleteFav(id)
            }} className="remove hover js-remove"></button>           
        </li>
  )
}

export default FavouriteItems