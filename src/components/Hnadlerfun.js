import { func } from "prop-types";
import React, { Component } from "react";

const Handlerfun = (props) => {
    function changeFun() {
        alert("changeFun");
    }

    function changeFunArgum(name) {
        alert("change or not" + name)
    }
    return (
        <>
            Handlerfun
            <button type="button" onClick={changeFun}>Click</button>
            <button type="button" onClick={() => changeFunArgum(props.name)}>Click Here</button>
        </>

    );
}




class Handlerfuntwo extends Component {
    changeName() {
        alert("changeName");
    }


    changeEmailFun(data) {
        alert(data);
    }


    changeEmailFunTwo = (data) => {
        alert(data);
    }


    render() {
        const changeNameFun = (data) => {
            alert(data);
        }
        return (

            <>
                <br></br>
                <br></br>
                Handlerfuntwo
                <button type="button" onClick={this.changeName}> Click</button>
                <button type="button" onClick={() => changeNameFun("using class")}>Using class Click</button>
                <button type="button" onClick={() => this.changeEmailFun("using class changeEmailFun")}>Using class changeEmailFun Click</button>
                <button type="button" onClick={() => this.changeEmailFunTwo(this.props.data)}>Using props  Click</button>
            </>

        );
    }
}

export { Handlerfuntwo };
export default Handlerfun;

// class Component k andr ham function ka keywored nahi lagatay hay
// functional Component k andr ham function ka keyword  lagatay hay