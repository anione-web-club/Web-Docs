import style from './style.module.css'

export default function() {
  return (
    <>
      <div className={style.content}>
        <h1>HTML 요소 구조</h1>
        <hr />
        <div className={style.text}>
          <p>
            HTML 요소(element)는 여러 속성을 가질 수 있으며, 이러한 속성(attribute)은 해당 요소에 대한 추가적인 정보를 제공합니다 <br />
          </p>
          <fieldset>
            <legend>예시</legend>
            &lt;태그이름 속성명="속성값"&gt;내용&lt;/태그이름&gt; <br />
          </fieldset>
          <p>
            속성은 HTML 요소 중에서도 언제나 시작 태그 내에서만 정의되며, 속성 이름과 속성값(value)으로 표현됩니다
          </p>
        </div>
      </div>
    </>
  )
}