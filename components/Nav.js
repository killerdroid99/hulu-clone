import requests from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
	const router = useRouter();

	return (
		<nav className="relative">
			<div className="flex w-full space-x-10  px-10 md:px-20 md:space-x-20 overflow-x-scroll text-2xl whitespace-nowrap scrollbar-hide">
				{requests.map(({ id, title, url }) => (
					<h2
						key={id}
						onClick={() => router.push(`/?genre=${id}`)}
						className="cursor-pointer transition-duration-10 transform hover:scale-125 hover:text-white active:text-red-500"
					>
						{title}
					</h2>
				))}
			</div>
			<div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] w-24 h-full"></div>
		</nav>
	);
};

export default Nav;
