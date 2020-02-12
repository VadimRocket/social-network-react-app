import React, {Component} from 'react';

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status // 1 возми изначально стутус из пропсов
    }

    activateEditMode = () => {
        // debugger
        // console.log('this',this);
       this.setState({
         editMode: true
        //  status: !this.props.status 
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);   
        
    }
    componentDidUpdate(prevState, prevProps) {

        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status 
            });
        }

        console.log('componentDidUpdate');
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        console.log('Render');
        return (
            <>
            <div>
                <h4>Profile status:</h4>
                { !this.state.editMode && 
                //    <div><span onDoubleClick={() => {alert('hey')}}>{this.props.status}</span></div>
                   <div><span onDoubleClick={this.activateEditMode || "-----"}>{this.props.status}</span></div>
                //    <div><span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span></div>
                }
                
                { this.state.editMode &&
                    // <div><input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} 
                    <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} 
                                value={this.state.status} />
                    </div>
                }
            </div>    
            </>   
        ); 
    }
    
};

export default ProfileStatus;


