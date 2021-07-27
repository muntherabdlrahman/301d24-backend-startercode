import React, { Component } from 'react'
import axios from 'axios'
import { CardGroup } from 'react-bootstrap'
// import FavCard
import updateForm from './updateForm'



export class Favorite extends Component {
    constructor(props){
        super(props)
        this.state={
            favCoffie:[],
            choosentoDate:{},
            showForm:false
        }
    }


    componentDidMount=()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/fav-list`).then(response=>{
            this.setState({
                favCoffie:response.data
            })

        }).catch(error=>alert('error'))
    }


    deleteFav=async(item)=>{
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete/${item.id}`).then(response=>{


        }).catch(error=>alert('erroe'))
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/fav-list`).then(response=>{
            this.setState({
                favCoffie:response.data
            })
        }).catch(error=>alert('erroe'))
    }



    updateApi=async(e)=>{
        e.preventDefault();
        const id =this.state.choosentoDate.id
        const reqBody={
            title:e.target.value,
            description:e.target.value,
            ingredients:e.target.value,
            img:e.target.value,
            id:e.target.value
        }
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Favorite
