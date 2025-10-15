import { Link, NavLink, Route, Routes } from 'react-router-dom';
import UseStateDemo from './demos/hooks/01-useState/UseStateDemo';
import './App.css';
import UseEffectDemo from './demos/hooks/02-useEffect/UseEffectDemo';
import UseRefDemo from './demos/hooks/03-useRef/UseRefDemo';
import UseCallbackDemo from './demos/hooks/05-render-optimization/UseCallbackDemo';
import Home from './pages/Home';
import ThemeToggle from './components/ThemeToggle';
import ReactMemoDemo from './demos/hooks/04-react-memo/ReactMemoDemo';
import CustomHooksDemo from './demos/hooks/06-custom-hooks/CustomHooksDemo';

function App() {
  const pages = ['home', 'useState', 'useEffect', 'useRef', 'react-memo', 'render-optimization', 'custom-hooks'];

  return (
    <>
      <nav className="flex flex-wrap justify-between items-center gap-3 p-4 mx-2 my-3 rounded-2xl shadow-lg">
        <div className="text-primary-500 text-2xl font-bold ml-2">
          <Link to={'/'}>Playground</Link>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-1">
          {pages.map((p) => {
            return (
              <NavLink
                to={p === 'home' ? '/' : `/${p}`}
                key={p}
                className={({ isActive }) =>
                  `capitalize px-3 py-2 rounded-xl ${
                    isActive
                      ? 'text-primary-800 bg-primary-100 font-semibold'
                      : 'text-gray-500'
                  }`
                }
              >
                {p.replace('-', ' ')}
              </NavLink>
            );
          })}
        </div>
        <ThemeToggle />
      </nav>
      <div className="py-3 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseStateDemo />} />
          <Route path="/useEffect" element={<UseEffectDemo />} />
          <Route path="/useRef" element={<UseRefDemo />} />
          <Route path="/react-memo" element={<ReactMemoDemo />} />
          <Route path="/render-optimization" element={<UseCallbackDemo />} />
          <Route path="/custom-hooks" element={<CustomHooksDemo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
