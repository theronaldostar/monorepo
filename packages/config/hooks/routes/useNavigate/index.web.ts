import { useNavigate as use } from "react-router-dom";

const useNavigate = () => {
	const navigate = use();

	return {
		goBack: () => navigate(-1),
		navigate: (path: string) => navigate(path),
	};
};

export { useNavigate };
