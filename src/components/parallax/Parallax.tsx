import {useEffect, useState} from "react";

const Parallax = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY)
        })
    })

    const array = [
        1, 0.875, 0.75, 0.625, 0.5, 0.375, 0.25, 0.125, 0
    ]

    return (
        <>
            {array.map((a, i) => {
                return (
                    <div
                        data-speed={a}
                        id={"parallax" + i}
                        key={i}
                        className={"parallax"}
                        style={{transform: `translateY(${scrollY*a}px)`}}
                    />
                )
            })}
        </>

    )
}

export default Parallax