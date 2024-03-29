import React, { Component } from "react";
import PassingMethod from './PassingMethod';


class PassingMethodParent extends Component {
    
    parentMethod = (name,surname) => {
        // alert("parentMethod " + name + ' ' + surname);
        alert(`parentMethod literal template Name= ${name} and Surname= ${surname} `);
    }

    
    render() {
        return (
            <>
                PassingMethodParent
                <PassingMethod parentMethod={this.parentMethod}></PassingMethod>
            </>
        );
    }
}

export default PassingMethodParent;