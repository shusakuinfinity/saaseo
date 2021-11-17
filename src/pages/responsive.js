import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Blob from '../assets/icons/blob-tear.svg'
import CtaWhite from '../components/CtaWhite'
import TailwindImage from '../assets/images/tailwindcss.svg'
import CtaBlack from '../components/CtaBlack'
import Services from '../components/Services'
import { Link } from 'gatsby'

const Responsive = () => {
    return (
        <Layout>
            <GatsbySeo
                title="スマホ対応のホームページ制作会社【SaaSEO】方法、費用の考え方公開"
                description="スマホ対応、レスポンシブ化を完璧に行うには、Web制作の方法から見直す必要があります。しかし、その方法さえ知っていれば工数はより少なく、より確実に行うことができるようになります。本ページではその方法、制作にかかる費用感などを解説しています。"
            />

            <section className="py-12 overflow-x-hidden bg-blueGray-800">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap">
                        <div className="w-full lg:w-1/2">
                            <div className="py-6 lg:pr-32 md:pr-10">
                                <div className="mb-4 text-center md:text-left">
                                    <h1>
                                        <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">レスポンシブ化/スマホ対応の制作会社が解説！</span>
                                    </h1>
                                    <h2 className="text-4xl mt-3 font-bold font-heading text-white">スマホ対応/レスポンシブ化が完璧なホームページが作りたい方へ</h2>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">スマホ対応/レスポンシブ化の原理</h3>
                                        <p className="text-blueGray-400 leading-loose">どうしたらウェブサイトがレスポンシブ化するのか？</p>
                                    </div>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">スマホ対応サイトのベストな作り方</h3>
                                        <p className="text-blueGray-400 leading-loose">魔法の技術とは？</p>
                                    </div>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">完璧なレスポンシブ化の費用を知る</h3>
                                        <p className="text-blueGray-400 leading-loose">一般の制作手順は費用も3倍？</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                            <StaticImage className="relative mx-auto rounded-xl w-full z-10" src="../assets/images/responsiveDesign.jpg" placeholder="blurred" alt="岡崎市のレスポンシブ対応ウェブサイト制作会社" />
                            <Blob className="absolute top-0 left-0 -ml-12 -mt-12 w-20" />
                            <Blob className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 px-4 mt-12 md:mt-0 order-last md:order-first">
                            <div className="flex flex-row order-last md:order-first justify-center">
                                <div className="relative">
                                    <StaticImage className="relative mx-auto hidden rounded-lg md:block" src="../assets/images/developer.jpg" alt="スマホ対応のウェブサイト開発" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 px-4 lg:max-w-lg">
                            <div className="flex h-full">
                                <div className="my-auto">
                                    <div className="mb-8">
                                        <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">スマホ対応/レスポンシブ化の原理</span>
                                        <h2 className="mb-6 text-3xl md:text-4xl font-bold font-heading">完璧なレスポンシブウェブサイトは3サイト同時制作</h2>
                                        <p className="leading-loose text-blueGray-400">まさか？と信じられないかもしれませんが、これがスマホ対応やタブレット対応できているサイトの真実です。もしPCとスマホだけ対応したい、ということであれば2つのサイトを同時制作するのです。ただ、文章等の内容は変わらないはずなので、厳密に言えば3つのデザインを興し、3種類のコードを書くことで、端末やスクリーンサイズに合わせてサイトの表現を行っています。この煩雑性が理由でレスポンシブ対応が上手なWeb制作会社と適当なWeb制作会社が存在してくるのです。SaaSEOではこの煩雑性を低減しつつ、完璧なレスポンシブ化を行うための技術を盛り込んで制作しているので、本サイトのような完璧なレスポンシブ化が容易に可能となっています。</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="relative w-2/5">
                                            <StaticImage className="rounded-lg" src="../assets/images/woman_responsive.jpeg" alt="スマホで見やすいウェブサイト制作会社" /></div>
                                        <div className="ml-8 w-3/5">
                                            <p className="text-blueGray-400 leading-relaxed">スマホでもタブレットでも見やすいサイト最高〜</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaWhite />

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="pt-20 pb-24 px-8 md:px-16 rounded bg-yellow-50">
                        <div className="flex flex-wrap -mx-8">
                            <div className="w-full lg:w-1/2 px-8 flex">
                                <div className="my-auto">
                                    <span className="text-xs py-1 px-3 text-yellow-500 font-semibold bg-yellow-100 rounded-xl">スマホ対応サイトのベストな作り方</span>
                                    <h2 className="text-3xl lg:text-4xl font-semibold">フルレスポンシブなWebサイトを作る魔法のCSS</h2>
                                    <p className="mt-2 mb-6 leading-loose text-blueGray-400">SaaSEOのウェブ制作で採用しているTailwind CSSは、スマホ対応のホームページ、フルレスポンシブのウェブサイトを作る上での一つの最適解だと考えています（＊CSSはコードによってウェブサイトのデザインを作り上げる技術）。テイルウインドはレスポンシブ化に強い設計で素早く正確に制作が行える上、どんな端末に対しても最適なレイアウトでウェブサイトを表現できることが特徴です。また、サイト自体のスピードも上がるため、SaaSEOの考える”SEOに強くて内容がわかりやすいWebサイトを作る”という理念に合致した技術です。</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-8">
                                <div className="relative max-w-sm sm:max-w-md mx-auto">
                                    <TailwindImage className="relative mx-auto lg:pt-16" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center pt-8">
                            <Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/contact">お問い合わせする</Link>
                            <Link className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="quotation">見積り依頼をする</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg mx-auto mb-16 text-center">
                        <span className="inline-block px-3 py-2 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full uppercase">完璧なレスポンシブ化の費用を知る</span>
                        <h2 className="mt-4 mb-2 text-3xl lg:text-4xl font-bold font-heading">
                            <span>一般的な手順と</span>
                            <span className="text-blue-600">SaaSEOの手順</span>
                            <span>の比較で理解する費用感</span>
                        </h2>
                        <p className="text-blueGray-400 leading-loose">結果にこだわるWeb制作会社SaaSEOが速く・正確に・比較的安価で完全スマホ対応したサイトを制作できる理由を公開。</p>
                    </div>
                    <h3 className="pb-4 text-center text-blueGray-600 font-bold text-2xl">一般的なWeb制作会社の場合</h3>
                    <div className="flex relative">
                        <div className="hidden md:flex absolute inset-0 -mt-24 px-16 items-center justify-center max-w-4xl mx-auto">
                            <div className="w-full py-1 shadow" />
                        </div>
                        <div className="flex flex-wrap justify-between w-full">
                            <div className="w-1/2 md:w-1/4 z-10 mb-12 group">
                                <div className="flex w-20 h-20 mx-auto items-center justify-center shadow bg-white rounded-full">
                                    <div className="flex w-16 h-16 mx-auto items-center justify-center font-semibold rounded-full text-blueGray-400 bg-blueGray-50 transition duration-200 group-hover:bg-blue-600 group-hover:text-white">1</div>
                                </div>
                                <p className="mt-6 text-base lg:text-lg font-bold font-heading text-center text-blueGray-400 group-hover:text-blueGray-600 transition duration-200 px-2">3通りのレイアウト草案（ワイヤーフレーム）作成</p>
                            </div>
                            <div className="w-1/2 md:w-1/4 z-10 mb-12 group">
                                <div className="flex w-20 h-20 mx-auto items-center justify-center shadow bg-white rounded-full">
                                    <div className="flex w-16 h-16 mx-auto items-center justify-center text-blueGray-400 font-semibold bg-blueGray-50 rounded-full transition duration-200 group-hover:bg-blue-600 group-hover:text-white">2</div>
                                </div>
                                <p className="mt-6 text-base lg:text-lg text-blueGray-400 font-bold font-heading text-center group-hover:text-blueGray-600 transition duration-200 px-2">3通りのデザインをAdobe XDのソフトウェアで作成</p>
                            </div>
                            <div className="w-1/2 md:w-1/4 z-10 mb-12 group">
                                <div className="flex w-20 h-20 mx-auto items-center justify-center shadow bg-white rounded-full">
                                    <div className="flex w-16 h-16 mx-auto items-center justify-center text-blueGray-400 font-semibold bg-blueGray-50 rounded-full transition duration-200 group-hover:bg-blue-600 group-hover:text-white">3</div>
                                </div>
                                <p className="mt-6 text-base lg:text-lg text-blueGray-400 font-bold font-heading text-center group-hover:text-blueGray-600 transition duration-200 px-2">メインのレイアウトに合わせてコーディング</p>
                            </div>
                            <div className="w-1/2 md:w-1/4 z-10 mb-12 group">
                                <div className="flex w-20 h-20 mx-auto items-center justify-center shadow bg-white rounded-full">
                                    <div className="flex w-16 h-16 mx-auto items-center justify-center text-blueGray-400 font-semibold bg-blueGray-50 rounded-full transition duration-200 group-hover:bg-blue-600 group-hover:text-white">4</div>
                                </div>
                                <p className="mt-6 text-base lg:text-lg text-blueGray-400 font-bold font-heading text-center group-hover:text-blueGray-600 transition duration-200 px-2">その他2つのレイアウトに合わせてCSSの追加コーディング</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="p-6 rounded shadow bg-blueGray-50">
                                <h4 className="mb-3 font-bold font-heading">メリット</h4>
                                <ul className="list-disc list-inside text-blueGray-500">
                                    <li className="mb-2">複雑なデザイン、細かな要求に対して対応ができる</li>
                                    <li className="mb-2">一般的なプロセスなのでチームが揃えやすい</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="p-6 rounded shadow bg-blueGray-50">
                                <h4 className="mb-3 font-bold font-heading">デメリット</h4>
                                <ul className="list-disc list-inside text-blueGray-500">
                                    <li className="mb-2">多くの時間と人員を要する（PCのみに対して約2.5~3倍の費用が必要）</li>
                                    <li className="mb-2">レスポンシブ対応を忘れる箇所が頻繁に出てくる</li>
                                    <li className="mb-2">デザイン時と実際のウェブサイトに品質の差が出やすい</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3 className="py-4 mt-8 text-center text-blueGray-600 font-bold text-2xl">SaaSEOの場合</h3>
                    <div className="flex relative">
                        <div className="hidden md:flex absolute inset-0 -mt-24 px-16 items-center justify-center max-w-4xl mx-auto">
                            <div className="w-full py-1 shadow" />
                        </div>
                        <div className="flex flex-wrap justify-between w-full">
                            <div className="w-1/2 z-10 mb-12 group">
                                <div className="flex w-20 h-20 mx-auto items-center justify-center shadow bg-white rounded-full">
                                    <div className="flex w-16 h-16 mx-auto items-center justify-center font-semibold rounded-full text-blueGray-400 bg-blueGray-50 transition duration-200 group-hover:bg-blue-600 group-hover:text-white">1</div>
                                </div>
                                <p className="mt-6 text-base lg:text-lg font-bold font-heading text-center text-blueGray-400 group-hover:text-blueGray-600 transition duration-200 px-2">Tailwind CSSベースのソフトでフルレスポンシブ・レイアウトを作成</p>
                            </div>
                            <div className="w-1/2 z-10 mb-12 group">
                                <div className="flex w-20 h-20 mx-auto items-center justify-center shadow bg-white rounded-full">
                                    <div className="flex w-16 h-16 mx-auto items-center justify-center text-blueGray-400 font-semibold bg-blueGray-50 rounded-full transition duration-200 group-hover:bg-blue-600 group-hover:text-white">2</div>
                                </div>
                                <p className="mt-6 text-base lg:text-lg text-blueGray-400 font-bold font-heading text-center group-hover:text-blueGray-600 transition duration-200 px-2">内容に合わせて色調やコードの調整</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="p-6 rounded shadow bg-blueGray-50">
                                <h4 className="mb-3 font-bold font-heading">メリット</h4>
                                <ul className="list-disc list-inside text-blueGray-500">
                                    <li className="mb-2">2ステップで完結するので速くて安価（PC版のみとさほど変わらない量）</li>
                                    <li className="mb-2">コンセプトデザイン時と実際のウェブサイト品質に差がない</li>
                                    <li className="mb-2">レスポンシブ対応を忘れる箇所がない</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="p-6 rounded shadow bg-blueGray-50">
                                <h4 className="mb-3 font-bold font-heading">デメリット</h4>
                                <ul className="list-disc list-inside text-blueGray-500">
                                    <li className="mb-2">デザインの柔軟性が比較的低い</li>
                                    <li className="mb-2">Tailwind CSSを扱える人が多くない</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaBlack />
            <Services />

        </Layout>
    )
}

export default Responsive
