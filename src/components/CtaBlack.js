import React from 'react'
import { Link } from 'gatsby'

const CtaBlack = () => {
    return (
        <div>
            <section className="py-16 bg-blueGray-800">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg mx-auto text-center">
                        <span className="inline-block py-1 px-3 text-xs md:text-sm rounded-xl bg-blue-50 text-blue-600 font-semibold">ご相談内容に応じて柔軟な対応をいたします</span>
                        <h2 className="my-3 text-3xl md:text-4xl font-bold font-heading text-white">SaaSEOに相談してみたい！という方はこちらから</h2>
                        <p className="text-blueGray-400 leading-relaxed">無料でのご相談・見積り依頼を承っております</p>
                        <div className="py-8">
                            <Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/contact">お問い合わせする</Link>
                            <Link className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/quotation">見積り依頼をする</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default CtaBlack
