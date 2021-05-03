const API_Key="740e24f3f42b08c2664cfccd3b58490b"

const requests={
    fetchTopRated:`/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`,
    fetchPopular:`/movie/popular?api_key=${API_Key}&language=en-US&page=1`,
    fetchTrending:`/trending/all/day?api_key=${API_Key}`,
    fetchUpcoming:`movie/upcoming?api_key=${API_Key}&language=en-US&page=1`,

}

export default requests;  