import Link from 'next/link'

import style from './style.module.css'

export default function Sidebar() {
  return (
    <>
      <div className={style.sidebar}>
        <ul>
          <li><Link href="/">HTML 기초</Link></li>
          <li><Link href="/">HTML 기본 구조</Link></li>
          <li><Link href="/">HTML 요소 구조</Link></li>
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