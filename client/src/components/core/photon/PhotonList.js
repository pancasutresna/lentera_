import React from 'react';
import { connect } from 'react-redux';
import { fetchPhotons } from '../../../actions/index';
import { Link } from 'react-router-dom';

class PhotonList extends React.Component {

    componentDidMount() {
        this.props.fetchPhotons();
    }

    renderAdmin(photon) {
        if (photon.creatorId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/photons/edit/${photon.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/photons/delete/${photon.id}`} className="ui button negative">Delete</Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.photons.map(photon => {
            return (
                <div className="item" key={photon.id}>
                    {this.renderAdmin(photon)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/photons/${photon.id}`} className="header">{photon.title}</Link>
                        <div className="description">
                            {photon.description}
                        </div>
                    </div>

                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/photons/new" className="ui button primary">
                        Create Photon
                    </Link>
                </div>
            );
        }
    }

    render() {

        return (
            <div>
                <h2>Photons</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        photons: Object.values(state.photons),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchPhotons })(PhotonList);