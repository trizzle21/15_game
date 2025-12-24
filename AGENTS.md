# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds the React application code (components, styles, and tests).
- `public/` contains the static HTML shell and assets.
- `src/App.js` is the main game UI and logic entry point.
- `src/App.test.js` holds the basic render test.
- `src/App.css` and `src/index.css` define styling.
- `package.json` and `package-lock.json` track dependencies and scripts.

## Build, Test, and Development Commands
- `npm install`: install dependencies and generate/update `package-lock.json`.
- `npm start`: run the dev server with hot reload.
- `npm test -- --watchAll=false`: run tests once (CI-friendly).
- `npm run build`: create a production build in `build/`.

## Coding Style & Naming Conventions
- Language: JavaScript (React with JSX).
- Indentation: 2 spaces; keep lines concise.
- Components use PascalCase (`Board`, `Square`, `Box`).
- CSS classes are PascalCase or TitleCase (`.Title`, `.Game`, `.NullBox`); keep class names descriptive.
- Linting/formatting: provided by `react-scripts` (ESLint defaults). Fix lint warnings before pushing.

## Testing Guidelines
- Framework: Jest via `react-scripts`.
- Test files live in `src/` and follow CRA conventions (e.g., `App.test.js`).
- Prefer small, focused unit tests for game logic and render sanity.
- Run `npm test -- --watchAll=false` for a deterministic pass.

## Commit & Pull Request Guidelines
- Existing commits are short, direct phrases (often lowercase), e.g., “added css and handle click”.
- Use brief, imperative summaries that describe what changed.
- PRs should include: summary of changes, testing performed, and screenshots for UI updates.
- Link relevant issues when applicable.

## Security & Dependency Updates
- Keep dependencies current; run `npm audit` after upgrades.
- Avoid adding unmaintained packages; prefer well-supported alternatives.
