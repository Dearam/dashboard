import React from 'react'
import './Dashboard.scss'
import './Dashboard.css'
import Dchart from './Dchart'
import Statistics from './Statistics'
import Form3 from './Form3'

function Dashboard() {
    return (
        <div>
            <div className="wrap">
            <div className="search">
            <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                <button type="submit" className="searchButton">
                <i className="bx bx-search"></i>
                </button>
            </div>
            </div>
            <form className="f">
                <div className="wrapp2">
                    <div className="title2">Congratulations</div>
                        <p className="heading">John🎊</p>
                        <p className="paragraph">You have won gold medal</p>
                        <h3>$45.5k</h3>
                        <button className="btn2">View sales
                        </button>
                </div>
            </form>
            <Statistics/>
            <Dchart/>
            <Form3/>
            
            
            
        </div>
    )
}
export default Dashboard
