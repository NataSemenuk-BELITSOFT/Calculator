import React from 'react';
import '../../actions/actions';
import { connect } from 'react-redux';
import { chooseUser, deleteUser } from "../../actions/actions";
import './Home.css'
import { Link } from 'react-router-dom';
import AddingUsersPage from '../AddingUsersPage/AddingUsersPage';

const Home = ( props ) => {
    const { chooseUser, deleteUser, users } = props;

    const delUser = ( label, action, item ) => {
        deleteUser(item.id);
    };

    const usersList = users.map(( item ) => {
            return (
              <li key={item['id']}>
                <Link to = '/calculator' onClick = {() => {chooseUser(item, item.id)}}> { item['name'] } </Link>
              </li>  
            );
        });
    return (
        <div className = 'usersList'>
            <AddingUsersPage/>
            <ul className = 'fieldsUser'>
                {usersList}
            </ul>
        </div>
    );
}

const mapStateToProps = ({ users }) => {
    return {
        users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (users) => {
            dispatch(deleteUser(users));
        },
        chooseUser: (user, userId) => {
            dispatch(chooseUser(user, userId));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
