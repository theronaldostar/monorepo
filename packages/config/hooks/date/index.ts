const local = new Date().toLocaleDateString();
const search = new Date();

const hours = new Date().getHours();
const minutes = new Date().getMinutes();

const day = search.getDate();
const month = search.getMonth() + 1;
const year = search.getFullYear();

const useDate = () => `${month}-${day}-${year}`;
const useTime = () => `${hours}:${minutes}`;

export default useDate;
export { hours, minutes, local, day, month, year, useDate, useTime };
