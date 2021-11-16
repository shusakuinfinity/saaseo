import React from 'react'
import Layout from '../components/Layout'

const contact = () => {
    return (
        <Layout>
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="max-w-md mb-8 mx-auto">
                            <h2 className="mt-2 text-4xl font-bold font-heading">見積り依頼</h2>
                            <span className="text-sm text-blueGray-400">1～3営業日以内に、担当よりメールにて返信させていただきます</span>
                        </div>
                        <div>
                            <form name="contact" method="POST" data-netlify="true">
                                <div className="mb-6">
                                    <input className="peer w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="名前" />
                                </div>
                                <div className="mb-6">
                                    <input className="w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="会社名・店舗名" />
                                </div>
                                <div className="mb-6">
                                    <input className="w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="メールアドレス" />
                                </div>
                                <div className="mb-6">
                                    <select className="w-full p-4 font-semibold leading-none bg-blueGray-50 rounded outline-none">
                                        <option value="mc">新しいウェブサイト制作</option>
                                        <option value="amex">既存サイトの改善</option>
                                        <option value="mc">相談して決めたい</option>
                                        <option value="mc">その他</option>
                                    </select>
                                </div>
                                <div className="mb-6"><textarea className="w-full h-48 p-4 leading-none bg-blueGray-50 rounded outline-none resize-y" type="text" placeholder="お問い合わせ内容詳細" style={{ marginTop: '0px', marginBottom: '0px', height: '360px' }} defaultValue={""} /></div>
                                <div className="flex justify-between items-center">
                                    <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" type="submit">送信する</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default contact
