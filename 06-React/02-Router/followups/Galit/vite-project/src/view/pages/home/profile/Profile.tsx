import React from 'react';
import styles from './Profile.module.scss';

const App: React.FC = () => {
  return (
    <Profile 
      userName="Mimi" 
      userImage="https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D" 
    />
  );
};

const Profile: React.FC<{ userName: string; userImage: string }> = ({ userName, userImage }) => {
  return (
    <> 
      <div className={styles.profile}>Profile</div>
      <div className={styles.user}> 
        <div className={styles.userName}>{userName}</div>
        <img src={userImage} alt={`${userName}'s profile`} className={styles.userImage} />
      </div>
    </>
  );
};

export default App;
