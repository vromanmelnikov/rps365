import items from './items.json'

export default async function handler(req, res) {
    res.status(200).json(items.tags)
}
