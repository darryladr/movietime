const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/',
	apiKey: 'f0e7a857e67aff104ceefd8714f50de3',
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
