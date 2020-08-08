import React, { Component } from "react";
import { Card, } from "@material-ui/core";
import { CardText, CardTitle, } from 'reactstrap';
import demo from "./cute-girl-baby.jpg";
import demo1 from './image.jpg';
import demo2 from './Image.jpg';

var data = [{
    name: 'shubhangi',
    description: 'She is a Programmer. Now she is working in React.js',
    profile: demo
},{
    name: 'Rupa',
    description: 'She is a Programmer. now she is working in React.js. She is a good learner.',
    profile: demo1
}, {
    name: 'komal',
    description: 'She is a Programmer. now she is working in Node.js.',
    profile: demo2
}
]

class CardDetail extends Component {
    render() {

        return (
            <div>
                {data.map((item, i) =>
                    (<Card key={i} style={{ height: 350, width: '20%', marginTop: '10%', marginLeft: '40%', border: '1px solid black', }}>
                        <div>
                            <img src={item.profile}
                                style={{
                                    width: "170px", borderRadius: "50%", height: "170px", cursor: "pointer", marginTop: '5%'
                                }} alt="" />
                        </div>
                        <CardTitle><h1>{item.name}</h1></CardTitle>
                        <CardText>{item.description}</CardText>
                    </Card>)
                )}
            </div>
        )
    };
}

export default (CardDetail); 