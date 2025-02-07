import { Router } from "express";
import { saveAppointment , getAppointments, updateAppointment, updateStatus} from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/:uid", getAppointments);

router.put("/updtateAppointment/:aid", updateAppointment);

router.patch("/cancelAppointment/:aid", updateStatus )



export default router;