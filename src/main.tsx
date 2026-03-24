import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Remove Lovable Branding
if (typeof window !== 'undefined') {
  const observer = new MutationObserver(() => {
    document.querySelectorAll('a[href*="lovable.dev"], [class*="lovable-badge"], [class*="lovable"]').forEach(el => el.remove());
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
