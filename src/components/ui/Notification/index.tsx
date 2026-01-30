const Notification = () => {
	return (
		<div className="flex px-3 pt-3 right-0 border-[#262626] pb-3.75 absolute gap-2 items-center bg-[#F6F6F6] rounded-2xl">
			<div className="py-5">
				<img src="/icons/Music.svg" alt="Music" />
			</div>
			<div className="flex flex-col">
				<p>Nome Notifica</p>
				<p>Maecenas faucibus mollis interdum. Morbi leo risus.</p>
			</div>
			<div className="flex-col justify-end items-center">
				<p>now</p>
			</div>
		</div>
	);
};

export default Notification;
