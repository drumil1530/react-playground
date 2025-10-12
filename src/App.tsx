import { NavLink, Route, Routes } from 'react-router-dom';
import UseStateDemo from './pages/UseStateDemo';
import './App.css';
import UseEffectDemo from './pages/UseEffectDemo';
import UseRefDemo from './pages/UseRefDemo';
import UseCallbackDemo from './pages/UseCallbackDemo';
import Home from './pages/Home';

function App() {
  const pages = ['home', 'useState', 'useEffect', 'useRef', 'useCallback'];

  return (
    <>
      <nav className="flex flex-wrap justify-between items-center gap-3 p-4 mx-2 my-3 rounded-2xl shadow-lg bg-white">
        <div></div>
        <div className="flex flex-wrap justify-center items-center gap-1">
          {pages.map((p) => {
            return (
              <NavLink
                to={p === 'home' ? '/' : `/${p}`}
                key={p}
                className={({ isActive }) =>
                  `capitalize px-3 py-2 rounded-xl ${
                    isActive
                      ? 'text-blue-600 bg-blue-200 font-semibold'
                      : 'text-gray-500'
                  }`
                }
              >
                {p}
              </NavLink>
            );
          })}
        </div>
      </nav>
      <div className="py-3 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseStateDemo />} />
          <Route path="/useEffect" element={<UseEffectDemo />} />
          <Route path="/useRef" element={<UseRefDemo />} />
          <Route path="/useCallback" element={<UseCallbackDemo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
