import mongoose, { Schema } from 'mongoose'

const paymentsSchema = new Schema({
  type: String,
  id: {
    type: String,
    index: true,
    unique: true
  },
  version: Number,
  organisation_id: String,
  attributes: {
    amount: String,
    beneficiary_party: {
      account_name: String,
      account_number: String,
      account_number_code: String,
      account_type: Number,
      address: String,
      bank_id: String,
      name: String
    },
    charges_information: {
      bearer_code: String,
      sender_charges: [{
        amount: String,
        currency: String
      }],
      receiver_charges_amount: String,
      receiver_charges_currency: String
    },
    currency: String,
    debtor_party: {
      account_name: String,
      account_number: String,
      account_number_code: String,
      account_type: Number,
      address: String,
      bank_id: String,
      name: String
    },
    end_to_end_reference: String,
    fx: {
      contract_reference: String,
      exchange_rate: String,
      original_amount: String,
      original_currency: String
    },
    numeric_reference: String,
    payment_id: String,
    payment_purpose: String,
    payment_type: String,
    processing_date: String,
    reference: String,
    scheme_payment_sub_type: String,
    scheme_payment_type: String,
    sponsor_party: {
      account_number: String,
      band_id: String,
      bank_id_code: String
    }
  }
}, {
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => {
      delete ret._id
      delete ret.__v
      delete ret.createdAt
      delete ret.updatedAt
    }
  }
}, {
  id: false
})

paymentsSchema.methods = {
  view () {
    return this
  }
}

const model = mongoose.model('Payments', paymentsSchema)

export const schema = model.schema
export default model
