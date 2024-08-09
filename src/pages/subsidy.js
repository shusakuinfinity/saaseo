import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Services from '../components/Services'
import { FAQJsonLd } from 'gatsby-plugin-next-seo'
import { AiOutlineShop } from 'react-icons/ai'
import { IoBusiness } from 'react-icons/io5'
import CtaWhite from '../components/CtaWhite'
import CtaBlue from '../components/CtaBlue'

const Subsidy = () => {
    return (
        <Layout>
            <GatsbySeo
                title="ホームページ制作の補助金で75万円のサイトを25万円で作ろう - SaaSEO"
                description="高品質でオリジナルなウェブサイトは欲しいけど、高いんだよな〜。。と諦めていた事業者に朗報！小規模事業者持続化補助金、IT導入補助金などを利用すれば50万円〜450万円に値する支援が受けられます。SaaSEOなら美しく、スマホ対応、SEO対策がされたオリジナルサイトを制作します。"
            />
            <FAQJsonLd
                questions={[
                    { question: 'ホームページ制作、ウェブサイト制作の補助金とは？', answer: '全国共通の具体的なものは2つ。小規模事業者持続化補助金とIT導入補助金です。本ページにリンクも掲載しています。' },
                    { question: 'ホームページ制作補助金はいくら？具体的な金額は？', answer: '最大450万円、多くの場合は50万円もしくは制作費の半分から2/3。制度、事業内容、会社規模で変動します。' },
                ]}
            />

            <section className="bg-blueGray-800">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="w-full lg:w-1/2 px-3">
                            <div className="py-12">
                                <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                    <h1 className="text-white text-xs md:text-sm">補助金を利用して高品質なホームページ制作を安く制作!</h1>
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                                        <span className="text-white">75万円品質のサイトを</span>
                                        <span className="text-yellow-200">25万円で</span>
                                        <span className="text-white">制作するには？</span>
                                    </h2>
                                    <p className="leading-relaxed text-blueGray-400">小規模事業者持続化補助金、IT導入補助金などを利用すれば最大450万円、多くの場合50万円の割引に値する支援が受けられます。SaaSEOなら美しく、スマホ対応、SEO対策がされたオリジナルサイトを制作します。</p>
                                </div>
                                <div className="text-center lg:text-left"><Link className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/contact">無料相談する</Link></div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0">
                            <div className="lg:h-128 flex items-center justify-center">
                                <StaticImage className="lg:max-w-lg" src="../assets/images/subsidy.png" placeholder="blurred" alt="ホームページ制作、ウェブ制作の補助金" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20 xl:bg-contain bg-top bg-no-repeat">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">補助金・助成金</span>

                        <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading">
                            <span>一般的に利用されている</span>
                            <span className="text-blue-600">2つの</span>
                            <span>補助金制度</span>
                        </h2>
                        <p className="max-w-sm mx-auto text-lg text-blueGray-400">企業の規模、事業内容等に応じて公募先を選定しましょう</p>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="pt-16 pb-8 px-4 text-center text-white bg-blueGray-800 rounded shadow">
                                <AiOutlineShop className="mb-6 mx-auto text-9xl" />
                                <h3 className="mb-2 text-4xl font-bold font-heading">小規模事業者持続化補助金</h3>
                                <span className="text-4xl font-bold font-heading">上限50万円</span>
                                <p className="mt-2 mb-8">経費の2/3が補助金（75万円の制作費なら50万円の補助金）</p>
                                <div className="flex flex-col items-center mb-8">
                                    <ul className="text-left">
                                        <li className="flex items-center mb-3">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>日本商工会議所が運営</span>
                                        </li>
                                        <li className="flex items-center mb-3">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>対象は小規模事業者</span>
                                        </li>
                                        <li className="flex items-center mb-3 pl-2">
                                            <svg className="w-6 h-6 mr-2 text-blueGray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>商業・サービス業（常勤従業員数5人以下）</span>
                                        </li>
                                        <li className="flex items-center mb-3 pl-2">
                                            <svg className="w-6 h-6 mr-2 text-blueGray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>宿泊業・娯楽業（常勤従業員数20人以下）</span>
                                        </li>
                                        <li className="flex items-center mb-3 pl-2">
                                            <svg className="w-6 h-6 mr-2 text-blueGray-400 pl-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>製造業その他（常勤従業員数20人以下）</span>
                                        </li>
                                        <li className="flex items-center mb-3">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>経営計画書、補助事業計画書、事業支援計画書提出で審査あり</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>補助額は、必要経費の3分の2、最大50万円</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 mr-2 text-blueGray-400 pl-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>低感染リスク型ビジネス枠は上限が100万円</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 mr-2 text-blueGray-400 pl-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>2021年1月1日以降創業の事業は上限が100万円</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>約4ヶ月ごとに受付期間が設定されている</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 mr-2 text-blueGray-400 pl-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>第7回締め切り：2022年2月4日</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a className="block sm:inline-block py-4 px-6 mb-4 text-xs text-white text-center font-semibold leading-none  border border-blueGray-500 hover:border-blueGray-400 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" href="https://r1.jizokukahojokin.info/" target="_blank" rel="noopener noreferrer">公式サイトを確認する</a><Link className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:ml-3 text-xs text-blue-600 text-center font-semibold leading-none bg-white hover:bg-blueGray-50 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/contact">問い合わせる</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="pt-16 pb-8 px-4 text-center text-white bg-blueGray-800 rounded shadow">
                                <IoBusiness className="mb-6 mx-auto text-9xl" />
                                <h3 className="mb-2 text-4xl font-bold font-heading">IT導入補助金</h3>
                                <span className="text-4xl font-bold font-heading">上限450万円</span>
                                <p className="mt-2 mb-8">経費の半分が補助金（150万円の制作費なら75万円の補助金）</p>
                                <div className="flex flex-col items-center mb-8">
                                    <ul className="text-left">
                                        <li className="flex items-center mb-3">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>一般社団法人 サービスデザイン推進協議会が運営</span>
                                        </li>
                                        <li className="flex items-center mb-3">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>2021年12月22日17時が最終受付なのでまもなく終了予定</span>
                                        </li>
                                        <li className="flex items-center mb-3">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>交付決定まで発注してはいけないのでスピード感は遅い</span>
                                        </li>
                                        <li className="flex items-center mb-3">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>一般的にはA類・B類に区分けされる</span>
                                        </li>
                                        <li className="flex items-center mb-3">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>低感染リスク型ビジネスへの移行に取り組む場合はC類・D類</span>
                                        </li>
                                        <li className="flex items-center mb-3 pl-2">
                                            <svg className="w-6 h-6 mr-2 text-blueGray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>A類（補助率2分の1/補助額30万～150万円）</span>
                                        </li>
                                        <li className="flex items-center mb-3 pl-2">
                                            <svg className="w-6 h-6 mr-2 text-blueGray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>B類（補助率2分の1/補助額150万～450万円）</span>
                                        </li>
                                        <li className="flex items-center mb-3 pl-2">
                                            <svg className="w-6 h-6 mr-2 text-blueGray-400 pl-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>C類（補助率3分の2/補助額30万～450万円）</span>
                                        </li>
                                        <li className="flex items-center mb-3 pl-2">
                                            <svg className="w-6 h-6 mr-2 text-blueGray-400 pl-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>D類（補助率2分の1/補助額30万～150万円）</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a className="mb-4 block sm:inline-block py-4 px-6 text-xs text-white text-center font-semibold leading-none  border border-blueGray-500 hover:border-blueGray-400 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" href="https://www.it-hojo.jp/overview/" target="_blank" rel="noopener noreferrer" >公式サイトを確認する</a><Link className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:ml-3 text-xs text-blue-600 text-center font-semibold leading-none bg-white hover:bg-blueGray-50 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/contact">問い合わせる</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CtaWhite />

            <section className="pt-16 pb-20 bg-blueGray-50">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center mb-12">
                        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">具体例</span>
                            <h2 className="text-4xl font-bold font-heading">
                                <span>こんなホームページが</span>
                                <span className="text-blue-600">これぐらいの価格感で</span>
                                <span>実現できます</span>
                            </h2>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <p className="lg:pl-16 text-blueGray-400 leading-loose">小規模事業者持続化補助金の対象として採択された場合のシミュレーションです。</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 -mb-6">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                                <StaticImage alt="補助金でホームページ制作10万円以内" src="../assets/images/1site.png" />
                                <h3 className="mb-2 font-bold text-xl font-heading">30万円のサイトの場合</h3>
                                <h4 className="mb-1 text-green-600">補助金額＝20万円（金額の3分の2）</h4>
                                <h4 className="mb-4 text-pink-500">実質負担額＝10万円</h4>
                                <p className="text-sm text-blueGray-400">1ページもの、いわゆるランディングページのみの制作が可能です。SaaSEOの制作方法の場合スマホでもある程度は綺麗に反映されますが、スマホ、タブレットそれぞれの詳細な対応は難しい予算感です。</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                                <StaticImage alt="補助金でホームページ制作10万円以内" src="../assets/images/3sites.png" />
                                <h3 className="mb-2 font-bold text-xl font-heading">75万円のサイトの場合</h3>
                                <h4 className="mb-1 text-green-600">補助金額＝50万円（金額の3分の2）</h4>
                                <h4 className="mb-4 text-pink-500">実質負担額＝25万円</h4>
                                <p className="text-sm text-blueGray-400">本ウェブサイトと同じぐらいの品質でホームページ制作が可能です。スマホ対応、タブレット対応といったレスポンシブ化も完璧にしながら、6ページ程度の対応ができます。</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                                <StaticImage alt="補助金でホームページ制作10万円以内" src="../assets/images/3site_cms.png" />
                                <h3 className="mb-2 font-bold text-xl font-heading">150万円のサイトの場合</h3>
                                <h4 className="mb-1 text-green-600">補助金額＝100万円（金額の3分の2）</h4>
                                <h4 className="mb-4 text-pink-500">実質負担額＝50万円</h4>
                                <p className="text-sm text-blueGray-400">75万円の内容にCMSと呼ばれるシステムを追加したものが制作可能です。CMSがあれば大規模サイトにしたり、メディアの運用をしたりすることが可能です。＊100万円の補助金を受けるには低感染リスク型での応募が必要です。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CtaBlue />

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="pt-20 pb-24 px-8 md:px-16 rounded bg-yellow-50">
                        <div className="flex flex-wrap -mx-8">
                            <div className="w-full lg:w-1/2 px-8 flex">
                                <div className="my-auto">
                                    <span className="text-xs py-1 px-3 text-yellow-500 font-semibold bg-yellow-100 rounded-xl">すぐに動き始めるための安心制度</span>
                                    <h2 className="text-3xl lg:text-4xl font-semibold">補助金が受けられなかった場合の割引対応</h2>
                                    <p className="mt-2 mb-2 leading-loose text-blueGray-400">ホームページが欲しい！と思っても、補助金の採択を待つには時間がかかります。ただ、すぐに制作に動けないのは機会損失にもなるためすぐに作り始めるべきです。そこで、もし補助金が採択されなかった場合は予定補助金の半額を完成時の請求金額から割引させていただきます。</p>
                                    <p className="mt-2 mb-6 leading-loose text-blueGray-400">例：75万円のホームページ制作で補助金が受けられなかった場合、予定していた補助金50万円の半額25万円を割引→最終請求金額50万円</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-8 mt-8 lg:mt-0">
                                <div className="relative max-w-sm sm:max-w-md mx-auto">
                                    <StaticImage className="relative mx-auto lg:pt-16 rounded-full" src="../assets/images/safe.jpg" alt="補助金が受けられなかった場合の安心制度" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center pt-8">
                            <Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/contact">お問い合わせする</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">制作フロー</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">
                                <span>補助金の申請と</span>
                                <span className="text-blue-600">ホームページ制作を</span>
                                <span>同時に行う際の流れ</span>
                            </h2>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-16">
                            <p className="text-blueGray-400 leading-loose">補助金の採択を待っていて制作が始められず結果的に対応できないケースとなることを避けるため、ホームページ制作を進めながら補助金の申請も行います。</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 -mb-6 text-center">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>
                                <StaticImage className="h-48 mx-auto my-4" src="../assets/images/work-tv.png" alt="" /><h3 className="mb-2 font-bold font-heading">Zoom、Meet等で無料相談</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">ホームページ制作に関する質疑応答を繰り返し、予算感、デザイン、内容等について把握します。*補助金に関する詳しいご相談は行政書士等のプロにご相談ください。</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
                                <StaticImage className="h-48 mx-auto my-4" src="../assets/images/people-watching.png" alt="" /><h3 className="mb-2 font-bold font-heading">申請・制作開始</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">手付金を頂き次第、補助金の申請に必要な情報をお渡ししながらホームページ制作を開始していきます。内容詳細についてもこの段階から詰めていきます。</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-3 mb-6">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
                                <StaticImage className="h-48 mx-auto my-4" src="../assets/images/financial-report.png" alt="" /><h3 className="mb-2 font-bold font-heading">申請結果、制作完了</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">補助金の申請結果に応じて、最終の請求書を発行致します。もし、発表予定が2ヶ月以上先であればご相談させて頂く場合がございます。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaWhite />

            <Services />

        </Layout>
    )
}

export default Subsidy
