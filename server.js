const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;
let registrations = [
    {
        id: 501,
        participantName: "Riya Sharma",
        eventName: "Tech Fest",
        department: "CSE",
        ticketCount: 2,
        paymentStatus: "Paid"
    },
    {
        id: 502,
        participantName: "Arjun Mehta",
        eventName: "Code Sprint",
        department: "IT",
        ticketCount: 1,
        paymentStatus: "Pending"
    },
    {
        id: 503,
        participantName: "Neha Verma",
        eventName: "Tech Fest",
        department: "ECE",
        ticketCount: 3,
        paymentStatus: "Paid"
    }
];

app.get("/api/registrations", (req, res) => {
    res.status(200).json(registrations);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});