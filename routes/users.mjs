// Importuojame express'ą
import express from "express";
// import { validate } from "../middleware/schemaValidator.mjs";


import userController from "../controller/usersController.mjs";
// import { userValidationSchema, updateUserFieldsValidationSchema, validateUserId, validateOrderParams } from '../validators/userValidator.mjs'


//nurodome, iš kur imsime kelius (routes)
const router = express.Router();

// Pagination
router.get("/usersPaginated", userController.getUsersPaginated);

// gauname duomenis apie users (GET metodas)
router.get("/users", userController.getUsers);

// Naujo user pridėjimas (POST metodas)
// router.post("/register", validate(userValidationSchema), userController.createUser);

// router.post('/login', userController.login);
// router.post('/logout', userController.logout);

// User gavimas pagal jo ID (GET metodas pagal ID)
// router.get("/:id", validate(validateUserId), userController.getUserById);

// Atnaujiname userio duomenis (PUT metodas)
// router.put("/:id",validate(validateUserId, userValidationSchema), userController.updateUser);

// Jeigu reikia atnaujinti tik dalį duomenų (tam tikras eilutes, o ne visą objektą)
// router.patch("/:id", validate(validateUserId, updateUserFieldsValidationSchema), userController.updateUserFields);

// DELETE metodas
// router.delete("/:id", validate(validateUserId), userController.deleteUser);

// Vieno user užsakymų gavimas pagal jo identifikatorių
// router.get("/:id/orders", validate(validateUserId), userController.getUserOrders);

// Order sukūrimas user'iui
// router.post("/:userId/orders/:orderId", validate(validateOrderParams), userController.createOrder);

export default router;