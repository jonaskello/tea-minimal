import { Program, run } from "./runtime";
import { State, Action, init, view, update } from "./root";

const myProgram: Program<State, Action> = { init, view, update };

run(myProgram, document.getElementById("root")!);
