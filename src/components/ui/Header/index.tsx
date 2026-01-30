const Header = () => {
	return (
		<div className="flex justify-between py-1 px-2 bg-[#000000]/18">
			<ul className="flex text-white items-center">
				<li className="mx-2.75">
					<img src="/icons/header/AppleLogo.svg" alt="Logo" />
				</li>
				<li className="mx-2.75 text-sm">Finder</li>
				<li className="mx-2.75 text-sm">File</li>
				<li className="mx-2.75 text-sm">Edit</li>
				<li className="mx-2.75 text-sm">View</li>
				<li className="mx-2.75 text-sm">Go</li>
				<li className="mx-2.75 text-sm">Window</li>
				<li className="mx-2.75 text-sm">Help</li>
			</ul>
			<ul className="flex text-white items-center">
				<li className="mx-2.75">
					<img src="/icons/header/WiFi.svg" alt="Connection" />
				</li>
				<li className="mx-2.75">
					<img src="/icons/header/Find.svg" alt="Find" />
				</li>
				<li className="mx-2.75">
					<img src="/icons/header/Profile.svg" alt="Profile" />
				</li>
				<li className="mx-2.75">
					<img src="/icons/header/Settings.svg" alt="Settings" />
				</li>
				<li className="mx-2.75 text-sm">Mon Jun 10 9:41 AM</li>
			</ul>
		</div>
	);
};

export default Header;
