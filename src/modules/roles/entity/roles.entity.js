import { model, Schema } from 'mongoose';

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

export const RoleModel = model('roles', roleSchema);
