import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Logo from "../assets/images/Logo_SaaSEO.svg"

const Footer = () => {
    return (
        <section className="py-16 bg-blueGray-800"><div className="container px-4 mx-auto">
            <div className="flex flex-col mb-10">
                <Link className="mx-auto mb-4" to="/">
                    <Logo className="h-16" />
                </Link>
                <ul className="py-2 flex lg:flex-row items-center justify-center space-x-12 text-white">
                    <li><Link className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/">ホーム</Link></li>
                    <li><Link className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/">初めての方へ</Link></li>
                </ul>
                <ul className="py-2 flex lg:flex-row items-center justify-center space-x-12 text-white">
                    <li><Link className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/">SEO対策</Link></li>
                    <li><Link className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/">スマホ対応</Link></li>
                    <li><Link className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/">SaaS導入</Link></li>
                    <li><Link className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/">爆速サイト</Link></li>

                </ul>
                <ul className="py-2 flex lg:flex-row items-center justify-center space-x-12 text-white">
                    <li><Link className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/">会社案内</Link></li>
                    <li><Link className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/">お問い合わせ</Link></li>
                    <li><Link className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/">見積り依頼</Link></li>
                </ul></div>
            <div className="flex flex-col items-center">
                <p className="text-blueGray-400">©SaaSEO LLC {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </div>
        </section>
    )
}

export default Footer
