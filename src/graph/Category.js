import React, { Component } from 'react';
import { MDBContainer, MDBIframe } from 'mdbreact';
import './iframe.css';



function Category() {

 

    return (
      <div>
      <h1 className='titlegraph'>Nos catégories tendances</h1>
      <MDBContainer className="iframe">
        <MDBIframe src="https://datastudio.google.com/embed/reporting/c7c26d2b-8ef4-44a9-82a3-277ad178cea6/page/YTPhB%22"/>
      </MDBContainer>
        </div>
    )
}


export default Category;
