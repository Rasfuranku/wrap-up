import * as React from 'react';

export interface HelloProps { compiler: string; framework: string; }

export class HomePage extends React.Component<HelloProps, {}> {    
    constructor(props: any) {
        super(props);
    }

    render() {
        return <h1 id="title">Hello from {this.props.compiler} and {this.props.framework}</h1>;
    }
}