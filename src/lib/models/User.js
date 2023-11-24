import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    id: {
        unique: true,
        required: true,
        type: String
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        select: false
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    picture: {
        type: String,
        required: false
    }
});

const User = models.User || model('User', userSchema);

export default User;