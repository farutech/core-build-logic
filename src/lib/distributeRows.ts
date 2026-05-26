// Distributes N items into row buckets so no row has empty cells.
// Default max 3 per row works great for capability cards.
export function distributeRows(n: number, maxPerRow = 3): number[] {
  if (n <= 0) return [];
  if (n <= maxPerRow) return [n];
  const rows = Math.ceil(n / maxPerRow);
  const base = Math.floor(n / rows);
  const extra = n % rows;
  return Array.from({ length: rows }, (_, i) => (i < extra ? base + 1 : base));
}
