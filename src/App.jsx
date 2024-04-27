import React from 'react'
import css from './styles/App.module.scss'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import Ourproducts from './components/pages/Ourproduct'
import Industries from './components/pages/Industries'
import Contactus from './components/pages/Contactus'
import Sheetmetalpart from './components/pages/Sheetmetalpart'
import Sheetmetaltool from './components/pages/Sheetmeataltools'
import Switchgear from './components/pages/Switchgear'
import Metalstamping from './components/pages/Metalstamping'
import Materialsformetalstamping from './components/pages/Materialsformetalstamping'
import Stampedmetal from './components/pages/Stampedmetal'
import Header2 from './components/common/Header/Header2'
import Custom from './components/productspages/Custom'
import Stamping from './components/productspages/Stamping'
import Fabrication from './components/productspages/Fabrication'
import Aluminium from './components/productspages/Aluminium'
import Metal from './components/productspages/Metal'
import Industrial from './components/productspages/Industrial'
import Brackets from './components/productspages/Brackets'
import Pressed from './components/productspages/Pressed'
import Submersible from './components/productspages/Submersible'
import Copper from './components/productspages/Copper'
import Brass from './components/productspages/Brass'
import MSsheet from './components/productspages/MSsheet'
import SSsheet from './components/productspages/SSsheet'

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      {/* <Header2/> */}
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Ourproducts' element={<Ourproducts/>}/>
        <Route path='/industries' element={<Industries/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/sheetmetalpart' element={<Sheetmetalpart/>}/>
        <Route path='/sheetmetaltool' element={<Sheetmetaltool/>}/>
        <Route path='/switchgear' element={<Switchgear/>}/>
        <Route path='/metalstamping' element={<Metalstamping/>}/>
        <Route path='/materialsformetalstamping' element={<Materialsformetalstamping/>}/>
        <Route path='/stampedmetal' element={<Stampedmetal/>}/>
        <Route path='/sparts' element={<Custom/>}/>
        <Route path='/stamp' element={<Stamping/>}/>
        <Route path='/fabrication' element={<Fabrication/>}/>
        <Route path='/aluminium' element={<Aluminium/>}/>
        <Route path='/metal' element={<Metal/>}/>
        <Route path='/industrial' element={<Industrial/>}/>
        <Route path='/brackets' element={<Brackets/>}/>
        <Route path='/pressed' element={<Pressed/>}/>
        <Route path='/submersible' element={<Submersible/>}/>
        <Route path='/copper' element={<Copper/>}/>
        <Route path='/brass' element={<Brass/>}/>
        <Route path='/msparts' element={<MSsheet/>}/>
        <Route path='/ssparts' element={<SSsheet/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App