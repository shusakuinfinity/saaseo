import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Blob from '../assets/icons/blob-tear.svg'
import CtaWhite from '../components/CtaWhite'
import { Link } from 'gatsby'
import CtaBlue from '../components/CtaBlue'
import CtaBlack from '../components/CtaBlack'
import Services from '../components/Services'

const seo = ({ location }) => {
    return (
        <Layout>
            <GatsbySeo
                title="SEO会社のSaaSEO - 対策方法、費用・見積もりの考え方、コンサル内容"
                description="SEOとはつまり検索への最適化。一般的にはGoogleで上位表示を行うための技術です。当社はSEOに圧倒的な強みを持ち、ウェブサイトを制作する技術からSEOを意識しつつ、できる限り全てのSEO対策をデフォルトで実装し、制作物を納品致します。本ページでは、その内容を全て公開しています。"
            />

            <section className="py-12 overflow-x-hidden bg-blueGray-800">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap">
                        <div className="w-full lg:w-1/2">
                            <div className="py-6 lg:pr-32 md:pr-10">
                                <div className="mb-4 text-center md:text-left">
                                    <h1>
                                        <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">SEO会社・コンサルから学ぶ対策方法・費用感！</span>
                                    </h1>
                                    <h2 className="text-4xl mt-3 font-bold font-heading text-white">SEO対策を徹底したウェブサイトが作りたい方へ</h2>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">検索結果について考え方を知る</h3>
                                        <p className="text-blueGray-400 leading-loose">検索上位表示されるサイトとは？</p>
                                    </div>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">SEOを成功させる3要素</h3>
                                        <p className="text-blueGray-400 leading-loose">SEOコンサルタントは何を考えている？</p>
                                    </div>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">SEOの費用はこの作業量で発生する</h3>
                                        <p className="text-blueGray-400 leading-loose">具体的なSEO対策を公開</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                            <StaticImage className="relative mx-auto rounded-xl w-full z-10" src="../assets/images/seo_hero.jpeg" placeholder="blurred" alt="岡崎市のSEO対策会社ならSaaSEO" />
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
                                    <StaticImage src="../assets/images/ranking.jpg" alt="SEO対策ならSaaSEO" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 lg:max-w-lg px-4">
                            <div className="flex h-full">
                                <div className="my-auto">
                                    <div className="mb-8">
                                        <span
                                            className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">基礎中の基礎、検索エンジンの考え方</span>
                                        <h2 className="mb-6 text-3xl md:text-4xl font-bold font-heading">誰のために、Googleは検索順位をつけるのか？</h2>
                                        <p className="leading-loose text-blueGray-400">
                                            この疑問こそが、SEOを理解する上での根本です。そう、Googleは検索窓を使う人＝ユーザーのために検索順位をつけています。仮にユーザーが「肺がキリキリ痛む、なんでだろう？」と思ったら、「肺
                                            キリキリ痛む」と調べるはずです。このときに病院のホームページばかり出てきて、症状に関する記事が出てこなかったら、ユーザーはとてもイライラし、Googleのことを嫌いになる＝使わなくなるはずです。これは内容に関する一例ですが、その他にもローディングが長くて待たせるサイト、信用スコアが低いサイトなどもユーザーを不快にさせる危険性があるため順位を低めに表示するのです。つまり、上位表示されるサイトとは、Googleが考える良いサイト基準を満たしており、なおかつ内容とキーワードが合致していると判断がしやすいものなのです。
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="relative w-2/5">
                                            <StaticImage className="rounded-lg" src="../assets/images/findsite.jpeg" alt="岡崎市 検索上位表示 会社 SaaSEO" />
                                        </div>
                                        <div className="ml-8 w-3/5">
                                            <p className="text-blueGray-400 leading-relaxed">お、良いサイト一発で見つかった！</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaWhite />

            <section className="py-20 bg-blueGray-50">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-8">
                        <div className="w-full lg:w-1/2 px-8">
                            <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                                <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">SEOを成功させる3要素</span>
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading">Googleが考えるSEO対策ができているホームページの作り方</h2>
                                <p className="mb-8 leading-loose text-blueGray-400">
                                    ホームページ制作会社やウェブ制作会社はとても沢山ありますが、この3つを完璧に抑えて制作できる会社は多くありません。なぜなら、これらは緻密な設定に膨大な時間を必要とし、実現のために最新技術の会得を要するからです。Googleは常に進化しながら、インターネット上にある全てのサイトを評価し、ランキングを毎日変化させているため、何もしないとすぐにSEO負けしてしまいます。SaaSEOではこの3つを確実に抑えられるサイトを緻密に設計し、実現しています。
                                </p>
                                <StaticImage src="../assets/images/rankUp.jpg" alt="SEOの方法 岡崎市のSEO対策ならSaaSEO" className="rounded" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-8">
                            <ul className="space-y-12">
                                <li className="flex -mx-4">
                                    <div className="px-4">
                                        <span
                                            className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">1</span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-4 text-xl font-semibold">調査結果に基づいた適切な箇所へのキーワードの埋め込み</h3>
                                        <p className="text-blueGray-400 leading-loose">
                                            Googleはサイトの内容を読み込み、どのキーワードにマッチしたサイトなのか、ということを判定し続けています。まさに「本を読んでこの本は何について書かれた本なのかを理解する」ことと同じです。あなたが同じことをする場合、まずは何を基に判定するでしょうか？そう、本のタイトルです。次に目次を読んでみたり、本の冒頭部分を読んでみたりします。つまり、ウェブサイトも同じように狙っているキーワードに合う適切なタイトルを持ち、適切な見出しを設定し、適切な説明文を書いておかないと、Googleでさえ理解ができないのです。SaaSEOではどんなキーワードを狙うべきなのか、から考え、適切な設定を行います。
                                        </p>
                                    </div>
                                </li>
                                <li className="flex -mx-4">
                                    <div className="px-4">
                                        <span
                                            className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">2</span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-4 text-xl font-semibold">スピードと信用を兼ね備えたサイト品質</h3>
                                        <p className="text-blueGray-400 leading-loose">
                                            写真が膨大に散りばめられたサイトを美しいと感じる一方、ローディング時間がとても長くてダルい、と思った経験は無いでしょうか？Googleに気に入られる爆速サイトを美しい写真やレイアウトで表現するということは、制作会社の技術にかかっているのです。では、信用はどうでしょうか？これは適切なセキュリティ設定や規定に即した設定、他サイトからのおすすめなどが必要になってきます。個人では中々対応がしにくいこの点は、まともな制作会社を選ぶ最大の理由とも言えます。
                                        </p>
                                    </div>
                                </li>
                                <li className="flex -mx-4">
                                    <div className="px-4">
                                        <span
                                            className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">3</span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-4 text-xl font-semibold">ユーザーに愛され続けているという結果</h3>
                                        <p className="text-blueGray-400 leading-loose">
                                            サイトの品質も良くなければ、キーワードの埋め込みもうまくできていないサイトが常に上位にいる、ということがあります。なぜでしょうか？それは、Googleは常にインターネット上での出来事を監視しているからです。そのサイトが人気で、日々使われていれば、自ずと"高いパフォーマンスを出している"と判定することができます。むしろ、この要素がなければSEOのプロによって検索結果は操作され続けてしまうため、結局は想定ユーザーに愛されるサイト作りが鍵になるのです。SaaSEOは培った知見を活かしてユーザーに優しいUI/UX設計を行い、離脱させずに目的を達成することでスコアを上げ続けられるサイトを制作しています。
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CtaBlue />

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg mx-auto mb-16 text-center">
                        <span
                            className="inline-block px-3 py-2 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full uppercase">SEOの費用はこの作業量で発生する</span>
                        <h2 className="mt-4 mb-2 text-3xl lg:text-4xl font-bold font-heading">
                            <span>Web制作から携われるから可能な</span>
                            <span className="text-blue-600">4ステップ</span>
                            <span>SEO対策</span>
                        </h2>
                        <p className="text-blueGray-400 leading-loose">結果にこだわるWeb制作会社SaaSEOが溜め込んだ知識と技術をフル活用することで、成功に導くSEO対策を実現します。</p>
                    </div>
                    <div className="flex relative">
                        <div className="hidden md:flex absolute inset-0 -mt-24 px-16 items-center justify-center max-w-4xl mx-auto">
                            <div className="w-full py-1 shadow"></div>
                        </div>
                        <div className="flex flex-wrap justify-between w-full">
                            <div className="w-1/2 md:w-1/4 z-10 mb-12 group">
                                <div className="flex w-20 h-20 mx-auto items-center justify-center shadow bg-white rounded-full">
                                    <div className="flex w-16 h-16 mx-auto items-center justify-center font-semibold rounded-full text-blueGray-400 bg-blueGray-50 transition duration-200 group-hover:bg-blue-600 group-hover:text-white">
                                        1</div>
                                </div>
                                <p className="mt-6 text-base lg:text-lg font-bold font-heading text-center text-blueGray-400 group-hover:text-blueGray-600 transition duration-200 px-2">
                                    入念な調査を基に仕上げるSEO完全対策シートの作成</p>
                            </div>
                            <div className="w-1/2 md:w-1/4 z-10 mb-12 group">
                                <div className="flex w-20 h-20 mx-auto items-center justify-center shadow bg-white rounded-full">
                                    <div
                                        className="flex w-16 h-16 mx-auto items-center justify-center text-blueGray-400 font-semibold bg-blueGray-50 rounded-full transition duration-200 group-hover:bg-blue-600 group-hover:text-white">
                                        2</div>
                                </div>
                                <p className="mt-6 text-base lg:text-lg text-blueGray-400 font-bold font-heading text-center group-hover:text-blueGray-600 transition duration-200 px-2">
                                    Googleが好む爆速＆フルレスポンシブなウェブサイト制作</p>
                            </div>
                            <div className="w-1/2 md:w-1/4 z-10 mb-12 group">
                                <div className="flex w-20 h-20 mx-auto items-center justify-center shadow bg-white rounded-full">
                                    <div className="flex w-16 h-16 mx-auto items-center justify-center text-blueGray-400 font-semibold bg-blueGray-50 rounded-full transition duration-200 group-hover:bg-blue-600 group-hover:text-white">
                                        3</div>
                                </div>
                                <p className="mt-6 text-base lg:text-lg text-blueGray-400 font-bold font-heading text-center group-hover:text-blueGray-600 transition duration-200 px-2">
                                    広告運用によるサイト公開直後からのグロースハック</p>
                            </div>
                            <div className="w-1/2 md:w-1/4 z-10 mb-12 group">
                                <div className="flex w-20 h-20 mx-auto items-center justify-center shadow bg-white rounded-full">
                                    <div className="flex w-16 h-16 mx-auto items-center justify-center text-blueGray-400 font-semibold bg-blueGray-50 rounded-full transition duration-200 group-hover:bg-blue-600 group-hover:text-white">
                                        4</div>
                                </div>
                                <p className="mt-6 text-base lg:text-lg text-blueGray-400 font-bold font-heading text-center group-hover:text-blueGray-600 transition duration-200 px-2">
                                    収集したデータを基に行う定期のサイト改善で競合の一歩先へ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-20 pb-20 lg:pb-12">
                <div className="flex flex-wrap">
                    <div className="relative w-full lg:w-1/2 px-4 lg:h-128">
                        <div className="relative lg:absolute left-0 top-0 lg:max-w-6xl mx-auto lg:-ml-64">
                            <StaticImage className="lg:h-128 rounded-lg" placeholder="blurred" src="../assets/images/spreadSheet.jpg" alt="SEO対策シート" />
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2 lg:max-w-lg px-4 lg:pl-16">
                        <div className="my-auto mx-auto pt-8 lg:pt-0 max-w-2xl lg:max-w-lg">
                            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                                <span>入念な調査を基に仕上げる</span>
                                <span className="text-blue-600">SEO完全対策シート</span>
                                <span>の作成</span>
                            </h2>
                            <p className="text-blueGray-400 leading-loose mb-1">1.クライアントの魅力にあたるキーワードをリスティング</p>
                            <p className="text-blueGray-400 leading-loose mb-1">2.競合サイトを調べてよくあるページ名を追加</p>
                            <p className="text-blueGray-400 leading-loose mb-1">3.サーチボリューム（月間検索量）を調べながらリスティングを数値化しつつ、キーワードを更に追加</p>
                            <p className="text-blueGray-400 leading-loose mb-1">4.改めてリストを見返し、相談の上取れない・取らないキーワードを削除</p>
                            <p className="text-blueGray-400 leading-loose mb-1">5.リストのキーワードで検索し、競合性を主観的に判定</p>
                            <p className="text-blueGray-400 leading-loose mb-1">6.キーワードリストを確定</p>
                            <p className="text-blueGray-400 leading-loose mb-1">7.キーワードリストを基に内部リンクの強いピラミッド構造サイトマップを作成</p>
                            <p className="text-blueGray-400 leading-loose mb-1">8.TDH（タイトル、ディスクリプション、ヘッダー）のコピーライティング</p>
                            <p className="text-blueGray-400 leading-loose mb-1">9.JSON-LDでの構造化データについてプランニング</p>
                            <p className="text-blueGray-400 leading-loose mb-1">10.SEO完全対策シートの完成。</p>
                            <div className="py-4">
                                <Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600"
                                    to="/contact">お問い合わせする</Link>
                                <Link className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl"
                                    to="/quotation">見積り依頼をする</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-20 pb-20 lg:pb-12 overflow-x-hidden">
                <div className="flex flex-wrap">
                    <div className="flex order-1 lg:order-0 w-full lg:w-1/2 lg:max-w-lg lg:ml-auto px-4 lg:pr-24 xl:pr-4">
                        <div className="my-auto mx-auto pt-8 lg:pt-0 max-w-2xl lg:max-w-lg">
                            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                                <span>Googleが好む</span>
                                <span className="text-blue-600">爆速＆フルレスポンシブ</span>
                                <span>なウェブサイト制作</span>
                            </h2>
                            <p className="text-blueGray-400 leading-loose mb-1">1.大まかにページごとのコンテンツを考案</p>
                            <p className="text-blueGray-400 leading-loose mb-1">2.改めてデザインの方向性とコンテンツをクライアントと相談し合意</p>
                            <p className="text-blueGray-400 leading-loose mb-1">3.仮デザイン、コーディング、コピーライティングの同時進行</p>
                            <p className="text-blueGray-400 leading-loose mb-1">4.機能が一切入っていない仮デザインサイトの完成、提出、合意</p>
                            <p className="text-blueGray-400 leading-loose mb-1">5.Jamstackでの開発環境をセットアップ</p>
                            <p className="text-blueGray-400 leading-loose mb-1">6.写真やコンテンツの制作が必要であれば行う</p>
                            <p className="text-blueGray-400 leading-loose mb-1">7.仮置していた写真などを入れ替え、本番サイト仕様に仕上げる</p>
                            <p className="text-blueGray-400 leading-loose mb-1">8.仮ドメインにてCDNサービスでホスティング</p>
                            <p className="text-blueGray-400 leading-loose mb-1">9.改めて納品、最終合意</p>
                            <p className="text-blueGray-400 leading-loose mb-1">10.ドメイン取得をし、サイト公開</p>
                            <div className="py-4">
                                <Link
                                    className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600"
                                    to="/contact">お問い合わせする</Link>
                                <Link
                                    className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl"
                                    to="/quotation">見積り依頼をする</Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative order-0 lg:order-1 w-full lg:w-1/2 px-4 lg:h-128">
                        <div className="relative lg:absolute right-0 top-0 lg:max-w-6xl mx-auto lg:-mr-64">
                            <StaticImage className="lg:h-128 rounded-lg" placeholder="blurred" src="../assets/images/responsiveDesign.jpg" alt="SEOに強いサイト制作 岡崎市" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-20 pb-20 lg:pb-12">
                <div className="flex flex-wrap">
                    <div className="relative w-full lg:w-1/2 px-4 lg:h-128">
                        <div className="relative lg:absolute left-0 top-0 lg:max-w-6xl mx-auto lg:-ml-64">
                            <StaticImage className="lg:h-128 rounded-lg" placeholder="blurred" src="../assets/images/ads.jpg" alt="広告運用 岡崎市" />
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2 lg:max-w-lg px-4 lg:pl-16">
                        <div className="my-auto mx-auto pt-8 lg:pt-0 max-w-2xl lg:max-w-lg">
                            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                                <span>広告運用等による</span>
                                <span className="text-blue-600">サイト公開直後からの</span>
                                <span>グロースハック</span>
                            </h2>
                            <p className="text-blueGray-400 leading-loose mb-1">1.Google My Businessの登録、設定</p>
                            <p className="text-blueGray-400 leading-loose mb-1">2.GSC(Google Search Console)のアカウント設定</p>
                            <p className="text-blueGray-400 leading-loose mb-1">3.GSCでサイトマップ提出</p>
                            <p className="text-blueGray-400 leading-loose mb-1">4.GSCを利用したクローリング誘発</p>
                            <p className="text-blueGray-400 leading-loose mb-1">5.サイト、リッチリザルトのインデックス状況確認</p>
                            <p className="text-blueGray-400 leading-loose mb-1">6.アンカーテキスト対策をしたリンクビルディング</p>
                            <p className="text-blueGray-400 leading-loose mb-1">7.改善活動のためのGoogle Analytics（GA）設定</p>
                            <p className="text-blueGray-400 leading-loose mb-1">8Google Adsで広告用アカウントの設定</p>
                            <p className="text-blueGray-400 leading-loose mb-1">9.取れた予算で最大限の広告パフォーマンスを創出</p>
                            <p className="text-blueGray-400 leading-loose mb-1">10.再度インデックス状況を確認し、グロースハック完了</p>
                            <div className="py-4">
                                <Link
                                    className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600"
                                    to="/contact">お問い合わせする</Link>
                                <Link
                                    className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl"
                                    to="/quotation">見積り依頼をする</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-20 pb-20 lg:pb-12 overflow-x-hidden">
                <div className="flex flex-wrap">
                    <div className="flex order-1 lg:order-0 w-full lg:w-1/2 lg:max-w-lg lg:ml-auto px-4 lg:pr-24 xl:pr-4">
                        <div className="my-auto mx-auto pt-8 lg:pt-0 max-w-2xl lg:max-w-lg">
                            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                                <span>収集したデータを基に行う定期の</span>
                                <span className="text-blue-600">サイト改善</span>
                                <span>で競合の一歩先へ</span>
                            </h2>
                            <p className="text-blueGray-400 leading-loose mb-1">1.四半期分析（GA, GSC, インデックス状況）の実行</p>
                            <p className="text-blueGray-400 leading-loose mb-1">2.分析結果ベースでの改善内容相談、合意なら実行</p>
                            <p className="text-blueGray-400 leading-loose mb-1">3.月イチ修正依頼への対応</p>
                            <p className="text-blueGray-400 leading-loose mb-1">4.ブログ、メディア等コンテンツマーケティングがあれば記事内容のチェック、改善案の共有</p>
                            <p className="text-blueGray-400 leading-loose mb-1">5.必要があれば広告運用・運用方法の指導</p>
                            <div className="py-4">
                                <Link
                                    className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600"
                                    to="/contact">お問い合わせする</Link>
                                <Link
                                    className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl"
                                    to="/quotation">見積り依頼をする</Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative order-0 lg:order-1 w-full lg:w-1/2 px-4 lg:h-128">
                        <div className="relative lg:absolute right-0 top-0 lg:max-w-6xl mx-auto lg:-mr-64">
                            <StaticImage className="lg:h-128 rounded-lg" placeholder="blurred" src="../assets/images/analysis.png" alt="SEO 広告 分析" />
                        </div>
                    </div>
                </div>
            </section>

            <CtaBlack />
            <Services />

        </Layout>
    )
}

export default seo
