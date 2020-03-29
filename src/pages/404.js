import React from "react"

import { Layout } from "../components/Layout"
import SEO from "../components/SEO"

export const Page404 = data => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title="404: Not Found" description="nothing found" siteUrl={"ddd"} />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default Page404
