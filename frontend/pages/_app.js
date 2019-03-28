import App, { Container } from "next/app";
import Page from "../components/Page";
import React, { Component } from 'react';

class MyApp extends App {
    render(){
        const {Component } = this.props;
        console.log("bakry" , this.props)
        return(
            <Container>
               <Page>
                   <Component/>
                </Page>      
            </Container>
        );
    }
};

export default MyApp;