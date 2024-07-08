const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

// Endpoint to create an appointment
app.post('/appointments', async (req, res) => {
  const { name, contact } = req.body;
  try {
    const appointment = await prisma.appointment.create({
      data: {
        name,
        contact,
      },
    });
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Could not create an appointment" });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});