import { UserList } from './Profile/Profile';
import user from '../user.json';

export const App = () => {
  return (
    <>
      <UserList
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
