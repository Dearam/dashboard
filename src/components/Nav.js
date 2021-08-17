import React from 'react'
import Route from './Route'
import '../App.css'
import Dashboard from './Dashboard'
import Todo from './Todo'
import Callender from './Callender'
import Analytics from './Analytics'
import Filemanager from './Filemanager'
import Saved from './Saved'
import Settings from './Settings'
import Order from './Order'

const showDash=()=>{
    if (window.location.pathname==='/dash'){
        return <Dashboard/>
    }
}

const Nav = () => {
    return (
        <div className="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <i className="bx bx-bolt-circle"></i>
                    <div className="logo_name">React</div>
                </div>
                <div>
                    <i className="bx bx-menu" id="btn"></i>
                </div>
                <ul className="nav_list">
                    <li>
                            <a href="/"> 
                                <i className="bx bx-grid-alt"></i>
                                <span className="links_name">Dashboard</span>
                            </a> 
                            <Route path="/">
                                <Dashboard/>
                            </Route>
                    </li>
                    <li>
                        <a href="/user">
                            <i className="bx bx-note"></i>
                            <span className="links_name">Todo</span>
                        </a>
                        <Route path="/user">
                        <Todo/>
                        </Route>
                    </li>
                    <li>
                        <a href="/message">
                            <i className="bx bx-chat"></i>
                            <span className="links_name">Callender</span>
                        </a>
                        <Route path="/message">
                        <Callender/>
                        </Route>
                    </li>
                    <li>
                        <a href="analytics">
                            <i className="bx bx-pie-chart-alt-2"></i>
                            <span className="links_name">Analytics</span>
                        </a>
                        <Route path="/analytics">
                        <Analytics/>
                        </Route>
                    </li>
                    <li>
                        <a href="/filemanager">
                            <i className="bx bx-folder"></i>
                            <span className="links_name">Filemanager</span>
                        </a>
                        <Route path="/filemanager">
                        <Filemanager/>
                        </Route>
                    </li>
                    <li>
                        <a href="/order">
                            <i className="bx bx-cart-alt"></i>
                            <span className="links_name">Order</span>
                        </a>
                        <Route path="/order">
                        <Order/>
                        </Route>
                    </li>
                    <li>
                        <a href="/saved">
                            <i className="bx bx-heart"></i>
                            <span className="links_name">Saved</span>
                        </a>
                        <Route path="/saved">
                        <Saved/>
                        </Route>
                    </li>
                    <li>
                        <a href="/settings">
                            <i className="bx bx-cog"></i>
                            <span className="links_name">Settings</span>
                        </a>
                        <Route path="/settings">
                        <Settings />
                        </Route>
                    </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_details">
                            <div className="name_job">
                                <div className="name">Dearam</div>
                                <div className="job">React Developer</div>
                            </div>
                        </div>
                        <i className="bx bx-log-out" id="log_out"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
