import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { products } from '../src/data/products.js';
import { filterProducts } from '../src/catalog.js';

test('all 17 variants keep their Precio desde values and images', () => {
  const prices = {
    'iphone-16': 16899,
    'iphone-17': 17999,
    'iphone-17-air': 19799,
    'iphone-17-pro': 25199,
    'iphone-17-pro-max': 27899,
    'iphone-18-pro-max': 34299,
    'iphone-18-pro-max-borgona': 35399,
    'ipad-11': 11099,
    'samsung-s25-ultra-256': 19099,
    'samsung-s25-ultra-512': 20199,
    'samsung-s26-ultra': 24999,
    'galaxy-z-fold8': 37799,
    'galaxy-z-flip8': 23099,
    'galaxy-a57': 9599,
    'galaxy-a27-256': 7799,
    'galaxy-a27-128': 6599,
    'galaxy-tab-a11': 4599,
  };
  assert.equal(products.length, 17);
  assert.equal(new Set(products.map((p) => p.id)).size, 17);
  for (const p of products) {
    assert.equal(p.priceFrom, prices[p.id]);
    assert.ok(existsSync(new URL('../public/' + p.image, import.meta.url)));
  }
});
test('categories preserve brand and foldable/tablet behavior', () => {
  for (const [filter, count] of [
    ['iphone', 7],
    ['samsung', 8],
    ['plegables', 2],
    ['tablets', 2],
  ])
    assert.equal(filterProducts(products, { filter }).length, count);
});
test('search handles accents, capacities, empty states and favorites', () => {
  assert.deepEqual(
    filterProducts(products, { query: 'borgona' }).map((p) => p.id),
    ['iphone-18-pro-max-borgona'],
  );
  assert.deepEqual(
    filterProducts(products, { query: 'S25 512GB' }).map((p) => p.id),
    ['samsung-s25-ultra-512'],
  );
  assert.equal(filterProducts(products, { query: 'inexistente123' }).length, 0);
  assert.deepEqual(
    filterProducts(products, { filter: 'favorites' }, new Set(['iphone-16'])).map((p) => p.id),
    ['iphone-16'],
  );
});
test('capacity sorting does not mutate product order', () => {
  const original = products.map((p) => p.id);
  const sorted = filterProducts(products, { sort: 'storage' });
  assert.equal(sorted[0].storage, '512 GB');
  assert.equal(sorted.at(-1).storage, '64 GB');
  assert.deepEqual(
    products.map((p) => p.id),
    original,
  );
});
