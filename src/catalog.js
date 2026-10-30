export const normalize = (text) =>
  String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
export function filterProducts(
  products,
  { filter = 'all', query = '', sort = 'featured' },
  saved = new Set(),
) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const list = products.filter((product) => {
    const categoryMatches =
      filter === 'all' ||
      (filter === 'favorites'
        ? saved.has(product.id)
        : filter === 'samsung'
          ? product.brand === 'Samsung' && product.category !== 'tablets'
          : product.category === filter);
    const haystack = normalize(
      `${product.name} ${product.brand} ${product.storage || ''} ${product.ram || ''} ${product.category} ${product.color || ''}`,
    ).replace(/\s/g, '');
    return categoryMatches && terms.every((term) => haystack.includes(term.replace(/\s/g, '')));
  });
  if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name, 'es', { numeric: true }));
  if (sort === 'storage')
    list.sort((a, b) => (parseInt(b.storage) || 0) - (parseInt(a.storage) || 0));
  return list;
}
