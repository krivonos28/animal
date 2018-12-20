import React from 'react'
import { Link } from 'react-router-dom'
import { MainMenu } from '../Components/MainMenu'

export const NotFound = () =>{
    return(
        <div>
            <MainMenu></MainMenu>
            Page not found. Press <Link to = "/animals">Home</Link>
        </div>
    )
}
