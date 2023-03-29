export default function() {
  return (
    <>
      <h3>h(Num) 태그</h3>
      <p>
        &lt;h(Num)&gt; 태그는 제목을 정의하는 태그입니다 <br />
        &lt;h1&gt; 태그는 가장 큰 제목을 정의하며, &lt;h6&gt; 태그는 가장 작은 제목을 정의합니다 <br />
        내용 안에서 줄바꿈은 자동으로 적용되지 않으며, &lt;br&gt; 태그를 사용해야 합니다 <br />
        또한 브라우저는 자동으로 문단의 앞뒤에 여백을 추가합니다 <br />
        여백은 css를 통해 제어할 수 있습니다 <br />
      </p>
      <fieldset>
        <legend>예시</legend>
        &lt;h1&gt;제목&lt;/h1&gt; <br />
        &lt;h2&gt;제목&lt;/h2&gt; <br />
        &lt;h3&gt;제목&lt;/h3&gt; <br />
        &lt;h4&gt;제목&lt;/h4&gt; <br />
        &lt;h5&gt;제목&lt;/h5&gt; <br />
        &lt;h6&gt;제목&lt;/h6&gt; <br />
      </fieldset>
      <fieldset>
        <legend>출력</legend>
        <h1>제목</h1>
        <h2>제목</h2>
        <h3>제목</h3>
        <h4>제목</h4>
        <h5>제목</h5>
        <h6>제목</h6>
      </fieldset>
    </>
  )
}