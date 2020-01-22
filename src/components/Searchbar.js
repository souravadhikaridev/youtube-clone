import React, { Component } from 'react'

import { Paper, TextField } from '@material-ui/core'

class Searchbar extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            search:''
       }
    }

    handleChange = (e) =>{
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const {search} = this.state
        const {onFormSubmit} = this.props
        onFormSubmit(search)
    }

    render() {
        return (
            <React.Fragment>
               <Paper elevation={6} style={{padding:'25px'}}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField style={{width:'100%'}} label="search video" onChange={this.handleChange}/>
                    </form>
               </Paper>
            </React.Fragment>
        )
    }
}
export default Searchbar