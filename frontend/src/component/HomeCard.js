import React, { Component } from 'react'
import { Card, CardImg } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export class HomeCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                    <Card.Img variant='top' src={this.props.img}/>
                    <CardHeader>{this.props.title}</CardHeader>
                    <h4>{this.props.ingredients}</h4>
                    <h5>{this.props.description}</h5>
                    <Button variant='primary' onClick={()=>this.props.selectFav(this.props)}>Add Your Fav Coffie</Button>
                    
                    
                    </Card.Body>

                    
                </Card>
                
            </div>
        )
    }
}

export default HomeCard
