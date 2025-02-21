export enum TaskStatus {
  New,
  InProgress,
  Completed,
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}