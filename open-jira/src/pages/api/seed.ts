import type { NextApiRequest, NextApiResponse } from "next";
import { Entry } from "@/models";
import { db, seedData } from "@/database";

type Data = {
  ok: boolean;
  message: string;
  method: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    res.status(401).json({
      ok: false,
      message: "No tiene acceso a este servicio",
      method: req.method || "NA",
    });
  }

  await db.connect();

  await Entry.deleteMany(); // Borra todo
  await Entry.insertMany(seedData.entries);

  await db.disconnect();

  res.status(200).json({
    ok: true,
    message: "Todo bien",
    method: req.method || "NA",
  });
}
