# Points of Interest

A one-page site: the map is the index, every location on it links to a
memoir entry rendered straight from a Markdown file.

## How it's built

- `index.html` — the map. Waypoint links are drawn on top of the image
  using percentage coordinates so they stay lined up at any screen size.
- `location.html` — one generic page used for *every* entry. It reads
  `?loc=Dam` from the URL, fetches `content/Dam.md`, and renders it.
- `locations.js` — the single list of locations: each one's position on
  the map (`x`, `y`) and its grid reference (`grid`). Add a location here
  and it shows up on the map automatically.
- `content/*.md` — the actual writing. One file per location, plain
  Markdown, named to match the location exactly (spaces and all — e.g.
  `Train Station.md`).
- `style.css` — everything visual.

## Adding or editing an entry

Open `content/<Location Name>.md` and write. Markdown headings (`##`),
paragraphs, *italics*, **bold**, and `> blockquotes` all render. Nothing
else needs to change — no rebuild step.

To add a brand-new location, add one line to the `LOCATIONS` array in
`locations.js` (name, its x/y % position on the map image, and its grid
letter+number), then add the matching `content/<name>.md` file.

## Viewing it locally

Because `location.html` fetches the `.md` files with JavaScript, opening
`index.html` by double-clicking it won't work — browsers block that kind
of local file loading for security reasons. Run a tiny local server from
inside the `pois-site` folder instead:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Putting it online

This is a fully static site — no server-side code, no database — so any
static host works. Two easy free options:

- **GitHub Pages**: push this folder to a GitHub repo, then turn on
  Pages in the repo's settings.
- **Netlify**: drag the whole `pois-site` folder onto
  [app.netlify.com/drop](https://app.netlify.com/drop).

Either way, once it's hosted over `http://` or `https://`, the fetch
requests work automatically — no local server needed.

## Adjusting marker positions or grid references

The grid references (`D6`, `F5`, etc.) in `locations.js` were estimated
by reading label positions against the map's gridlines — they're close,
but worth checking against your original reference image. The `x`/`y`
values control where each waypoint sits on the map itself; nudge them
in small increments (they're percentages) and reload to fine-tune.
