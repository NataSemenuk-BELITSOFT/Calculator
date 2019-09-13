import React, {Component} from 'react';
import { connect } from 'react-redux';
import { clearHistory } from "../../actions/actions";
import './History.css';

 class History extends Component {
    clearHistory = () => {
        const newUser = this.props.curUser;
        newUser.history = [];
        this.props.clearHistory(newUser);
    };
    render() {
        const history = this.props.curUser.history;
        const historyList = history.map((el) => <p key={el}>{el}</p>);
        return(
            <div className = 'historyBox'>
                <p>History</p>
                <button className = 'clearHistory' onClick={this.clearHistory}>Clear</button>
                {historyList}
            </div>
        );
    }
    
}

const mapStateToProps = ( { curUser } ) => {
    return {
        curUser,
    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        clearHistory: (user) => {
            dispatch(clearHistory(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
