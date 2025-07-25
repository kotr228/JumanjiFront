import Header from '../../components/headermenu/header'
import ProfileEditor from '../../components/ProfileEditor/ProfileEditor';
import Footer from '../../components/footer/footer'
import { AppProps } from "../../state/state";
import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { fetchProfile } from '../../utils/apiProfile';

const Profile: React.FC<AppProps> = () => {
  const { state: authState, dispatch } = useAuth();

  useEffect(() => {
    if (authState.user?.id) {
      fetchProfile(authState.user.id)
        .then((updatedUser) => {
          
        })
        .catch(console.error);
    }
  }, [authState.user?.id]);

  return (
    <div>
      <Header />
      <ProfileEditor />
      <Footer />
    </div>
  )
}

export default Profile;
