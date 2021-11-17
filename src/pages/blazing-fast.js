import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Blob from '../assets/icons/blob-tear.svg'
import CtaWhite from '../components/CtaWhite'
import CtaBlack from '../components/CtaBlack'
import Services from '../components/Services'
import { IoGlobeSharp, IoImageSharp, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5'
import { Link } from 'gatsby'
import SvgGatsby from '../assets/images/Gatsby-Monogram.svg'

const BlazingFast = () => {
    return (
        <Layout>
            <GatsbySeo
                title="サイトスピード改善ならSaaSEO - 爆速サイト制作の方法を公開中"
                description="「Webサイトのローディング時間が長くて見にくい、SEO的にも弱くてなんとかしたい」という方へ。SaaSEOが使用するWeb制作技術のJamstackを使えばPage Speed Insightでも満点に近い数字を叩き出せる超高速ウェブサイト、爆速サイトの制作が可能です。無料でのWeb制作ご相談も承ります。"
            />

            <section className="py-12 overflow-x-hidden bg-blueGray-800"><div className="container px-4 mx-auto">
                <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap">
                    <div className="w-full lg:w-1/2">
                        <div className="py-6 lg:pr-32 md:pr-10">
                            <div className="mb-4 text-center md:text-left">
                                <h1>
                                    <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">爆速サイト制作でサイトスピード改善！</span>
                                </h1>
                                <h2 className="text-4xl mt-3 font-bold font-heading text-white">爆速サイトに興味がある方へ</h2>
                            </div>
                            <div className="flex items-start py-4">
                                <div className="w-8 mr-5 text-blue-500">
                                    <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold font-heading text-white">ロード時間が長いサイト4つの問題</h3>
                                    <p className="text-blueGray-400 leading-loose">なぜサイトスピードは重要なのか？</p>
                                </div>
                            </div>
                            <div className="flex items-start py-4">
                                <div className="w-8 mr-5 text-blue-500">
                                    <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold font-heading text-white">サイトスピードに関わる重要要因</h3>
                                    <p className="text-blueGray-400 leading-loose">何がサイトを遅くしているのか？</p>
                                </div>
                            </div>
                            <div className="flex items-start py-4">
                                <div className="w-8 mr-5 text-blue-500">
                                    <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg></div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold font-heading text-white">SaaSEOの爆速サイト制作方法</h3>
                                    <p className="text-blueGray-400 leading-loose">具体的にどうするのか？</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                        <StaticImage className="relative mx-auto rounded-xl w-full z-10" src="../assets/images/fast.jpeg" placeholder="blurred" alt="愛知県で高速・爆速なサイトを作るならSaaSEO" />
                        <Blob className="absolute top-0 left-0 -ml-12 -mt-12 w-20" />
                        <Blob className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" />
                    </div>
                </div>
            </div>
            </section>

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg mx-auto mb-12 text-center">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">ロード時間が長いサイト4つの問題</span>
                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">もしあなたがユーザーなら、ロード時間が長いサイトに我慢できますか？</h2>
                        <p className="text-blueGray-400 leading-loose">そもそも、ウェブサイトが速くて困るという理由は全くありません。長くても2秒、Google的には0.5秒以内にローディングされるサイトを理想としています。ここでは一般的なユーザーはどれぐらい我慢できていないのか、そしてどんな問題が起こるのかを紹介します。</p>
                    </div>
                    <div className="flex flex-wrap -mx-3 -mb-12 text-center md:text-left">
                        <div className="lg:w-1/2 flex flex-col md:flex-row px-3 mb-12 mx-auto">
                            <StaticImage className=" rounded mx-auto md:w-192" src="../assets/images/giveUP.jpeg" alt="サイト 遅い ユーザー離脱" /><div className="pt-6 md:pt-2 md:pl-6">
                                <p className>問題1</p>
                                <p className="my-2 text-blue-600 text-xl">ページを開くことを諦める</p>
                                <ul className="list-disc pl-4"><li className="leading-relaxed text-blueGray-400">3秒のロード時間がかかった場合、スマホユーザーの53％が離脱する</li>
                                    <li className="leading-relaxed text-blueGray-400">6秒のロード時間がかかった場合、よっぽどそのサイトに興味がない限りほぼ全てのユーザーが諦めて”戻る”ボタンを押す</li>
                                </ul></div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col md:flex-row px-3 mb-12 mx-auto">
                            <StaticImage className=" rounded mx-auto md:w-192" src="../assets/images/decreaseUser.jpeg" alt="サイト 遅い ユーザー 減る" /><div className="pt-6 md:pt-2 md:pl-6">
                                <p className>問題2</p>
                                <p className="my-2 text-blue-600 text-xl">ユーザーが徐々に減ってしまう</p>
                                <ul className="list-disc pl-4"><li className="leading-relaxed text-blueGray-400">4秒以上のロード時間がかかった場合人々は”遅いサイト”という印象を記憶して再訪問を避ける</li>
                                    <li className="leading-relaxed text-blueGray-400">ロード時間の長いサイトを友人や家族におすすめするより、悪い印象を共有してしまうことが多い</li>
                                </ul></div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col md:flex-row px-3 mb-12 mx-auto">
                            <StaticImage className=" rounded mx-auto md:w-192" src="../assets/images/decreaseCrawl.jpeg" alt="サイト 遅い コンテンツ見られない 行動減少する" /><div className="pt-6 md:pt-2 md:pl-6">
                                <p className>問題3</p>
                                <p className="my-2 text-blue-600 text-xl">サイト上の行動が減少する</p>
                                <ul className="list-disc pl-4"><li className="leading-relaxed text-blueGray-400">0.1秒のロード時間改善ごとに、1.11％多くページの内容が読まれる。遅いサイトは反比例して読まれなくなる</li>
                                    <li className="leading-relaxed text-blueGray-400">ECサイトの場合、サイトが遅いという理由だけで14％の人々が別サイトに移行し、23％の人がショッピングをやめる</li>
                                </ul></div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col md:flex-row px-3 mb-12 mx-auto">
                            <StaticImage className=" rounded mx-auto md:w-192" src="../assets/images/lowerSEO.jpeg" alt="サイト 遅い SEO 下がる" /><div className="pt-6 md:pt-2 md:pl-6">
                                <p className>問題4</p>
                                <p className="my-2 text-blue-600 text-xl">Googleの低評価に繋がりSEO負けする</p>
                                <ul className="list-disc pl-4"><li className="leading-relaxed text-blueGray-400">公式の情報で遅いサイトはサイト品質が低いとみなされて上位表示がされにくくなる</li>
                                    <li className="leading-relaxed text-blueGray-400">全体のロード時間平均は3.21秒。0.5-1秒の爆速サイトはSEO的にほぼ勝てる</li>
                                    <li className="leading-relaxed text-blueGray-400">遅いサイトはGoogleのランキング評価プログラム（=クローラー）が上手く機能しなかったり、評価頻度が下がる</li>
                                </ul></div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaWhite />

            <section className="pt-16 pb-20 bg-blueGray-50">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center mb-12">
                        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">サイトスピードに関わる重要要因</span>
                            <h2 className="text-4xl font-bold font-heading">
                                <span>爆速なサイトスピードは</span>
                                <span className="text-blue-600">通信量を下げる工夫で</span>
                                <span>実現される</span>
                            </h2>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <p className="lg:pl-16 text-blueGray-400 leading-loose">サイトスピードはサーバーが問題だとか、サイトの作りが問題だとか、人によって言うことは様々かもしれませんが、究極的にはやり取りされるデータをあらゆる形で最適化してあげることが解決策になります。その中でも特に重要な4つを紹介します。</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 -mb-6">
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                                <IoImageSharp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                                <h3 className="mb-2 font-bold font-heading">画像・写真のサイズ</h3>
                                <p className="text-sm text-blueGray-400">LINE等で画像や動画を送るのに時間がかかったことはありませんか？そう、画像1枚でもウェブサイトの他のデータに匹敵するぐらい大きなファイルサイズを占めるということは現実的によくあります。そのため、画像圧縮技術を使っていないウェブサイトは、ほぼ確実に遅いサイトになってしまいます。</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                                <IoLogoJavascript className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                                <h3 className="mb-2 font-bold font-heading">不要なJavascript</h3>
                                <p className="text-sm text-blueGray-400">馴染みのない言葉かもしれませんが、これこそインターネットの発展とともに培われてきた遺産です。Javascriptはアプリのようなもので、多くのWebサイトに使用されていますが、無駄に多くのJavascriptを使用すると、そのアプリ実行に時間がかかり、サイトスピードが遅くなってしまいます。</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                                <IoLogoCss3 className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                                <h3 className="mb-2 font-bold font-heading">CSS, Javascriptのサイズ</h3>
                                <p className="text-sm text-blueGray-400">CSSはウェブサイトのデザインを司る技術ですが、書き方や技術の使い方で大きな差が生まれます。Javascriptも同様で、ホームページ制作会社の使う技術やコーディング力一つでウェブサイトのスピードが左右されてしまうのです。</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                            <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                                <IoGlobeSharp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                                <h3 className="mb-2 font-bold font-heading">CDNの未使用</h3>
                                <p className="text-sm text-blueGray-400">いわゆるサーバーに関することですが、現代ではCDN（コンテンツデリバリーネットワーク）と呼ばれる爆速サーバー環境が構築可能です。CDNを利用していない場合、サーバー場所や品質に大きく左右されるため、必然的にサイトスピードが遅くなります。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="pt-20 pb-24 px-8 md:px-16 rounded bg-yellow-50">
                        <div className="flex flex-wrap -mx-8">
                            <div className="w-full lg:w-1/2 px-8 flex">
                                <div className="my-auto">
                                    <span className="text-xs py-1 px-3 text-yellow-500 font-semibold bg-yellow-100 rounded-xl">SaaSEOの爆速サイト制作方法</span>
                                    <h2 className="text-3xl lg:text-4xl font-semibold">Jamstackでウェブサイトを制作します</h2>
                                    <p className="mt-2 mb-6 leading-loose text-blueGray-400">なにそれ？という方は多いかもしれませんが、2016年より徐々に流行り始めた新しいウェブサイトの制作方法です。当社は特にGatsbyという技術を優先的に使用しており、豊富な便利機能によって画像のサイズが全て極小サイズまで縮小したり、CDNから直接のウェブサイト配信を可能にしています。</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-8 mt-8 lg:mt-0">
                                <div className="relative max-w-sm sm:max-w-md mx-auto">
                                    <SvgGatsby className="relative mx-auto lg:pt-16" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center pt-8">
                            <Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/contact">お問い合わせする</Link>
                            <Link className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/quotation">見積り依頼をする</Link>
                        </div>
                    </div>
                </div>
            </section>

            <CtaBlack />
            <Services />

        </Layout>
    )
}

export default BlazingFast
