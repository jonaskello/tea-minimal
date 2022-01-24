import ReactDOM from "react-dom";

export type Program<TState, TAction, TView> = {
  init: () => TState;
  view: (state: TState, dispatch: Dispatch<TAction>) => TView;
  update: (state: TState, action: TAction) => TState;
};

export type Dispatch<TAction> = (action: TAction) => void;

export function run(program: Program<any, any, any>, render: (view: any) => void): void {
  let state = program.init();
  const dispatch = (action: any) => {
    state = program.update(state, action);
    render(program.view(state, dispatch));
  };
  render(program.view(state, dispatch));
}
