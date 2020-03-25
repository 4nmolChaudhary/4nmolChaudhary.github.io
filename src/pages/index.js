import React from 'react'
import '../styles/main.css'
import Home from '../components/Home'
import SideNav from '../components/SideNav'
function index() {
    return (
        <div>
            <SideNav page="home" />
            <Home />
        </div>
    )
}

export default index

