import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";

class FullscreenButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullscreen: false,
        };
    }

    componentDidMount() {
        document.addEventListener("fullscreenchange", this.onFullscreenChange);
    }

    componentWillUnmount() {
        document.removeEventListener(
            "fullscreenchange",
            this.onFullscreenChange
        );
    }

    onFullscreenChange = () => {
        this.setState({ fullscreen: Boolean(document.fullscreenElement) });
    };

    toggleFullscreen = () => {
        if (!this.state.fullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    render() {
        return (
            <button
                className="fullscreen-button"
                onClick={this.toggleFullscreen}
            >
                <FontAwesomeIcon
                    icon={this.state.fullscreen ? faCompress : faExpand}
                />
            </button>
        );
    }
}

export default FullscreenButton;
