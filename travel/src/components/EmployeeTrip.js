import React, {Component} from 'react'
import {Button, Form, FormGroup,  Label, Input} from 'reactstrap';

class EmployeeTrips extends Component{
    state = {
        trip: {
            cName: 'Raj',
            dName: 'selva',
            vName: 'TN 07',
            src : 'vlcy',
            dst: 'porur',
            fare: 200
        }
    }
    render(){
        return(
            <div>
                <h2>Trip details</h2>
                <Label> Customer name: </Label><span> {this.state.trip.cName}</span>
                <Label>Driver name: </Label><span> {this.state.trip.dName}</span>
                <Label>Vehicle name: </Label><span> {this.state.trip.vName}</span>
                <Label>Source place: </Label> <span> {this.state.trip.src}</span>
                <Label>Destination place: </Label><span> {this.state.trip.dst}</span>
                <Label>Fare</Label><span> {this.state.trip.fare}</span>

            </div>
        )
    }
    
}

export default EmployeeTrips