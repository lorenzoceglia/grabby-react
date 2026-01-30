import { useState } from "react";
import { useDispatch } from "react-redux";
import { openWindow } from "@/store/features/windows/windowsSlice.ts";

type DockElementProps = {
	isOpened?: boolean;
	isSeparator?: boolean;
	icon: string;
};

const DockElement = ({ isSeparator = false, icon }: DockElementProps) => {
	const [isBouncing, setIsBouncing] = useState(false);
	const [isOpened, setIsOpened] = useState(false);

	const dispatch = useDispatch();

	const handleClick = () => {
		if (isBouncing) return;
		setIsBouncing(true);
	};

	return (
		<li
			onClick={handleClick}
			className={`${isOpened ? "relative" : ""}${isSeparator ? "mx-2.5" : ""} cursor-pointer`}
		>
			<img
				src={`/icons/${icon}.svg`}
				alt={icon}
				className={
					isBouncing
						? "animate-[macos-dock-lift_900ms_cubic-bezier(0.32,0.72,0,1)]"
						: ""
				}
				onAnimationStart={() => setIsOpened(true)}
				onAnimationEnd={() => {
					setIsBouncing(false);
					dispatch(
						openWindow({
							window: {
								title: "Demo Component",
								component: "demo",
								x: 100,
								y: 50,
								width: 600,
								height: 500,
								zIndex: 10,
								minimized: false,
								maximized: false,
							},
						}),
					);
				}}
			/>

			{isOpened && (
				<span className="w-1 h-1 bg-[#DCB4FF] rounded-full mx-auto block mt-0.75 absolute left-1/2 -translate-x-1/2" />
			)}
		</li>
	);
};

export default DockElement;
