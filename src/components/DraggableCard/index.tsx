import type { PropsWithChildren } from "react";

type DraggableCardProps = {
	title: string;
	description: string;
	ref: (el: HTMLDivElement) => void;
	id: string;
};

const DraggableCard = ({
	title,
	description,
	ref,
	id,
	children,
}: PropsWithChildren<DraggableCardProps>) => {
	return (
		<div
			ref={ref}
			id={id}
			className="bg-white absolute rounded-xl shadow-2xl border border-gray-300/50 backdrop-blur-sm"
		>
			<div
				id={`${id}-header`}
				className="bg-linear-to-b from-gray-100 to-gray-200 px-4 py-4 cursor-move flex items-center gap-2 border-b border-gray-300/50 select-none"
			>
				<div className="flex gap-2 pointer-events-none">
					<div className="w-3 h-3 rounded-full bg-red-500" />
					<div className="w-3 h-3 rounded-full bg-yellow-500" />
					<div className="w-3 h-3 rounded-full bg-green-500" />
				</div>
				<span className="text-sm font-medium text-gray-700 ml-2 pointer-events-none flex-1">
					{title}
				</span>
			</div>
			<div className="px-6 py-4 text-gray-700 leading-relaxed bg-white">
				{children ?? description}
			</div>
		</div>
	);
};

export default DraggableCard;
