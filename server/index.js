const express = require("express")
const connectDB = require("./utils/db")
const dotenv = require("dotenv");
const errorMiddleware = require("./middlewares/errorMiddleware");
const cors = require("cors")
dotenv.config();
// rest object 
const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", require("./routers/authRoute"))
app.use("/api/v1/form", require("./routers/contactRouter"))
app.use("/api/v1/sevices", require("./routers/serviceRouter"))
app.use("/api/v1/admin", require("./routers/adminRoute"))
app.use(errorMiddleware)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})