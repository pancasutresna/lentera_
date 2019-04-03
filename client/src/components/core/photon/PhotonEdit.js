import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPhoton, editPhoton } from '../../../actions/index';
import PhotonForm from './PhotonForm';

class PhotonEdit extends React.Component {

    componentDidMount() {
        this.props.fetchPhoton(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editPhoton(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.photon) {
            return <div>Loading....</div>;
        }

        return (
            <div>
                <h3>Edit a Photon</h3>
                <PhotonForm
                    initialValues={_.pick(this.props.photon, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { photon: state.photons[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchPhoton, editPhoton }
)(PhotonEdit);