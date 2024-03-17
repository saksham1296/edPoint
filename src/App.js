import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { CarouselDefault, CarouselWithContent } from "./components/Carousel";
import { Courses, CardWithLink } from "./components/Courses";
import { Teachers, ProfileCard } from "./components/Teachers";
import { Stats, StatsSection8 } from "./components/Stats";
import { Footer, SimpleFooter } from "./components/Footer";
import { Contact, ButtonRounded } from "./components/Contact";

function App() {
    return (
        <div className="App bg-richblack-900 w-screen h-screen">
            <Navbar />
            <CarouselWithContent />
            <About />
            <CardWithLink />
            <ProfileCard />
            <StatsSection8 />
            <ButtonRounded />
            <SimpleFooter />
        </div>
    );
}

export default App;
