import style from './style.module.css'

export default function() {
  return (
    <>
      <div className={style.content}>
        <h1>웹 프로그래밍 동아리</h1>
        <hr />
        <div className={style.text}>
          <p>
            웹 프로그래밍 동아리를 운영하면서 사용하게 될 홈페이지 입니다 <br />
            PPT 대신 수업 진행 자료로 활용될 것이며 수업 이외에도 자유롭게 사용할 수 있습니다 <br />
            1학기에는 HTML, CSS, JavaScript 바닐라 웹 프로그래밍 수업을 진행하고, 
            2학기에는 React.js를 사용한 웹 프로그래밍 수업을 진행할 예정입니다 <br />
            또한 2학기에는 웹 서버 프로그래밍 수업을 진행할 예정입니다 <br />
            이 홈페이지는 React.js를 사용하여 제작되었습니다 
          </p>
        </div>
      </div>
    </>
  )
}