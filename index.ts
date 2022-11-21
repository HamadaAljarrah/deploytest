import express, { Request, Response } from "express"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req:Request, res:Response) => { res.json({ message: "Hello from the server" }) });
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
app.get("/users", (req: Request, res: Response) => res.json({ data: USERS }))

const port = process.env.PORT || 5000

app.listen(port, () => console.log("listning to port* 4000"));
/*
git add .
git commit -am "test"
git push heroku main
*/