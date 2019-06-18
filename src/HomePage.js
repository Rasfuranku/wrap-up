import React from 'react';

const div = React.createElement

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: "false"
        }

        this.disableButton.bind(this);
    }

    disableButton(){
        this.setState({active: "true"})
    }

    render(){
        return div(
            'button',
            {
                onClick: () => {this.disableButton()},
                disable: this.state.active
            },
            "Active"
        );
    }
}

export default HomePage;