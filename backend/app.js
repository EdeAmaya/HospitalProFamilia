import express from "express";
import cookieParser from "cookie-parser";
import registerPacientesRoutes  from "./src/routes/registerPacientes.js";
import PacientesRoutes from "./src/routes/pacientes.js";
import DoctoresRoutes from "./src/routes/Doctores.js"
import RegisterDoctoresRoutes from "./src/routes/registerDoctores.js"
import LoginRoutes from "./src/routes/login.js"
import LogOutRoutes from "./src/routes/logOut.js"
import CitasRoutes from "./src/routes/citas.js"






const app = express();

app.use(express.json());
app.use(cookieParser());


app.use("/api/pacientes", PacientesRoutes);
app.use("/api/registerPacientes", registerPacientesRoutes);
app.use("/api/doctores", DoctoresRoutes)
app.use("/api/registerDoctores", RegisterDoctoresRoutes)
app.use("/api/citas",CitasRoutes)
app.use("/api/login", LoginRoutes)
app.use("/api/logout", LogOutRoutes)



export default app;



