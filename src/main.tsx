import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Prerendered pages hydrate their HTML. CloudFront also serves index.html
// (the home page) for unknown addresses, so a mismatched page renders fresh.
if (root.dataset.prerendered === window.location.pathname) {
  hydrateRoot(root, app)
} else {
  root.replaceChildren()
  createRoot(root).render(app)
}
