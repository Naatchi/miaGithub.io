import {useEffect, useState} from "react";
import styles from '../styles/styles.module.css'

export default function Home() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll)
        return() => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    const array = [
        {url: "https://www.firewatchgame.com/images/parallax/parallax0.png",pr: 0.95},
        {url: "https://www.firewatchgame.com/images/parallax/parallax1.png", pr: 0.85},
        {url: "https://www.firewatchgame.com/images/parallax/parallax2.png",pr: 0.81},
        {url: "https://www.firewatchgame.com/images/parallax/parallax3.png",pr: 0.75},
        {url: "https://www.firewatchgame.com/images/parallax/parallax4.png",pr: 0.65},
        {url: "https://www.firewatchgame.com/images/parallax/parallax5.png",pr: 0.5},
        {url: "https://www.firewatchgame.com/images/parallax/parallax6.png",pr: 0.0},
        {url: "https://www.firewatchgame.com/images/parallax/parallax7.png",pr: 0}
    ]

    return (
        <>
            <section id="wrapper" style={{backgroundColor: '#FFAF1B'}}>
                <section id="parallax">
                    {
                        array.map(a => {
                            return (
                                <div style={{backgroundImage: `url(${a.url})`, transform: `translateY(${scrollY*a.pr}px)`, height: 1000}} className={styles.foo}/>
                            )
                        })
                    }
                </section>
                <section id="site" style={{position: 'relative', paddingTop: 1000}}>
                </section>
            </section>
        </>
    )
}
