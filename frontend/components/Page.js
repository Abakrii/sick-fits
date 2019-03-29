import React, { Component } from 'react';
import Header from "./Header";
import Meta from "./meta"
import styled from "styled-components";

const MyButton = styled.button`
  background: red;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
 // margin: 0 1em;
  padding: 0.25em 1em;
  font-size : 100px
`

class Page extends Component{
    render(){
        return(
            <div>
                <Meta/>
               <Header/>
               <MyButton>Click Me</MyButton>
                {this.props.children}
            </div>
        );
    }
};

export default Page;