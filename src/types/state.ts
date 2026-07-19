export type AppMode =
  | "starting"
  | "studying"
  | "short-break"
  | "lunch-break"
  | "prayer-break"
  | "shower-break"
  | "ending";

export interface AppState {
  mode: AppMode;

  currentDay: number;

  studyTimeToday: number;

  breakTimeToday: number;

  countdown: number;

  currentLesson: string;

  nextLesson: string;

  todaysGoal: string;

  wordOfTheDay: string;

  totalJourneyDays: number;
}
