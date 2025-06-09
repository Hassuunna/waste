# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Skip Waste UI - Design Approach

## Component Structure

- **Navigation**: Top navigation bar for branding and future navigation links.
- **SkipList**: Renders a list of skip cards, each representing a skip box option.
- **SkipCard**: Displays skip image (fixed to the left), and all skip details spread over 2–3 columns with colorful icons for clarity and accessibility. Responsive layout adapts to all screen sizes.
- **SkipConfirmModal**: Popup modal with a black overlay, confirming the user's selection and showing skip details.
- **Hooks**: `useSkips` custom hook fetches skip data from the API and provides loading/error states.

## Design Principles

- **Responsiveness**: Uses Tailwind CSS flex and grid utilities to ensure cards and content adapt to all device sizes. Cards are arranged vertically, with image and info side-by-side on desktop and stacked on mobile.
- **Visual Clarity**: Key skip properties (size, heavy waste, allowed on road, price, hire period) are paired with distinct, colorful icons for quick recognition.
- **Separation of Concerns**: Each UI section is a dedicated, reusable component for maintainability and scalability.
- **User Experience**: Selection triggers a modal overlay for confirmation, keeping the user focused and reducing accidental actions.

## How to Extend

- Add more skip properties or icons by editing `SkipCard`.
- Add navigation links in `Navigation`.
- Add routing or next-step logic after confirmation in `App.tsx`.

---

This approach ensures a modern, maintainable, and user-friendly UI for skip selection, ready for further extension as needed.
