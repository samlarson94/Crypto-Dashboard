import React from 'react'
import './profile.css'
import Nav from '../../components/nav/Nav'
//import CoinList from '../../components/coinInfo/CoinList'
import FavoriteList from '../components/FavoriteList'
import { QUERY_USER, QUERY_FAVORITES } from '../utils/queries';

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
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <FavoriteList
          
          />
        </div>
       
      </div>
    </div></>
  );
};

export default Profile;



// const Profile = () => {
//   return (
//     <header>
//     <Nav />
//     <div className='container profile__container'>
//     <h1>Your Crypto Tracker!</h1>
//     <h5>Here are your favorite coins!</h5>
//     <div className='favorites-list'>
//       {/* <FavoriteList 
        
//         /> */}
//     </div>

//     </div>
//     < CoinList/>
//     </header>
//   )
// }

// export default Profile