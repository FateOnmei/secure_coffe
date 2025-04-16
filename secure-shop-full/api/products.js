import { getDatabase } from './firebase.js';

export default async function handler(req, res) {
  const db = getDatabase();
  const snapshot = await db.ref('products').once('value');
  const products = snapshot.val() || {};
  res.status(200).json(Object.values(products));
}
