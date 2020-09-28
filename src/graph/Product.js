import React, { Component } from 'react';
import { MDBContainer, MDBIframe } from 'mdbreact';
import './iframe.css';



function Product() {

 

    return (

      <div>
      <h1 className='titlegraph'>Nos produits les plus vendus</h1>
      <MDBContainer className="iframe">
        <MDBIframe src="https://datastudio.google.com/embed/reporting/e891cf94-206b-4ccf-9416-08570f952519/page/0QPhB%22"/>
      </MDBContainer>
        </div>
    )
}


export default Product;
