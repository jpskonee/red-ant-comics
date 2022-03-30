import React, {useEffect, useState} from 'react';
import {openNav} from "../../redux/NavToggle/NavToggleAction"
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import FavouriteRootPanel from '../Favourite/FavouriteRootPanel';
import { MarvelDataProps } from '../../ts/interface';


const NavBar:React.FC<MarvelDataProps> = ({marvelData}) => {
  const dispatch = useDispatch()

  const toggleFavPanelHandler = () => {
    dispatch(openNav())
  }
  
  return (
        <div id="top">
          <header className="site-header">
            <Link to="/">
              <h1 className="site-heading">Red Ant Comics</h1>
            </Link>
            <button onClick={toggleFavPanelHandler} className="favourites-toggle hover js-favourites-toggle"></button>
        </header>
           <FavouriteRootPanel marvelData={marvelData} />
        </div>
  )
}

export default NavBar