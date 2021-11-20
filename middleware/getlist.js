module.exports = function getlst(lst) {
  return (req, res, next) => {
    req.lst = lst
    next()
  }
}
