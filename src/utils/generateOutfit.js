export function generateOutfit(items, history = []) {
  if (items.length < 3) {
    throw new Error("Butuh minimal 3 item untuk generate outfit");
  }

  const available = [...items];
  const selected = [];

  while (selected.length < 3) {
    const index = Math.floor(Math.random() * available.length);
    selected.push(available.splice(index, 1)[0]);
  }

  const outfitKey = selected.map(item => item.id).join("-");

  return {
    items: selected,
    score: 0,
    breakdown: {},
    outfitKey
  };
}
