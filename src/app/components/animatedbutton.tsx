'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react'

export default function AnimatedButton({
    children, link
  }: {
    children: React.ReactNode, link: any
  }) {
  return (
    <a href={link} className='group mr-3 rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 inline-flex'>
        <p className='text-black dark:text-white inline-block transition-transform group-hover:-translate-y-1 motion-reduce:transform-none ml-1'>{children}</p>
    </a>
  )
}
