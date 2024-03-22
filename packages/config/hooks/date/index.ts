const local = new Date().toLocaleDateString();
const search = new Date(local);

const day = search.getDate();
const month = search.getMonth() + 1;
const year = search.getFullYear();

const useDate = () => `${month}-${day}-${year}`;

export default useDate;
export { local, day, month, year, useDate };
