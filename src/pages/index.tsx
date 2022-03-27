import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '../hooks/auth'
import style from '../styles/styles.module.css'
import waves from "../components/wave/waves";
import Waves from "../components/wave/waves";

export default function Home() {
    const { user } = useAuth({ middleware: 'guest', redirectIfAuthenticated: false })

    // @ts-ignore
    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>
            <section id="start" className="bg-gray-900">
                <div id="spacing" className="h-36"/>
                <div className="grid place-items-center h-screen text-white">
                    <div>
                        <a className="align-middle">
                            i love fornite
                        </a>
                        <img src='https://media.giphy.com/media/SG5paY6WxH6Ki2lWys/giphy.gif' />
                    </div>
                    <div>
                        <img src='/images/icons/peaks-newres.svg' className=" w-screen overflow-hidden"/>
                        <section style={{backgroundColor: '#6F1303'}}>
                            this is a section
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
