import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.tsx";

console.log("env check:", import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("Clerk key:", PUBLISHABLE_KEY);

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

// (window as any).Clerk = require("@clerk/clerk-js");
// console.log("window.Clerk:", (window as any).Clerk);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY} 
		afterSignOutUrl='/'>
			<AuthProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AuthProvider>
		</ClerkProvider>
	</StrictMode>
);
