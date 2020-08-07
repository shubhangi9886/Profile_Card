import React, { Component } from "react";
import { Card, withStyles, } from "@material-ui/core";
import { CardText, CardBody, CardTitle, Button } from 'reactstrap';
import demo from "./cute-girl-baby.jpg";

const styles = theme => ({
    root: {
        height: 300,
        width: '20%',
        marginTop: '10%',
        marginLeft: '40%',
        border: '1px solid black',
    },
})

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'shubhangi',
            profile: demo,
            Description: 'she is very cute Girl'
        };
    }

    render() {
        const { classes, } = this.props;
        return (
            <div>
                <Card className={classes.root}>
                    <div className={classes.img}>
                        <img  src={this.state.profile}
                            style={{ width: "170px", borderRadius: "50%", height: "170px", cursor: "pointer" , marginTop:'5%' }}
                            alt="img" />
                    </div>
                    <CardBody>
                        <CardTitle>{this.state.name}</CardTitle>
                        <CardText>{this.state.Description}</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(CardComponent);