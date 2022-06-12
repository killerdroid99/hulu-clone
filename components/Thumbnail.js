import Image from "next/image";
import { ThumbUpIcon, StarIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
	console.log(result);
	const BASE_URL = "https://image.tmdb.org/t/p/original";
	return (
		<div
			ref={ref}
			className="group cursor-pointer hover:scale-105 hover:z-50 min-w-40 transition-all ease-in-out bg-[#02171f] rounded-md shadow-black shadow-md overflow-hidden"
		>
			<Image
				layout="responsive"
				src={`${BASE_URL}/${result.backdrop_path || result.poster_path}`}
				height={1080}
				width={1920}
			/>
			<div className="p-2">
				<p className="truncate max-w-md">{result.overview}</p>
				<h2 className="text-xl font-medium group-hover:font-extrabold">
					{result.title || result.original_name}
				</h2>
				<p className="flex opacity-0 group-hover:opacity-100 text-red-400">
					{result.media_type && `${result.media_type}  •`}{" "}
					{result.release_date || result.first_air_date} •{" "}
					<ThumbUpIcon className="h-5 mx-2 text-blue-400" />
					<span className="text-white">{result.vote_count} • </span>
					<StarIcon className="h-5 mx-2 text-yellow-400" />
					<span className="text-white">{result.vote_average}</span>
					{result.adult && <span className="text-red-500">Adult</span>}
				</p>
			</div>
		</div>
	);
});

export default Thumbnail;
