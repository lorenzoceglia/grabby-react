import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { Provider } from "react-redux";
import App from "@/App.tsx";
import { DragProvider } from "@/context/DragProvider.tsx";
import { store } from "@/store/store.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<DragProvider>
				<App />
			</DragProvider>
		</Provider>
	</StrictMode>,
);
