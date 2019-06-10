import React from 'react'
import NextHead from 'next/head'

const Head = ({ description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>Steven Zuber</title>
    <meta name="description" content={description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </NextHead>
)

export default Head