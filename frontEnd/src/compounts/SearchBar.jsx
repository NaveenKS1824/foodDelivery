import React, { useEffect, useState } from 'react';
import './searchBar.css'
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import briyani from '../assets/briyani.avif';
import burger from '../assets/burgar.avif';
import cakes from '../assets/cakes.avif';
import desserts from '../assets/desserts.avif';
import pizza from '../assets/pizza.avif';
import southIndian from '../assets/southIndian.avif';
import chinese from '../assets/chinese.avif';
import rolles from '../assets/rolles.avif';
import SelectedItem from './SelectedItem';
import { useDispatch, useSelector } from 'react-redux';
import { searchItem } from '../redux/productSlice';
import NotFound from './NotFound';
import { fetchFoodItem } from '../redux/foodItemsSlice';

function SearchBar(props) {
  const dispatch = useDispatch();
  const [search,setSearch] = useState('');
  const items = [
    { name: 'Briyani', src: briyani },
    { name: 'Cakes', src: cakes },
    { name: 'Pizza', src: pizza },
    { name: 'SouthIndian', src: southIndian },
    { name: 'Burger', src: burger },
    { name: 'Desserts', src: desserts },
    { name: 'Chinese', src: chinese },
    { name: 'Rolls', src: rolles },
  ];
  const handleImage = (items) =>{
    setSearch(items);
    dispatch(searchItem(items));
  }
  const handleClose =()=>{
    setSearch('');
    dispatch(searchItem(search));
  }
  const searchItems = useSelector((state)=>state.food.foodItem);
  console.log(searchItems);
  useEffect(()=>{
    dispatch(fetchFoodItem())
  },[dispatch]);
  useEffect(() => {
    dispatch(searchItem(search));
  }, [search, dispatch]);

    return (
        <div className='mainSearch'>
          <div className="new">
              <div className="searchContainer">
                {(search=='')?<IoIosSearch className='searchIcon'/>:<IoMdClose className='searchIcon' onClick={handleClose}/>}
                <input type="text" className='searchInput' placeholder='Search' value={search} onChange={(e)=>{setSearch(e.target.value);dispatch(searchItem(search))}} />
              </div>
            </div>
            <div>
              <div className="Cuisines">
                <div className="PopularCusines">
                    <h2>Popular Cusines</h2>
                    <div className="imageContainer">
                        {items.map((a)=>(
                          <img src={a.src} alt={a.name} onClick={()=>handleImage(a.name)} />
                        ))}
                    </div>
                </div>
            </div>
          {((searchItems!='')?(searchItems.map((item)=><SelectedItem a={item}/>)):(<NotFound/>))}
          </div>
        </div>
    );
}

export default SearchBar;