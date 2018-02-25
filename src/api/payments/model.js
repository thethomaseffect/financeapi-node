import mongoose, { Schema } from 'mongoose'

const paymentsSchema = new Schema({
  type: {
    type: String
  },
  id: {
    type: String,
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
  view (full) {
    const view = {
      // simple view
      type: this.type,
      id: this.id,
      version: this.version,
      organisation_id: this.organisation_id,
      attributes: this.attributes
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Payments', paymentsSchema)

export const schema = model.schema
export default model
