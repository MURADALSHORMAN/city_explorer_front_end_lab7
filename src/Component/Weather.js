import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

export class Weather extends Component {




    render() {
        return (
            this.props.wtherinfo.map(value1 => {
                return (

                    <Card style={{ width: '18rem' }}>

                        <Card.Body>
                            <>
                                <Table striped bordered hover variant="dark">
                                    <tr>
                                        <td>{value1.date}</td>
                                        <td>{value1.description}</td>
                                    </tr>
                                </Table>
                            </>
                        </Card.Body>
                    </Card>
                );
            })

        )

    }
}

export default Weather



