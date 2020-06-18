import React from 'react';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.count,
            header: props.header,
            body: props.body,
        }
    }

    
}