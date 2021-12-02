import React from 'react'
import { Link } from 'gatsby'
import Logo from "../assets/images/Logo_SaaSEO.svg"

const Footer = () => {
    return (
        <section className="py-16 bg-blueGray-800"><div className="container px-4 mx-auto">
            <div className="flex flex-col mb-10">
                <Link className="mx-auto mb-4" to="/">
                    <Logo className="h-16" />
                </Link>
                <ul className="py-2 flex lg:flex-row items-center justify-center space-x-12 text-white">
                    <li><Link activeClassName="text-blueGray-400" className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/">ホーム</Link></li>
                    <li><Link activeClassName="text-blueGray-400" className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/first-timer">初めての方へ</Link></li>
                </ul>
                <ul className="py-2 flex lg:flex-row items-center justify-center space-x-12 text-white">
                    <li><Link activeClassName="text-blueGray-400" className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/seo">SEO対策</Link></li>
                    <li><Link activeClassName="text-blueGray-400" className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/responsive">スマホ対応</Link></li>
                    <li><Link activeClassName="text-blueGray-400" className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/saas">SaaS導入</Link></li>
                    <li><Link activeClassName="text-blueGray-400" className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/blazing-fast">爆速サイト</Link></li>

                </ul>
                <ul className="py-2 flex lg:flex-row items-center justify-center space-x-12 text-white">
                    <li><Link activeClassName="text-blueGray-400" className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/subsidy">補助金について</Link></li>
                    <li><Link activeClassName="text-blueGray-400" className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/about-us">会社案内</Link></li>
                    <li><Link activeClassName="text-blueGray-400" className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/contact">お問い合わせ</Link></li>
                    <li><Link activeClassName="text-blueGray-400" className="font-bold font-heading hover:text-yellow-200 duration-200 transition text-sm md:text-lg" to="/quotation">見積り依頼</Link></li>
                </ul>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-blueGray-400">©SaaSEO LLC {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </div>
        </section>
    )
}

export default Footer
