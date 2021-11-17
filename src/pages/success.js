import React from 'react'
import Layout from '../components/Layout'

const success = () => {
    return (
        <Layout>
            <h1>受け取りました！</h1>
            <p>1-3営業日以内にメールにてご返信致します。メールアドレスの打ち間違い等で返信ができない可能性がございますので、その場合は<span className="text-blue-600"><a href="mailto:contact@saaseo.com">contact@saaseo.com</a></span>までご連絡ください。</p>
        </Layout>
    )
}

export default success
