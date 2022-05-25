import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../redux/Actions/dataActions';
import { api_path } from './constants';

function HomePage() {
    const [called, setCalled] = React.useState(false);
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.movies);
    useEffect(() => {
        axios.get(api_path).then(res => {
            dispatch(setMovies(res.data.results));
        }).catch(err => {console.log(err)});
        console.log(data);
    },[called]);

    return (
        <>
        {
            data.map(item => {
                console.log(item);
                return (
                    <div>{item.name}</div>
                )
            })
        }
        </>
    )
}

export default HomePage;