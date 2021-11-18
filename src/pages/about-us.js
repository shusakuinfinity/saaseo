import React from 'react'
import Layout from '../components/Layout'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LocalBusinessJsonLd } from 'gatsby-plugin-next-seo';
import DotsLeft from '../assets/icons/dots-left.svg'
import DotsRight from '../assets/icons/dots-right.svg'

const AboutUs = () => {
    return (
        <Layout>
            <GatsbySeo
                title="会社案内 - 岡崎市のWeb制作ならSaaSEO合同会社"
                description="SaaSEOの会社案内ページ。当社のミッション、ビジョン、メンバー、会社情報を掲載しております。Web制作、SEOコンサルティング、SaaS導入など、オンライン戦略でお悩みの方はぜひお問い合わせください。"
            />
            <LocalBusinessJsonLd
                type='ProfessionalService'
                name="Webサイト制作・SEOコンサルティングのSaaSEO合同会社"
                description="SEOやマーケティングを強くして、結果につながるサイトを作りたい方はぜひ我々にご相談ください。日本・海外IT領域の最前線で活躍をしているメンバーが、貴社のネット周りを改善致します。無料のオンライン相談、岡崎市周辺であれば対面でのご相談も可能です。"
                url='https://saaseo.com'
                telephone='+817085474445'
                founder='上田 周作'
                address={{
                    streetAddress: '真伝2丁目7番地1',
                    addressLocality: '岡崎市',
                    addressRegion: '愛知県',
                    postalCode: '444-3175',
                    addressCountry: 'JP',
                }}
                geo={{
                    latitude: '34.980888005015544',
                    longitude: '137.18215843774652',
                }}
                images={[
                    '../assets/images/logo_SaaSEO_black.svg',
                ]}
            />
            <section className="py-20">
                <div className="container px-4 mx-auto bg-blueGray-50/80 -skew-y-12">
                    <div className="relative py-20 px-4 lg:p-20">
                        <div className="absolute top-0 left-0 -mt-8">
                            <DotsLeft className="h-16" />
                        </div>
                        <div className="max-w-lg mx-auto text-center">
                            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading">Beyond The Comfort Zone</h2>
                            <h1 className="mb-4 text-xl lg:text-2xl font-bold font-heading">
                                <span className="text-blue-600">快適な領域から一歩踏み出す</span>
                                <span>お手伝いをします</span>
                            </h1>
                            <p className="mb-8 text-blueGray-400">きっとこのままじゃ良くないだろう、と思っても変化への一歩が踏み出せない。特にインターネット関連のことはわからないことばかりだから、余計にそうなってしまう。我々はそんなときこそ寄り添い、Comfort Zoneを抜け出して一緒にチャンスを掴みにいきます。</p>
                        </div>
                        <div className="absolute bottom-0 right-0 -mb-8">
                            <DotsRight className="h-16" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12">
                        <div className="lg:w-1/3 lg:pr-16 mb-2 lg:mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">会社情報</h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <h4 className="mb-2 md:mb-4 text-xl font-semibold">社名</h4>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">SaaSEO合同会社</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <h4 className="mb-2 md:mb-4 text-xl font-semibold">英文社名</h4>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">SaaSEO LLC</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <h4 className="mb-2 md:mb-4 text-xl font-semibold">所在地</h4>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">〒444−3175 愛知県岡崎市真伝2丁目7番地1</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <h4 className="mb-2 md:mb-4 text-xl font-semibold">電話番号</h4>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">070-8547-4445</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <h4 className="mb-2 md:mb-4 text-xl font-semibold">メールアドレス</h4>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">contact@saaseo.com</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <h4 className="mb-2 md:mb-4 text-xl font-semibold">URL</h4>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">saaseo.com</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <h4 className="mb-2 md:mb-4 text-xl font-semibold">資本金</h4>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">100,000円</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <h4 className="mb-2 md:mb-4 text-xl font-semibold">設立</h4>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">2021年11月11日</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <h4 className="mb-2 md:mb-4 text-xl font-semibold">役員</h4>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">代表社員 上田周作</p>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">業務執行社員 山本綾哉</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <h4 className="mb-2 md:mb-4 text-xl font-semibold">従業員数</h4>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">2名（外部4名）</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <h4 className="mb-2 md:mb-4 text-xl font-semibold">事業内容</h4>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">Webサイト制作</p>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">SEOコンサルティング</p>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">広告運用コンサルティング</p>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">SaaS導入支援</p>
                            <p className="text-sm md:text-base leading-loose text-blueGray-500">システム開発</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutUs
