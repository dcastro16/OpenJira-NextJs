import { EntryStatus } from "@/interfaces";

interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: EntryStatus;
  createdAt: number;
}

export const seedData : SeedData = {
  entries: [
    {
      description: "hola mundo",
      status: EntryStatus.PENDING,
      createdAt: Date.now(),
    },
    {
      description: "hola chavales",
      status: EntryStatus.IN_PROGRESS,
      createdAt: Date.now() - 1000000,
    },
    {
      description: "hola y adios",
      status: EntryStatus.COMPLETED,
      createdAt: Date.now() - 100000,
    },
  ],
};
