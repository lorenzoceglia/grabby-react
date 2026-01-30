type DockElementProps = {
	isOpened?: boolean;
	isSeparator?: boolean;
	icon: string;
};

const DockElement = ({
	isSeparator = false,
	isOpened = false,
	icon,
}: DockElementProps) => {
	return (
		<li
			className={`${isOpened ? "relative" : ""}${isSeparator ? "mx-2.5" : ""} cursor-pointer`}
		>
			<img src={`/icons/${icon}.svg`} alt={icon} />
			{isOpened && (
				<span className="w-1 h-1 bg-[#DCB4FF] rounded-full mx-auto block mt-0.75 absolute left-1/2 -translate-x-1/2" />
			)}
		</li>
	);
};

export default DockElement;
