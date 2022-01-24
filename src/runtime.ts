import ReactDOM from "react-dom";

export type Program<TState, TAction> = {
  init: () => TState;
  view: (state: TState, dispatch: Dispatch<TAction>) => JSX.Element;
  update: (state: TState, action: TAction) => TState;
};

export type Dispatch<TAction> = (action: TAction) => void;

export function run(program: Program<any, any>, elem: HTMLElement): void {
  let state = program.init();
  const dispatch = (action: any) => {
    state = program.update(state, action);
    ReactDOM.render(program.view(state, dispatch), elem);
  };
  ReactDOM.render(program.view(state, dispatch), elem);
}
