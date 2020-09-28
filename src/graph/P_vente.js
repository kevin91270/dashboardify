import React, { Component } from 'react';
import { MDBContainer, MDBIframe } from 'mdbreact';
import './iframe.css';



function Pvente() {

 

    return (
      <div>
      <h1 className='titlegraph'>Nombre total de ventes</h1>
      <MDBContainer className="iframe">
        <MDBIframe src="https://datastudio.google.com/embed/reporting/152d67eb-4710-4df1-8b7c-9bbf6733f38d/page/UELhB%22"/>
      </MDBContainer>
        </div>
    )
}


export default Pvente;
