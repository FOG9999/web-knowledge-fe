import * as faker from '@faker-js/faker';

const f = faker.faker;

export const templateBlockList = [
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: 'Header 1',
        code: 'h1'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: 'Header 2',
        code: 'h2'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: 'Paragragh',
        code: 'p'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: 'Code',
        code: 'code'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: 'Warning',
        code: 'warn'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: 'Success',
        code: 'success'
    },
    {
        id: f.datatype.uuid(),
        img: f.image.imageUrl(),
        title: 'Error',
        code: 'error'
    },
];