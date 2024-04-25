import { useState } from 'react';
import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        console.log("Pesquisar com o termo: ", term);

        const result = await searchImages(term);

        setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;