import type { AppState } from "../types/state";

export const defaultState: AppState = {
  mode: "starting",

  currentDay: 1,

  studyTimeToday: 0,

  breakTimeToday: 0,

  countdown: 0,

  currentLesson: "Hangul",

  nextLesson: "Basic Vowels",

  todaysGoal: "Learn Hangul",

  wordOfTheDay: "안녕하세요",

  totalJourneyDays: 365,
};

let state: AppState = { ...defaultState };

type Listener = (state: AppState) => void;

const listeners = new Set<Listener>();

export function getState(): AppState {
  return state;
}

export function setState(newState: AppState): void {
  state = newState;

  listeners.forEach((listener) => {
    listener(state);
  });
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function resetState(): void {
  setState({ ...defaultState });
}
