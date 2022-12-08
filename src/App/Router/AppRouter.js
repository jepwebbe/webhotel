import React from 'react'
import { Route, Routes } from "react-router-dom"
import Choose from '../../Components/Choose'
import Domain from '../../Components/Domain'
import WeatherWidget from '../../Components/Weatherwidget'



const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Choose />} />
        <Route path="domain" element={<Domain />} />
        <Route path="weather" element={<WeatherWidget />} />
    </Routes>
  )
}

export default AppRouter