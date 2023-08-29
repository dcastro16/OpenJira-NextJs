export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus;
}

export enum EntryStatus {
  PENDING,
  IN_PROGRESS,
  COMPLETED,
}
