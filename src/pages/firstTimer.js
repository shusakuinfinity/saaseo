import React from 'react'
import { Link } from 'gatsby'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const firstTimer = ({ location }) => {
    return (
        <div>
            <Breadcrumb location={location} crumbLabel="初めての方へ" />
            <h1 className="text-red-600">Hi world</h1>
            <Link to="/">トップへ</Link>
        </div>
    )
}

export default firstTimer
