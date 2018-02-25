import mongoose, { Schema } from 'mongoose'

const paymentsSchema = new Schema({
  type: {
    type: String
  },
  id: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  version: {
    type: Number
  },
  organisation_id: {
    type: String
  },
  attributes: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
}, {
  id: false
})

paymentsSchema.methods = {
  view () {
    const view = {
      // simple view
      type: this.type,
      id: this.id,
      version: this.version,
      organisation_id: this.organisation_id,
      attributes: this.attributes
    }

    return view
  }
}

const model = mongoose.model('Payments', paymentsSchema)

export const schema = model.schema
export default model
