import { useNavigate as useNav } from "react-router-dom";

const useNavigate = () => {
	const navigate = useNav();

	return {
		goBack: () => navigate(-1),
		navigate: (path: string) => navigate(path),
	};
};

export { useNavigate };
