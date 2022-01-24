import ReactDOM from "react-dom";
import { Program, run } from "./runtime";
import { State, Action, init, view, update } from "./root";

const myProgram: Program<State, Action, JSX.Element> = { init, view, update };

const render = (jsx: JSX.Element) => ReactDOM.render(jsx, document.getElementById("root")!);

run(myProgram, render);
