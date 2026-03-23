import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Final Boss: Remove Lovable Branding
if (typeof window !== 'undefined') {
  const observer = new MutationObserver(() => {
    const badge = document.querySelector('.lovable-badge') || 
                  document.querySelector('[href*="lovable.dev"]');
    if (badge) badge.remove();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
}
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
