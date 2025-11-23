"use strict";

{
  // const records = [
  //   { content: "勉強内容", time: 11 },
  //   { content: "React", time: 2 },
  // ];

  // 記録登録処理
  const renderRecord = (content, time) => {
    const resultRecord = document.createElement("p");
    resultRecord.className = "record";

    const resultContents = document.querySelector("#record-results");
    const errorMessage = document.getElementById("error");

    if (content.value == "" || time.value == "") {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
      resultRecord.textContent = `${content.value} ${time.value}時間`;
      resultContents.appendChild(resultRecord);

      totalTime += Number(time.value);

      document.getElementById("total-time").textContent = totalTime;
    }
  };

  let content = document.getElementById("content");
  let time = document.getElementById("time");
  let studyContent = document.getElementById("study-content");
  let studyTime = document.getElementById("study-time");
  let totalTime = 0;

  content.addEventListener("input", () => {
    studyContent.textContent = content.value;
  });
  time.addEventListener("input", () => {
    studyTime.textContent = time.value;
  });

  document.querySelector("#btn").addEventListener("click", (e) => {
    // 画面遷移防止
    e.preventDefault();

    renderRecord(content, time);

    content.value = "";
    time.value = "";
  });
}
