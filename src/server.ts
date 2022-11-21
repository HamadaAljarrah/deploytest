import express, { json, urlencoded } from "express"

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));



app.get("/", (req, res) => { res.json({ message: "Hello from the server" }) });
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
]
app.get("/users", (req, res) => res.json({ data: USERS }))

app.listen(4000, () => console.log("listning to port* 4000"));