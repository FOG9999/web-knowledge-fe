import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CourseDetail } from './components/CourseDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CourseDetail />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
