import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <GatsbySeo
        title='SaaSEOホームページ'
        description='説明文がここに入ります。'
      />
      <div className="font-heading text-red-600">This is a SaaSEO website</div>
      <Link to="/firstTimer">初めての方へ</Link>
      <StaticImage
        src="../assets/images/Shusaku.jpeg"
        alt="Shusaku Ueda"
      />
    </Layout>
  )
}
