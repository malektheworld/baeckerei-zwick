// Add product images to img/products/<category>/ and reference them with productImage().
const productImages = import.meta.glob('../../img/products/**/*.{avif,gif,jpeg,jpg,png,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
})

export function productImage(category, filename) {
  const path = `../../img/products/${category}/${filename}`
  const image = productImages[path]

  if (!image) throw new Error(`Product image not found: ${path}`)
  return image
}

export const products = [
  {
    id: 'bl-croissant-001',
    slug: 'croissant',
    category: 'blaetterteig',
    name: { de: 'Croissant', en: 'Croissant' },
    image: productImage('blaetterteig', 'bl-croissant-001.png'),
  },
  {
    id: 'bl-mandelcroissant-002',
    slug: 'mandelcroissant',
    category: 'blaetterteig',
    name: { de: 'Mandelcroissant', en: 'Almond Croissant' },
    image: productImage('blaetterteig', 'bl-mandelcroissant-002.png'),
  },
  {
    id: 'br-dinkelvollkorn-001',
    slug: 'dinkelvollkornbrot',
    category: 'brot',
    name: { de: 'Dinkelvollkornbrot', en: 'Wholegrain Spelt Bread' },
    image: productImage('brot', 'br-dinkelvollkorn-001.png'),
  },
  {
    id: 'br-feines-rogenbrot-002',
    slug: 'feines-roggenbrot',
    category: 'brot',
    name: { de: 'Feines Roggenbrot', en: 'Fine Rye Bread' },
    image: productImage('brot', 'br-feines-rogenbrot-002.png'),
  },
  {
    id: 'kh-mandelkuchen-001',
    slug: 'mandelkuchen',
    category: 'kuchen',
    name: { de: 'Mandelkuchen', en: 'Almond Cake' },
    image: productImage('kuchen', 'kh-mandelkuchen-001.png'),
  },
  {
    id: 'kh-streuselkuchen-002',
    slug: 'streuselkuchen',
    category: 'kuchen',
    name: { de: 'Streuselkuchen', en: 'Crumb Cake' },
    image: productImage('kuchen', 'kh-streuselkuchen-002.png'),
  },
  {
    id: 'sk-brezel-001',
    slug: 'brezel',
    category: 'snacks',
    name: { de: 'Brezel', en: 'Pretzel' },
    image: productImage('snacks', 'sk-brezel-001.png'),
  },
  {
    id: 'br-korbbrot-003',
    slug: 'korbbrot',
    category: 'brot',
    name: { de: 'Korbbrot', en: 'Basket Bread' },
    image: productImage('brot', 'br-korbbrot-003.png'),
  },
  {
    id: 'br-roggenvollkorn-004',
    slug: 'roggenvollkornbrot',
    category: 'brot',
    name: { de: 'Roggenvollkornbrot', en: 'Wholegrain Rye Bread' },
    image: productImage('brot', 'br-roggenvollkorn-004.png'),
  },
]
