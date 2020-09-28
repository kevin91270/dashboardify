import React, { Component } from 'react';
import './welcome.css';
import graph_bas from '../graph_bas.png';
import graph2 from '../graph2.png';
import graph3 from '../graph3.png';



function Welcome() {

 

    return (
            <div>
                <div>
                    <h1 className='titlefirstpart'>Dashboard</h1>
                    <h2 className='title2firstpart'>Dernière mise à jour le : <u>30/09/2020</u></h2>
                </div>
                
                
                <div className="firstpart">
                    <img className="graph2" src={graph2} />
                    <img className="graph3" src={graph3} />
                </div>
                <div>
                    <img className="graph_bas" src={graph_bas} />
                </div>
                
            </div>
    )
}


export default Welcome;
