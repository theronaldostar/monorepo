import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Example, HomeScreen, UserDetail } from "ui/screen";

const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route index element={<HomeScreen />} />
			<Route path="example" element={<Example />} />
			<Route path="user/:id" element={<UserDetail />} />
			<Route path="*" element={<>404</>} />
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;
