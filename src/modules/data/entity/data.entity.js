import { model, Schema } from 'mongoose';

const dataSchema = new Schema({
  stop: {
    type: Number,
    required: true
  },
  pressure: {
    type: Number,
    required: true
  },
  depth: {
    type: Number,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  density: {
    type: Number,
    default: null
  }
}, {
  _id: false // Esto es para evitar que Mongoose cree un campo _id para cada "stop"
});

const jobSchema = new Schema({
  job: {
    type: String,
    required: true
  },
  data: [dataSchema], // Un array de "data"
  createdBy: { // Referencia al usuario que cargó los datos
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
}, {
  timestamps: true
});

export const JobModel = model('job', jobSchema);
