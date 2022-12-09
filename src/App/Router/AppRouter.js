import React from 'react'
import { Route, Routes } from "react-router-dom"
import Choose from '../../Components/Choose'
import Domain from '../../Components/Domain'
import PropsMichael from '../../Components/PropsMichael'
import WeatherWidget from '../../Components/Weatherwidget'



const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Choose />} />
        <Route path="domain" element={<Domain />} />
        <Route path="weather" element={<WeatherWidget />} />
        <Route path="propsmichael" element={<PropsMichael />} />

    </Routes>
  )
}

export default AppRouter