import {useEffect, useState} from "react";
console.log('import complete?')


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

    const array = [ //FFAF1B 210002
        {url: "https://www.firewatchgame.com/images/parallax/parallax0.png",pr: 1.00},
        {url: "https://www.firewatchgame.com/images/parallax/parallax1.png", pr: 0.875},
        {url: "https://www.firewatchgame.com/images/parallax/parallax2.png",pr: 0.75},
        {url: "https://www.firewatchgame.com/images/parallax/parallax3.png",pr: 0.625},
        {url: "https://www.firewatchgame.com/images/parallax/parallax4.png",pr: 0.5},
        {url: "https://www.firewatchgame.com/images/parallax/parallax5.png",pr: 0.375},
        {url: "https://www.firewatchgame.com/images/parallax/parallax6.png",pr: 0.25},
        {url: "https://www.firewatchgame.com/images/parallax/parallax7.png",pr: 0.125},
        {url: "https://www.firewatchgame.com/images/parallax/parallax8.png", pr: 0}
    ]

    return (
        <>
            <section style={{backgroundColor: '#FFAF1B', height: 1030}}>
                {
                    array.map(a => {
                        return (
                            <div
                                key={a.url}
                                className="bg-center bg-cover absolute"
                                style={{
                                    //transform: `translateY(${scrollY* a.pr}px)`,
                                    backgroundImage: `url(${a.url})`,
                                    backgroundPositionY: scrollY * a.pr,
                                    backgroundRepeat:'repeat-x',
                                    position: 'absolute',
                                    width: '100%',
                                    height: 1030,
                                    //transition: 'all 0.8s ease-in'
                                }}
                            />
                        )
                    })
                }
            </section>
            <section style={{backgroundColor: '#210002', position:"relative"}}>
                <div className="h-screen lg:px-96 sm:px-6 text-white text-md">
                    Hello! this is a site for testing parallax <br/>
                    utilizing nextjs and react <br/>
                    all art belongs to <a className="text-blue-500 hover:underline" href="https://www.camposanto.com/" title="https://www.camposanto.com/"> campo santo</a> <br/>
                    and the <a className="text-blue-500 hover:underline" href="https://www.firewatchgame.com/" title="https://www.firewatchgame.com/"> firewatch team </a> <br/>
                    <br/>
                    if you would like to check out <br/>
                    the source code you <br/>
                    can find it on this <a className="text-blue-500 hover:underline" href="https://github.com/Naatchi/miaGithub.io" title="https://github.com/Naatchi/miaGithub.io"> repository </a> <br/>
                    <br/>
                    reverse engineered with love 💕
                </div>
            </section>
        </>
    )
}
