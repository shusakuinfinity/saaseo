import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import Layout from '../components/Layout'

const Compliance = () => {
    const contents = [
        {
            title: '法人名',
            text: 'SaaSEO合同会社（サーエスイーオーゴウドウガイシャ）',
        },
        {
            title: '運営統括責任者',
            text: '上田 周作',
        },
        {
            title: '所在地',
            text: '〒444-3175 愛知県岡崎市真伝二丁目七番地1',
        },
        {
            title: '電話番号',
            text: '070-8547-4445',
        },
        {
            title: '電話受付時間',
            text: '平日 10:00〜18:00',
        },
        {
            title: 'メールアドレス',
            text: 'contact@saaseo.dev',
        },
        {
            title: 'ホームページURL',
            text: 'https://saaseo.dev',
        },
        {
            title: '販売価格',
            text: '各商品ページに記載',
        },
        {
            title: '商品代金以外の必要料金',
            text: '消費税',
        },
        {
            title: '引き渡し時期',
            text: 'ご注文後すぐに使用可能になります。',
        },
        {
            title: '支払方法',
            text: 'クレジットカード（オンライン決済）',
        },
        {
            title: '返品・交換・キャンセル等',
            text: 'サービスの性質上、返品・返金はお受けしておりません。商品に不備があった場合、5日以内にサポート窓口（contact@saaseo.dev）までご連絡ください。',
        },
        {
            title: '中途解約について',
            text: '年間契約の途中の解約となった場合も12ヶ月分の料金が発生し、日割清算等による返金を含めた一切の返金は行われません。',
        },
        {
            title: 'ソフトウェアの動作環境',
            text: '以下のブラウザでの動作を保証しています。Google Chrome、Microsoft Edge、Mozilla Firefox、Apple Safari。',
        }
    ]
    return (
        <Layout>
            <GatsbySeo
                title="特定商取引法に基づく表記 - SaaSEO"
                description="特定商取引法に基づく表記のページです。"
            />
            <h1 className="text-4xl font-bold text-center py-10">特定商取引法に基づく表記</h1>
            <div className="pb-10 px-4 grid justify-center ring-1 ring-gray-800">
                {
                    contents.map((content, index) => {
                        return (
                            <div key={index} className="py-4 grid grid-cols-2 border-b border-gray-800 max-w-3xl">
                                <p className="text-sm text-gray-600">{content.title}</p>
                                <p className="text-sm">{content.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Compliance
