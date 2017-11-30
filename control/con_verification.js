var PW = require("png-word");
var pw = PW(PW.GRAY);
var r = require("random-word")("abcdefghijklmnopqrst0123456789");

const validat = (req, res) => {
  var numtxt = req.session.validat_num = r.random(4);
  pw.createPNG(numtxt,function(pngnum){
    res.send(pngnum);	
  })
}

module.exports = validat