import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DragProvider } from "./context/DragProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<DragProvider>
			<App />
		</DragProvider>
	</StrictMode>,
);
