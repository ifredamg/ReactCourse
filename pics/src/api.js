import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID vX7zktOapIW9iW0AlpvgAdDonCNS8O-fH7_kBGa7FyQ'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;