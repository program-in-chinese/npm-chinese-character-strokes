const 笔顺 = require("./笔顺数据")

const 笔顺数据 = 笔顺.字表

exports.取笔顺 = function(字) {
  return 笔顺数据[字] ? String(笔顺数据[字]) : null;
}
