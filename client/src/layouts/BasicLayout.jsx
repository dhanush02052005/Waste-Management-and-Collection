import PropTypes from 'prop-types';
import React from 'react';

export default function BasicLayout({ children }) {
    return <div>
        <h1>Basic</h1>
        <div>{children}</div>
    </div>;
}

BasicLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
