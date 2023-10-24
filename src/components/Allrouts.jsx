import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Vehicles from '../pages/Vehicles'
import Energy from '../pages/Energy'
import Charging from '../pages/Charging'
import Discover from '../pages/Discover'
import Shop from '../pages/Shop'
import Support from '../pages/Support'
import LSToggle from '../pages/LSToggle'
import Product from '../pages/Product'
import SinglePage from '../pages/SinglePage'
import Cart from '../pages/Cart'

const Allrouts = (e) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Vehicles' element={<Vehicles/>}/>
            <Route path='/Energy' element={<Energy/>}/>
            <Route path='/Charging' element={<Charging/>}/>
            <Route path='/Discover' element={<Discover/>}/>
            <Route path='/Shop' element={<Shop/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/network'/>
            <Route path='/SignuporLogin' element={<LSToggle/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<SinglePage/>}/>
        </Routes>
    </div>
  )
}


export default Allrouts