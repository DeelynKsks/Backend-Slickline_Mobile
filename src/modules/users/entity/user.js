import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: Schema.Types.ObjectId,
    ref: 'roles' // Referencia al modelo de roles
  }]
}, {
  timestamps: true
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

export const UserModel = model('user', userSchema);
