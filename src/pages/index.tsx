import {useEffect, useState} from "react";
import Parallax from "../components/parallax/Parallax";

export default function Home() {
    return (
        <>
            <div id={"wrapper"}>
                <section id={"Parallax"} style={{backgroundColor: '#FFAF1B', height: 1030}}>
                    <Parallax/>
                </section>
                <section id={"content"} style={{backgroundColor: '#210002', position: 'relative'}}>
                    <div id={"text"} className="h-screen px-6 text-white text-md">
                        hello! this is a test site utilizing next.js and react for testing parallax.<br/>
                        all art belongs to <a href={"https://www.camposanto.com"} className={"text-blue-600 text:md hover:underline"}> campo stanto </a> and the <a href={"https://www.firewatchgame.com"} className={"text-blue-600 text:md hover:underline"}> firewatch team</a><br/>
                        <br/>
                        if you want to check out the repository for this website <a href={"https://github.com/Naatchi/miaGithub.io"} className={"text-blue-600 text:md hover:underline"}> click here! </a><br/>
                        <br/>
                        reverse engineered with love 💕
                    </div>
                </section>
            </div>
        </>
    )
}
