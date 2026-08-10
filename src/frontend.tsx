/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import './index.css'

const elem = document.getElementById('root')
if (!elem) {
    throw new Error('Root element #root not found')
}

const app = (
    <StrictMode>
        <App />
    </StrictMode>
)

// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
// import.meta.hot.data persists across HMR updates in dev, but production
// builds inline every `import.meta.hot.data` access as a fresh empty object —
// so it must be read exactly once.
if (import.meta.hot) {
    const hotData = import.meta.hot.data
    hotData.root ??= createRoot(elem)
    hotData.root.render(app)
} else {
    createRoot(elem).render(app)
}
