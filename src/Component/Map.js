import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';


export class Map extends React.Component {
    render() {
        return (
            <div>
                <Form.Text className="text-muted">
                    <h2>{this.props.mapdisplay_name} {this.props.maplat} {this.props.maplon} </h2>
                    <p>{this.props.mapdisplay_name} </p>
                </Form.Text>
                <Image src={this.props.mapImagesrc} fluid />
            </div>
        )
    }
}

export default Map
