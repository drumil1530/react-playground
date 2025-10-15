import Dashboard from './Dashboard';
import Footer from './Footer';
import Header from './Header';
import UserProvider from './UserProvider';

const UseContextDemo = () => {
  return (
    <UserProvider>
      <div className="max-w-xl p-4 flex flex-col gap-4 rounded-xl border">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    </UserProvider>
  );
};

export default UseContextDemo;
