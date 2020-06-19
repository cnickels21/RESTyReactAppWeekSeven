import React from 'react';

export default function Results(props) {
    return (
        <>
            <div>{JSON.stringify(props.header)}</div>
            <div>{JSON.stringify(props.body)}</div>
        </>
    )
}