function findAll(callback) {
  setImmediate(function () {
    callback(null, [
      {id: 1, moisture: 0.8777476763},
      {id: 2, moisture: 0.8364771235}
    ]);
  });
}

exports.findAll = findAll;
