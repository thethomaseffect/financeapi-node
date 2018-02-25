import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy, destroyAll } from './controller'
import Payments, { schema } from './model'


const router = new Router()
const { type, id, version, organisation_id, attributes } = schema.tree

/**
 * @api {post} /payments Create payments
 * @apiName CreatePayments
 * @apiGroup Payments
 * @apiParam type Payments's type.
 * @apiParam version Payments's version.
 * @apiParam organisation_id Payments's organisation_id.
 * @apiParam attributes Payments's attributes.
 * @apiSuccess {Object} payments Payments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payments not found.
 */
router.post('/',
  body({ type, id, version, organisation_id, attributes }),
  create)

/**
 * @api {get} /payments Retrieve payments
 * @apiName RetrievePayments
 * @apiGroup Payments
 * @apiUse listParams
 * @apiSuccess {Object[]} payments List of payments.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /payments/:id Retrieve payments
 * @apiName RetrievePayments
 * @apiGroup Payments
 * @apiSuccess {Object} payments Payments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payments not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /payments/:id Update payments
 * @apiName UpdatePayments
 * @apiGroup Payments
 * @apiParam type Payments's type.
 * @apiParam version Payments's version.
 * @apiParam organisation_id Payments's organisation_id.
 * @apiParam attributes Payments's attributes.
 * @apiSuccess {Object} payments Payments's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Payments not found.
 */
router.put('/:id',
  body({ type, id, version, organisation_id, attributes }),
  update)

/**
 * @api {delete} /payments/:id Delete payments
 * @apiName DeletePayments
 * @apiGroup Payments
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Payments not found.
 */
router.delete('/:id',
  destroy)

/**
 * @api {delete} /payments Delete all payments
 * @apiName DeletePayments
 * @apiGroup Payments
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.delete('/',
  destroyAll)

export { Payments, schema }
export default router
