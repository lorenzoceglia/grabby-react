import DraggableCard from "./components/DraggableCard";
import { useDrag } from "./hooks/useDrag";

export default function App() {
	const { registerDrag } = useDrag();

	return (
		<div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 flex justify-center items-center p-8">
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
						<img
							alt="dog"
							style={{ maxWidth: "unset", height: "200px", width: "200px" }}
							src="https://placedog.net/200/200?random"
						/>
					</DraggableCard>
					<DraggableCard
						{...registerDrag("second")}
						title="Titolo2"
						description="Descrizione2"
					>
						<img
							alt="dog"
							style={{ maxWidth: "unset", height: "200px", width: "200px" }}
							src="https://placedog.net/200/200?random"
						/>
					</DraggableCard>
					<DraggableCard
						{...registerDrag("third")}
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
					</DraggableCard>
				</div>
			</div>
		</div>
	);
}
