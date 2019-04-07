import React from 'react';
import {connect} from 'react-redux';
import {fetchPhoton} from '../../../actions/index';

class PhotonShow extends React.Component {
    componentDidMount() {
        this.props.fetchPhoton(this.props.match.params.id);
    }

    render() {
        if (!this.props.photon) {
            return <div>Loading</div>;
        }

        const {title, description} = this.props.photon;

        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {photon: state.photons[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchPhoton})(PhotonShow);