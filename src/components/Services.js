import React from 'react'
import { Link } from 'gatsby'
import { IoBonfireSharp, IoCloudDownloadSharp, IoPhonePortrait, IoSearchCircleSharp } from "react-icons/io5"

const Services = () => {
    return (
        <section className="pt-16 pb-20 bg-blueGray-50"><div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center mb-12">
                <div className="w-full">
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">弊社の強み</span>
                    <h2 className="lg:text-4xl text-3xl font-bold font-heading">
                        <span>SaaSEOは</span>
                        <span className="text-blue-600">集客ができて結果に繋がる</span>
                        <span>ホームページ制作のためにこんな工夫をしています</span>
                    </h2>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6">
                <Link to="/seo" className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                    <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow transform hover:-translate-y-1 duration-200 hover:shadow-xl">
                        <IoSearchCircleSharp className="mx-auto mb-4 h-10 w-10 text-blue-600" />
                        <h3 className="mb-2 font-bold font-heading">徹底したSEO対策</h3>
                        <p className="text-sm text-blueGray-400">SEOの基本的な考え方、重要要素、具体的な方法と手順</p>
                    </div>
                </Link>
                <Link to="/responsive" className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                    <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow transform hover:-translate-y-1 duration-200 hover:shadow-xl">
                        <IoPhonePortrait className="mx-auto mb-4 h-10 w-10 text-blue-600" />
                        <h3 className="mb-2 font-bold font-heading">フルレスポンシブ対応</h3>
                        <p className="text-sm text-blueGray-400">スマホ対応の重要性、おすすめの技術紹介、手順から知る費用感</p>
                    </div>
                </Link>
                <Link to="/saas" className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                    <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow transform hover:-translate-y-1 duration-200 hover:shadow-xl">
                        <IoCloudDownloadSharp className="mx-auto mb-4 h-10 w-10 text-blue-600" />
                        <h3 className="mb-2 font-bold font-heading">SaaS導入</h3>
                        <p className="text-sm text-blueGray-400">SaaSの概要、知っておくべき特徴、導入手順</p>
                    </div>
                </Link>
                <Link to="/blazing-fast" className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                    <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow transform hover:-translate-y-1 duration-200 hover:shadow-xl">
                        <IoBonfireSharp className="mx-auto mb-4 h-10 w-10 text-blue-600" />
                        <h3 className="mb-2 font-bold font-heading">爆速サイト実現</h3>
                        <p className="text-sm text-blueGray-400">サイトスピードが引き起こす問題、重要要因、具体的な実現方法</p>
                    </div>
                </Link>
            </div>
        </div>
        </section>
    )
}

export default Services
