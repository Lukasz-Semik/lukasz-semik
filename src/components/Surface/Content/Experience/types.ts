export enum Timeline {
  NonDev = 'nonDev',
  Dev = 'dev',
  Trainings = 'trainings',
}

export interface TimelineItem {
  title: string;
  date?: string;
}
