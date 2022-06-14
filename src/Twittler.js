import React, { useState } from "react";
import "./styles.css";

const currentUser = "y0ung";

function Twittler() {
  const [tweets, setTweets] = useState([
    {
      uuid: 1,
      writer: "y0ung",
      date: "2022-06-14",
      content: "안녕 리액트"
    },
    {
      uuid: 2,
      writer: "min",
      date: "2022-06-14",
      content: "state 끌어올리기"
    }
  ]);

  const addNewTweet = (newTweet) => {
    setTweets([...tweets, newTweet]);
  };

  return (
    <div>
      <div>작성자: {currentUser}</div>

      {/* 자식 컴포넌트로 props 전달 */}
      <NewTweetForm onButtonClick={addNewTweet} />

      <ul id="tweets">
        {tweets.map((t) => (
          <SingleTweet key={t.uuid} writer={t.writer} date={t.date}>
            {t.content}
          </SingleTweet>
        ))}
      </ul>
    </div>
  );
}

function NewTweetForm({ onButtonClick }) {
  const [newTweetContent, setNewTweetContent] = useState("");

  const onTextChange = (e) => {
    setNewTweetContent(e.target.value);
  };

  const onClickSubmit = () => {
    let newTweet = {
      uuid: Math.floor(Math.random() * 10000),
      writer: currentUser,
      date: new Date().toISOString().substring(0, 10),
      content: newTweetContent
    };

    // 부모 컴포넌트에서 받은 이벤트 핸들러 실행 & 부모 컴포넌트로 state 끌어올리기
    onButtonClick(newTweet);
  };

  return (
    <div id="writing-area">
      <textarea id="new-tweet-content" onChange={onTextChange}></textarea>
      <button id="submit-new-tweet" onClick={onClickSubmit}>
        새 글 쓰기
      </button>
    </div>
  );
}

function SingleTweet({ writer, date, children }) {
  return (
    <li className="tweet">
      <div className="writer">{writer}</div>
      <div className="date">{date}</div>
      <div>{children}</div>
    </li>
  );
}

export default Twittler;
