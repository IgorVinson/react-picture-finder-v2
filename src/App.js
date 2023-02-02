import './App.css';
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import React, {Component} from 'react';
import {fetchData} from "./api/fetchData";
import Button from "./components/Button";

export default class App extends Component {
    state = {
        images: [],
        isLoading: true,
        error: null,
        page: 1,
    }

    componentDidUpdate() {
        console.log('UPDATE');
    }

    updateSearchQuery = (e) => {
        e.preventDefault();
        const searchQuery = e.target[0].value;
        fetchData(searchQuery).then(images => {
            this.setState({images: images, isLoading: false, searchQuery: searchQuery});
        })
    }

    loadMore = () => {
        const {page, searchQuery} = this.state;
        fetchData(searchQuery, page + 1).then(images => {
            this.setState(prevState => ({
                images: [...prevState.images, ...images],
                page: prevState.page + 1,
            }))
        })
    }

    render() {
        const {images} = this.state;
        return (
            <div className="App">
                <Searchbar  onSubmit={this.updateSearchQuery}/>
               <ImageGallery images={images}/>
                {images.length>0 && <Button loadMore={this.loadMore}/>}
            </div>
        );
    }
}



