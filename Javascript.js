function Looper(data, processData, done) {
  if (data.length > 0) {
    var loop = function(data, i, processData, done) {
      processData(data[i], i, function() {
        if (++i < data.length) {
          loop(data, i, processData, done);
        } else {
          done();
        }
      });
    };
    loop(data, 0, processData, done);
  } else {
    done();
  }
}

var arr = ["Hola", "Mundo", "Fuck", 36, 2015];
Looper(arr,function(data,i,callback) {
  console.log("DATA: "+data+" INDEX: "+i);
  callback();
},function() {
  console.log("DONE");
});
