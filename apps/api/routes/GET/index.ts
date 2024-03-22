import { Router } from "express";

import user from "@app/api/routes/GET/user";

const route = Router();

route.get("/user", user);

export default route;
