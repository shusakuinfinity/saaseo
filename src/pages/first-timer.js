import React from 'react'
import { Link } from 'gatsby'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Layout from '../components/Layout'

const firstTimer = ({ location }) => {
    return (
        <Layout>
            <Breadcrumb location={location} crumbLabel="初めての方へ" />
            <h1 className="text-red-600">Hi world</h1>
            <Link to="/">トップへ</Link>
        </Layout>
    )
}

export default firstTimer
