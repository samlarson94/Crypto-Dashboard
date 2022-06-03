import React from 'react'
import './profile.css'
import Nav from '../../components/nav/Nav'

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_FAVORITES, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links to
        sign up or log in!
      </h4>
    );
  }

  return (
    <>
    <Nav />
    <div className='container profile__container'>
    <h1>Your Crypto Tracker!</h1>
        <h5>Here are your favorite coins!</h5>
    </div>
    </header>
  )
}

// export default Profile