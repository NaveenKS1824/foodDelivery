const express = require("express");
const http = require("http"); 
const socketIo = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); 

const userRoutes = require("./routes/userRoutes");
const foodItemRoutes = require("./routes/foodItemRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
const server = http.createServer(app); 
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log("Database Connection Error:", err));

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("updateLocation", ({ orderId, lat, lng }) => {
    console.log(`Location update received for order ${orderId}: ${lat}, ${lng}`);
    io.emit("locationUpdate", { orderId, lat, lng });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

setInterval(() => {
  const lat = 12.9721 + Math.random() * 0.002;
  const lng = 77.593 + Math.random() * 0.002;
  const orderId = "67d91c67f86a7f5302802a45"; 

  io.emit("locationUpdate", { orderId, lat, lng });
}, 5000); 

app.use("/api/user", userRoutes);
app.use("/api/items", foodItemRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

const PORT = process.env.PORT || 3005;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
