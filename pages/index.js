import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home(props) {
	return (
		<div>
			<Head>
				<title>Hulu Clone</title>
				<meta name="description" content="A Hulu clone made with nextjs" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Nav />
			<Results requests={props.results} />
		</div>
	);
}

export const getServerSideProps = async (context) => {
	const genre = context.query.genre;
	const request = await fetch(
		`https://api.themoviedb.org/3${requests[genre]?.url || requests[1].url}`
	).then((res) => res.json());

	return {
		props: {
			results: request.results,
		},
	};
};
