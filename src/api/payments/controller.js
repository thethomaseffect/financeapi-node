import { success, notFound, alreadyExists } from '../../services/response/'
import { Payments } from '.'

export const create = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      error: 'You must provide a unique `id` value'
    }).end()
  }
  console.log(req.body.attributes)
  return Payments.findOne({id: req.body.id})
    .then(alreadyExists(req, res))
    .then((payments) => payments ? null : Payments.create(req.body)
      .then((payments) => payments.view(true))
      .then(success(req, res, 201))
    ).catch(next)
}

export const index = (req, res, next) =>
  Payments.find(req.querymen.query, req.querymen.select, req.querymen.cursor)
    .then((payments) => payments.map((payments) => payments.view()))
    .then(success(req, res))
    .catch(next)

export const show = (req, res, next) =>
  Payments.findOne({id: req.params.id})
    .then(notFound(req, res))
    .then((payments) => payments ? payments.view() : null)
    .then(success(req, res))
    .catch(next)

export const update = (req, res, next) =>
  Payments.findOneAndUpdate({id: req.params.id}, req.body, {new: true})
    .then(notFound(req, res))
    .then((payments) => payments ? payments.view(true) : null)
    .then(success(req, res))
    .catch(next)

export const destroy = (req, res, next) =>
  Payments.findOne({id: req.params.id})
    .then(notFound(req, res))
    .then((payments) => payments ? payments.remove() : null)
    .then(success(req, res, 204))
    .catch(next)

export const destroyAll = (req, res, next) =>
  Payments.remove({})
    .then(success(req, res, 204))
    .catch(next)
