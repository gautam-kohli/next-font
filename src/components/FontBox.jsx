import FontSider from './Categories';
import FontStyle from './FontStyle';
import InstagramProfile from './InstagramProfile'

import { Route, Routes, } from 'react-router-dom';
import SearchBar from './SearchBar';

function fontBox() {

  return (
    <>
      <div>
        <SearchBar />
        <div className=' border rounded-md m-auto w-11/12 my-1  sm:flex  sm:my-5 sm:w-11/12 sm:justify-between '>
          <InstagramProfile />
          <FontSider />
          <FontStyle />
        </div>
      </div>
    </>


  )
}

export default fontBox
