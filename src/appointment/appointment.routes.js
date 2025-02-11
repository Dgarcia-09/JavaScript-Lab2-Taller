import { Router } from "express";
import { saveAppointment , getAppointments, updateAppointment, updateStatus} from "./appointment.controller.js";
import { createAppointmentValidator, getAppointmentsValidator, updateAppointmentValidator, updateStatusValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/:uid", getAppointmentsValidator, getAppointments);

router.put("/updtateAppointment/:aid", updateAppointmentValidator, updateAppointment);

router.patch("/cancelAppointment/:aid", updateStatusValidator, updateStatus )



export default router;