import axios from "axios";

const KEY = '33275118-edebbd3934cfb15dd3f1c33fb'


export const fetchData = (query,page) => {

    const params = {
        key: KEY,
        q: query,
        image_type: 'photo',
        page ,
        per_page: 12,
        orientation: 'horizontal',
        safeSearch: true,
    }
    console.log(params.q);
    return axios
        .get(`https://pixabay.com/api/`, {params})
        .then(response => response.data.hits);
}

