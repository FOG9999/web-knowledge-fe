import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CourseDetail } from './components/containers/CourseDetail';
import { LessonMngWrapper } from './components/containers/LessonMngWrapper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CourseDetail />} path="/course-detail" />
        <Route element={<LessonMngWrapper />} path="lesson-mng/:lId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
