// pages/Home/HomePage.jsx
import Intro from "../main/Intro/Intro"
import Hero from "../main/Hero/Hero"
import About from "../main/About/About"
import Projects from "../main/Projects/Projects"
import Slider from "../main/Slider/Slider"
import Team from "../main/Team/Team"
import News from "../main/News/News"

export default function HomePage() {
    return (
        <>
            <Intro />
            
            <Hero />
            
            <About />
            <Slider />
            <Projects />
            <Team />
            <News />
        </>
    )
}