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
