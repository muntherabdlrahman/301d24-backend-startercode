import React, { Component } from 'react'
import axios from 'axios'

import { CardGroup, Spinner } from 'react-bootstrap'

export class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            dataFromBack:[]
        }
    }
    componentDidMount=()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/apiaxios`).then(response=>{
            this.setState({
                dataFromBack:response.data
            })
        }).catch(error=>alert(error.message))
    }

    selectFav=(element)=>{
        const reqBody={
            title:element.title,
            description:element.description,
            ingredients:element.ingredients,
            img:element.img,
            id:element.id
        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/create`,reqBody).then(response=>{
            console.log(response.data)
            if(response.data==='Data has been decleared'){
                alert('this type is alrady exist')
            }else{
                alert('Fine')
            }
        }).catch(error=>alert(error.message))
    }




    render() {
        
        


        return (
            <div>
                {
                    this.state.dataFromBack.length>0?
                    <CardGroup>
                        {
                            this.state.dataFromBack.map((value,idx)=>{
                                return(
                                    <HomeCard
                                    key={idx}
                                    id={value.id}
                                    title={value.title}
                                    description={value.description}
                                    ingredients={value.ingredients}
                                    img={value.img}
                                    selectFav={this.selectFav}
                                    />
                                )
                            })
                        }
                    </CardGroup>
                    :
                    <Spinner animation='border'/>
                }
                
            </div>
        )
    }
}

export default Home
