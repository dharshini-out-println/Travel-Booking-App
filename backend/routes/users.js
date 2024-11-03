import express from 'express'
const router = express.Router()
    
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
router.get("/:id",getSingleUser);
router.get("/",getAllUser);
export default router;
