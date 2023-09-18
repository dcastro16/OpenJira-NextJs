import { db } from "@/database";
import { Entry, IEntry } from "@/models";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | IEntry | null;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    res.status(400).json({ message: "El id no es válido" });
  }

  switch (req.method) {
    case "PATCH":
      return patchEntry(req, res);

    case "GET":
      return getEntry(req, res);

    default:
      return res
        .status(400)
        .json({ message: "No existe un endpoint para esta petición" });
  }
}

const patchEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryToPatch = await Entry.findById(id);

  if (!entryToPatch) {
    await db.disconnect();
    return res
      .status(401)
      .json({ message: "No existe una entrada con este ID: " + id });
  }

  const {
    description = entryToPatch.description,
    status = entryToPatch.status,
  } = req.body;

  try {
    const patchedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );

    await db.disconnect();

    return res
      .status(201)
      .json(patchedEntry || { message: "Entrada actualizada con exito" });
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({ message: "Bad request" });
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entry = await Entry.findById(id);

  await db.disconnect();

  if (!entry) {
    return res
      .status(401)
      .json({ message: "No existe una entrada con este ID: " + id });
  }

  return res.status(200).json(entry);
};
