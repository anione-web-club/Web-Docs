import style from './style.module.css'

import P from '@/components/tag/p'
import HNum from '@/components/tag/hNum'

export default function() {
  return (
    <>
      <div className={style.content}>
        <h1>HTML 텍스트 태그</h1>
        <hr />
        <div className={style.text}>
          <P />
          <HNum />
        </div>
      </div>
    </>
  )
}