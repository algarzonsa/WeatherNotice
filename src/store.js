import React from "react";

export default class Store extends React.Component{
    constructor(props){
        super(props);
        //ESTADO PRINCIPAL DE LA APLICACION
        this.state = {
            appName : "Weather Up"
        }
    }

    render(){
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {...this.state});
        });
    }
}