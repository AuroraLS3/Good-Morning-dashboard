import "./Dashboard.css";
import React from "react";
import EditButton from "./EditButton.js";
import FullscreenButton from "./FullscreenButton.js";
import Checkboxes from "./Checkboxes.js";
import Storage from "../localStorage.js";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.storage = new Storage();

        this.state = {
            editMode: false,
            checkboxes: [
                {
                    label: "fa fa-fw fa-clock",
                    lastChecked: undefined,
                    checkboxes: [
                        { checked: false },
                        { checked: true },
                        { checked: false },
                    ],
                },
                {
                    label: "fa fa-fw fa-dumbbell",
                    lastChecked: undefined,
                    checkboxes: [
                        { checked: false },
                        { checked: false },
                        { checked: false },
                    ],
                },
            ],
        };
    }

    componentDidMount = () => {
        const loadedCheckboxes = this.storage.loadCheckboxes();
        if (loadedCheckboxes) this.setState({ checkboxes: loadedCheckboxes });
    };

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
        this.storage.storeCheckboxes(this.state.checkboxes);
    };

    toggleCheckbox = (i) => (j) => () => {
        const time = new Date();
        const checkboxState = this.state.checkboxes;
        checkboxState[i].checkboxes[j].checked = !checkboxState[i].checkboxes[j]
            .checked;
        checkboxState[i].lastChecked = this.formatTime(time);
        this.setState({ checkboxes: checkboxState });
        this.storage.storeCheckboxes(checkboxState);
    };

    resetCheckboxes = (i) => () => {
        const time = new Date();
        const checkboxState = this.state.checkboxes;
        checkboxState[i].checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
        checkboxState[i].lastChecked = this.formatTime(time);
        this.setState({ checkboxes: checkboxState });
        this.storage.storeCheckboxes(checkboxState);
    };

    formatTime = (time) => {
        return `${time.getDate()}.${time.getMonth()+1}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
    };

    getSuffix = (number) => {
        if (number === 11 || number === 12 || number === 13) return 'th';
        switch (number % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default:
                return 'th';
        }
    }

    addCheckboxes = () => {
        const checkboxState = this.state.checkboxes;
        checkboxState.push({
            label: document.getElementById("task-name-field").value,
            checkboxes: [{ checked: false }],
        });
        document.getElementById("task-name-field").value = "";
        this.setState({ checkboxes: checkboxState });
    };

    removeCheckboxes = (i) => () => {
        const checkboxState = this.state.checkboxes;
        checkboxState.splice(i, 1);
        this.setState({ checkboxes: checkboxState });
    };

    addCheckbox = (i) => () => {
        const checkboxState = this.state.checkboxes;
        checkboxState[i].checkboxes.push({ checked: false });
        this.setState({ checkboxes: checkboxState });
    };

    removeCheckbox = (i) => () => {
        const checkboxState = this.state.checkboxes;
        checkboxState[i].checkboxes.splice(
            checkboxState[i].checkboxes.length - 1,
            1
        );
        this.setState({ checkboxes: checkboxState });
    };

    changeLabel = (i) => (event) => {
        const checkboxState = this.state.checkboxes;
        checkboxState[i].label = event.target.value;
        this.setState({ checkboxes: checkboxState });
    };

    render() {
        return (
            <section className="dashboard">
                <Checkboxes
                    editMode={this.state.editMode}
                    checkboxes={this.state.checkboxes}
                    toggleCheckbox={this.toggleCheckbox}
                    resetCheckboxes={this.resetCheckboxes}
                    addCheckboxes={this.addCheckboxes}
                    removeCheckboxes={this.removeCheckboxes}
                    addCheckbox={this.addCheckbox}
                    removeCheckbox={this.removeCheckbox}
                    changeLabel={this.changeLabel}
                />
                <FullscreenButton />
                <EditButton onClick={this.toggleEditMode} />
            </section>
        );
    }
}

export default Dashboard;
