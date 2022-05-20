import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CategoryMngWrapper } from './components/containers/CategoryMngWrapper';
import { CourseDetail } from './components/containers/CourseDetail';
import { LessonMngWrapper } from './components/containers/LessonMngWrapper'
import { WINDOW_TYPES } from './redux/actions/ActionTypes';
import { store } from './redux/Store';

store.subscribe(() => {
  console.log(store.getState());
})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<CourseDetail />} path="/course-detail" />
          <Route element={<CategoryMngWrapper />} path="/categories" />
          <Route element={<LessonMngWrapper />} path="lesson-mng/:lId" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
