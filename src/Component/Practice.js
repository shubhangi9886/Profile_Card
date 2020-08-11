import React, { Component } from 'react';
import demo from "./cute-girl-baby.jpg";
import Card from '@material-ui/core/Card'

class Detail extends Component {
    render() {
        return (
            <div>
                <SimpleCard
                    name="Shubhangi"
                    description="She is a Programmer. Now she is working in React.js"
                    profile={demo}
                />
            </div>
        );
    }
}

class SimpleCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ height: 350, width: '20%', marginTop: '10%', marginLeft: '40%', border: '1px solid black', }}>
                    <img ref="image" src={this.props.profile} style={{
                        width: "170px", borderRadius: "50%", height: "170px", cursor: "pointer", marginTop: '5%'
                    }} alt="" />
                    <h2>{this.props.name}</h2>
                    <p> {this.props.description}</p>

                </Card>
            </div>
        );
    }
}

export default Detail;