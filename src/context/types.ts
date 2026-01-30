export interface DragContextType {
	registerDrag: (
		id: string,
		defaultPosition?: DefaultElementPosition,
	) => {
		ref: (el: HTMLElement | null) => void;
		id: string;
	};
}

export type DefaultElementPosition = {
	left: string;
	top: string;
};
