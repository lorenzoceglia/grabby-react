import type { ReactNode } from "react";

const DesktopGrid = ({ children }: { children: ReactNode }) => {
	return (
		<div className="absolute right-0 grid grid-flow-row auto-rows-max gap-4 p-4">
			{children}
		</div>
	);
};

export default DesktopGrid;
