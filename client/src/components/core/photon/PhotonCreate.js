import React from 'react';
import { connect } from 'react-redux';
import { createPhotons } from '../../../actions/index';
import PhotonForm from './PhotonForm';

class PhotonCreate extends React.Component {

    onSubmit = formValues => {
        this.props.createPhotons(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Photon</h3>
                <PhotonForm onSubmit={this.onSubmit} />
            </div>
        );
    };
}

export default connect(null, { createPhotons })(PhotonCreate);