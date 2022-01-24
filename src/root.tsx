import React from "react";

export type State = number;

export type Action = number;

export function init(): State {
  return 1;
}

export function view(state: State, dispatch: (action: Action) => void): JSX.Element {
  return (
    <div>
      <div>
        <button onClick={() => dispatch(1)}>Increase</button>
      </div>
      <div>
        <button onClick={() => dispatch(-1)}>Descrease</button>
      </div>
      <div>hej: {state}</div>
    </div>
  );
}

export function update(state: State, action: number): State {
  return state + action;
}
