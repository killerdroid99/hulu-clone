import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";

function Header() {
	return (
		<header className="flex flex-col m-5 md:flex-row items-center justify-between h-auto">
			<div className="flex flex-grow justify-evenly max-w-2xl">
				<HeaderItem Icon={HomeIcon} title="HOME" />
				<HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
				<HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
				<HeaderItem Icon={CollectionIcon} title="COLLECTIONS" />
				<HeaderItem Icon={SearchIcon} title="SEARCH" />
				<HeaderItem Icon={UserIcon} title="ACCOUNT" />
			</div>
			<Image
				src="https://links.papareact.com/ua6"
				width={200}
				height={100}
				alt="Logo"
				className="object-contain"
			/>
		</header>
	);
}

export default Header;
