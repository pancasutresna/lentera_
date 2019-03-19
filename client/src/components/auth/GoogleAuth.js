import React from 'react';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1014697918402-nd29jmo89uhluh9nc7v79sauinq9b4te.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return <div>Google Auth</div>;
    };
}

export default GoogleAuth;