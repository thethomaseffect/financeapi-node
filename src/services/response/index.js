import url from 'url'

function getFullRequestURL (req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  })
}

function transformResponse (req, entity) {
  return {
    data: entity,
    links: {
      self: getFullRequestURL(req)
    }
  }
}

export const success = (req, res, status) => (entity) => {
  if (entity) {
    res.status(status || 200).json(transformResponse(req, entity))
  }
  return null
}

export const notFound = (req, res) => (entity) => {
  if (entity) {
    return entity
  }
  res.status(404).end()
  return null
}

export const alreadyExists = (req, res) => (entity) => {
  if (entity) {
    res.status(409).end()
    return entity
  }
  return null
}
