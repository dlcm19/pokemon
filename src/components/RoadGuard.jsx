import React from 'react'
import {Navigate , Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RoadGuard = () => {

    const nameCoach = useSelector(state => state.nameCoach)
     console.log(nameCoach);
    if (nameCoach) {
        return <Outlet />
    } else {
        return <Navigate to ='/'/>
    }
}

export default RoadGuard
