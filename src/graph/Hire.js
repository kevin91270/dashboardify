import React, { Component } from 'react';
import { MDBContainer, MDBIframe } from 'mdbreact';
import './iframe.css';



function Hire() {

 

    return (
      <div>
      <h1 className='titlegraph'>Statistiques d'embauches</h1>
      <MDBContainer className="iframe">
        <MDBIframe src="https://datastudio.google.com/embed/reporting/f0d64d77-6138-4183-9ea4-9546a422b4d8/page/14NhB%22"/>
      </MDBContainer>
        </div>
    )
}


export default Hire;
