import { UserList } from './Profile/Profile';
import user from '../user.json';
import { StatisticList } from './Statistics/Statistics';
import data from '../components/data.json';

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
      <StatisticList title="Upload stats" stats={data} />
    </>
  );
};
