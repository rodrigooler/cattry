function cattryP(p) {
  return p
    .then(function(result) {
      return [null, result]
    })
    .catch(function(err) {
      return [err]
    })
}

function cattry(f) {
  try {
    return [null, f()]
  } catch (err) {
    return [err]
  }
}


module.exports = {
  cattry,
  cattryP
}