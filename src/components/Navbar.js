import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import WhiteLogo from "../assets/images/Logo_SaaSEO.svg"
import { CgMenuGridR } from 'react-icons/cg'

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="sticky top-0 z-40">
            <section className="bg-blueGray-800"><div className="container px-4 mx-auto">
                <nav className="flex justify-between items-center lg:py-4 py-3">
                    <Link className="" to="/">
                        <WhiteLogo className="h-10 -my-4" />
                    </Link>
                    <div className="lg:hidden">
                        <button className="navbar-burger flex items-center px-3 text-white transition duration hover:text-yellow-200" onClick={() => { setShow(!show) }}>
                            <CgMenuGridR className="h-8 w-8" />
                        </button>
                    </div>
                    <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                        <li><Link activeClassName="text-blueGray-400" className="text-sm duration-200 transition text-white hover:text-yellow-200" to="/first-timer">初めての方へ</Link></li>
                        <li><Link activeClassName="text-blueGray-400" className="text-sm duration-200 transition text-white hover:text-yellow-200" to="/seo">SEO対策</Link></li>
                        <li><Link activeClassName="text-blueGray-400" className="text-sm duration-200 transition text-white hover:text-yellow-200" to="/responsive">スマホ対応</Link></li>
                        <li><Link activeClassName="text-blueGray-400" className="text-sm duration-200 transition text-white hover:text-yellow-200" to="/saas">SaaS導入</Link></li>
                        <li><Link activeClassName="text-blueGray-400" className="text-sm duration-200 transition text-white hover:text-yellow-200" to="/blazing-fast">爆速サイト</Link></li>
                    </ul><div className="hidden lg:block"><Link className="mr-2 inline-block px-4 py-3 text-xs font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/quotation">見積り依頼</Link><Link className="inline-block px-4 py-3 text-xs font-semibold leading-none text-blueGray-500 hover:text-blueGray-600 text-center bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/contact">お問い合わせ</Link></div>
                </nav>
                <div className={show ? "navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50" : "hidden"}>
                    <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25" onClick={() => { setShow(!show) }}></div>
                    <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto"><div className="flex items-center mb-8">
                        <Link className="" to="/">
                            <StaticImage src="../assets/images/logo_SaaSEO_black.svg" alt="岡崎市のWeb制作会社SaaSEO 黒ロゴ" />
                        </Link>
                        <button onClick={() => { setShow(!show) }} className="navbar-close">
                            <svg className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                        <div>
                            <ul><li className="mb-1"><Link className="block p-4 text-sm text-blueGray-500 hover:bg-yellow-50 hover:text-yellow-600" to="/first-timer">初めての方へ</Link></li>
                                <li className="mb-1"><Link className="block p-4 text-sm text-blueGray-500 hover:bg-yellow-50 hover:text-yellow-600" to="/seo">SEO対策</Link></li>
                                <li className="mb-1"><Link className="block p-4 text-sm text-blueGray-500 hover:bg-yellow-50 hover:text-yellow-600" to="/responsive">スマホ対応</Link></li>
                                <li className="mb-1"><Link className="block p-4 text-sm text-blueGray-500 hover:bg-yellow-50 hover:text-yellow-600" to="/saas">SaaS導入</Link></li>
                                <li className="mb-1"><Link className="block p-4 text-sm text-blueGray-500 hover:bg-yellow-50 hover:text-yellow-600" to="/blazing-fast">爆速サイト</Link></li>
                                <li className="mb-1"><Link className="block p-4 text-sm text-blueGray-500 hover:bg-yellow-50 hover:text-yellow-600" to="/about-us">会社案内</Link></li>
                            </ul><div className="mt-4 pt-6 border-t border-blueGray-100"><Link className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" to="/contact">お問い合わせ</Link><Link className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" to="/quotation">見積り依頼</Link></div>
                        </div>
                        <div className="mt-auto">
                            <p className="my-4 text-xs text-blueGray-400">
                                <span>Email: </span>
                                <a className="text-blue-600 hover:text-blue-600 underline" href="mailto:contact@saaseo.com">contact@saaseo.com</a>
                            </p>
                        </div>
                    </nav>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Navbar
