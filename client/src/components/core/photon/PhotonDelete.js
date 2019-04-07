import React from 'react';
import {connect} from 'react-redux';
import Modal from '../ui/Modal';
import history from '../history/history';
import {fetchPhoton, deletePhoton} from '../../../actions/index';
import {Link} from 'react-router-dom';

// TODO make sure only photon owned by the corrent user is displayed and deleted
class PhotonDelete extends React.Component {

    componentDidMount(){
        this.props.fetchPhoton(this.props.match.params.id);
    }

    renderActions() {
        const {id} = this.props.match.params; //equal to -> const id = this.props.match.params.id;

        return (
            <React.Fragment>
                <button onClick={() => this.props.deletePhoton(id)} className="ui button negative" > Delete </button>
                <Link to="/" className="ui button" > Cancel </Link>  
            </React.Fragment >
        );
    }

    renderContent() {
        if (!this.props.photon) {
            return 'Are you sure you want to delete this photon?'
        }

        return `Are you sure you want to delete this photon with title: ${this.props.photon.title}?`;
    }

    render(){
        return (
            <Modal
                title="Delete Photon"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        photon:state.photons[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, {fetchPhoton, deletePhoton})(PhotonDelete);