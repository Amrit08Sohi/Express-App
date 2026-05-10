import express  from "express";

const app = new express()

app.get("/", (req, res) => {
    return res.json({message: "Hello from express", healthCheckpath: "/health"})
})

app.get("/health", (req,res) => {
    res.send({status: "Server is up and running"})
})

app.listen(8000, () => {
    console.log("Server is listening at port 8000");
})
