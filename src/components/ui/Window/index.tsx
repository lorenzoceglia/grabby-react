import type { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { closeWindow } from "@/store/features/windows/windowsSlice.ts";

type WindowProps = {
	title: string;
	description: string;
	ref: (el: HTMLDivElement) => void;
	dimensions: {
		width: number;
		heigth: number;
	};
	id: string;
};

const Window = ({
	title,
	description,
	ref,
	id,
	children,
	dimensions,
}: PropsWithChildren<WindowProps>) => {
	const dispatch = useDispatch();

	return (
		<div
			ref={ref}
			id={id}
			style={{
				height: `${dimensions.heigth}px`,
				width: `${dimensions.width}px`,
			}}
			className="bg-white absolute rounded-2xl shadow-2xl border border-gray-300/50 backdrop-blur-sm"
		>
			<div
				id={`${id}-header`}
				className="bg-linear-to-b relative rounded-t-2xl from-gray-100 to-gray-200 px-4 py-1.5 flex items-center gap-2 border-b border-gray-300/50 select-none"
			>
				<div className="flex gap-2 absolute">
					<div
						onClick={() =>
							dispatch(
								closeWindow({
									id,
								}),
							)
						}
						className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
					/>
					<div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" />
					<div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" />
				</div>
				<span className="text-sm font-medium text-gray-700 w-full text-center pointer-events-none">
					{title}
				</span>
			</div>
			<div className="px-6 py-4 rounded-2xl text-gray-700 leading-relaxed bg-white">
				{children ?? description}
			</div>
		</div>
	);
};

export default Window;
