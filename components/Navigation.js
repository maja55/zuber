import React from 'react'
import Link from 'next/link'

export default () => (
    <ul>
        <li><Link href="/"><a href="/">Home</a></Link></li>
        <li><Link href="/life"><a href="/life">Life</a></Link></li>
    </ul>
)
