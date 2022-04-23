import fake from '../shared/fake/FakeData.json';

const LessonService = {
    getLesson: (lessonId) => {
        let lesson;
        return new Promise((resolve) => {
            setTimeout(() => {
                lesson = fake.lessons.filter(l => l.id === lessonId)[0];
                resolve(lesson);
            }, 2000)
        })
    }
}

export { LessonService }