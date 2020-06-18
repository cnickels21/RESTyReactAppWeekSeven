import React from 'react';

export default function Results(props) {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         count: props.count,
    //         header: props.header,
    //         body: props.body,
    //     }
    // }

    render() {
        return (
            <>
                <div>
                    <ul>
                        {props.body.map((item, index) => (
                            <li>
                                {item.header}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }

}