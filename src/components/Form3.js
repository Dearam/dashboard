import { Chart } from 'chart.js';
import React from 'react'
import './Form3.css'

function Form3() {
    return (
        <div className="three">
            <form className="one">
                <div className="wrapperone">
                    <h3>Orders</h3><br/><hr/>
                    <i className="b bx bx-bar-chart"></i>
                </div>
            </form>
            <form className="two">
                <div className="wrappertwo">
                    <h3>Profit</h3><br/><hr/>
                    <i className="t bx bx-trending-up"></i>
                </div>
            </form>
            <form className="three">
            <div className="wrapperthree">
            <div className="head">Goal overview</div><br/><hr/>
                <div className="boox">
                    <div className="per">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="num">83<span>%</span></div>
                        </div>
                </div>
                <br/><br/><br/><br/><br/><br/> 
                <hr/>
            <div className="content">Completed In-Progress</div>
            <div className="sub-content">786,454 14,234</div>
                </div>
                </form>
          </div>          
    )
}

export default Form3
