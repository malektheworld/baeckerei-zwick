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

export const products = []
