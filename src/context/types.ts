export interface DragContextType {
	registerDrag: (
		id: string,
		onSubmit?: () => void,
	) => {
		ref: (el: HTMLElement | null) => void;
		id: string;
	};
}
