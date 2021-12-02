import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Services from '../components/Services'
import { FAQJsonLd } from 'gatsby-plugin-next-seo'
import CtaBlack from '../components/CtaBlack'

const Subsidy = () => {
    return (
        <Layout>

            <CtaBlack />
            <Services />
        </Layout>
    )
}

export default Subsidy
