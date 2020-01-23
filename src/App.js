import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import YoutubeApi from './api/YoutubeApi'
import Searchbar from './components/Searchbar'
import Videodetail from './components/Videodetail'
import Videolist from './components/Videolist'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
        }
    }
    handleSubmit = async (searchTerm) =>{
        const responce = await YoutubeApi.get('search', { 
            params: {
                part: "snippet",
                maxResults: 5,
                key: api key,
                q: searchTerm,
            }
        })
        this.setState({
            videos: responce.data.items,
            selectedVideo: responce.data.items[0]
        })
    }

    onVideoSelect = (video) =>{
        this.setState({
            selectedVideo: video
        })
    }

    componentDidMount(){
        this.handleSubmit('react tutorial')
    }

    render() {

        const {selectedVideo, videos} = this.state

        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Searchbar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                           <Videodetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <Videolist videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default App
