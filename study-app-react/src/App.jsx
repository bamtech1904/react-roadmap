import { useState } from "react";
import "./index.css";

export const App = () => {
  const [studyContent, setStudyContent] = useState("");
  const [studyTime, setStudyTime] = useState(0);
  const [studyRecords, setStudyRecords] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [isShownError, setIsShownError] = useState(false);

  // 入力値の取得
  const onChangeStudyContext = (event) => setStudyContent(event.target.value);
  const onChangeStudyTime = (event) => setStudyTime(event.target.value);

  // 学習内容と合計学習時間の登録
  const onClickRecord = () => {
    // 入力バリデーション
    if (studyContent === "" || studyTime <= 0) {
      setIsShownError(true);
      return;
    } else {
      setIsShownError(false);
    }

    const newRecords = [
      ...studyRecords,
      { title: studyContent, time: studyTime },
    ];
    setStudyRecords(newRecords);
    setTotalTime((prev) => prev + parseInt(studyTime));

    setStudyContent("");
    setStudyTime(0);
  };

  return (
    <>
      <form action="">
        <div>
          <label>学習内容</label>
          <input
            type="text"
            value={studyContent}
            onChange={onChangeStudyContext}
          />
        </div>
        <div>
          <label>学習時間</label>
          <input type="number" value={studyTime} onChange={onChangeStudyTime} />
        </div>
      </form>
      <div>
        <div>入力されている学習内容：{studyContent}</div>
        <div>入力されている時間： {studyTime}時間</div>
      </div>
      <div>
        <button onClick={onClickRecord}>登録</button>
        {isShownError && <p>入力されていない項目があります</p>}
        <div>
          {studyRecords.map((record, index) => (
            <div key={index}>
              {record.title} {record.time}時間
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>合計時間： {totalTime}/ 1000 (h)</p>
      </div>
    </>
  );
};
