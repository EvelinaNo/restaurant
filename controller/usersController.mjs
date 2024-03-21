import userModel from "../model/userModel.mjs";

// // Importuojame user'ius
// import users from "../db/users.json" assert { type: "json" };
// // Importuojame orders
// import orders from "../db/orders.json" assert { type: "json" };
// //Importuojame menu
// import menus from "../db/menus.json" assert { type: "json" };
// // Importuojame fs, kad dirbti su failų sistema
// import fs from "fs";
// import path, { dirname } from "path";
// // Importuojame failo url į failo kelią
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

const userController = {
//   getUsersPaginated: async (req, res) => {
//     try {

// const users = await userModel.getUsersPaginated(req.query.paginate, req.query.page, req.query.limit)

//           res.status(200).json(users);
//         } catch (error) {
//           res
//             .status(500)
//             .json({ message: "An error ocures while retrieving users." });
//         }
//   },
  getUsers: (req, res) => {
    try {
      res.status(200).json(users);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error ocures while retrieving users." });
    }
  },

//   createUser: async (req, res) => {
//     try {
//       const newUser = {
//         ...req.body,
//         orders: [],
//       };
//       users.push(newUser);
//       users.forEach((user, index) => {
//         user.id = index + 1;
//       });

//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/users.json"),
//         JSON.stringify(users, null, 2)
//       );

//       res.status(201).json(newUser);
//     } catch (error) {
//       console.error(error);
//       res
//         .status(500)
//         .json({ message: "An error occured while creating new user." });
//     }
//   },

// login: async (req, res) => {
//     try {
//         const { name, password, email } = req.body;

//       const user = users.find(user => user.name === name || user.email === email);

//       if (!user) {
//         res.status(404).json({message: 'User not found'});
//         return;
//       }

//       if (user.password !== password) {
//         res.status(401).json({message: 'Invalid password'});
//       }

//       req.session.userId = user.id
//       res.status(200).json({message: 'User logged in successfully'})

//     } catch (error) {
//         res.status(500).json({
//             message: "An error occured while logging in",
//           });
//     }
// },

// logout: (req, res) => {
// try {
//     if (!req.session.userId){
//         res.status(400).json({message: 'No active session'});
//         return;
//     }

//     req.session.destroy(err => {
//         if (err) {
//             res.status(500).json ({message: "An error occured while destroying log out session"});
//             return;
//         }
//     })
//     res.status(200).json ({message: 'Logged out successfylly'})

// } catch (error) {
//     res.status(500).json({
//         message: "An error occured while logging out",
//       });
// }
   
// },

//   getUserById: (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const user = users.find((user) => user.id === id);

//       if (!user) {
//         res.status(404).json({ message: "User not found." });
//       }

//       res.status(200).json(user);
//     } catch (error) {
//       res.status(500).json({
//         message: "An error occured while retrievinig the user by ID.",
//       });
//     }
//   },

//   updateUser: async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const updateUser = { ...req.body, id };

//       let userIndex = users.findIndex((user) => user.id === id);

//       if (userIndex === -1) {
//         res.status(404).json({ message: "User not found." });
//         return;
//       }

//       //Reikia issaugoti orders
//       updateUser.orders = users[userIndex].orders;

//       users[userIndex] = updateUser;

//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/users.json"),
//         JSON.stringify(users, null, 2)
//       );
//       res.status(200).json(updateUser);
//     } catch (error) {
//       console.error(error);
//       res
//         .status(500)
//         .json({ message: "An error occured while updating the user." });
//     }
//   },

//   updateUserFields: async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const updatedFields = req.body;

//       let userIndex = users.findIndex((user) => user.id === id);

//       if (userIndex === -1) {
//         res.status(404).json({ message: "User not found." });
//         return;
//       }

//       users[userIndex] = { ...users[userIndex], ...updatedFields };

//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/users.json"),
//         JSON.stringify(users, null, 2)
//       );
//       res.status(200).json(users[userIndex]);
//     } catch (error) {
//       console.error(error);
//       res
//         .status(500)
//         .json({ message: "An error occured while updating the user." });
//     }
//   },

//   deleteUser: async (req, res) => {
//     try {
//       const id = parseInt(req.params.id);

//       let userIndex = users.findIndex((user) => user.id === id);

//       if (userIndex === -1) {
//         res.status(404).json({ message: "User not found." });
//         return;
//       }

//       users.splice(userIndex, 1);

//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/users.json"),
//         JSON.stringify(users, null, 2)
//       );

//       res.status(204).json({ message: "User successfully deleted." });
//     } catch (error) {
//       console.error(error);
//       res
//         .status(500)
//         .json({ message: "An error occured while deleting the user." });
//     }
//   },

//   getUserOrders: (req, res) => {
//     try {
//       const id = parseInt(req.params.id);
//       const userIndex = users.findIndex((user) => user.id === id);

//       // Tikriname, ar egzistuoja toks user su nurodytu id
//       if (userIndex === -1) {
//         res.status(404).json({ message: "User not found." });
//         return;
//       }

//       // Gauname vieno user užsakymus iš visų užsakymų masyvo
//       const userOrders = orders.filter((order) => order.customerId === id);

//       // Siunčiame rastus užsakymus klientui
//       res.status(200).json(userOrders);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "An error occurred while fetching user orders" });
//     }
//   },
//   // sukurti order vartototjui (Roko variantas)
//   createOrder: async (req, res) => {
//     try {
//       const userId = Number(req.params.userId);
//       const menuItemId = Number(req.params.menuItemId);
//       const quantity = Number(req.params.quantity);
//       //const newOrder = req.body

//       const user = users.find((user) => user.id === userId);

//       if (!user) {
//         res.status(404).json({ message: "User not found" });
//         return;
//       }

//       let maxOrderId;
//       if (orders.length > 0) {
//         maxOrderId = Math.max(...orders.map((order) => order.id));
//       } else {
//         maxOrderId = 0;
//       }

//       const orderToSave = {
//         id: orders.length + 1, //Naujo orderio ID sukūrimas
//         customerId: userId,
//         Items: [],
//       };

//       const menuItem = menus.find((menu) => menu.id === menuItemId);
//       if (!menuItem) {
//         res
//           .status(400)
//           .json({ message: "Menu item with ID you written does not exist" });
//         return;
//       }

//       orderToSave.Items.push({
//         menuItemId: menuItemId,
//         quantity: quantity,
//       });

//       orders.push(orderToSave);
//       user.orders.push(orderToSave.id);

//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/orders.json"),
//         JSON.stringify(orders, null, 2)
//       );

//       await fs.promises.writeFile(
//         path.join(__dirname, "../db/users.json"),
//         JSON.stringify(users, null, 2)
//       );

//       res.status(201).json(orderToSave)


//     } catch (error) {
//         res.status(500).json({ message: "An error occured while creating the order" });
//     }
//   },

//   //   createOrder: async (req, res) => {
//   //     try {
//   //       const userId = parseInt(req.params.userId);
//   //       const orderId = parseInt(req.params.orderId);
//   //       const menuId = parseInt(req.params.menuId);

//   //       // Surandame user ir order pagal jų identifikatorius
//   //       const userIndex = users.findIndex((user) => user.id === userId);
//   //       const orderIndex = orders.findIndex((order) => order.id === orderId);

//   //       // Tikriname, ar egzistuoja toks user ir order
//   //       if (userIndex === -1 || orderIndex === -1) {
//   //         res.status(404).json({ message: "User or order not found" });
//   //         return;
//   //       }

//   //       // Tikriname, ar order priklauso šiam user
//   //       if (orders[orderIndex].customerId !== userId) {
//   //         res.status(403).json({ message: "Order does not belong to this user" });
//   //         return;
//   //       }

//   //       // Jeigu visi patikrinimai praėjo, surišame order su user
//   //       users[userIndex].orders.push(orderId);

//   //       // Atnaujiname customerId užsakyme, kad pririšti jį prie user
//   //       orders[orderIndex].customerId = userId;

//   //       // Siunčiame sėkmingą response
//   //       res
//   //         .status(200)
//   //         .json({
//   //           message: "Order placeed successfully",
//   //           user: users[userIndex],
//   //         });
//   //     } catch (error) {
//   //       res.status(500).json({ message: "An error occured while ordering" });
//   //     }
//   //   },

//   // deleteOrder: async (req, res) => {

//   // }
};

export default userController;
