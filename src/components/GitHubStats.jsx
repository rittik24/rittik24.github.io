import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import style from "./githubStats.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 12;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const GitHubStats = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const { Themes, currentTheme } = useContext(ThemeContext)
  return (
    <div id="githubID" style={currentTheme === "light" ? Themes.light.home : Themes.dark.home}>
      {/* <h1 className="heading">
        My <span className="heading-highlight">Github</span> Stats
      </h1>
     
      <div data-aos="zoom-in-up">
        <GitHubCalendar
          style={{ margin: "auto" }}
          blockSize={16}
          fontSize={14}
          blockMargin={4}
          blockRadius={6}
          username="rittik24"
          transformData={selectLastHalfYear}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
        <div className="stats_container">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=rittik24&theme=nightowl&border_radius=7"
            alt="Github stats"
            data-aos="flip-left"
          />
          <img
            src="https://github-readme-stats.vercel.app/api?username=rittik24&show_icons=true&theme=tokyonight"
            alt="Github Stats"
            data-aos="flip-right"
          />
        </div>
      </div> */}

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

export default GitHubStats;