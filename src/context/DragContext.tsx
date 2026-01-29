import { createContext } from "react";
import { type DragContextType } from "./types";

export const DragContext = createContext<DragContextType | undefined>(
	undefined,
);
