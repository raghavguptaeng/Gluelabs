import React, { Component } from 'react'

class ApiFetcher extends Component {
    constructor(props) {
        console.log('called');
        super(props)
        this.state = {
            api_data: '',
            toSearch:props.tosearch,
        }
        console.log(props.tosearch);
    }

    async componentDidMount() {
        // const url = "https://finalspaceapi.com/api/v0/character/";
        const url = `https://api.giphy.com/v1/stickers/translate?api_key=meQbSH0j8E138W5aM2GQbzkGllPL7704&s=${this.state.toSearch}`;
        const res = await fetch(url);
        const datataken = await res.json();
        console.log(url);
        this.setState({api_data: datataken.data.images.original.url});
    }

    render() {
        const {api_data} = this.state;
        return (
        <>
            {/* <h1>{api_data.type}</h1> */}
            <img className='m-20' src={api_data}/>
        </>
        )
    }
}
export default ApiFetcher;