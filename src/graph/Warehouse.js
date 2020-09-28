import React, { Component } from 'react';
import { MDBContainer, MDBIframe } from 'mdbreact';
import './iframe.css';



function Warehouse() {

 

    return (
      <div>
      <h1 className='titlegraph'>Disposition de nos entrepôts dans le monde</h1>
      <MDBContainer className="iframe">
        <MDBIframe src="https://datastudio.google.com/embed/reporting/5ca8eb27-57f0-4a2e-92c1-100bfa826fa9/page/2UPhB%22"/>
      </MDBContainer>
        </div>
    )
}


export default Warehouse;
