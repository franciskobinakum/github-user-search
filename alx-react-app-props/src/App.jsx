import UserContext from './context/UserContext';
import UserDetails from './UserDetails';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <UserDetails />
    </UserContext.Provider>
  );
}import UserContext from './context/UserContext';
import UserProfile from './UserProfile';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;


export default App;
