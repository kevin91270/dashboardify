import React, { Component } from 'react';
import { MDBContainer, MDBIframe } from 'mdbreact';
import './iframe.css';



function Salesman() {

 

    return (
      <div>
      <h1 className='titlegraph'>Nos meilleurs Vendeurs</h1>
      <MDBContainer className="iframe">
        <MDBIframe src="https://datastudio.google.com/embed/reporting/fab42d17-1efb-4e4e-bfe7-c8df8968ab1e/page/TKBhB%22"/>
      </MDBContainer>
        </div>
    )
}


export default Salesman;
