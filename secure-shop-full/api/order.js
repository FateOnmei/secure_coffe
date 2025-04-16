import { getDatabase } from './firebase.js';

export default async function handler(req, res) {
  const { address, items } = req.body;
  const db = getDatabase();
  const ref = db.ref('orders').push();
  await ref.set({ address, items, date: new Date().toISOString() });
  res.status(200).json({ success: true });
}
