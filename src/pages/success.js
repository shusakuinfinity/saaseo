import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const Success = () => {
    return (
        <Layout>
            <section className="py-16 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg mx-auto text-center">
                        <span className="inline-block py-1 px-3 text-xs md:text-sm rounded-xl bg-blue-50 text-blue-600 font-semibold">この度は誠にありがとうございます</span>
                        <h1 className="my-3 text-3xl md:text-4xl font-bold font-heading text-blueGray-900">内容が無事送信されました</h1>
                        <p className="text-blueGray-400 leading-relaxed">1-3営業日以内にメールにてご返信致します。メールアドレスの打ち間違い等で返信ができない可能性がございますので、返信が来ていない場合はお手数をおかけしますが<span className="text-blue-600"><a href="mailto:contact@saaseo.dev">contact@saaseo.dev</a></span>までご連絡ください。</p>
                        <div className="py-8">
                            <Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/">トップへ戻る</Link>
                            <Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/contact">お問い合わせ</Link>
                            <Link className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/quotation">見積り依頼</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Success
