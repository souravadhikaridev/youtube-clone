import React from 'react'
import { Paper, Typography } from '@material-ui/core'
const Videodetail = ({ video }) => {

    if (!video) {
        return (
            <div>loading...</div>
        )
    }
    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={2} style={{ height: '50%' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="youtube video player"
                    src={videoURL}
                />

            </Paper>
            <Paper elevation={2} style={{ padding: '15px' }}>
                <Typography variant="h5">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )

}
export default Videodetail
