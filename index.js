import express  from "express";

const app = new express()

app.get("/", (req, res) => {
    return res.json({message: "Hello from express"})
})

app.listen(8000, () => {
    console.log("Server is listening at port 8000");
})