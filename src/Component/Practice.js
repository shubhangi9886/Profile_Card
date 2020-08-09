import React, { Component } from 'react';
import demo from "./cute-girl-baby.jpg";
import Card from '@material-ui/core/Card'

class App extends Component {
    render() {
        const name = 'Shubhangi';
        const description = 'She is a Programmer. Now she is working in React.js';
        const profile = demo;

        return (
            <div>
                <Card style={{ height: 350, width: '20%', marginTop: '10%', marginLeft: '40%', border: '1px solid black', }}>
                    <Profile profile={profile} />
                    <Name name={name} />
                    <Description description={description} />
                </Card>
            </div>
        );
    }
}

const Name = props => <h1>{props.name}</h1>;
const Description = props => <p>{props.description}</p>;
const Profile = props => <img src={props.profile} style={{
    width: "170px", borderRadius: "50%", height: "170px", cursor: "pointer", marginTop: '5%'
}} alt="" />


export default App;