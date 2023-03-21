import './style.css'

import Link from 'next/link'

import style from './style.module.css'

export default function Header() {
  return (
    <>
      <header>
        <div className={style.headerContent}>
          <Link className={`${style.title} ${style.noneDeco}`} href="/">HTML</Link>
        </div>
      </header>
    </>
  )
}