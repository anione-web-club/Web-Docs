export default function() {
  return (
    <>
      <h3>p 태그</h3>
      <p>
        &lt;p&gt; 태그는 문단을 정의하는 태그입니다 <br />
        내용 안에서 줄바꿈은 자동으로 적용되지 않으며, &lt;br&gt; 태그를 사용해야 합니다 <br />
        또한 브라우저는 자동으로 문단의 앞뒤에 여백을 추가합니다 <br />
        여백은 css를 통해 제어할 수 있습니다 <br />
      </p>
      <fieldset>
        <legend>예시</legend>
        &lt;p&gt;문단&lt;/p&gt; <br />
        &lt;p&gt;문단&lt;/p&gt; <br />
        &lt;p&gt;문단&lt;/p&gt; <br />
      </fieldset>
    </>
  )
}