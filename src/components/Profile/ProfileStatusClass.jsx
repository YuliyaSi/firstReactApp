import React from "react";
import s from './Profile.module.css'

class ProfileStatusClass extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       if(prevProps.status !== this.props.status) {
           this.setState({
               status: this.props.status
           })
       }

    }

    render() {
        return (
            <div className={s.status}>
                {this.state.editMode ?
                    <input value={this.state.status} onBlur={this.deactivateEditMode} autoFocus={true} onChange={this.onStatusChange}/>
                    :
                    <span onDoubleClick={this.activateEditMode} className={s.span}>{this.props.status || ' ...'}</span>
                }
            </div>
        );
    }
}

export default ProfileStatusClass;
