import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from "../components/Layout"
import CtaYellow from "../components/CtaYellow"
import { IoPeopleCircleSharp, IoSpeedometerSharp, IoSearchCircleSharp, IoPhonePortrait } from "react-icons/io5"

export default function Home() {
  return (
    <Layout>
      <GatsbySeo
        title='岡崎市のホームページ制作会社【SaaSEO】集客力が強みのWeb制作会社'
        description='SEOやマーケティングを強くして、結果につながるサイトを作りたい方はぜひ我々にご相談ください。日本・海外IT領域の最前線で活躍をしているメンバーが、貴社のネット周りを改善致します。無料のオンライン相談、岡崎市周辺であれば対面でのご相談も可能です。'
      />

      <section className="bg-blueGray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full lg:w-1/2 px-3">
              <div className="py-12">
                <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                  <h1 className="text-white text-xs md:text-sm">岡崎市のホームページ制作会社/Webサイト制作会社 - SaaSEO</h1>
                  <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                    <span className="text-yellow-200">結果につながる</span>
                    <span className="text-white">ウェブ戦略を実現します</span>
                  </h2>
                  <p className="leading-relaxed text-blueGray-400">日本・海外IT領域の最前線で活躍をしているメンバーが、貴社のネット戦略改善をお手伝い致します。無料のオンライン相談、岡崎市周辺であれば対面でのご相談も可能です。</p>
                </div>
                <div className="text-center lg:text-left"><Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="quotation">見積り依頼</Link><Link className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="contact">無料相談する</Link></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0">
              <div className="lg:h-128 flex items-center justify-center">
                <StaticImage className="lg:max-w-lg" src="../assets/images/work-tv.png" placeholder="blurred" alt="岡崎市のホームページ制作会社 SaaSEO合同会社" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-8"><div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto mb-12 text-center">
          <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">Issues and Solutions</span>
          <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">こんな問題を解決します</h2>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-12 px-3">
            <div className="text-center">
              <span className="inline-block p-5 mb-6 bg-blue-600 text-white rounded-full">
                <IoPeopleCircleSharp className="h-12 w-12" />
              </span>
              <h4 className="mb-3 text-lg font-semibold font-heading">ホームページで集客がしたいけど何をすれば？</h4>
              <p className="text-blueGray-400 leading-loose text-sm">作って満足！という現場を今まで数え切れないほど見てきました。でも、実はそれがスタート地点。SaaSEOは包括的な解決策の実現と運用方法を提供します。</p>
              <Link className="block sm:inline-block py-4 px-8 my-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/first-timer">初めての方へ</Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-12 px-3">
            <div className="text-center">
              <span className="inline-block p-5 mb-6 bg-blue-600 text-white rounded-full">
                <IoSpeedometerSharp className="h-12 w-12" />
              </span>
              <h4 className="mb-3 text-lg font-semibold font-heading">サイトが遅い・・・どうにかならない？</h4>
              <p className="text-blueGray-400 leading-loose text-sm">サイトが遅い理由のほとんどはサイト品質のせい。日々進化しているウェブ技術に対応しているWeb制作会社はごくわずか。我々は爆速を実現します。</p>
              <Link className="block sm:inline-block py-4 px-8 my-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/blazing-fast">爆速サイト詳細へ</Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-12 px-3">
            <div className="text-center">
              <span className="inline-block p-5 mb-6 bg-blue-600 text-white rounded-full">
                <IoSearchCircleSharp className="h-12 w-12" />
              </span>
              <h4 className="mb-3 text-lg font-semibold font-heading">SEO対策が大事と聞いたけど、さっぱりわからない。</h4>
              <p className="text-blueGray-400 leading-loose text-sm">SEOは直訳すると"検索への最適化"ですが、大事なのは"競合より一歩抜きん出ること"です。SaaSEOは3つの基本で確実に競合に勝つお手伝いをします。</p>
              <Link className="block sm:inline-block py-4 px-8 my-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/seo">SEO対策詳細へ</Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-12 px-3">
            <div className="text-center">
              <span className="inline-block p-5 mb-6 bg-blue-600 text-white rounded-full">
                <IoPhonePortrait className="h-12 w-12" />
              </span>
              <h4 className="mb-3 text-lg font-semibold font-heading">スマホで見ても綺麗なサイトがほしいのに・・・</h4>
              <p className="text-blueGray-400 leading-loose text-sm">サイト制作現場も日々進化している一方、大半の業者は5年以上前の技術に頼り切りです。SaaSEOは最新技術を駆使して安定的なスマホ対応を実現します。</p>
              <Link className="block sm:inline-block py-4 px-8 my-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/responsive">レスポンシブ/スマホ対応へ</Link>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="pt-20 pb-20 lg:pb-12"><div className="flex flex-wrap">
        <div className="relative w-full lg:w-1/2 px-4 lg:h-128">
          <div className="relative lg:absolute left-0 top-0 lg:max-w-6xl mx-auto lg:-ml-64">
            <StaticImage className="lg:h-128" placeholder="blurred" src="../assets/images/Responsive.jpg" alt="" />
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 lg:max-w-lg lg:h-128 px-4 lg:pl-16">
          <div className="my-auto mx-auto pt-8 lg:pt-0 max-w-2xl lg:max-w-lg">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
              <span>スマホでもPCでも</span>
              <span className="text-blue-600">老若男女</span>
              <span>誰でもわかりやすいデザイン設計</span>
            </h2>
            <p className="text-blueGray-400 leading-loose mb-6">アニメーションが豊富なホームページは、ウェブ上の芸術とも言える格好良さがあります。しかし反面、わかりやすさを損なう危険性をはらんでいます。当社は"classic Never Gets Old"をデザインコンセプトに据えて、わかりやすくて結果に繋がりやすいウェブサイトを制作します。</p>
            <Link className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/responsive">更に詳しく</Link>
          </div>
        </div>
      </div>
      </section>

      <section className="pt-20 pb-20 lg:pb-12 overflow-x-hidden"><div className="flex flex-wrap">
        <div className="flex order-1 lg:order-0 w-full lg:w-1/2 lg:h-128 lg:max-w-lg lg:ml-auto px-4 lg:pr-24 xl:pr-4">
          <div className="my-auto mx-auto pt-8 lg:pt-0 max-w-2xl lg:max-w-lg">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
              <span>SEOなど集客に必要な環境を</span>
              <span className="text-blue-600">百戦錬磨のプロが実装</span>
              <span>そして簡易化して運用方法をご提供</span>
            </h2>
            <p className="text-blueGray-400 leading-loose mb-6">当社は10万人を超える登録者、2,000社以上の企業をインターネット・マーケティングで獲得し、会社を運用した実績を持つプロが設立した会社です。難しい初期設定はウェブサイト制作時に完了し、長期に渡る運用が必要であればお客様に合わせて簡易化した運用資料をお渡しします。また、プロジェクト完了後の月例会議等も設定可能です。</p>
            <Link className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/seo">更に詳しく</Link>
          </div>
        </div>
        <div className="relative order-0 lg:order-1 w-full lg:w-1/2 px-4 lg:h-128">
          <div className="relative lg:absolute right-0 top-0 lg:max-w-6xl mx-auto lg:-mr-64">
            <StaticImage className="lg:h-128" placeholder="blurred" src="../assets/images/SEO.jpg" alt="SEO対策 コンサルティング会社" />
          </div>
        </div>
      </div>
      </section>

      <section className="pt-20 pb-20 lg:pb-12"><div className="flex flex-wrap">
        <div className="relative w-full lg:w-1/2 px-4 lg:h-128">
          <div className="relative lg:absolute left-0 top-0 lg:max-w-6xl mx-auto lg:-ml-64">
            <StaticImage className="lg:h-128" src="../assets/images/SaaS.jpg" placeholder="blurred" alt="SaaS導入支援" />
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 lg:max-w-lg lg:h-128 px-4 lg:pl-16">
          <div className="my-auto mx-auto pt-8 lg:pt-0 max-w-2xl lg:max-w-lg">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
              <span>本当に大事なのは</span>
              <span className="text-blue-600">経営課題に即した設計段階</span>
              <span>SaaS活用も含めてご提案</span>
            </h2>
            <p className="text-blueGray-400 leading-loose mb-6">ホームページがあればきっと良くなる、上手く行く！というふわっとした直感を我々は汲み取り、言語化し、さらに設計から実装までお手伝いします。国内外で触れてきた優秀なサービスを使えば、自動化・省力化が図れることも多いです。</p>
            <Link className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/saas">更に詳しく</Link>
          </div>
        </div>
      </div>
      </section>

      <section className="py-20 bg-blueGray-800"><div className="container px-4 mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="mb-4 text-3xl lg:text-4xl text-white font-bold font-heading">
            <span>何から始めればいいかわからない？</span>
            <span className="text-yellow-200">大丈夫。</span>
            <span>無料相談で状況整理をお手伝いします。</span>
          </h2>
          <p className="text-blueGray-200">ご連絡を頂ければ、相談可能な日程をお送り致します。</p>
          <div className="py-8">
            <Link className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/contact">お問い合わせする</Link>
            <Link className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl" to="/quotation">見積り依頼をする</Link>
          </div>
        </div>
      </div>
      </section>

      <section className="py-20"><div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto mb-12 text-center">
          <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">Our Team</span>
          <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">我々が課題解決に取り組みます</h2>
          <p className="text-blueGray-400 leading-loose">必要に応じて国内外のプロフェッショナルと協業することで、予算に応じたベスト・ソリューションを提供します。</p>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-12 text-center md:text-left">
          <div className="flex flex-col md:flex-row px-3 mb-12">
            <StaticImage className="h-64 w-64 md:w-192 rounded mx-auto" placeholder="blurred" src="../assets/images/Shusaku.jpeg" alt="SaaSEO founder 1" />
            <div className="pt-6 md:pt-2 md:pl-6">
              <p className="text-xl">上田 周作（Shusaku Ueda）</p>
              <p className="my-2 text-blue-600">CEO / Programmer / Marketer</p>
              <p className="leading-loose text-blueGray-400">愛知県岡崎市出身。タイ・バンコクの広告代理店で3年間マーケティングを実践、マレーシア・KLにて4年間、人材企業とIT企業の2社同時経営をする。30歳で帰国後、東京のWeb制作会社に携わりながら、SaaSEOを設立。</p>
            </div>
          </div>
          <div className="w-full text-center px-4 pb-10">
            <Link className="block sm:inline-block py-4 px-8 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/about-us">SaaSEOの会社概要へ</Link>
          </div>
        </div>
      </div>
      </section >

      <section className="pt-20 bg-blueGray-50"><div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto mb-12 text-center">
          <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">Services</span>
          <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">再現性のある成功体験のために</h2>
          <p className="text-blueGray-400 leading-loose">ホームページ制作を軸に、目的達成に重要な解決策を取り揃えています</p>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-1/2 lg:w-1/4 px-3 mb-20 transform hover:-translate-y-1 duration-200 hover:shadow-xl text-center">
            <StaticImage className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" src="../assets/icons/advertisement.png" alt="岡崎市 広告運用" /><h3 className="sm:text-2xl font-bold font-heading">Google Ads広告運用</h3>
          </div>
          <div className="w-1/2 lg:w-1/4 px-3 mb-20 transform hover:-translate-y-1 duration-200 hover:shadow-xl text-center">
            <StaticImage className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" src="../assets/icons/analytics.png" alt="岡崎市 SEOコンサルティング" /><h3 className="sm:text-2xl font-bold font-heading">SEO対策</h3>
          </div>
          <div className="w-1/2 lg:w-1/4 px-3 mb-20 transform hover:-translate-y-1 duration-200 hover:shadow-xl text-center">
            <StaticImage className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" src="../assets/icons/hourglass.png" alt="愛知県 SaaS導入" /><h3 className="sm:text-2xl font-bold font-heading">SaaS導入</h3>
          </div>
          <div className="w-1/2 lg:w-1/4 px-3 mb-20 transform hover:-translate-y-1 duration-200 hover:shadow-xl text-center">
            <StaticImage className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" src="../assets/icons/calculation.png" alt="愛知県 UI/UXデザイン" /><h3 className="sm:text-2xl font-bold font-heading">UI/UXデザイン</h3>
          </div>
          <div className="w-1/2 lg:w-1/4 px-3 mb-20 transform hover:-translate-y-1 duration-200 hover:shadow-xl text-center">
            <StaticImage className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" src="../assets/icons/card-payment.png" alt="愛知県 MEO対策" /><h3 className="sm:text-2xl font-bold font-heading">Google My Business, MEO対策</h3>
          </div>
          <div className="w-1/2 lg:w-1/4 px-3 mb-20 transform hover:-translate-y-1 duration-200 hover:shadow-xl text-center">
            <StaticImage className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" src="../assets/icons/podcast.png" alt="愛知県 Jamstack" /><h3 className="sm:text-2xl font-bold font-heading">超高速サイト(Jamstack)構築</h3>
          </div>
          <div className="w-1/2 lg:w-1/4 px-3 mb-20 transform hover:-translate-y-1 duration-200 hover:shadow-xl text-center">
            <StaticImage className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" src="../assets/icons/online-shopping.png" alt="岡崎市 ECサイト制作" /><h3 className="sm:text-2xl font-bold font-heading">ECサイト構築・運用指南</h3>
          </div>
          <div className="w-1/2 lg:w-1/4 px-3 mb-20 transform hover:-translate-y-1 duration-200 hover:shadow-xl text-center">
            <StaticImage className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" src="../assets/icons/video-web.png" alt="岡崎市 メディア運用" /><h3 className="sm:text-2xl font-bold font-heading">自社メディア構築・運用指南</h3>
          </div>
        </div>
        <div className="w-full text-center pb-10">
          <Link className="block sm:inline-block py-4 px-8 sm:mb-0 sm:mr-3 text-xs text-center font-semibold leading-none rounded transform hover:-translate-y-1 duration-200 hover:shadow-xl bg-yellow-200 hover:bg-yellow-300 text-blueGray-500 hover:text-blueGray-600" to="/contact">こちらよりお気軽にお問い合わせください</Link>
        </div>
      </div>
      </section>

      <section className="py-12 md:py-20"><div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
            <div className="max-w-md mx-auto lg:ml-0 mb-6 lg:mb-0 px-4 md:px-0">
              <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">Achievements</span>
              <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">こんなウェブサイトを作ってきました</h2>
              <p className="text-blueGray-400 leading-loose">ファーストビューで訪問者が求めているウェブサイトであることを伝えて離脱を低減。同時にスマホにも対応した洗練されたデザインでスクロールダウンをするだけで詳細が想像できる体験を実現。戦略的に配置されたアクションボタンによって訪問者を自然と目的のページへ導き、会員登録や問い合わせといった主目的を達成。この現象を繰り返し生むための緻密なSEO対策と最適化された広告運用により、今現在もウェブサイトが優秀な自動セールスマンとなって目的達成を続けています。</p>
            </div>

          </div>
          <div className="w-full lg:w-2/3 flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-6 lg:mb-0">
              <StaticImage className="w-full object-cover rounded h-192 transform hover:-translate-y-3 duration-300" placeholder="blurred" src="../assets/images/KL-WING.png" alt="SaaSEO 実績 1" /></div>
            <div className="w-full md:w-1/2 px-3">
              <StaticImage className="w-full object-cover rounded h-192 transform hover:-translate-y-3 duration-300" placeholder="blurred" src="../assets/images/Seekers.png" alt="SaaSEO 実績 2" /></div>
          </div>
        </div>
      </div>
      </section>

      <CtaYellow />

    </Layout >
  )
}
