import React from 'react'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Layout from '../components/Layout'

const seo = ({ location }) => {
    return (
        <Layout>
            <div className="flex flex-wrap">
                <Breadcrumb location={location} crumbLabel="SEO対策" />
            </div>
        </Layout>
    )
}

export default seo
