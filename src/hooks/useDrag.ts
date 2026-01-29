import { useContext } from "react";
import { DragContext } from "../context/DragContext";

export const useDrag = () => {
	const context = useContext(DragContext);
	if (context === undefined) {
		throw new Error("useDrag must be used within DragProvider");
	}
	return context;
};
