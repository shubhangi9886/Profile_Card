import React, { Component } from "react";
import { Card, } from "@material-ui/core";
import { CardText, CardTitle, } from 'reactstrap';
import demo from "./cute-girl-baby.jpg";

class CardDetail extends Component {
    render() {
        const name = 'shubhangi'
        const description = 'She is a Programmer. Now she is doing React.js.'
        const profile = demo

        return (
            <div>
                <Card style={{ height: 300, width: '20%', marginTop: '10%', marginLeft: '40%', border: '1px solid black', }}>
                    <div>
                        <img src={profile}
                            style={{
                                width: "170px", borderRadius: "50%", height: "170px", cursor: "pointer", marginTop: '5%'
                            }} alt="" />
                    </div>
                    <CardTitle><h1>{name}</h1></CardTitle>
                    <CardText>{description}</CardText>
                </Card>
            </div>
        )
    };
}

export default (CardDetail); 