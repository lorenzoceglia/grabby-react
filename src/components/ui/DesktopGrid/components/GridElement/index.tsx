const GridElement = ({ icon, name }: { icon: string; name: string }) => {
	return (
		<div className="flex flex-col cursor-pointer items-center gap-1 p-2 rounded-lg hover:bg-white/10 transition group w-20">
			<img src={`/icons/${icon}.svg`} alt={name} />
			<span className="text-xs text-white font-medium text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-tight">
				{name}
			</span>
		</div>
	);
};

export default GridElement;
