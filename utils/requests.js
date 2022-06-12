const API_KEY = process.env.API_KEY;

export default [
	{
		id: 1,
		title: "Trending",
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	{
		id: 2,
		title: "Top Rated",
		url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	{
		id: 3,
		title: "Action",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	{
		id: 4,
		title: "Comedy",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	{
		id: 5,
		title: "Horror",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	{
		id: 6,
		title: "Romance",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	{
		id: 7,
		title: "Mystery",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	},
	{
		id: 8,
		title: "Sci-Fi",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	},
	{
		id: 9,
		title: "Western",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	},
	{
		id: 10,
		title: "Animation",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	{
		id: 11,
		title: "TV Movie",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
];
