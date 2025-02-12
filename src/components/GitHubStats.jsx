import React from "react";
import GitHubCalendar from "react-github-calendar";
import style from "./githubStats.css";

export const GitHubStats = () => {
  return (
    <div id="githubID" >
      <div
        style={{
          padding: "20px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={style.gitCalender}
      >
        <p
          style={{
            margin: "30px 0 50px 0",
            fontSize:"25px"
          }}
        >
         <span className="git-name">GitHub Calendar</span>
        </p>
        <div className={style.calender} style={{border:"2px solid white"}}>
          <GitHubCalendar username="rittik24" />
        </div>
        <div className={style.stats}>
          <a href="https://github.com/rittik24">
            <img
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com?user=rittik24&theme=dark"
              width="100%"
              alt="stats"
            />
          </a>

          <a href="https://github.com/rittik24">
            <img
              align="center"
              width="100%"
              src="https://github-readme-stats.vercel.app/api?username=rittik24&theme=dark&count_private=true&show_icons=true"
              alt="stats"
            />
          </a>

        </div>
      </div>

    </div>
  );
};
