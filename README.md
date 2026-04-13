# Social Feed Clone (Facebook-copy Upgraded)

This repository is now a functional social feed UI clone built with vanilla HTML/CSS/JavaScript.
It includes searchable posts, JSON data loading, and schema tests.

## Features

- Feed cards rendered from local JSON data
- Search filter by author/content/tags
- Responsive layout with clean styling
- Data schema validation test
- Legacy archive preserved in `legacy/archives/`

## Run Locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Run Tests

```bash
python3 -m unittest discover -s tests -p "test_*.py"
```

## License

MIT License. See `LICENSE`.
