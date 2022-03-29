import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '../hooks/auth'
import ApplicationLogo from "../components/ApplicationLogo";

export default function Home() {
    // const { user } = useAuth({ middleware: 'guest', redirectIfAuthenticated: false })
    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>
            <section id="wrapper" className="bg-gray-900">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center h-screen">
                        <a className="text-6xl text-white font-semibold"> Text :) </a>
                    </div>
                </div>
            </section>
        </>
    )
}
