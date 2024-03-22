import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Example, HomeScreen, UserDetail } from "ui/screen";

const AppRoutes = () => (
	<Router>
		<Routes>
			<Route index element={<HomeScreen />} />
			<Route path="example" element={<Example />} />
			<Route path="user/:id" element={<UserDetail />} />
			<Route path="*" element={<>404</>} />
		</Routes>
	</Router>
);

export default AppRoutes;
