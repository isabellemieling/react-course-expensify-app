// higher-order component: a component that renders another component 
// Reuse code, render hijacking, prop manipulation, abstract state 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info </h1>
            <p>The info: {props.info} </p>
        
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    // This is where we return a new component 
    // This component will be the HOC

    return (props) => (
        <div>
            { props.isAdmin && <p>This is private information. Please don't share.</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props} /> 
             ) : (
                 <p>You are not authorized to view this page. Please login to view info.</p>
             )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info); 
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info='Here are the details' />, document.getElementById('myAppContent'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='Here are the details' />, document.getElementById('myAppContent'));