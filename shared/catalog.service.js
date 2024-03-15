import { promises as fs } from "fs";
import { cwd } from "process";

export default class CatalogService {
  async getItems() {
    const file = await fs.readFile(cwd() + "/pages/api/items.json");
    const data = JSON.parse(file).items;

    return data;
  }

  async getItemByID(id) {
    const file = await fs.readFile(cwd() + "/pages/api/items.json");
    const data = JSON.parse(file).items;

    let item = undefined;

    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        item = data[i];
        break;
      }
    }

    return item;
  }

  async getTags() {
    const file = await fs.readFile(cwd() + "/pages/api/items.json");
    const data = JSON.parse(file).tags;

    return data;
  }

  getCostRange(types) {
    const costs = types.map((item) => item.cost);

    const result = {
      min: Math.min(...costs),
      max: Math.max(...costs),
    };

    return result;
  }
}

export const catalogService = new CatalogService()
