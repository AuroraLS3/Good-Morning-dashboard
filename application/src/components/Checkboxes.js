import "./Checkboxes.css";
import React from "react";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li id={"checkbox-" + this.props.id} className="checkbox">
                <input
                    type="checkbox"
                    checked={this.props.checked}
                    onClick={this.props.toggleCheckbox}
                ></input>
            </li>
        );
    }
}

class CheckboxContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li id={"checkbox-row-" + this.props.id} className="checkbox-row">
                {this.props.editMode ? (
                    <input
                        type="text"
                        onInput={this.props.changeLabel}
                        value={this.props.checkboxes.label}
                    ></input>
                ) : (
                    <i className={this.props.checkboxes.label} onClick={this.props.resetCheckboxes}></i>
                )}
                <ul>
                    {this.props.checkboxes.checkboxes.map((checkbox, i) => {
                        return (
                            <Checkbox
                                id={this.props.id + "-" + i}
                                checked={checkbox.checked}
                                toggleCheckbox={this.props.toggleCheckbox(i)}
                            />
                        );
                    })}
                </ul>
                {this.props.editMode ? (
                    <>
                        <button
                            className="add-checkbox-button"
                            onClick={this.props.addCheckbox}
                        >
                            +
                        </button>
                        <button
                            className="remove-checkbox-button"
                            onClick={this.props.removeCheckbox}
                        >
                            -
                        </button>
                        <button
                            className="remove-checkbox-row-button"
                            onClick={this.props.removeCheckboxes}
                        >
                            Remove
                        </button>
                    </>
                ) : (
                    ""
                )}
            </li>
        );
    }
}

class Checkboxes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="checkbox-column">
                {this.props.checkboxes.map((checkboxContainer, i) => {
                    return (
                        <CheckboxContainer
                            id={i}
                            editMode={this.props.editMode}
                            checkboxes={checkboxContainer}
                            toggleCheckbox={this.props.toggleCheckbox(i)}
                            resetCheckboxes={this.props.resetCheckboxes(i)}
                            removeCheckboxes={this.props.removeCheckboxes(i)}
                            addCheckbox={this.props.addCheckbox(i)}
                            removeCheckbox={this.props.removeCheckbox(i)}
                            changeLabel={this.props.changeLabel(i)}
                        />
                    );
                })}
                {this.props.editMode ? (
                    <>
                        <input
                            id="task-name-field"
                            type="text"
                        ></input>
                        <button
                            className="add-checkbox-row-button"
                            onClick={this.props.addCheckboxes}
                        >
                            Add new task
                        </button>
                    </>
                ) : (
                    ""
                )}
            </ul>
        );
    }
}

export default Checkboxes;
