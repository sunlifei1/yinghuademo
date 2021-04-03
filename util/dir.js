module.exports = {
  rootPath: () => {
    return __dirname.split('/').slice(0, -1).join('/')
  }
}