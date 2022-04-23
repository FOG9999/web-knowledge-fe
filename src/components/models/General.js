import * as faker from '@faker-js/faker';
import { dateUtil } from "../../utils/date.util";

const f = faker.faker;

class General {

    id;
    createdDate;
    createdBy;

    constructor() {
        this.id = f.datatype.uuid();
        this.createdDate = dateUtil.formatDateDDMMYYYY(new Date());
        this.createdBy = null;
    }
}

export { General }