import style from './style.module.css'

export default function() {
  return (
    <>
      <div className={style.content}>
        <h1>HTML 기초</h1>
        <hr />
        <div className={style.text}>
          <h3>HTML이란?</h3>
          <p>
            HTML은 HyperText Markup Language의 약자입니다 <br />
            웹 페이지는 HTML 문서라고도 불리며, HTML 태그들로 구성됩니다 <br />
            각각의 HTML 태그는 웹 페이지의 디자인이나 기능을 결정하는데 사용됩니다 <br />
          </p>
          <h3>HTML 태그</h3>
          <p>
            HTML 태그는 태그 이름을 꺾쇠 괄호(&lt; &gt;)로 감싸서 표현합니다. <br />
            HTML 태그는 시작 태그와 종료 태그로 구성되며, 
            시작 태그와 종료 태그는 태그 이름 사이에 슬래시(/)를 넣어서 표현합니다 <br />
            그러나 일부 태그는 시작 태그만 있고 종료 태그가 없는 단일 태그로 구성됩니다 <br />
          </p>
          <fieldset>
            <legend>예시</legend>
            &lt;태그이름&gt; // 시작 태그 <br />
            &lt;/태그이름&gt; // 종료 태그 <br />
          </fieldset>
          <p>
            HTML 태그는 대소문자를 구분하지 않습니다
          </p>
        </div>
      </div>
    </>
  )
}