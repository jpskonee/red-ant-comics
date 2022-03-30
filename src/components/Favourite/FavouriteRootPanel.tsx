import React, {useState, useEffect} from 'react';
import {openNav} from "../../redux/NavToggle/NavToggleAction";
import {removeFavourite} from "../../redux/Favourite/favouriteActions"
import {useDispatch, useSelector, RootStateOrAny} from "react-redux"
import FavouriteItems from './FavouriteItems';
import { ImageCardProps, MarvelDataProps } from '../../ts/interface';



const FavouriteRootPanel:React.FC<MarvelDataProps> = ({marvelData}) => {

    const dispatch = useDispatch();
    const [favData, setFavData] = useState<ImageCardProps[]>([])
    
    const navState = useSelector((state:RootStateOrAny) =>  state.toggle);
    const favIds = useSelector((state:RootStateOrAny) =>  state.favourite);
 

    const deleteFavHandler = (id: string) => {
        dispatch(removeFavourite(id))
    }

    const toggleFavPanelHandler = () => {
        dispatch(openNav())
    }


  useEffect(() => {
    if (!favIds || favIds === null || favIds.length < 1) {
     return setFavData([])
    } 

    const favs = favIds && marvelData.filter((marvel) => favIds.includes(marvel.id))
    setFavData(favs)

  }, [marvelData, favIds])


  return (
    <div id="favourites-panel" className={`favourites-panel ${navState && "open"}`}>
            <div className="favourites-header">
                <h2>Favourites</h2>
                <button onClick={toggleFavPanelHandler} className="close hover js-close"></button>
            </div>
            <div className="favourites-content">
                <ul className="favourites-list">
                  {favData.length < 1 ?  <li>No Favourite Item</li> : favData.map((marvel) => {
                        const {id, title} = marvel
                      return (
                          <FavouriteItems 
                            key={id}
                            deleteFav={() => {
                              deleteFavHandler(id)
                            }} 
                            id={id}
                            title={title}
                          /> 
                      )
                  })}    
                </ul>
            </div>
    </div>
  )
}

export default FavouriteRootPanel