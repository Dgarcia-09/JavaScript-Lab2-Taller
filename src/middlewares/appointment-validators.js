import { body, param } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";

export const createAppointmentValidator = [
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const getAppointmentsValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const updateAppointmentValidator = [
    param("aid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("date").optional().notEmpty().withMessage("Ingrese una fecha"),
    validarCampos,
    handleErrors
];

export const updateStatusValidator = [
    param("aid").isMongoId().withMessage("Ingrese um Id valido"),
    validarCampos,
    handleErrors
];
