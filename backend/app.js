import express from "express";
import cookieParser from "cookie-parser";
import registerPacientesRoutes  from "./src/routes/registerPacientes.js";
import PacientesRoutes from "./src/routes/pacientes.js";





const app = express();

app.use(express.json());
app.use(cookieParser());


app.use("/api/pacientes", PacientesRoutes);
app.use("/api/registerPacientes", registerPacientesRoutes);



export default app;



