import { Schema, model } from "mongoose";

const appointmentSchema = Schema({
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['CREATED', 'ACCEPTED', 'CANCELLED', 'COMPLETED'],
        default: 'CREATED',
        required: true,
    },
    pet: {
        type: Schema.ObjectId,
        ref: 'Pet',
        required: true,
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});

appointmentSchema.methods.toJSON = function(){
    const{_id, ...appointment } = this.toObject()
    appointment.aid = _id
    return appointment
}

export default model('Appointment', appointmentSchema);