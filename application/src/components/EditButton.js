import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

class EditButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="edit-button" onClick={this.props.onClick}>
                <FontAwesomeIcon icon={faPen} />
            </button>
        );
    }
}

export default EditButton;
