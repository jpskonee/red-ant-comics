import React from "react"
import ImageCard from "../components/UI/ImageCard"
import { MarvelDataProps } from '../ts/interface';
import {useSelector, useDispatch, RootStateOrAny} from "react-redux";
import {addFavourite, removeFavourite} from "../redux/Favourite/favouriteActions";
import LoadingAnimation from "../components/UI/LoadingAnimation";
import { openNav } from "../redux/NavToggle/NavToggleAction";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


const HomePage:React.FC<MarvelDataProps> = ({marvelData}) => {
    const dispatch = useDispatch();

    //Getting states
    const favStore = useSelector((state:RootStateOrAny) =>  state.favourite);
    const navState = useSelector((state:RootStateOrAny) =>  state.toggle);
    
    const changeFavHandLer = (id: string) => {
      if (!favStore.includes(id)) {
            dispatch(addFavourite(id))
            if (!navState) {
              return dispatch(openNav())
            }
        } else {
            dispatch(removeFavourite(id))
        }
        return;
    }


  return (
    <div>
        <main className="site-content">
            <ul id="comics-list" className="comics-list">
              {marvelData.length < 1 || marvelData === undefined ? 
              <LoadingAnimation />
              :  marvelData.map(marvel => {
                  const {id, thumbnail, title} = marvel
                    return (
                        <ImageCard 
                          changeFavHandLer={() => {
                          changeFavHandLer(id)
                          }} 
                          key={id}
                          id={id}
                          title={title}
                          thumbnail={thumbnail}
                          alt={title} 
                        />           
                    )
                }) }
            </ul>
        </main>
        <div className="top-arrow">
           <a href="#top">
                <ArrowCircleUpIcon fontSize="large" />
           </a>   
        </div> 
        
    </div>
  )
}

export default HomePage