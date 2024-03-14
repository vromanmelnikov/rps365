import { promises as fs } from "fs";
import { cwd } from "process";

import items from './items.json'

export default async function handler(req, res) {
    res.status(200).json(items.items)
}
