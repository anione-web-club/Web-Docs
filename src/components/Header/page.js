import './style.css'

import Link from 'next/link'

import style from './style.module.css'

export default function Header() {
  return (
    <>
      <header>
        <div className={style.headerContent}>
          <Link className={`${style.title} ${style.noneDeco}`} href="/">웹 프로그래밍 동아리</Link>
        </div>
      </header>
    </>
  )
}