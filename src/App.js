import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CourseDetail } from './components/containers/CourseDetail';
import { LessonMngWrapper } from './components/containers/LessonMngWrapper'
import { store } from './redux/Store';

console.log(store);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<CourseDetail />} path="/course-detail" />
          <Route element={<LessonMngWrapper />} path="lesson-mng/:lId" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
