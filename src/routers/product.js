// import express from "express";

// import { create, get, getAll, remove, update } from "../controllers/product";


import express from "express"

import { getAll,get,create,update,remove } from "../controllers/product";

const router = express();
router.get("/products",getAll);
router.get("/products/:id",get);
router.post("/products",create);
router.put("/products/:id",update);
router.delete("/products/:id",remove)

export default router;
