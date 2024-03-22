import { useRouter } from "expo-router";

const useNavigate = () => {
	const { navigate, back: goBack } = useRouter();

	return {
		goBack,
		navigate: (path: string) => navigate(path),
	};
};

export { useNavigate };
