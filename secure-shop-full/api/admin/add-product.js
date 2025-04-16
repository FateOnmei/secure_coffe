import { getDatabase } from '../firebase.js';

export default async function handler(req, res) {
  const { name, price } = req.body;
  const db = getDatabase();
  const ref = db.ref('products').push();
  await ref.set({ name, price });
  res.status(200).json({ success: true });
}
