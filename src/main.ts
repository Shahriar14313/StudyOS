import "./styles/style.css";

import { getState, setState, subscribe } from "./shared/state";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found.");
}

function render() {
  const state = getState();

  app.innerHTML = `
    <main>
      <h1>StudyOS</h1>

      <p>Mode: ${state.mode}</p>

      <p>Day ${state.currentDay}</p>

      <p>Lesson: ${state.currentLesson}</p>

      <button id="next-day">
        Next Day
      </button>
    </main>
  `;

  const button = document.querySelector<HTMLButtonElement>("#next-day");

  button?.addEventListener("click", () => {
    setState({
      ...state,
      currentDay: state.currentDay + 1,
    });
  });
}

render();

subscribe(() => {
  render();
});
