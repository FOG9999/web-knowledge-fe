import fake from '../shared/fake/FakeData.json';

const CategoryService = {
    getCategory: (categoryId) => {
        let category;
        return new Promise((resolve) => {
            setTimeout(() => {
                category = fake.categorys.filter(l => l.id === categoryId)[0];
                resolve(category);
            }, 2000)
        })
    },
    getAllCategories: (page, size) => {
        return new Promise((resolve) => {
            let categories = [];
            setTimeout(() => {
                categories = fake.categories.slice((page-1)*size, page*size)
                resolve(categories)
            }, 2000)
        })
    }
}

export { CategoryService }