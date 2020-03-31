import React from 'react';
import { css } from '@emotion/core';
import BounceLoader from 'react-spinners/BounceLoader';

class Loader extends React.Component {
    
    render() {
        const override = css`
            display: block;
            margin: 3 auto;
            border-color: blue;
            color: #1f3fb3
            align-self: center;
            justify-content: center;
            margin-top: 18%;
            margin-left: 48.5%;
        `;
        
        return (
            <div>
                <BounceLoader
                    css={override}
                    size={35}
                    color={"#1f3fb3"}
                />
                <h5 className="text-center mt-2">Loading</h5>
            </div>
        );
    }
}

export default Loader;