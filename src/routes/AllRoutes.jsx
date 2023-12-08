import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Contacts from '../components/Contacts'
import Form from '../components/Form'
const AllRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/contacts' element={<Contacts/>}/>
       <Route path='/form' element={<Form/>}/>
       <Route path='*' element={<h1>PAGE DOES NOT EXIST</h1>}/>
    </Routes>
  )
}

export default AllRoutes
