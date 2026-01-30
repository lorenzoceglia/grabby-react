import type { PropsWithChildren } from "react";

type WindowProps = {
	title: string;
	description: string;
	ref: (el: HTMLDivElement) => void;
	id: string;
};

const Window = ({
	title,
	description,
	ref,
	id,
	children,
}: PropsWithChildren<WindowProps>) => {
	return (
		<div
			ref={ref}
			id={id}
			className="bg-white absolute rounded-2xl shadow-2xl border border-gray-300/50 backdrop-blur-sm"
		>
			<div
				id={`${id}-header`}
				className="bg-linear-to-b relative rounded-t-2xl from-gray-100 to-gray-200 px-4 py-1.5 cursor-move flex items-center gap-2 border-b border-gray-300/50 select-none"
			>
				<div className="flex gap-2 pointer-events-none absolute">
					<div className="w-3 h-3 rounded-full bg-red-500" />
					<div className="w-3 h-3 rounded-full bg-yellow-500" />
					<div className="w-3 h-3 rounded-full bg-green-500" />
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
