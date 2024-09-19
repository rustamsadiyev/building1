import React from 'react'
import Header from './Header'
import Service from './Service'
import Company from './Company'
import Dreamhome from './Dreamhome'
import Project2 from './Project2'
import News from "./News"
import Partners from './Partners'
import Constructor from './Constructor'
import Message from './Message'
import Footer from './Footer'


function Home() {
    return (
    <div className="overflow-hidden" >
        <Header/>
        <Service/>
        <Company/>
        <Dreamhome/>
        <Project2/>
        <News/>
        <Partners/>
        <Constructor/>
        <Message/>
        <Footer/>    
    </div>
    )
}

    export default Home 