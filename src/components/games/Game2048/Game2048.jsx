import { useCallback, useEffect, useMemo, useState } from "react";
import initCell from "./logic/initCells";
import { directions, moveCells } from "./logic/moveCells";
import { addField } from "./logic/addField";
import { removeAndIncreaseCells } from "./logic/removeAndIncreaseCells";
import Button from "./UI/Button/Button";
import ControllPanel from "./UI/ControllPanel/ControllPanel";
import Field from "./UI/Field/Field";
import Layout from "./UI/Layout/Layout";
import Score from "./UI/Score/Score";
import s from "./Game2048.module.css";

const Game2048 = () => {
  const [cells, setCells] = useState(initCell());
  const [score, setScore] = useState(0);

  useEffect(() => {
    let bestScore = +localStorage.getItem("bestScore2048") || 0;
    if (score > bestScore) {
      localStorage.setItem("bestScore2048", score);
    }
  });

  const keyCodeToDirection = useMemo(
    () => ({
      ArrowUp: directions.UP,
      KeyW: directions.UP,
      ArrowDown: directions.DOWN,
      KeyS: directions.DOWN,
      ArrowLeft: directions.LEFT,
      KeyA: directions.LEFT,
      ArrowRight: directions.RIGHT,
      KeyD: directions.RIGHT,
    }),
    []
  );

  const handleRestart = useCallback(() => {
    let bestScore = +localStorage.getItem("bestScore2048") || 0;
    if (score > bestScore) {
      localStorage.setItem("bestScore2048", score);
    }
    setCells(initCell());
    setScore(0);
  }, [score]);

  const handleKeyPress = useCallback(
    (e) => {
      if (
        [
          "ArrowRight",
          "ArrowLeft",
          "ArrowDown",
          "ArrowUp",
          "KeyS",
          "KeyD",
          "KeyA",
          "KeyW",
        ].includes(e.code)
      ) {
        let newCells = removeAndIncreaseCells(
          moveCells(cells, keyCodeToDirection[e.code]),
          setScore
        );
        setCells(newCells);
        setCells((prev) => addField(prev, handleRestart));
      }
      let bestScore = +localStorage.getItem("bestScore2048") || 0;

      if (score > bestScore) {
        localStorage.setItem("bestScore2048", score);
      }
    },
    [cells, keyCodeToDirection, handleRestart, score]
  );

  useEffect(() => {
    if (cells !== undefined) {
      document.addEventListener("keydown", handleKeyPress);

      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [handleKeyPress, cells]);

  return (
    <Layout>
      <ControllPanel className={s.controllPanel}>
        <Button callback={handleRestart} text="Restart" />
        <div className={s.scoreContainer}>
          <Score className={s.score}>
            <div>Score</div>
            <div>{score}</div>
          </Score>
          <Score className={s.score}>
            <div>Best score</div>
            <div>{localStorage.getItem("bestScore2048") || score}</div>
          </Score>
        </div>
      </ControllPanel>

      {cells === undefined ? (
        <div className={s.gameOverContainer}>
          <div>Game Over</div>
          <Button callback={handleRestart} text={"Try again"} />
        </div>
      ) : (
        <Field cells={cells} />
      )}
    </Layout>
  );
};

export default Game2048;
