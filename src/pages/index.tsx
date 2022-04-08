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
                    <a className="text-black">
                        hello! this is a test site that i am using to test <br/>
                        parallax utilizing nextjs!<br/>
                        if you would like to see the repository <br/>
                        for this website
                        <a href="https://github.com/Naatchi/miaGithub.io" className="text-blue-600 hover:underline" title="source-code"> click here! </a> <br/>
                        all art belongs to <a href="https://www.camposanto.com/" className="text-blue-600 hover:underline" title="Campo-santo's website!"> campo santo </a> and <br/>
                        comes directly from <a href="https://www.firewatchgame.com/" className="text-blue-600 hover:underline" title="firewatch game website!"> the firewatchgame website </a>
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
                                        height: '1000px',
                                    }}
                                />
                            )
                        })
                    }
                </section>
                <section id="site">
                    <section id="abyss-1" style={{height: 2000, paddingTop: 1000}}>
                        <div id="bg-container" className="relative h-screen" style={{backgroundColor: '#280003', paddingBottom: 2546}}>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}
