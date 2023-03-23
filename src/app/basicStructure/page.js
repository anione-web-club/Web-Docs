import style from './style.module.css'

export default function() {
  return (
    <>
      <div className={style.content}>
        <h1>HTML 기본 구조</h1>
        <hr />
        <div className={style.text}>
          <p>
            HTML 문서의 기본적인 구조는 다음과 같습니다 <br />
            <fieldset>
              <legend>예시</legend>
              &lt;!DOCTYPE html&gt; <br />
              &lt;html&gt; <br />
              &lt;head&gt; <br />
              &nbsp; &lt;title&gt;HTML 기본 구조&lt;/title&gt; <br />
              &lt;/head&gt; <br />
              &lt;body&gt; <br />
              &nbsp; &lt;h1&gt;HTML 기본 구조&lt;/h1&gt; <br />
              &nbsp; &lt;p&gt;HTML 기본 구조에 대해 알아봅시다&lt;/p&gt; <br />
              &lt;/body&gt; <br />
              &lt;/html&gt; <br />
            </fieldset>
            &lt;!DOCTYPE html&gt; : 현재 문서가 HTML5 문서임을 명시하는 태그 <br />
            &lt;html&gt; : HTML 문서의 범위를 담는 태그 <br />
            &lt;head&gt; : HTML 문서의 메타데이터(metadata)를 담는 태그 <br />
            &lt;title&gt; : HTML 문서의 제목(title)을 작성하는 태그 <br />
            - 웹 브라우저의 툴바(toolbar)에 표시됩니다 <br />
            - 웹 브라우저의 즐겨찾기(favorites)에 추가할 때 즐겨찾기의 제목이 됩니다 <br />
            - 검색 엔진의 결과 페이지에 제목으로 표시됩니다 <br />
            &lt;body&gt; : 웹 브라우저를 통해 보이는 내용(content)을 담는 태그 <br />
          </p>
        </div>
      </div>
    </>
  )
}