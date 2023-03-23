import Link from 'next/link'

import style from './style.module.css'

export default function Sidebar() {
  return (
    <>
      <div className={style.sidebar}>
        <h1 className={style.textCenter}>HTML</h1>
        <hr />
        <ul>
          <li><Link href="/basic">HTML 기초</Link></li>
          <li><Link href="/basicStructure">HTML 기본 구조</Link></li>
          <li><Link href="/elementStructure">HTML 요소 구조</Link></li>
          <li><Link href="/">HTML 텍스트 요소</Link></li>
          <li><Link href="/">HTML 기본 요소</Link></li>
          <li><Link href="/">HTML 리소스 요소</Link></li>
          <li><Link href="/">HTML 입력 요소</Link></li>
          <li><Link href="/">HTML 확장</Link></li>
        </ul>
      </div>
    </>
  )
}