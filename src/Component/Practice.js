import React from "react";
import { Card, } from "@material-ui/core";
import { CardText, CardTitle, } from 'reactstrap';
import demo from "./cute-girl-baby.jpg";

function CardDetail() {
    return (
        <div>
            <Card className='root'
                style={{
                    height: 300,
                    width: '20%', marginTop: '10%',
                    marginLeft: '40%',
                    border: '1px solid black',
                }}>
                <div>
                    <img src={demo}
                        style={{
                            width: "170px",
                            borderRadius: "50%",
                            height: "170px",
                            cursor: "pointer",
                            marginTop: '5%'
                        }}
                        alt="" />
                </div>
                <CardTitle><h1>Shubhangi</h1></CardTitle>
                <CardText>She is a Programmer. Now she is doing React.js.</CardText>
            </Card>
        </div>
    );
}

export default (CardDetail);