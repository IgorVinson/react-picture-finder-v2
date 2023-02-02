import './App.css';
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import React from 'react';
import {fetchData} from "./api/fetchData";
import Button from "./components/Button";


const App = () => {
        const [images, setImages] = React.useState([]);
        const [page, setPage] = React.useState(1);
        const [searchQuery, setSearchQuery] = React.useState('');
        const [setIsLoading] = React.useState(true);

        const updateSearchQuery = (e) => {
            e.preventDefault();
            const searchQuery = e.target[0].value;

            fetchData(searchQuery).then(images => {
                setImages(images);
                setSearchQuery(searchQuery);
                setIsLoading(false);
            })
        }

        const loadMore = () => {
            fetchData(searchQuery, page + 1).then(images => {
                setImages(prevState => [...prevState, ...images]);
                setPage(prevState => prevState + 1);
            })
        }

        return (
            <div className="App">
                <Searchbar onSubmit={updateSearchQuery}/>
                <ImageGallery images={images}/>
                {images.length > 0 && <Button loadMore={loadMore}/>}
            </div>
        );
    }
;

export default App;
