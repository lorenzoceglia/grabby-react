import DraggableCard from "./components/DraggableCard";
import { useDrag } from "./hooks/useDrag";

export default function App() {
	const { registerDrag } = useDrag();

	return (
		<div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center p-8">
			<div className="relative w-full max-w-3xl h-200 bg-white/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6">
				<h1 className="text-3xl font-bold text-gray-800 mb-6 text-center bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
					Draggable Cards
				</h1>
				<div className="space-y-4">
					<DraggableCard
						{...registerDrag("first")}
						title="Titolo"
						description="Descrizione"
					>
						<img alt="dog" src="https://placedog.net/200/200?random" />
					</DraggableCard>
					<DraggableCard
						{...registerDrag("second")}
						title="Titolo2"
						description="Descrizione2"
					>
						<img alt="dog" src="https://placedog.net/200/200?random" />
					</DraggableCard>
					<DraggableCard
						{...registerDrag("third")}
						title="Titolo3"
						description="Descrizione3"
					>
						<img alt="dog" src="https://placedog.net/200/200?random" />
					</DraggableCard>
				</div>
			</div>
		</div>
	);
}
