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
                <section className="p-2">
                    <a>
                        hello! this is a test site that i am using to test <br/>
                        parallax utilizing nextjs!<br/>
                        if you would like to see the repository <br/>
                        for this website
                        <a href="https://github.com/Naatchi/miaGithub.io" className="text-blue-600 hover:underline"> click here! </a> <br/>
                        none of this art belongs to me i am just using it <br/>
                        for testing right now and it will be phased out soon <br/>
                    </a>
                </section>
                <section id="parallax">
                    {
                        array.map(a => {
                            return (
                                <div
                                    style={{
                                        backgroundImage: `url(${a.url})`,
                                        transform: `translateY(${scrollY*a.pr}px)`,
                                        backgroundSize: 'auto 1000px',
                                        backgroundRepeat:'repeat-x',
                                        width: '100%',
                                        position: 'absolute',
                                        backgroundPosition: 'bottom center',
                                        height: '1000px'
                                    }}
                                />
                            )
                        })
                    }
                </section>
                <section id="site">
                    <section id="abyss-1" style={{height: 2000, paddingTop: 1000}}>
                        <div id="bg-container" className="relative h-screen" style={{backgroundColor: '#280003'}}>
                            <div id="text-container" className="text-6xl text-white">
                                {`ScrollY-raw-val: ${scrollY}`}
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}
