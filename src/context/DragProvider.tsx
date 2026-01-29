import React, { useCallback, useEffect, useRef, useState } from "react";
import { DragContext } from "./DragContext";

export const DragProvider = ({ children }: { children: React.ReactNode }) => {
	const [trackedElement, setTrackedElement] = useState<string | undefined>();
	const [offset, setOffset] = useState({ offsetX: 0, offsetY: 0 });

	const dragsRef = useRef<
		Record<
			string,
			{
				ref: HTMLElement | null;
				id: string;
			}
		>
	>({});

	const parentRef = useRef<HTMLElement | null>(null);

	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
			if (!trackedElement) return;

			const drag = dragsRef.current[trackedElement];
			const element = drag?.ref;

			if (!element) return;

			const elementRect = element.getBoundingClientRect();

			if (parentRef.current) {
				const parent = parentRef.current;
				const parentRect = parent.getBoundingClientRect();

				let x = e.clientX - parentRect.left - offset.offsetX;
				let y = e.clientY - parentRect.top - offset.offsetY;

				x = Math.max(0, Math.min(x, parentRect.width - elementRect.width));
				y = Math.max(0, Math.min(y, parentRect.height - elementRect.height));

				element.style.left = `${x}px`;
				element.style.top = `${y}px`;
				return;
			}

			element.style.left = `${e.clientX - offset.offsetX}px`;
			element.style.top = `${e.clientY - offset.offsetY}px`;
		},
		[trackedElement, offset],
	);

	const handleMouseDown = (e: MouseEvent) => {
		e.preventDefault();

		const pressedElement = e.target as HTMLElement;

		if (pressedElement) {
			const pressedId = pressedElement.id.replace("-header", "");
			setOffset({
				offsetX: e.offsetX,
				offsetY: e.offsetY,
			});
			setTrackedElement(pressedId);
		}
	};

	const handleMouseUp = (e: MouseEvent) => {
		e.preventDefault();
		setTrackedElement(undefined);
		setOffset({ offsetX: 0, offsetY: 0 });
	};

	useEffect(() => {
		const parent = (parentRef.current ?? window) as HTMLElement;

		parent.addEventListener("mousemove", handleMouseMove);
		return () => {
			parent.removeEventListener("mousemove", handleMouseMove);
		};
	}, [trackedElement, parentRef]);

	useEffect(() => {
		const parent = (parentRef.current ?? window) as HTMLElement;

		parent.addEventListener("mousedown", handleMouseDown);
		parent.addEventListener("mouseup", handleMouseUp);

		return () => {
			parent.removeEventListener("mousedown", handleMouseDown);
			parent.removeEventListener("mouseup", handleMouseUp);
		};
	}, [trackedElement, parentRef]);

	const registerDrag = (id: string) => {
		if (!dragsRef.current[id]) {
			dragsRef.current[id] = {
				ref: null,
				id: "",
			};
		}

		const field = dragsRef.current[id];

		return {
			ref: (el: HTMLElement | null) => {
				field.ref = el;

				let currentParent = el?.parentElement;

				while (
					currentParent &&
					getComputedStyle(currentParent).position !== "relative"
				) {
					currentParent = currentParent?.parentElement;
				}

				if (currentParent) {
					parentRef.current = currentParent;
				}
			},
			id,
		};
	};

	return (
		<DragContext.Provider
			value={{
				registerDrag,
			}}
		>
			{children}
		</DragContext.Provider>
	);
};
