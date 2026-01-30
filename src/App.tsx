import DesktopGrid from "./components/ui/DesktopGrid";
import GridElement from "./components/ui/DesktopGrid/components/GridElement";
import Dock from "./components/ui/Dock";
import Header from "./components/ui/Header";
import Window from "./components/ui/Window";
import { useDrag } from "./hooks/useDrag.ts";

const desktopIcons = [
	{ id: "fabless", name: "Fabless", icon: "Folder" },
	{ id: "nextAdv", name: "Next Adv", icon: "Folder" },
	{ id: "accenture", name: "Accenture", icon: "Folder" },
	{ id: "sparkFabrik", name: "SparkFabrik", icon: "Folder" },
];

const App = () => {
	const { registerDrag } = useDrag();

	return (
		<div className="relative h-screen w-full bg-[url(/public/wallpapers/wp-dark.png)] bg-no-repeat bg-cover">
			<Header />
			<DesktopGrid>
				{desktopIcons.map((icon) => (
					<GridElement key={icon.id} icon={icon.icon} name={icon.name} />
				))}
			</DesktopGrid>
			<Window
				{...registerDrag("first", {
					left: "100px",
					top: "200px",
				})}
				title="Titolo"
				description="Descrizione"
			>
				<img
					alt="dog"
					style={{ maxWidth: "unset", height: "200px", width: "200px" }}
					src="https://placedog.net/200/200?random"
				/>
			</Window>
			<Window
				{...registerDrag("second", {
					left: "500px",
					top: "200px",
				})}
				title="Titolo2"
				description="Descrizione2"
			>
				<img
					alt="dog"
					style={{ maxWidth: "unset", height: "200px", width: "200px" }}
					src="https://placedog.net/200/200?random"
				/>
			</Window>
			<Window
				{...registerDrag("third", {
					left: "800px",
					top: "400px",
				})}
				title="Contact Form"
				description="Fill in your details"
			>
				<form className="space-y-3 p-4">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
							placeholder="Enter your name"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
							placeholder="your@email.com"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
					>
						Submit
					</button>
				</form>
			</Window>
			<Dock />
		</div>
	);
};
export default App;
