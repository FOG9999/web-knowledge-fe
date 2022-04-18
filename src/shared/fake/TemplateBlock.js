import * as faker from '@faker-js/faker';

const f = faker.faker;

export const templateBlockList = [
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: f.lorem.word(),
        code: 'h1'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: f.lorem.word(),
        code: 'h2'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: f.lorem.word(),
        code: 'p'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: f.lorem.word(),
        code: 'code'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: f.lorem.word(),
        code: 'warn'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: f.lorem.word(),
        code: 'success'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: f.lorem.word(),
        code: 'error'
    },
];