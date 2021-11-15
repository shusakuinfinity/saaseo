import React from 'react'
import { Link } from 'gatsby'

const CtaWhite = () => {
    return (
        <section className="pb-8 -mt-4 bg-white">
            <div className="container px-4 mx-auto">
                <div className="max-w-lg mx-auto text-center">
                    <p className="text-blueGray-400 leading-relaxed mb-4">SaaSEOに相談したい方はこちら</p>
                    <div className="">
                        <Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/contact">お問い合わせする</Link>
                        <Link className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/quotation">見積り依頼をする</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaWhite
