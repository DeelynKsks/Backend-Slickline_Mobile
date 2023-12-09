import { model, Schema } from 'mongoose';

const wellSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  jobs: [{ // Referencia a las operaciones
    type: Schema.Types.ObjectId,
    ref: 'job'
  }]
}, {
  timestamps: true
});

export const WellModel = model('well', wellSchema);
