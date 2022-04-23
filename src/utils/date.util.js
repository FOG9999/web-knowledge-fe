export const dateUtil = {
    /**
     * 
     * @param {Date | number} date 
     * @returns dd/MM/yyyy
     */
    formatDateDDMMYYYY: (date) => {
        const dateObj = new Date(date);
        return `${dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : `${dateObj.getDate()}`}/${dateObj.getMonth() + 1 < 10 ? `0${dateObj.getMonth() + 1}` : `${dateObj.getMonth() + 1}`}/${dateObj.getFullYear()}`;
    },
    getDayString: (date) => {
        const dateObj = new Date(date);
        return dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : `${dateObj.getDate()}`;
    },
    getMonthString: (date) => {
        const dateObj = new Date(date);
        return dateObj.getMonth() + 1 < 10 ? `0${dateObj.getMonth() + 1}` : `${dateObj.getMonth() + 1}`;
    }
}