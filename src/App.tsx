import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Welcome from './pages/Welcome';
import Auth from './pages/Auth';
import Survey from './pages/Survey';
import Menu from './pages/Menu';
import Profile from './pages/Profile';
import Achievements from './pages/Achievements';
import Tasks from './pages/Tasks';
import Games from './pages/Games';
import { ThemeProvider } from './context/ThemeContext';
import { UserLevelProvider } from './context/UserLevelContext';

function App() {
  return (
    <ThemeProvider>
      <UserLevelProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/survey" element={<Survey />} />
            <Route element={<Layout />}>
              <Route path="/menu" element={<Menu />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/games" element={<Games />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </UserLevelProvider>
    </ThemeProvider>
  );
}

export default App;