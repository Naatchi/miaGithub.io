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
                        reverse engineered with love 💕
                    </div>
                </section>
            </div>
        </>
    )
}
