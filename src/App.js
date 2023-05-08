import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Register from './Register';
import { LoginContext } from './LoginContext';
import Login from './Login';
import Quiz1 from './pages/quiz1';
import Quiz2 from './pages/quiz2';
import Quiz3 from './pages/quiz3';
import Quiz4 from './pages/quiz4';
import Quiz5 from './pages/quiz5';
import Quiz6 from './pages/quiz6';
import Quiz7 from './pages/quiz7';
import Quiz8 from './pages/quiz8';
import Quiz9 from './pages/quiz9';
import Quiz10 from './pages/quiz10';
import Result from './pages/result';

function App() {
  const [userLogin, setUserLogin] = useState(false);
  // const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <div className="app">
          <LoginContext.Provider value={{ setUserLogin }}>
            {!userLogin ? (
              <div className="register_login">
                <Routes>
                  <Route path="/" element={<Register />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                </Routes>
              </div>
            ) : (
              <div className="appBody">
                <Routes>
                  <Route path="/result" element={<Result />}></Route>
                  <Route path="/quiz1" element={<Quiz1 />}></Route>
                  <Route path="/quiz2" element={<Quiz2 />}></Route>
                  <Route path="/quiz3" element={<Quiz3 />}></Route>
                  <Route path="/quiz4" element={<Quiz4 />}></Route>
                  <Route path="/quiz5" element={<Quiz5 />}></Route>
                  <Route path="/quiz6" element={<Quiz6 />}></Route>
                  <Route path="/quiz7" element={<Quiz7 />}></Route>
                  <Route path="/quiz8" element={<Quiz8 />}></Route>
                  <Route path="/quiz9" element={<Quiz9 />}></Route>
                  <Route path="/quiz10" element={<Quiz10 />}></Route>
                </Routes>

                {/* <Sidebar userName={userName} />
              <Routes>
                <Route path="/" element={<Chat userName={userName} />}></Route>
                <Route
                  path="/group/:groupId"
                  element={<Chat userName={userName} />}
                ></Route>
              </Routes> */}
              </div>
            )}
          </LoginContext.Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
