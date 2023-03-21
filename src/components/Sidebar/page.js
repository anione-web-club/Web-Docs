import Link from 'next/link'

import style from './style.module.css'

export default function Sidebar() {
  return (
    <>
      <div className={style.sidebar}>
        <ul>
          <li><Link href="/">HTML 개요</Link></li>
        </ul>
      </div>
    </>
  )
}