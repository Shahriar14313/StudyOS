import "./styles/style.css";

import { getState } from "./shared/state";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found.");
}

const state = getState();

app.innerHTML = `
<main>
  <h1>StudyOS</h1>

  <p>Mode: ${state.mode}</p>

  <p>Day ${state.currentDay}</p>

  <p>Current Lesson: ${state.currentLesson}</p>
</main>
`;
