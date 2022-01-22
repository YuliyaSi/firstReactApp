import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode () {
        this.setState({
            editMode: true,
        })
    }

    deActivateEditMode () {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input value={this.props.status} onBlur={this.deActivateEditMode.bind(this)} autoFocus={true}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
