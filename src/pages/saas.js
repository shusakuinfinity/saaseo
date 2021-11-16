import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Blob from '../assets/icons/blob-tear.svg'
import CtaWhite from '../components/CtaWhite'
import CtaBlack from '../components/CtaBlack'
import Services from '../components/Services'

const saas = () => {
    return (
        <Layout>
            <GatsbySeo
                title="SaaS導入・テクノロジーコンサルタントが必要なら【SaaSEO】無料相談も可能"
                description="サービスの多さと、よくわからない単語が並ぶSaaS。いざ導入となると意外と簡単にできるものもある一方、機能が多すぎたり、管理プラットフォームが多くなりすぎて後戻りがしにくくなるのもSaaSの難しさ。テクノロジー企業第一線で活躍しているSaaSEOチームが解説、無料相談にのります。"
            />

            <section className="py-12 overflow-x-hidden bg-blueGray-800">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap">
                        <div className="w-full lg:w-1/2">
                            <div className="py-6 lg:pr-32 md:pr-10">
                                <div className="mb-4 text-center md:text-left">
                                    <h1>
                                        <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">SaaSの導入で自動化・効率化を図ろう！</span>
                                    </h1>
                                    <h2 className="text-4xl mt-3 font-bold font-heading text-white">SaaS導入がしたい方、不安な方へ</h2>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">SaaS導入の概要</h3>
                                        <p className="text-blueGray-400 leading-loose">SaaSとは何か、何ができるのか、なぜ使うのか？</p>
                                    </div>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">SaaSの特徴紹介</h3>
                                        <p className="text-blueGray-400 leading-loose">どんなメリットがあるのか？</p>
                                    </div>
                                </div>
                                <div className="flex items-start py-4">
                                    <div className="w-8 mr-5 text-blue-500">
                                        <svg className="w-8 h-8 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg></div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold font-heading text-white">SaaSEOの導入支援手順</h3>
                                        <p className="text-blueGray-400 leading-loose">具体的にどうするのか？</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                            <StaticImage className="relative mx-auto rounded-xl w-full z-10" src="../assets/images/saasInstall.jpeg" placeholder="blurred" alt="愛知県のSaaS導入支援会社" />
                            <Blob className="absolute top-0 left-0 -ml-12 -mt-12 w-20" />
                            <Blob className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg mx-auto mb-12 text-center">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">SaaS導入の概要・特徴</span>
                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">SaaSは導入しやすくて、連携させやすいソフトウェア</h2>
                        <p className="text-blueGray-400 leading-loose">クラウドベースで動くと言われるSaaS。難しい表現ですが、要はダウンロード不要の便利アプリです。この簡易さでSaaS同士を連携させて作業の効率化や自動化ができ、省力化の実現が可能になります。</p>
                    </div>
                    <div className="flex flex-wrap -mx-3 -mb-12 text-center md:text-left">
                        <div className="lg:w-1/2 flex flex-col md:flex-row px-3 mb-12">
                            <StaticImage className="md:w-192 rounded mx-auto" src="../assets/images/lessIssues.jpeg" alt="SaaS導入支援会社 1" /><div className="pt-6 md:pt-2 md:pl-6">
                                <p className>特徴1</p>
                                <p className="my-2 text-blue-600 text-xl">問題が少ない</p>
                                <p className="leading-loose text-blueGray-400">普通の会計ソフトやセキュリティソフトを導入した場合、PCとの互換性やアップデートによって使い物にならないケースがありますが、SaaSは端末に依存しないため導入もメンテナンスもお手軽です。</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col md:flex-row px-3 mb-12">
                            <StaticImage className="md:w-160 rounded mx-auto" src="../assets/images/easySync.jpeg" alt="SaaS導入支援会社 2" /><div className="pt-6 md:pt-2 md:pl-6">
                                <p className>特徴2</p>
                                <p className="my-2 text-blue-600 text-xl">連携がしやすい＝自動化装置が組める</p>
                                <p className="leading-loose text-blueGray-400">配給元のコンピュータで動くSaaSは、他のSaaSとの繋ぎ合わせが想定されていることが多いです。うまくいけば人の手を介すること無く日々の作業が片付きます。</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col md:flex-row px-3 mb-12">
                            <StaticImage className="md:w-192 rounded mx-auto" src="../assets/images/goodSupport.jpeg" alt="SaaS導入支援会社 3" /><div className="pt-6 md:pt-2 md:pl-6">
                                <p className>特徴3</p>
                                <p className="my-2 text-blue-600 text-xl">サポートが受けやすい</p>
                                <p className="leading-loose text-blueGray-400">例えば金銭のやり取りがある決済ソフトや決済セキュリティソフトをSaaSで行えば、配給元が問題の発見から解決まで着手しやすいため、低煩雑で素早いサポートが期待できます。</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col md:flex-row px-3 mb-12">
                            <StaticImage className="md:w-192 rounded mx-auto" src="../assets/images/variation.jpeg" alt="SaaS導入支援会社 4" /><div className="pt-6 md:pt-2 md:pl-6">
                                <p className>特徴4</p>
                                <p className="my-2 text-blue-600 text-xl">ラインナップが豊富</p>
                                <p className="leading-loose text-blueGray-400">今やほとんどの業務効率化ソフト開発企業はSaaSの開発を行っており、必要なものが見つかる環境にあります。ただ、SaaS導入しすぎ問題も多発しているため、導入支援の需要が増しています。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaWhite />

            <section className="py-20 bg-blueGray-50">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">
                                <span>大事なのは</span>
                                <span className="text-blue-600">経営・運営課題を明確にした</span>
                                <span>SaaS導入計画の組み立て</span>
                            </h2>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-16">
                            <p className="text-blueGray-400 leading-loose">SaaSは万能薬というわけではなく、問題に即した選択をしない限り、むしろ現状からの改悪になってしまうことがあります。経営課題を明確にし、改善後の形がイメージできれば理想の業務環境が実現できます。</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 -mb-6 text-center">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>
                                <StaticImage className="h-48 mx-auto my-4" src="../assets/images/work-tv.png" alt="" /><h3 className="mb-2 font-bold font-heading">SaaSコンサルタントとの相談</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">どんな企業、店舗でも「もっとこうだったらいいのにな」という顕在化した問題があります。また、我々が聞き取りをする中で見えてくる「ここをこうしたらこんなことができる」という潜在的な可能性もあります。それらをリスティングし、現状から飛躍させすぎずに便利にできるよう、プロの知見を活かして計画します。</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
                                <StaticImage className="h-48 mx-auto my-4" src="../assets/images/people-watching.png" alt="" /><h3 className="mb-2 font-bold font-heading">使用するSaaSの選定</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">SaaSの中には一つで多くの問題を解決できるもの、分野単位で解決できるもの、一つの問題を解決するもの、またそれらをつなぎ合わせることができるものなど様々です。コスト面も考えながらよりシンプルに、使いやすい環境を整えることが、長期的な利益をもたらします。</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-3 mb-6">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
                                <StaticImage className="h-48 mx-auto my-4" src="../assets/images/financial-report.png" alt="" /><h3 className="mb-2 font-bold font-heading">SaaS導入、導入後支援の明確化</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">導入後に使い方を覚えることはもちろんのこと、想定された将来の問題があります。SaaSの利点、サポート性を活かすためにも、想定された問題に対するコミュニケーションガイドラインを作成し、プロジェクトの完了を目指します。</p>
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

export default saas
