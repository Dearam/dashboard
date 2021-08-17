import React from 'react'
import './Dchart.css'

function Dchart() {
    return (
        <div className="wrappe2">
            <div className="title2">Earnings</div>
            <hr/>
            <div className="container">
                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>31<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">Product</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>53<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">App</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>16<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">Service</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dchart
