import Head from 'next/head'
import React from 'react';
import Nava from '../components/Layout.js';
import Bodys from '../components/Body';
import Link from 'next/link'

export default function Home() {
  return (
    <Nava>
      <Bodys></Bodys>
    </Nava>
  )
}
