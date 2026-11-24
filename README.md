# Bäckerei Zwick website

A Vue 3 and Vite static website based on the supplied Bäckerei Zwick visual references.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build` and review it locally with `npm run preview`.

## Routes

- `/` Homepage
- `/produkte` Products with live search and category filters
- `/ueber-uns` About
- `/kontakt` Contact
- `/impressum` Impressum placeholder
- `/datenschutz` Privacy notice placeholder

German is the default language. The navigation switcher stores the selected language in local storage and keeps it while moving between routes.

## Updating the catalog and imagery

Edit `src/data/products.js` to add or update products. Product photos are grouped by category under `img/products/` and normalized to 800×800 pixels; images that need it are fitted onto a matching background without cropping the product. Other images are in `img/about/`, `img/brand/`, and `img/references/`. Use `productImage(category, filename)` to connect each product with its image. Add a localized category label to both locale files when adding a new category.

To add a product, put its image in the matching `img/products/<category>/` folder, then add one entry to `src/data/products.js` with a unique `id` and existing `slug`, German and English `name` and `description`, `category`, and `image: productImage('<category>', '<filename>')`. Image dimensions are optional card metadata; `price` is optional. The product list, category filters, product detail routes, and same-category recommendations are all generated from this data. When introducing a category, create its image folder and add its German and English labels under `categories` in `src/locales/de.json` and `src/locales/en.json`.

No prices, ingredients, allergens, dietary claims, stock information, or review data are included because none was verified. Search checks both languages and normalizes case and German umlauts. Category options come from catalog data; reset clears both search and category selection.

## Content that must be supplied before launch

- Verified business name/legal operator, postal address, contact details, opening hours, and any approved map/directions URL.
- Final product catalog and approved product photography; verified prices and product attributes if they should be shown.
- Complete Impressum and privacy information reviewed for the actual operator, hosting, and services.
- A verified Google review URL or approved real review integration. The homepage currently states that no verified review data has been configured. No third-party widget or map loads.
- Actual logo/favicon assets if available. The visual references are full-page mockups, not standalone logo files.

The supplied mockups contain sample contact data, prices, history claims, and testimonials. These have not been treated as real business information. No analytics, chatbot, backend, database, contact form, or third-party scripts are configured. A future assistant should use a secure backend and the structured catalog; never expose provider credentials in the browser.

## GitHub and deployment

The `main` branch is deployed to GitHub Pages by `.github/workflows/deploy.yml` after each push. Vite uses `/baeckerei-zwick/` as the project site base path, and Vue Router uses that same base for its routes. The workflow copies the built `index.html` to `404.html` so direct visits and refreshes on nested routes can load the Vue app.

To publish local changes, commit and push them to `main`:

```sh
git add .
git commit -m "Describe the change"
git push origin main
```

The deployment runs in GitHub Actions after the push; check the repository's Actions tab if the published site does not update.
