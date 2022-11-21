"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => { res.json({ message: "Hello from the server" }); });
const USERS = [
    {
        name: "Hamada",
        email: "hamada@gmail.com"
    },
    {
        name: "Stina",
        email: "stina@gmail.com"
    },
    {
        name: "Taqaung",
        email: "Taqaung@gmail.com"
    },
];
app.get("/users", (req, res) => res.json({ data: USERS }));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("listning to port* 4000"));
//# sourceMappingURL=index.js.map