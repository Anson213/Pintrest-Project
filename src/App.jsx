//@high-component, @page-component, @page
import { useState } from 'react'
import './App.css'
import NavigationColumn from 'C:/Users/HP/OneDrive/Desktop/Pinterest/Pinterest/src/auth-pages/high-order-components/home/navigation-column.jsx';
import {Routes, Route} from 'react-router-dom';
import Updates from 'C:/Users/HP/OneDrive/Desktop/Pinterest/Pinterest/src/auth-pages/pages/update.jsx'
import Messages from 'C:/Users/HP/OneDrive/Desktop/Pinterest/Pinterest/src/auth-pages/pages/message.jsx'
import MoreOptions from 'C:/Users/HP/OneDrive/Desktop/Pinterest/Pinterest/src/auth-pages/pages/more-options.jsx'
import Home from 'C:/Users/HP/OneDrive/Desktop/Pinterest/Pinterest/src/auth-pages/pages/home.jsx'
import Create from 'C:/Users/HP/OneDrive/Desktop/Pinterest/Pinterest/src/auth-pages/pages/create.jsx'
import SearchBar from 'C:/Users/HP/OneDrive/Desktop/Pinterest/Pinterest/src/auth-pages/page-components/home/search-bar.jsx'


function App() {
  const [isWindowVisible, toggleWindow] = useState("")
  

  return (
    <>
    <SearchBar/>
      <NavigationColumn isWindowVisible={isWindowVisible} toggleWindow={toggleWindow} />
      {isWindowVisible === 'update' && <Updates />}
      {isWindowVisible === 'more-options' && <MoreOptions />}
      {isWindowVisible === 'message' && <Messages />}

      <>
        <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/create' element={<Create/>}/>
        </Routes>
      </>
    </>
  )
}

export default App




//import  Check1  from 'C:/Users/HP/OneDrive/Desktop/Pinterest/Pinterest/src/auth-pages/high-order-components/home/Render-Checker.jsx'
//import  Check2  from 'C:/Users/HP/OneDrive/Desktop/Pinterest/Pinterest/src/auth-pages/page-components/home/Render-Checker.jsx'
//import  Check3  from 'C:/Users/HP/OneDrive/Desktop/Pinterest/Pinterest/src/auth-pages/pages/Render-Checker.jsx'