import { useSelector } from "react-redux";
import { APPS, type AppsType } from "@/components/apps/apps.ts";
import DesktopGrid from "@/components/ui/DesktopGrid";
import GridElement from "@/components/ui/DesktopGrid/components/GridElement";
import Dock from "@/components/ui/Dock";
import Header from "@/components/ui/Header";
import Window from "@/components/ui/Window";
import { useDrag } from "@/hooks/useDrag.ts";
import type { RootState } from "@/store/store.ts";

const desktopIcons = [
	{ id: "fabless", name: "Fabless", icon: "Folder" },
	{ id: "nextAdv", name: "Next Adv", icon: "Folder" },
	{ id: "accenture", name: "Accenture", icon: "Folder" },
	{ id: "sparkFabrik", name: "SparkFabrik", icon: "Folder" },
];

const App = () => {
	const { registerDrag } = useDrag();

	const windows = useSelector((state: RootState) => state.windows.windows);

	const windowRenderer = (component: AppsType) => {
		const Component = APPS[component];
		return <Component />;
	};

	return (
		<div className="relative h-screen w-full bg-[url(/wallpapers/wp-dark.png)] bg-no-repeat bg-cover">
			<Header />
			<DesktopGrid>
				{desktopIcons.map((icon) => (
					<GridElement key={icon.id} icon={icon.icon} name={icon.name} />
				))}
			</DesktopGrid>
			{windows.map((storeWindow) => (
				<Window
					{...registerDrag(storeWindow.id, {
						left: "100px",
						top: "200px",
					})}
					dimensions={{
						heigth: storeWindow.height,
						width: storeWindow.width,
					}}
					key={storeWindow.id}
					title={storeWindow.title}
					description={storeWindow.title}
				>
					{windowRenderer(storeWindow.component)}
				</Window>
			))}
			<Dock />
		</div>
	);
};
export default App;
