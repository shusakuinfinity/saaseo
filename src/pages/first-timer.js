import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Blob from '../assets/icons/blob-tear.svg'
import { IoCameraSharp, IoCardSharp, IoCodeSharp, IoColorFillSharp, IoPencilSharp, IoRocketSharp, IoSwapHorizontalSharp, IoTerminalSharp, } from "react-icons/io5"
import CtaBlack from '../components/CtaBlack'
import Services from '../components/Services'
import CtaWhite from '../components/CtaWhite'
import CtaBlue from '../components/CtaBlue'
import { FAQJsonLd } from 'gatsby-plugin-next-seo'

const FirstTimer = () => {
    return (
        <Layout>
            <GatsbySeo
                title="ホームページ制作会社の選び方【SaaSEO】費用・相場、手順を解説"
                description="普段は聞き慣れない言葉が飛び交うWeb制作。本ページではできるだけ専門用語を使わずにWeb制作の流れ、制作にかかる費用・相場の考え方などを解説しています。このページを読めば、ホームページ制作会社の見極めもご自身で行えるようになり、目的に合ったWeb制作会社を選択できます。"
            />
            <FAQJsonLd
                questions={[
                    { question: '正しいホームページ制作会社の選び方は？', answer: '自分たちの目的を達成してくれる会社を選ぶことが正しい選び方。集客が目的なら集客意識の高い会社、美しいサイト作りならデザイン性を押している会社、安く作るならテンプレをうまく使える会社。制作の裏側が分かればより判断がしやすいので、その点を本ページにて解説。' },
                    { question: 'ホームページ作成・制作に必要な費用、相場は？', answer: 'ホームページなら10万円から800万円が相場。費用は主にコンサル費用・制作費用・運用費用の3つに分かれる。コスト構造が分かれば見極めがしやすくなるので、その点を本ページにて解説。' },
                    { question: 'ホームページ作成・制作の手順は？', answer: '3分割すると計画→制作→運用となる。それぞれのステップは更に細かく分かれるので、詳細を本ページにて解説。' },
                ]}
            />

            <section className="py-12 overflow-x-hidden bg-blueGray-800">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap">
                        <div className="w-full lg:w-1/2">
                            <div className="py-6 lg:pr-32 md:pr-10">
                                <div className="mb-4 text-center md:text-left">
                                    <h1>
                                        <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">Web制作費用の考え方、手順、会社の選び方がわかる！</span>
                                    </h1>
                                    <h2 className="text-4xl mt-3 font-bold font-heading text-white">初めてWebサイトを作成・外注する方へ</h2>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">Web制作の流れ</h3>
                                        <p className="text-blueGray-400 leading-loose">ホームページはどう作られるのか？</p>
                                    </div>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">Web制作会社の選び方</h3>
                                        <p className="text-blueGray-400 leading-loose">何を重視して、何を妥協できるか？</p>
                                    </div>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">Web制作費用・相場の考え方</h3>
                                        <p className="text-blueGray-400 leading-loose">どうWeb制作会社は見積もるのか？</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                            <StaticImage className="relative mx-auto rounded-xl w-full z-10" src="../assets/images/firstTimer_hero.jpeg" placeholder="blurred" alt="岡崎市のSEO対策会社ならSaaSEO" />
                            <Blob className="absolute top-0 left-0 -ml-12 -mt-12 w-20" />
                            <Blob className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-blueGray-50">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                            <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">Web制作の流れ</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">
                                <span>手順がわかれば</span>
                                <span className="text-blue-600">Web制作は怖くない！</span>
                                <span>3ステップで解説</span>
                            </h2>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-16">
                            <p className="text-blueGray-400 leading-loose">ウェブサイトで目的達成に必要な期間は約半年。制作自体にも3ヶ月を要するのが一般的です。SaaSEOは独自の制作技術を用いることで目的達成までの期間を約半分までに抑えます。</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 -mb-6 text-center">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>
                                <StaticImage className="h-48 mx-auto my-4" src="../assets/images/work-tv.png" placeholder="blurred" alt="岡崎市のWebサイト制作会社SaaSEO" />
                                <h3 className="mb-2 font-bold font-heading">計画 - 目的・方向性の明確化</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">お問い合わせを頂き次第、初回のミーティングを行います。そこで目的のすり合わせ、予算の把握、期間の合意、参考サイトの決定を行います。その後、スプレッドシート等を用いて計画を言語化。合意が取れ次第、着手金の取引を行って次のステップに進みます。</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
                                <StaticImage className="h-48 mx-auto my-4" src="../assets/images/people-watching.png" placeholder="blurred" alt="岡崎市のWebサイト制作会社SaaSEO 2" />
                                <h3 className="mb-2 font-bold font-heading">制作 - デザイン、コーディング</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">最も時間を要するステップで、4通りのスペシャリストが必要です。まずはワイヤーフレームと呼ばれる設計図の作成をUI/UXデザイナーが行います。次に美しさと使いやすさを飛躍させるウェブデザイナーが活躍。同時にコピーライターと呼ばれる文言作成スペシャリストによって内容も充実させます。最後にエンジニアが登場し、デザインをそのままコードに書き換えて、オンライン上で見られるように整えます。</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-3 mb-6">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
                                <StaticImage className="h-48 mx-auto my-4" src="../assets/images/financial-report.png" placeholder="blurred" alt="岡崎市のWebサイト制作会社SaaSEO 3" />
                                <h3 className="mb-2 font-bold font-heading">運用 - SEO、広告、メディア</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">作って終わり！のWeb制作会社はこのステップは存在しませんが、それはせっかく作ったカタログをお蔵入りさせるようなものです。プロの制作会社は計画段階からSEOと呼ばれる検索エンジン最適化を行い、希望の検索ワードでサイトが表示される工夫を行います。また、Google Analytics等の分析ツールも埋め込んで数値情報を取得し、サイト公開後の調整をします。ただ、SEOは時間がかかるため広告やメディアも活用し、グロースハックと呼ばれる初期段階でのブーストをかけて、鉄を熱いうちに叩くことで一気に目的達成をします。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaBlue />

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap md:-mx-8">
                        <div className="w-full lg:w-1/2 px-8">
                            <div className="mb-12 lg:mb-0">
                                <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">Web制作会社の選び方</span>
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading">3種類のWeb制作会社がいることを知ろう！</h2>
                                <p className="mb-8 leading-loose text-blueGray-400">目的によって優先したいこと、妥協できることがあるはずなので、それがウェブ制作会社を選ぶポイントになります。費用か、デザイン性か、成果への繋がりやすさか。ここでは代表的な3つの例を挙げて説明します。</p>
                            </div>
                            <StaticImage src="../assets/images/choice.jpg" alt="ウェブ制作会社の選び方" placeholder="blurred" className="rounded" /><div id="double-button" className="text-center py-12">
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-8">
                            <ul className="space-y-12"><li className="flex -mx-4">
                                <div className="px-4">
                                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">1</span>
                                </div>
                                <div className="px-4">
                                    <h3 className="my-4 text-xl font-semibold">とにかく安い、テンプレを用いて作るだけ系</h3>
                                    <p className="text-blueGray-400 leading-loose">"ウェブサイトを作ることだけが目的"であれば、このタイプが良いでしょう。問題としては依頼内容への柔軟性が低いことが挙げられるため、時間と根気をかけられるならWixやSquarespaceなどオンラインサービスを用いるのがよいかもしれません。</p>
                                </div>
                            </li>
                                <li className="flex -mx-4">
                                    <div className="px-4">
                                        <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">2</span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-4 text-xl font-semibold">デザインやアニメーションにこだわった芸術系</h3>
                                        <p className="text-blueGray-400 leading-loose">サイトの美しさが最重要であれば、このタイプを選ぶべきです。ウェブ制作会社自体のサイトを見て、アニメーションがふんだんに使われていれば、このタイプだとわかります。ただ、SEOやマーケティングは必然的に弱くなります。SaaSEOはこのタイプのウェブサイト制作方法も心得ておりますので、ご要望によって方法を使い分けます。</p>
                                    </div>
                                </li>
                                <li className="flex -mx-4">
                                    <div className="px-4">
                                        <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">3</span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-4 text-xl font-semibold">SEOやBtoBサイトに強いシンプルですっきり系</h3>
                                        <p className="text-blueGray-400 leading-loose">本サイトはこの方向性で作られています。"伝えたいことをできるだけ多くの伝えたい相手に確実に伝えること"を目的とするため、調査段階に多くの時間を費やす傾向があります。派手な演出などを求めないのであれば、このタイプを選ぶと目的達成の確率が上がります。</p>
                                    </div>
                                </li>
                            </ul></div>
                    </div>
                </div>
            </section>

            <CtaWhite />

            <section className="pt-16 pb-20 bg-blueGray-50"><div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center mb-12">
                    <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                        <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">Web制作費用・相場の考え方</span>
                        <h2 className="text-4xl font-bold font-heading">
                            <span>費用を考えるには</span>
                            <span className="text-blue-600">プロが何人、何時間必要か</span>
                            <span>が基本</span>
                        </h2>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <p className="lg:pl-16 text-blueGray-400 leading-loose">つまりはその人件費。問い合わせを得るためにかかった広告費用や、ウェブサイトを制作・運用していく上で支払うサーバー費用やツール費用も見積もりに含まれますが、比較にならないほど大きいのはプロを動かすための費用です。</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 -mb-6">
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                        <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                            <IoSwapHorizontalSharp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                            <h3 className="mb-2 font-bold font-heading">ディレクター</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">プロジェクト全体を管理するのが役割。クライアントとのやり取りから調査、企画、管理環境構築、指示出し、点検など多岐にわたって活躍する。ディレクターの品質が成果物の良し悪しを決めると言っても過言ではないため、ミーティング時の印象によって発注の可否を決めるのが得策。</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                        <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                            <IoColorFillSharp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                            <h3 className="mb-2 font-bold font-heading">デザイナー</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">サイトの見た目を具現化する役割を担当。専用のソフトウェアを使い、エンジニアに渡す前のプロトタイプを作り上げる。目的や好みとデザイナーの強みが噛み合わないと成り立たないため、制作会社のサイト（SaaSEOであれば本サイト）が好きかどうかを判断基準に持つと良い。</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                        <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                            <IoCodeSharp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                            <h3 className="mb-2 font-bold font-heading">エンジニア（コーダー）</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">デザイナーの興したプロトタイプをオンライン上でWebサイトとして成り立つようにするのが役割。スマホ対応を担うのもエンジニア。専門的で時間もかかるため、量の多いサイトが高額になるのはエンジニアの作業量が増えるということでもある。</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                        <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                            <IoPencilSharp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                            <h3 className="mb-2 font-bold font-heading">コピーライター</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">サイトの見た目に即した文字数で、わかりやすさとSEOを意識した文章を書き上げるのが役割。ただ書くだけであれば誰でもできそうなタスクという印象に反して、内容理解と表現力をSEO意識を持って行うのはセンスと経験を要する。</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                        <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                            <IoRocketSharp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                            <h3 className="mb-2 font-bold font-heading">マーケター</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">競合や検索結果の状況を理解し、勝てるウェブ戦略を設計し、運用するのが役割。検索アルゴリズムや広告ツールへの深い理解が無いと務まらず、優秀なマーケターが居ないと作って終わりのサイトになりがちなため、実質必要不可欠。</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                        <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                            <IoCardSharp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                            <h3 className="mb-2 font-bold font-heading">UI/UX設計者</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">コンバージョンと呼ばれる目的達成事項を見据えつつ、訪問者（≒ユーザー）が最も気持ちの良い体験ができるように設計するのが役割。デザイナーが兼務することも多いが、大規模なウェブサイトになってくると比例的に必要性が増す。</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                        <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                            <IoTerminalSharp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                            <h3 className="mb-2 font-bold font-heading">システム設計者</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">レベルの高いウェブサイト構築の際にプログラミングを使って企画・設計・実装をするのが役割。CMSと呼ばれるメディア管理システムや、ポータルサイトと呼ばれる日々ページが自動的に増えていくサイト、ECなど複雑なウェブサイトを制作する際に必要になる。</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                        <div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
                            <IoCameraSharp className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                            <h3 className="mb-2 font-bold font-heading">コンテンツクリエイター</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">写真を取ったり、動画を撮影したりしてウェブサイトに合う形に編集していくのが役割。カメラマンや動画編集者など。手元に良い写真がなかったり、写真中心のウェブサイトを作っていく際に必要になる。</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <section className="bg-blueGray-50 py-4">
                <div className="container px-4 mx-auto">
                    <div className="w-full mb-6">
                        <h2 className="font-bold font-heading text-2xl">
                            <span>例1）</span>
                            <span className="text-blue-600">一般的なウェブサイトを</span>
                            <span>平均的なレベルのチームが取り組んだ場合</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/3 px-3 mb-6">
                            <div className="p-6 shadow bg-white rounded">
                                <div className="flex justify-between">
                                    <p className="text-sm md:text-base text-blueGray-400">総合計時間</p>
                                    <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">5名稼働</span>
                                </div>
                                <p className="text-3xl lg:text-4xl font-bold font-heading">300時間</p>

                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">ディレクター</span>100時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">デザイナー</span>60時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">エンジニア</span>80時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">コピーライター</span>40時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">マーケター</span>20時間
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6">
                            <div className="p-6 shadow bg-white rounded">
                                <div className="flex justify-between">
                                    <p className="text-sm md:text-base text-blueGray-400">平均時給</p>
                                    <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">5名平均</span>
                                </div>
                                <p className="text-3xl lg:text-4xl font-bold font-heading">3,500円</p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">ディレクター</span>3,000円/時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">デザイナー</span>3,000円/時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">エンジニア</span>4,000円/時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">コピーライター</span>2,500円/時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">マーケター</span>4,000円/時間
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6">
                            <div className="p-6 shadow bg-white rounded">
                                <div className="flex justify-between">
                                    <p className="text-sm md:text-base text-blueGray-400">合計金額</p>
                                    <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">概算</span>
                                </div>
                                <p className="text-3xl lg:text-4xl font-bold font-heading">105万円</p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">＋サーバー初期設定</span>3万円
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">＋ドメイン取得</span>2,000円〜10万円
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">＋広告運用費用</span>2万円/月
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">＋サーバー管理</span>2万円/月
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">＋毎月1度の修正</span>3万円/月
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blueGray-50 py-4"><div className="container px-4 mx-auto">
                <div className="w-full mb-6">
                    <h2 className="font-bold font-heading text-2xl">
                        <span>例2）</span>
                        <span className="text-blue-600">デザイン性が高く難しいウェブサイトを</span>
                        <span>ハイレベルなチームが取り組んだ場合</span>
                    </h2>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/3 px-3 mb-6">
                        <div className="p-6 shadow bg-white rounded">
                            <div className="flex justify-between">
                                <p className="text-sm md:text-base text-blueGray-400">総合計時間</p>
                                <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">8-12名稼働</span>
                            </div>
                            <p className="text-3xl lg:text-4xl font-bold font-heading">1,240時間</p>

                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">ディレクター</span>300時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">デザイナー</span>180時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">エンジニア</span>240時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">コピーライター</span>120時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">マーケター</span>60時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">UI/UX設計者</span>120時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">システム設計者</span>180時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">コンテンツクリエイター</span>40時間
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                        <div className="p-6 shadow bg-white rounded">
                            <div className="flex justify-between">
                                <p className="text-sm md:text-base text-blueGray-400">平均時給</p>
                                <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">8−12名平均</span>
                            </div>
                            <p className="text-3xl lg:text-4xl font-bold font-heading">5,500円</p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">ディレクター</span>5,000円/時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">デザイナー</span>5,000円/時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">エンジニア</span>5,000円/時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">コピーライター</span>3,500円/時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">マーケター</span>6,000円/時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">UI/UX設計者</span>6,000円/時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">システム設計者</span>7,000円/時間
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">コンテンツクリエイター</span>3,000円/時間
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6">
                        <div className="p-6 shadow bg-white rounded">
                            <div className="flex justify-between">
                                <p className="text-sm md:text-base text-blueGray-400">合計金額</p>
                                <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">概算</span>
                            </div>
                            <p className="text-3xl lg:text-4xl font-bold font-heading">682万円</p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">＋サーバー初期設定</span>20万円
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">＋ドメイン取得</span>2,000円〜10万円
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">＋広告運用費用</span>20万円/月
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">＋サーバー管理</span>5万円/月
                            </p>
                            <p className="text-sm md:text-base text-blueGray-500">
                                <span className="text-green-600">＋毎月2度の修正</span>6万円/月
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <section className="bg-blueGray-50 py-4">
                <div className="container px-4 mx-auto">
                    <div className="w-full mb-6">
                        <h2 className="font-bold font-heading text-2xl">
                            <span>例3）</span>
                            <span className="text-blue-600">本サイトレベルのものを</span>
                            <span>SaaSEOが取り組んだ場合</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/3 px-3 mb-6">
                            <div className="p-6 shadow bg-white rounded">
                                <div className="flex justify-between">
                                    <p className="text-sm md:text-base text-blueGray-400">総合計時間</p>
                                    <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">4名稼働</span>
                                </div>
                                <p className="text-3xl lg:text-4xl font-bold font-heading">180時間</p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">ディレクター</span>40時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">エンジニア兼デザイナー</span>80時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">コピーライター</span>40時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">マーケター</span>20時間
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6">
                            <div className="p-6 shadow bg-white rounded">
                                <div className="flex justify-between">
                                    <p className="text-sm md:text-base text-blueGray-400">平均時給</p>
                                    <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">4名平均</span>
                                </div>
                                <p className="text-3xl lg:text-4xl font-bold font-heading">4,000円</p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">ディレクター</span>4,000円/時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">エンジニア兼デザイナー</span>4,500円/時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">コピーライター</span>3,500円/時間
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">マーケター</span>4,000円/時間
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6">
                            <div className="p-6 shadow bg-white rounded">
                                <div className="flex justify-between">
                                    <p className="text-sm md:text-base text-blueGray-400">合計金額</p>
                                    <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">概算</span>
                                </div>
                                <p className="text-3xl lg:text-4xl font-bold font-heading">72万円</p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">＋サーバー初期設定</span>3万円
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">＋ドメイン取得</span>2,000円〜10万円
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">＋広告運用費用</span>2万円/月
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">＋サーバー管理</span>1万円/月
                                </p>
                                <p className="text-sm md:text-base text-blueGray-500">
                                    <span className="text-green-600">＋毎月1度の修正</span>3万円/月
                                </p>
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

export default FirstTimer
