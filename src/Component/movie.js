import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export class Movie extends Component {




    render() {
        return (

            this.props.movieinfo.map(value1 => {
                
                return (
                   
                <div>
                         <Card style={{ width: '18rem' }}>
                             { value1.poster_path ? <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${value1.poster_path}`} /> 

                        :<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`} />}
                        
                       
                        
                        <Card.Body>
                            <Card.Title>{value1.original_title}</Card.Title>
                            <Card.Text>
                                {value1.original_language}
                            </Card.Text>
                            <Card.Text>
                                {value1.overview}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                );
            })


        )
    }
}

export default Movie
