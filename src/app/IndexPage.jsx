import React from 'react';

import FluxControllerInjector from 'reactjs-web-boilerplate/lib/app/flux/FluxControllerInjector';

export default React.createClass({
    mixins: [FluxControllerInjector],

    render() {
        return (<div className="page">
            {this.props.children}
        </div>);
    }
});