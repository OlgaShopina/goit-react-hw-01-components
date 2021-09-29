import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import Transactions from './components/Transactions';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friendList from './data/friend-list.json';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <main>
    <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friendList} />
   <Transactions items={transactions} />
    </main>
  );
}