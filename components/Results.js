import Thumbnail from "./Thumbnail";

function Results({ requests }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:flex my-6 gap-4 p-6 flex-wrap justify-center">
			{requests.map((result) => (
				<Thumbnail key={result.id} result={result} />
			))}
		</div>
	);
}

export default Results;
