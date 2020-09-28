import React, { Component } from 'react';
import { MDBContainer, MDBIframe } from 'mdbreact';
import './iframe.css';



function Customer() {

 

    return (
      <div>
      <h1 className='titlegraph'>Nos meilleurs clients</h1>
      <MDBContainer className="iframe">
        <MDBIframe src="https://datastudio.google.com/embed/reporting/d0d60600-2e0b-4f84-9896-e97a4326ea3b/page/PcChB%22"/>
      </MDBContainer>
        </div>
    )
}


export default Customer;
