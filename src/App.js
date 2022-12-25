import style from "./app.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Action/index.js";
function App() {
  const state = useSelector((state) => state.changeNumber);
  const disPatch = useDispatch();
  // console.log(disPatch());
  return (
    <div className={style.container}>
      <h1>Increment/decrement counter</h1>
      <h4>using redux / react-redux</h4>

      <div className={style.quantity}>
        <span
          className={style.quantity__minus}
          onClick={() => disPatch(decrement())}
        >
          <span>-</span>
        </span>
        <span className={style.quantity__input}>{state}</span>
        <span
          className={style.quantity__plus}
          onClick={() => disPatch(increment())}
        >
          <span>+</span>
        </span>
      </div>
    </div>
  );
}

export default App;
