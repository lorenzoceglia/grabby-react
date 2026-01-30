import DockElement from "./components/DockElement";

const Dock = () => {
	return (
		<ul className="pt-1.25 pb-2.5 flex w-fit items-center border border-[white]/39 gap-0.5 rounded-2xl px-1.25 absolute bottom-1.25 left-0 right-0 mx-auto bg-[#4A4A4A]/39">
			<DockElement icon="Finder" isOpened={true} />
			<DockElement icon="Menu" />
			<DockElement icon="Safari" isOpened={true} />
			<DockElement icon="Photos" />
			<DockElement icon="Messages" />
			<DockElement icon="Music" />
			<DockElement icon="Notes" />
			<DockElement icon="Settings" />
			<DockElement icon="Separator" isSeparator={true} />
			<DockElement icon="Folder" />
			<DockElement icon="TrashEmpty" />
		</ul>
	);
};

export default Dock;
