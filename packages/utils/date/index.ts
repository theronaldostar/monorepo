export const convertISOToDate = (date: Date | string) => {
	const dateObj = new Date(date);
	const day = dateObj.toLocaleString("en-US", { day: "2-digit" });
	const month = dateObj.toLocaleString("en-US", { month: "2-digit" });
	const year = dateObj.toLocaleString("en-US", { year: "numeric" });
	const dateString = `${year}-${month}-${day}`;
	return dateString;
};

export const dateFormat = (date: Date | string) => {
	return new Date(date).toLocaleString("en-US", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});
};

// const local = new Date().toLocaleDateString();
// const search = new Date();

// const hours = new Date().getHours();
// const minutes = new Date().getMinutes();

// const day = search.getDate();
// const month = search.getMonth() + 1;
// const year = search.getFullYear();

// const useDate = () => `${month}-${day}-${year}`;
// const useTime = () => `${hours}:${minutes}`;

// export default useDate;
// export { hours, minutes, local, day, month, year, useDate, useTime };
