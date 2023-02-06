import React, { useState } from "react";
import './App.css';

function App() {
  // 초기값과 setTodo 만들기
  const [todo, setTodo] = useState([
    { id: 1, title: "리액트 공부하기", contents: "리액트 기초 공부", done: false },
    { id: 2, title: "리액트 공부합시다", contents: "노션 보기", done: false },
    { id: 3, title: "리액트 공부하기", contents: "리액트 기초 공부", done: false },
  ])

  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  // input에 작성하는 대로 렌더링
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const contentsChangeHandler = (event) => {
    setContents(event.target.value);
  }

  // 추가 버튼
  const clickAddbutton = () => {
    const newTodo = {
      id: todo.length + 1,
      title,
      contents,
      done: false,
    }

    // 
    setTodo([...todo, newTodo]);

    // 작성 후 input 안에 있는 값 초기화
    setTitle('')
    setContents('')
  }

  // 삭제 버튼
  const clickRomoveButton = (id) => {
    const newTodo = todo.filter(function(todo) {
      return todo.id !== id
    });
    setTodo(newTodo)
  }

  return (
    <div>
      <h1>My Todo List</h1>
      <div>
        {/* input 태그들 */}
        제목
        <input
          value={title}
          onChange={titleChangeHandler}
        >

        </input>
        내용 <input
          value={contents}
          onChange={contentsChangeHandler}
        >
        </input>
        <button onClick={clickAddbutton}>추가하기!</button>
      </div>


      {/* Done */}
      <div>
        <h1>Working...</h1>
        {
          todo.map(item => {
            return (
              <div key={item.id} className="">
                <h3>{item.title}</h3>
                <p>{item.contents}</p>

                <button onClick={() => clickRomoveButton(item.id)}>삭제하기!</button>

                <button>완료!</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
