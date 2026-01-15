import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
    return (
        <div>
            <div className="marquee">
                <marquee direction="right">
                   Sale is Live!!!!&nbsp;&nbsp;&nbsp;&nbsp;Sale is Live!!!!&nbsp;&nbsp;&nbsp;&nbsp;Sale is Live!!!!&nbsp;&nbsp;&nbsp;&nbsp;Sale is Live!!!!&nbsp;&nbsp;&nbsp;&nbsp;Sale is Live!!!!&nbsp;&nbsp;&nbsp;&nbsp;Sale is Live!!!!&nbsp;&nbsp;&nbsp;&nbsp;Sale is Live!!!!&nbsp;&nbsp;&nbsp;&nbsp;Sale is Live!!!!
                </marquee>
            </div>

            <h1>Courses Page</h1>
            <Outlet />
        </div>
    )
}

export default Courses
