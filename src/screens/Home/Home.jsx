import React from 'react';
import '../../actions/actions';
import { connect } from 'react-redux';
import { chooseUser } from "../../actions/actions";
import './Home.css'
import { Link } from 'react-router-dom';
import AddingUsersForm from '../../components/AddingUsersForm/AddingUsersForm';

const Home = ( props ) => {
    const { chooseUser, users } = props;

    const usersList = users.map(( item ) => {
            return (
              <li key={item['id']}>
                <Link to = '/calculator' onClick = {() => {chooseUser(item, item.id)}}> { item['name'] } </Link>
              </li>  
            );
        });
    return (
        <div className = 'usersList'>
            <AddingUsersForm/>
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
        chooseUser: (user, userId) => {
            dispatch(chooseUser(user, userId));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
