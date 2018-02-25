import { success, notFound, alreadyExists } from '../../services/response/'
import { Payments } from '.'

export const create = (req, res, next) =>
  Payments.findOne({id: req.bodymen.body.id})
    .then(alreadyExists(req, res))
    .then((payments) => payments ? null : Payments.create(req.bodymen.body)
      .then((payments) => payments.view(true))
      .then(success(req, res, 201))
    ).catch(next)

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
  Payments.findOne({id: req.params.id})
    .then(notFound(req, res))
    .then((payments) => payments ? Object.assign(payments, req.bodymen.body).save() : null)
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
