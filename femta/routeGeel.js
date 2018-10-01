(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93278F").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape.setTransform(-3671.2,4635,2.988,2.988);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34C12D").s().p("EhmTBMgICKiPIZfYkMAi3gQKQAxiAAyiVQBPjtA4jbQBmmSAOkoQAOkohMioQiiloinkHQg0hSgug/IglgwIgtgzIAfg9QCFkACEkvQEGpcAMkJQAKjii9sfQiPpbi8qSIpnrDIAGgsQA0mSB2mgQDps3FlkCQChh0Dlh+QCChIENiIQEoiUB1hGQDBh0AvhTQBbilFAqWIEyp9IAWgvIaDkhIAlAuIBxCAQCNCaCeCTQH4HSHnDYQHzDeaiKeQNTFQMBErIhIC6QsDkrtUlQQ6lqgn2jfQnOjNnXmbQkaj1jgkGI2rD7Qo+Sxh/DkQhCB4jOCCQh/BQlSCpQkACBiEBIQjdB6iYBvQiYBtiGEBQiFD/hqGBQg5DOgsDkQgdCVgTCAIJJKhIAGAVIBeFTQBmF0BSFLQEDQPgNEiQgMEGjaIVQiCE+isFVQBVBxBeCgQCMDuCGErQCzGNjUNeQhsG0idGKIgPAlMgl8ARlg");
	this.shape_1.setTransform(-1714.1,3196.2,2.988,2.988);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93278F").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape_2.setTransform(-4748.8,1875.3,2.988,2.988);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93278F").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape_3.setTransform(3671.2,9347.7,2.988,2.988);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93278F").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape_4.setTransform(3375.3,7593.8,2.988,2.988);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#93278F").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape_5.setTransform(-155.7,-3157.3,2.988,2.988);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#93278F").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape_6.setTransform(-700.9,-9347.7,2.988,2.988);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#34C12D").s().p("AooMsIOh62ICwBfIuha2g");
	this.shape_7.setTransform(313.7,6568.7,2.988,2.988);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#34C12D").s().p("AxhFRIAAjIINLAAIU0nZIBEC8I1VHlg");
	this.shape_8.setTransform(-2194.4,4764.4,2.988,2.988);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#34C12D").s().p("Au7mXICih1II6MSIQhsnIB6CfIzFOkg");
	this.shape_9.setTransform(-1267.2,1146.4,2.988,2.988);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#34C12D").s().p("AouozICeh6IO/ThIieB6g");
	this.shape_10.setTransform(252.4,-7113.9,2.988,2.988);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#34C12D").s().p("At3AAIBNi3IGYCqITvixIAbDFI0kC4g");
	this.shape_11.setTransform(343.8,-5357.6,2.988,2.988);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#34C12D").s().p("EgpdAEFMBSfgLPIAcDGMhSfALPg");
	this.shape_12.setTransform(-130.1,-3161.8,2.988,2.988);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#34C12D").s().p("ArsgnIXIh3IARDGI3JB3g");
	this.shape_13.setTransform(383.8,-2068.2,2.988,2.988);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#34C12D").s().p("A4nGYIVrp5Ia7lrIApDDI6lFnI1XJvg");
	this.shape_14.setTransform(391.3,347,2.988,2.988);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#34C12D").s().p("AGGH9QoLmdg7g6Qg3g2mxmZImsmUICJiSIG4GeQGoGSA5A4QAqArGOE7QE5D3GWE8Ih7CeQj8jDlYkQg");
	this.shape_15.setTransform(543,2200.2,2.988,2.988);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34C12D").s().p("AsZAuIANjHIYmBsIgODHg");
	this.shape_16.setTransform(-387.8,3829.2,2.988,2.988);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#34C12D").s().p("AvbJDIdD0oIB0CjI9DUog");
	this.shape_17.setTransform(1277.5,5758.7,2.988,2.988);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#34C12D").s().p("AlHEXIHtqjICiB2IntKjg");
	this.shape_18.setTransform(2687,8257.5,2.988,2.988);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#34C12D").s().p("ABxgJMggNAGHIy2sLMgpbgGwI4v45ICNiNIYCYMMApFAGsISVL2If1mDMBxbAogIhDC9g");
	this.shape_19.setTransform(-982.2,5846.2,2.988,2.988);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhOBEIBrinIAzAgIhsCng");
	this.shape_20.setTransform(3705.8,9368,3.697,4.077,0,5.9,5.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EC7cB7XIBtioIBmBBIhuCogEC4TB5UIBtioIBkBCIhsCngEC1KB3RIBsinIBlBBIhtCngECyAB1OIBsioIBlBCIhsCogECu2BzLIBsinIBlBBIhsCogECrsBxJIBtioIBlBBIhtCogECoiBvHIBuioIBkBBIhtCogEClZBtDIBtinIBlBBIhuCogECiPBrBIBtioIBlBCIhtCngECfFBo+IBtinIBlBBIhsCngECb8Bm7IBsioIBlBCIhtCngECYyBk4IBtinIBkBBIhsCogECVpBi2IBsioIBlBBIhtCpgECSfBgzIBsinIBlBAIhsCpgECPVBewIBtinIBlBBIhtCogECMLBcuIBtioIBlBCIhtCngECJBBarIBuioIBkBCIhtCngECF4BYoIBtioIBlBCIhtCngECCuBWlIBtinIBlBBIhtCogEB/lBUjIBsioIBlBBIhsCogEB8bBSgIBsinIBlBBIhsCogEB5RBQdIBtinIBkBBIhsCogEB2HBOaIBtinIBlBBIhsCogEBy9BMYIBuioIBlBCIhuCngEBv0BKVIBtioIBlBCIhtCngEBsqBISIBtioIBlBCIhtCogEBpgBGQIBuioIBlBBIhuCogEBmXBENIBsinIBmBBIhtCogEBjNBCKIBtinIBlBBIhtCngEBgEBAHIBsinIBlBBIhsCogEBc6A+FIBsioIBlBCIhsCngEBZwA8CIBtioIBlBBIhtCogEBWmA6AIBtipIBlBCIhtCogEBTdA39IBtioIBlBBIhuCogEBQTA16IBtioIBlBCIhtCogEBNJAz3IBtinIBlBBIhtCngEBKAAx0IBsinIBlBBIhtCogEBG2AvyIBtioIBkBCIhsCngEBDtAtvIBsioIBlBBIhtCogEBAjArtIBsipIBlBCIhsCogEA9ZApqIBsioIBlBBIhsCogEA6PAnnIBtioIBlBCIhtCogEA3FAlkIBuinIBkBBIhtCngEAz8AjhIBtinIBlBBIhuCogEAwyAhfIBtioIBlBBIhtCogEAtpAfcIBsioIBlBBIhsCogEAqfAdaIBsipIBlBCIhsCogEAnVAbXIBtioIBkBBIhsCogEAkMAZUIBsioIBlBCIhtCogEAhBAXRIBuinIBkBBIhsCngAd4VOIBtinIBlBBIhtCogAauTMIBtioIBlBBIhtCogAXkRJIBuioIBkBBIhtCpgAUbPHIBtipIBlBCIhuCogARRNEIBtioIBlBBIhtCogAOILBIBsioIBlBCIhsCngAK+I+IBsinIBlBBIhsCngAH0G7IBtinIBkBBIhsCogAEqE4IBtinIBlBBIhtCogABgC2IBuioIBlBBIhuCpgAhoA0IBsioIBlBCIhsCngAkyhOIBtioIBlBBIhtCogAn8jRIBtioIBlBCIhtCngArFlUIBsioIBlBCIhtCngAuPnXIBtioIBlBCIhtCngAxYpaIBsinIBlBBIhsCogA0ircIBsioIBlBBIhsCpgA3stfIBtioIBkBBIhsCpgA62vhIBtioIBlBBIhtCogA+AxkIBuioIBlBCIhuCngEghJgTnIBtioIBlBCIhtCngEgkSgVqIBsioIBlBCIhtCngEgncgXsIBsioIBlBBIhsCogEgqmgZvIBsioIBlBBIhsCpgEgtwgbyIBtioIBlBBIhtCpgEgw5gd0IBsioIBlBBIhsCogEg0Dgf4IBtinIBkBCIhsCngEg3Ngh6IBtioIBlBCIhtCngEg6Xgj9IBtioIBlBCIhtCngEg9hgl/IBuipIBlBCIhuCogEhAqgoCIBtioIBlBBIhtCogEhDzgqFIBsioIBlBBIhtCpgEhG9gsHIBsioIBlBBIhsCogEhKHguLIBsinIBlBBIhsCogEhNRgwNIBtioIBlBBIhtCogEhQbgyQIBuioIBkBCIhtCngEhTkg0SIBtipIBlBCIhuCogEhWug2VIBtioIBlBBIhtCogEhZ3g4YIBtioIBkBBIhsCpgEhdAg6aIBsioIBlBBIhtCogEhgKg8eIBsinIBlBBIhsCogEhjUg+gIBsioIBlBBIhsCogEhmehAjIBtioIBlBBIhtCogEhpohClIBuipIBkBCIhtCogEhsxhEoIBtioIBlBBIhuCogEhv7hGrIBtioIBlBBIhtCpgEhzFhIuIBtinIBlBBIhtCogEh2PhKxIBtinIBlBBIhtCogEh5YhMzIBtioIBkBBIhsCogEh8hhO2IBsioIBlBBIhtCogEh/rhQ4IBsipIBlBCIhsCogEiC1hS7IBsioIBlBBIhsCogEiF/hU+IBtioIBlBBIhtCpgEiJJhXBIBuinIBkBBIhtCogEiMShZEIBtioIBlBCIhuCogEiPchbGIBtioIBlBBIhtCogEiSlhdJIBsioIBlBBIhsCogEiVvhfLIBsipIBlBCIhsCogEiY5hhOIBtioIBkBBIhsCogEicChjRIBsioIBlBCIhtCogEifMhlUIBsioIBlBCIhsCogEiiWhnXIBtioIBlBCIhtCogEilghpaIBtinIBlBBIhtCogEioqhrcIBuioIBkBBIhtCogEirzhteIBtipIBlBCIhtCogEiu9hvhIBtipIBlBCIhtCogEiyGhxkIBsioIBlBCIhsCngEi1QhznIBsioIBlBCIhsCngEi4ah1qIBtioIBkBCIhsCogEi7jh3tIBsinIBlBBIhsCogEi+uh5vIBuioIBlBBIhuCog");
	this.shape_21.setTransform(-474.8,5679.6,3.697,4.077,0,5.9,5.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhPBEIBtinIAyAhIhsCmg");
	this.shape_22.setTransform(-4655.3,1991.3,3.697,4.077,0,5.9,5.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#42210B").s().p("EjBEh7RIBtioMGAdD5LIhtCog");
	this.shape_23.setTransform(-474.8,5679.6,3.697,4.077,0,5.9,5.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#34C12D").s().p("EBPEG+pI8d10Immw9MgsFgqOMgLngi1QjVCgjKB4QpkFulQhlQhegchHhBQhdhWgsiPQhXkbBbkvQA2iyCyk+QCmknAqiRQBEjrhZjWQhBicjpnKQiUkhluq/QmgsgjcmtQlprBj3n8QmFsiibmhQhrkfAAh8QAAmJKa8YQEnsnFouKMAIZiDiQhRishdjdQiel1h+lpQjjqLhgoMQhfoLAmmAQBHrLA76oQAdtVAUuGMgS2g2rMAPDgloQiGtRhlsaQi+3LAxmVQARiMA/jcQAniJBfkhQBrlKAxiqQBSkgAgjVQBVomjcjcQiUiTl6ghQjjgToKAVQkzANiYAAQj6AAiqgbQjrgliNhgQiOhgg0ieQgqh8A3jMQBQkqEanzQFrqDKtvCQGupbIPqvQE7mcEUlaMg9QhfLITVqLIBdCxIwTIlMA8oBeNIguA4QjQEDksGEQpVMGniKjQuETwlKK1QjWG/AwCSQBGDQGAAyQCYAUDjgBQCIgBEbgMQI2gXD6AbQGkAsC8C9QCQCPAxDhQAxDggsE6QggDlhXEzQgzC2hyFeQhdEdgkB+Qg9DTgPB/QgxGPDQYtQBoMYB0LaIAFAbMgO9AlXMASqA2FIgBASIgLH3QgPJbgTIzQg8cChLLpQhILUG4TxQDdJ7DxH1IAMAYMgIfCE2IgGAPQmpQolwQHQoHWxAAE3QAABmB4E0QCeGUFhLYQD1H5FqLBQDSGbGpMxQF4LTCTEfQDkHBBECjQBxEPhQElQggB0hECLQgoBThbChQilEngvCWQhOD6BHDnQAYBOApAuQAqAuA+ATQDgBDHLj8QFHizEajpIBwhdMAMyAmXMAsCAqKIGiQzIbzVUIABABIYPT5MAH7gojIDFAmMgI9Attg");
	this.shape_24.setTransform(1181.1,-402.6,2.988,2.988);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#34C12D").s().p("EgJ9gt9IDEgkMAQ3BcfIjEAkg");
	this.shape_25.setTransform(3536.7,8463.1,2.988,2.988);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#34C12D").s().p("EgpdAEFMBSfgLPIAcDGMhSfALPg");
	this.shape_26.setTransform(-5188.5,2460.2,2.54,2.54,0,-44.4,-45.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#34C12D").s().p("EgpdAEFMBSfgLPIAcDGMhSfALPg");
	this.shape_27.setTransform(-4595.9,3823.9,4.845,4.787,0,45.7,49.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#34C12D").s().p("Eg6jBO0Qi5jLgJACUAAngAvA4fhOJUA5HhPBgACAAIQgCAIEiCCQEhCDgCAIUgACAAKg6kBP4Mg6jBP2g");
	this.shape_28.setTransform(-5154.1,2461.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhOBEIBrinIAzAgIhsCng");
	this.shape_29.setTransform(-4778.9,1886.9,2.377,2.274,0,101.5,100.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("EC7cB7XIBtioIBmBBIhuCogEC4TB5UIBtioIBkBCIhsCngEC1KB3RIBsinIBlBBIhtCngECyAB1OIBsioIBlBCIhsCogECu2BzLIBsinIBlBBIhsCogECrsBxJIBtioIBlBBIhtCogECoiBvHIBuioIBkBBIhtCogEClZBtDIBtinIBlBBIhuCogECiPBrBIBtioIBlBCIhtCngECfFBo+IBtinIBlBBIhsCngECb8Bm7IBsioIBlBCIhtCngECYyBk4IBtinIBkBBIhsCogECVpBi2IBsioIBlBBIhtCpgECSfBgzIBsinIBlBAIhsCpgECPVBewIBtinIBlBBIhtCogECMLBcuIBtioIBlBCIhtCngECJBBarIBuioIBkBCIhtCngECF4BYoIBtioIBlBCIhtCngECCuBWlIBtinIBlBBIhtCogEB/lBUjIBsioIBlBBIhsCogEB8bBSgIBsinIBlBBIhsCogEB5RBQdIBtinIBkBBIhsCogEB2HBOaIBtinIBlBBIhsCogEBy9BMYIBuioIBlBCIhuCngEBv0BKVIBtioIBlBCIhtCngEBsqBISIBtioIBlBCIhtCogEBpgBGQIBuioIBlBBIhuCogEBmXBENIBsinIBmBBIhtCogEBjNBCKIBtinIBlBBIhtCngEBgEBAHIBsinIBlBBIhsCogEBc6A+FIBsioIBlBCIhsCngEBZwA8CIBtioIBlBBIhtCogEBWmA6AIBtipIBlBCIhtCogEBTdA39IBtioIBlBBIhuCogEBQTA16IBtioIBlBCIhtCogEBNJAz3IBtinIBlBBIhtCngEBKAAx0IBsinIBlBBIhtCogEBG2AvyIBtioIBkBCIhsCngEBDtAtvIBsioIBlBBIhtCogEBAjArtIBsipIBlBCIhsCogEA9ZApqIBsioIBlBBIhsCogEA6PAnnIBtioIBlBCIhtCogEA3FAlkIBuinIBkBBIhtCngEAz8AjhIBtinIBlBBIhuCogEAwyAhfIBtioIBlBBIhtCogEAtpAfcIBsioIBlBBIhsCogEAqfAdaIBsipIBlBCIhsCogEAnVAbXIBtioIBkBBIhsCogEAkMAZUIBsioIBlBCIhtCogEAhBAXRIBuinIBkBBIhsCngAd4VOIBtinIBlBBIhtCogAauTMIBtioIBlBBIhtCogAXkRJIBuioIBkBBIhtCpgAUbPHIBtipIBlBCIhuCogARRNEIBtioIBlBBIhtCogAOILBIBsioIBlBCIhsCngAK+I+IBsinIBlBBIhsCngAH0G7IBtinIBkBBIhsCogAEqE4IBtinIBlBBIhtCogABgC2IBuioIBlBBIhuCpgAhoA0IBsioIBlBCIhsCngAkyhOIBtioIBlBBIhtCogAn8jRIBtioIBlBCIhtCngArFlUIBsioIBlBCIhtCngAuPnXIBtioIBlBCIhtCngAxYpaIBsinIBlBBIhsCogA0ircIBsioIBlBBIhsCpgA3stfIBtioIBkBBIhsCpgA62vhIBtioIBlBBIhtCogA+AxkIBuioIBlBCIhuCngEghJgTnIBtioIBlBCIhtCngEgkSgVqIBsioIBlBCIhtCngEgncgXsIBsioIBlBBIhsCogEgqmgZvIBsioIBlBBIhsCpgEgtwgbyIBtioIBlBBIhtCpgEgw5gd0IBsioIBlBBIhsCogEg0Dgf4IBtinIBkBCIhsCngEg3Ngh6IBtioIBlBCIhtCngEg6Xgj9IBtioIBlBCIhtCngEg9hgl/IBuipIBlBCIhuCogEhAqgoCIBtioIBlBBIhtCogEhDzgqFIBsioIBlBBIhtCpgEhG9gsHIBsioIBlBBIhsCogEhKHguLIBsinIBlBBIhsCogEhNRgwNIBtioIBlBBIhtCogEhQbgyQIBuioIBkBCIhtCngEhTkg0SIBtipIBlBCIhuCogEhWug2VIBtioIBlBBIhtCogEhZ3g4YIBtioIBkBBIhsCpgEhdAg6aIBsioIBlBBIhtCogEhgKg8eIBsinIBlBBIhsCogEhjUg+gIBsioIBlBBIhsCogEhmehAjIBtioIBlBBIhtCogEhpohClIBuipIBkBCIhtCogEhsxhEoIBtioIBlBBIhuCogEhv7hGrIBtioIBlBBIhtCpgEhzFhIuIBtinIBlBBIhtCogEh2PhKxIBtinIBlBBIhtCogEh5YhMzIBtioIBkBBIhsCogEh8hhO2IBsioIBlBBIhtCogEh/rhQ4IBsipIBlBCIhsCogEiC1hS7IBsioIBlBBIhsCogEiF/hU+IBtioIBlBBIhtCpgEiJJhXBIBuinIBkBBIhtCogEiMShZEIBtioIBlBCIhuCogEiPchbGIBtioIBlBBIhtCogEiSlhdJIBsioIBlBBIhsCogEiVvhfLIBsipIBlBCIhsCogEiY5hhOIBtioIBkBBIhsCogEicChjRIBsioIBlBCIhtCogEifMhlUIBsioIBlBCIhsCogEiiWhnXIBtioIBlBCIhtCogEilghpaIBtinIBlBBIhtCogEioqhrcIBuioIBkBBIhtCogEirzhteIBtipIBlBCIhtCogEiu9hvhIBtipIBlBCIhtCogEiyGhxkIBsioIBlBCIhsCngEi1QhznIBsioIBlBCIhsCngEi4ah1qIBtioIBkBCIhsCogEi7jh3tIBsinIBlBBIhsCogEi+uh5vIBuioIBlBBIhuCog");
	this.shape_30.setTransform(-2475.2,-622.6,2.377,2.274,0,101.5,100.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhPBEIBtinIAyAhIhsCmg");
	this.shape_31.setTransform(-171.4,-3132.1,2.377,2.274,0,101.5,100.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#42210B").s().p("EjBEh7RIBtioMGAdD5LIhtCog");
	this.shape_32.setTransform(-2476.5,-621.7,2.378,2.275,0,101.5,100.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(1,1,1).p("Ak+E/QCgijCfihQEfkhAcgXQADgBAAgB");
	this.shape_33.setTransform(0.2,0.2,1,1,0,0,0,5548.4,-2979.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5614.1,-9471,9408.6,18942);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3DB6F9").s().p("AsZdXQluiakbkbQkakaialuQihl7AAmfQAAmeChl7QCaluEakbQEbkaFuiaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEbCaFuQChF7AAGeQAAGfihF7QiaFukaEaQkbEbluCaQl7ChmfAAQmeAAl7ihg");
	this.shape.setTransform(-140.7,1298.1,0.555,0.55,0,0,0,0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DB6F9").s().p("AsZdXQlviakakaQkakbibluQigl7AAmfQAAmeCgl7QCblvEakaQEakaFviaQF7ihGeAAQGfAAF7ChQFuCaEaEaQEbEaCbFvQCgF7AAGeQAAGfigF7QibFukbEbQkaEaluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_1.setTransform(3008,3480.5,0.555,0.55,0,0,0,0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3DB6F9").s().p("AsZdYQlvibkakaQkakaiblvQigl7AAmfQAAmeCgl7QCbluEakbQEakaFvibQF7igGeAAQGfAAF7CgQFuCbEaEaQEbEbCbFuQCgF7AAGeQAAGfigF7QibFvkbEaQkaEaluCbQl7CgmfAAQmeAAl7igg");
	this.shape_2.setTransform(3624.1,-2864.2,0.555,0.55,0,0,0,0.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3DB6F9").s().p("AsZdYQluibkbkaQkakaiblvQigl7AAmfQAAmeCgl7QCbluEakbQEbkaFuibQF7igGeAAQGfAAF7CgQFuCbEaEaQEbEbCaFuQChF7AAGeQAAGfihF7QiaFvkbEaQkaEaluCbQl7CgmfAAQmeAAl7igg");
	this.shape_3.setTransform(2258.8,-3371.3,0.555,0.55,0,0,0,0.2,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3DB6F9").s().p("Am4QJQjLhVidiaQidichVjKQhZjQAAjkQAAjkBZjQQBVjJCdicQCdibDLhUQDThZDlAAQDmAADSBZQDMBUCcCbQCdCcBWDJQBZDQAADkQAADkhZDQQhWDKidCcQicCajMBVQjSBZjmAAQjlAAjThZg");
	this.shape_4.setTransform(-2461.9,-3450.6,1,1,0,0,0,-25.9,-24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3DB6F9").s().p("AsZdXQluiakakbQkbkaibluQigl7AAmfQAAmeCgl7QCbluEbkaQEakbFuibQF7igGeAAQGfAAF7CgQFvCbEZEbQEbEaCaFuQChF7AAGeQAAGfihF7QiaFukbEaQkZEblvCaQl7ChmfAAQmeAAl7ihg");
	this.shape_5.setTransform(-3623,-2182.2,0.555,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3DB6F9").s().p("AsZdYQlvibkakbQkakaialuQihl7AAmfQAAmeChl7QCalvEakZQEakbFvibQF7igGeAAQGfAAF7CgQFuCbEbEbQEaEZCbFvQCgF7AAGeQAAGfigF7QibFukaEaQkbEbluCbQl7CgmfAAQmeAAl7igg");
	this.shape_6.setTransform(3660.8,2631.3,0.555,0.55,0,0,0,0.3,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3DB6F9").s().p("AsZdXQluiakbkbQkakaialuQihl7AAmfQAAmeChl7QCaluEakbQEbkaFuiaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEbCaFuQChF7AAGeQAAGfihF7QiaFukaEaQkbEbluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_7.setTransform(448.5,297.5,0.555,0.55,0,0,0,0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3DB6F9").s().p("AsZdXQlviakakaQkakbialuQihl7AAmfQAAmeChl7QCalvEakaQEakaFviaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEaCaFvQChF7AAGeQAAGfihF7QiaFukaEbQkbEaluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_8.setTransform(1773.8,3480.5,0.555,0.55,0,0,0,0.2,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#34C12D").ss(20).p("EDB5DbhMgrmggqQR8qHSZrEUAkzgWHACWgEsMh4FgqlMgrwAbgMhSfglgMh5QgZAMgwIgaQMAAAglfIxWAAMARWhYwI/4XwQhhjjhTkwQilpfBLl+QAojOFQkxQDojSH0loQJfm2CWh3QFyknBVixQCjlRD1xHQBMlWBMl5IA8k1MAP8giYIg83w");
	this.shape_9.setTransform(1630.6,1935,1.11,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#34C12D").ss(20).p("ALTkII2lIR");
	this.shape_10.setTransform(238.9,-312.8,1.11,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#34C12D").ss(20).p("ABQHPIifud");
	this.shape_11.setTransform(46.6,-421.9,1.11,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#34C12D").ss(20).p("ABkm8IjHN5");
	this.shape_12.setTransform(-297.5,-390.9,1.11,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#34C12D").ss(20).p("AjYE0IGxpn");
	this.shape_13.setTransform(-490.9,-359.3,1.11,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#34C12D").ss(20).p("AH7vyInCHMIAAElIipKGIl8KA");
	this.shape_14.setTransform(-937.6,-564.1,1.11,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#34C12D").ss(20).p("AAAl/IAAL/");
	this.shape_15.setTransform(-1562.8,-920.1,1.11,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#34C12D").ss(20).p("AhUnLICpOX");
	this.shape_16.setTransform(-1642.1,-959.1,1.11,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#34C12D").ss(20).p("AmjJRINHyh");
	this.shape_17.setTransform(-1880.3,-962.7,1.11,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#34C12D").ss(20).p("AlKHnIKVvN");
	this.shape_18.setTransform(-2402.9,-1314,1.11,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#34C12D").ss(20).p("AjWE+IGtp7");
	this.shape_19.setTransform(-2651.1,-1502.2,1.11,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#34C12D").ss(20).p("AiPDfIEfm9");
	this.shape_20.setTransform(-2929.8,-1779.9,1.11,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#34C12D").ss(20).p("AH/HcIv9u3");
	this.shape_21.setTransform(-3145.7,-2496.4,1.11,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#34C12D").ss(20).p("AAAqAIAAUB");
	this.shape_22.setTransform(-2636.1,-2904.8,1.11,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#34C12D").ss(20).p("ABlImIjJxM");
	this.shape_23.setTransform(-2301,-3009.5,1.11,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#34C12D").ss(20).p("AJxFAIzhp/");
	this.shape_24.setTransform(-2109.5,-3109.5,1.11,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#34C12D").ss(20).p("A27PgIDqgkQEdgwD+g7QMqi8C7joQC8jnHRpoQDok1DDkH");
	this.shape_25.setTransform(-1404.5,-3486.7,1.11,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#34C12D").ss(20).p("AnQmoIOhNR");
	this.shape_26.setTransform(-1552.3,-3435.7,1.11,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#34C12D").ss(20).p("AkaJjII1zF");
	this.shape_27.setTransform(-1469.2,-3293.3,1.11,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#34C12D").ss(20).p("AH+JjIv7zF");
	this.shape_28.setTransform(-858,-3243.8,1.11,1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#34C12D").ss(20).p("AFDKAIqF0A");
	this.shape_29.setTransform(-387.7,-3369.2,1.11,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#34C12D").ss(20).p("AAAJaIAAyz");
	this.shape_30.setTransform(-125.4,-3462.9,1.11,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#34C12D").ss(20).p("Ah6GHID1sN");
	this.shape_31.setTransform(237.9,-3439.6,1.11,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#34C12D").ss(20).p("AmRIYIMjwv");
	this.shape_32.setTransform(784.9,-3301.5,1.11,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#34C12D").ss(20).p("AiiHEIFFuH");
	this.shape_33.setTransform(1134.7,-3226.3,1.11,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#34C12D").ss(20).p("AobCvIQ3ld");
	this.shape_34.setTransform(1616.1,-2757,1.11,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#34C12D").ss(20).p("AEYBQIovif");
	this.shape_35.setTransform(3769.4,3137.2,1.11,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#34C12D").ss(20).p("AEJiQIoREh");
	this.shape_36.setTransform(2592.3,-3084.8,1.11,1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#34C12D").ss(20).p("AOZNcQhpj/iKkHQkToMiiglQijgmmUhBIl0g5IO/nq");
	this.shape_37.setTransform(3398.6,-2529.8,1.11,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#34C12D").ss(20).p("AKZj9I0xH6");
	this.shape_38.setTransform(2621.2,-3311.5,1.11,1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#34C12D").ss(20).p("ABVt+Iipb9");
	this.shape_39.setTransform(1948.5,-3397.2,1.11,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#34C12D").ss(20).p("ADpAjInRhF");
	this.shape_40.setTransform(2006.5,-2850.5,1.11,1.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#34C12D").ss(20).p("AGCFAIsDp/");
	this.shape_41.setTransform(1853,-2554,1.11,1.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#34C12D").ss(20).p("Aixi1IFjFr");
	this.shape_42.setTransform(1489.3,-2050,1.11,1.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#34C12D").ss(20).p("AJdCKIy5kU");
	this.shape_43.setTransform(1555.6,-1942.3,1.11,1.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#34C12D").ss(20).p("AmjAAINHAA");
	this.shape_44.setTransform(1394.1,-1784,1.11,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#34C12D").ss(20).p("AMcDnIuVkqIqqih");
	this.shape_45.setTransform(1410.1,-1611.5,1.11,1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#34C12D").ss(20,0,1).p("ALBkHI0niGIKTNB");
	this.shape_46.setTransform(1375.8,-1235.8,1.11,1.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#34C12D").ss(20).p("AJngsIzNBZ");
	this.shape_47.setTransform(1268.1,-861.7,1.11,1.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#34C12D").ss(20).p("AI/HIIx9uP");
	this.shape_48.setTransform(1288.1,-98.5,1.11,1.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#34C12D").ss(20).p("AFPLkIqd3H");
	this.shape_49.setTransform(1237,-28.5,1.11,1.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#34C12D").ss(20).p("AuHR2IbBxgIqKyv");
	this.shape_50.setTransform(1108.2,-112.3,1.11,1.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#34C12D").ss(20).p("EFD0B2bIpsTEQpBAPqYAXQ0vAtmwAlQjqAVklhkQjQhHlNisQnGjqhegrQk2iOjqgnQjzgoiUhkQhhhBh6iXQiNiwhchPQitiWkIhtUgHrgDKghfACdQoVAnwrBjQtcBPjiAIUgIRAAShTQglmUgRSgH0gqAgTRQ86tRkChkUgJFgDhhOogzFQ4lv+8lyzI3rvoQmGngmkocQtIw4iWksQiWksvPoDQkwihlfijIkiiDIg4BeQhCByg2BpQisFPASBwQATBxojAtQisAOjPAFIitADI3m9i");
	this.shape_51.setTransform(-1234.8,-1161.4,1.11,1.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#34C12D").ss(20).p("ACoCyIlPlj");
	this.shape_52.setTransform(929.2,-89.9,1.11,1.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#34C12D").ss(20).p("AM1IyIvdoZIp2pa");
	this.shape_53.setTransform(701.4,76.9,1.11,1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#34C12D").ss(20).p("ABfqmQiwTwgMAH");
	this.shape_54.setTransform(551.1,143,1.11,1.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#34C12D").ss(20).p("AlfjGIK/GN");
	this.shape_55.setTransform(388.7,605,1.11,1.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#34C12D").ss(20).p("AmrhwINXDh");
	this.shape_56.setTransform(301.7,789.1,1.11,1.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#34C12D").ss(20).p("AGFBrIsKjV");
	this.shape_57.setTransform(318.6,1083.9,1.11,1.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#34C12D").ss(20).p("AhQjQIChGh");
	this.shape_58.setTransform(184.4,1118.7,1.11,1.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#34C12D").ss(20).p("AFjFUIrFqn");
	this.shape_59.setTransform(214.8,1201.3,1.11,1.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#34C12D").ss(20).p("AiaEiIE1pD");
	this.shape_60.setTransform(175.9,1206.8,1.11,1.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#34C12D").ss(20).p("AlWhjIKtDH");
	this.shape_61.setTransform(93.5,1174.9,1.11,1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#34C12D").ss(20).p("AlSDWIGjmPIFHAA");
	this.shape_62.setTransform(-22.3,1327.4,1.11,1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#34C12D").ss(20).p("AB4ExIjvph");
	this.shape_63.setTransform(68.8,1493.3,1.11,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#34C12D").ss(20).p("AJuhyIzbDl");
	this.shape_64.setTransform(310.6,1482.4,1.11,1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#34C12D").ss(20).p("AKNiCI0ZEF");
	this.shape_65.setTransform(289.4,1605.1,1.11,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#34C12D").ss(20).p("AIlgrIxJBX");
	this.shape_66.setTransform(254.3,1734.1,1.11,1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#34C12D").ss(20).p("AnGDNIONmZ");
	this.shape_67.setTransform(108.2,1939.9,1.11,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#34C12D").ss(20).p("AIXgsIwtBZ");
	this.shape_68.setTransform(340.2,1912.4,1.11,1.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#34C12D").ss(20).p("AG7C0It1ln");
	this.shape_69.setTransform(330.5,2081.3,1.11,1.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#34C12D").ss(20).p("AXRMwIgEzyMgkFgEEIqyL6");
	this.shape_70.setTransform(744.2,2335.5,1.11,1.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#34C12D").ss(20).p("AkGlYIHfE2IABHO");
	this.shape_71.setTransform(1330.1,2469,1.11,1.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#34C12D").ss(20).p("AA/oUIh9Qp");
	this.shape_72.setTransform(1109.7,2406.1,1.11,1.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#34C12D").ss(20).p("AhEIkICKxH");
	this.shape_73.setTransform(560.5,2397.2,1.11,1.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#34C12D").ss(20).p("AjwF2IHhrq");
	this.shape_74.setTransform(1327.6,2557.2,1.11,1.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#34C12D").ss(20).p("AmoGqINRtT");
	this.shape_75.setTransform(1692.1,2704.3,1.11,1.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#34C12D").ss(20).p("AivJ3IFfzu");
	this.shape_76.setTransform(1773.3,2751,1.11,1.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#34C12D").ss(20).p("AhFmFICLML");
	this.shape_77.setTransform(1956.8,2716,1.11,1.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#34C12D").ss(20).p("AXo94In0OYIE7IeQFUI0B9BxQDbDFCpECQDoFjgoD6QglDthBC5QghBdgZAtQpsiRqMilQ0YlKijhkQiihkt1n+ItVnq");
	this.shape_78.setTransform(3492.8,2925.3,1.11,1.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#34C12D").ss(20).p("AmBpDIMDSH");
	this.shape_79.setTransform(2309.4,2567.5,1.11,1.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#34C12D").ss(20).p("AlOJdIKdy5");
	this.shape_80.setTransform(2599,3462.3,1.11,1.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#34C12D").ss(20).p("AOnlnI9NLP");
	this.shape_81.setTransform(2575.7,3106.4,1.11,1.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#34C12D").ss(20).p("AjhN8IHE73");
	this.shape_82.setTransform(2393.8,3263.5,1.11,1.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#34C12D").ss(20).p("AAAoWIAAQt");
	this.shape_83.setTransform(2074.5,3235.7,1.11,1.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AimB1IDQk8IB9BTIjQE8g");
	this.shape_84.setTransform(3653.7,2626.7,1.11,1.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("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");
	this.shape_85.setTransform(-13.3,224,1.11,1.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AimB1IDQk8IB9BTIjQE8g");
	this.shape_86.setTransform(-3680.3,-2178.7,1.11,1.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#534741").ss(38).p("EoFLlV8MQKXKr5");
	this.shape_87.setTransform(-13.3,224,1.11,1.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#34C12D").ss(20).p("EhxgBNqQEOk2D/ltQH+rahLkTQhLkTAjqKQALjLAVjZIASivIBUACQBpgCBlgPQFFgyCvivQAXgXDQjcQCbilBthhQFLknD+AAQD6AAJsEsQE2CWEECWQAFg/AShfQAljABBilQDSoSGphLQDNgkGQgJQDjgFHtgKQGwgSEog5QF6hKD4iWQHCkTXI2RQLkrJKKqRMA3Agbg");
	this.shape_88.setTransform(-2880.9,-2649.7,1.11,1.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#34C12D").ss(20).p("Ekz9gdOILQkiIFoLaIE9gIQF+gHFLAKQQkAeCWCvQCWCvAoFeQAUCvgKCMICchfQDKh4Dfh9QLMmSKmk4QO2m0LhjCQOajxIYCbMBiIAKKIN9lWQQ6mZOslOUAvBgQuAHbABLQFyA6K6BhQNrB5MJBeUAimAELAGCgBNQDMgpNhEhQJ3DTR+G+QJxDyQ6GmQMLEoBAgZQBignE4gxQF8g7GBgNQHsgRGCBAQHWBPEVDCQERC+C4F7QCIEYB1HMQAZBfBCEZQA2DjAiB7QBoFzB/CZQD6EsIwLkQEYFyDmE2MAhxAFd");
	this.shape_89.setTransform(-274.2,-3133.6,1.11,1.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#34C12D").ss(20).p("Eg8PAZfQA5AAKbmkIKQmkIHCwZMA5LgVGMAY2Al9IKA2V");
	this.shape_90.setTransform(2290.5,3323.1,1.11,1.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#34C12D").ss(20).p("EhfRg3tIQ4jSINmRWILuI6IAASwIHSA1QI8BIISBhQafEzJ8GuQJ+GwVLRxQKlI5ImHiIEiQuIZUpYIGGx0");
	this.shape_91.setTransform(2992.2,-3002.2,1.11,1.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#34C12D").ss(20).p("Eh8HEGeQJYpuKFpvQUKzdDhAAQCBAAClg7QCUg1CXhaQCOhWBlhbQBmheAWhDQAQguATiHQAWibAShMQBGkmC5hKQD1hiA7gaQDbhfCchgQHDkVgUk0IEBA5QE2BKEOBTQNeEGCDD0INmzOQhJkKhpmkQjStGifr8UgH+gmNAC7gMTQCLpGHT8tUAIkghvAIGge0UAXOhYdADngFIQDhk+H+t9QD/m+DSl/IGboFQHrp2GTozQUK8IhLnCQhLnCkduEQhZkZhjkkIhSjtIC03cMAkGgKU");
	this.shape_92.setTransform(1305.7,-1523.1,1.11,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3736.2,-3605.7,7546.8,7198.3);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3DB6F9").s().p("AsZdXQluiakbkbQkakaialuQihl7AAmfQAAmeChl7QCaluEakbQEbkaFuiaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEbCaFuQChF7AAGeQAAGfihF7QiaFukaEaQkbEbluCaQl7ChmfAAQmeAAl7ihg");
	this.shape.setTransform(-140.7,1299.7,0.555,0.55,0,0,0,0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DB6F9").s().p("AsZdXQlviakakaQkakbibluQigl7AAmfQAAmeCgl7QCblvEakaQEakaFviaQF7ihGeAAQGfAAF7ChQFuCaEaEaQEbEaCbFvQCgF7AAGeQAAGfigF7QibFukbEbQkaEaluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_1.setTransform(3008,3482,0.555,0.55,0,0,0,0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3DB6F9").s().p("AsZdYQlvibkakaQkakaiblvQigl7AAmfQAAmeCgl7QCbluEakbQEakaFvibQF7igGeAAQGfAAF7CgQFuCbEaEaQEbEbCbFuQCgF7AAGeQAAGfigF7QibFvkbEaQkaEaluCbQl7CgmfAAQmeAAl7igg");
	this.shape_2.setTransform(3624.1,-2862.7,0.555,0.55,0,0,0,0.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3DB6F9").s().p("AsZdYQluibkbkaQkakaiblvQigl7AAmfQAAmeCgl7QCbluEakbQEbkaFuibQF7igGeAAQGfAAF7CgQFuCbEaEaQEbEbCaFuQChF7AAGeQAAGfihF7QiaFvkbEaQkaEaluCbQl7CgmfAAQmeAAl7igg");
	this.shape_3.setTransform(2258.8,-3369.8,0.555,0.55,0,0,0,0.2,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3DB6F9").s().p("AsZdXQluiakakbQkbkZiblvQigl7AAmfQAAmeCgl7QCbluEbkaQEakbFuibQF7igGeAAQGfAAF7CgQFvCbEZEbQEbEaCbFuQCgF7AAGeQAAGfigF7QibFvkbEZQkZEblvCaQl7ChmfAAQmeAAl7ihg");
	this.shape_4.setTransform(-2461.9,-3449,0.555,0.55,0,0,0,-0.1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3DB6F9").s().p("AsZdXQluiakakbQkbkaibluQigl7AAmfQAAmeCgl7QCbluEbkaQEakbFuibQF7igGeAAQGfAAF7CgQFvCbEZEbQEbEaCaFuQChF7AAGeQAAGfihF7QiaFukbEaQkZEblvCaQl7ChmfAAQmeAAl7ihg");
	this.shape_5.setTransform(-3687.3,-2181.8,0.555,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3DB6F9").s().p("AsZdYQlvibkakbQkakaialuQihl7AAmfQAAmeChl7QCalvEakZQEakbFvibQF7igGeAAQGfAAF7CgQFuCbEbEbQEaEZCbFvQCgF7AAGeQAAGfigF7QibFukaEaQkbEbluCbQl7CgmfAAQmeAAl7igg");
	this.shape_6.setTransform(3660.8,2632.8,0.555,0.55,0,0,0,0.3,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3DB6F9").s().p("AsZdXQluiakbkbQkakaialuQihl7AAmfQAAmeChl7QCaluEakbQEbkaFuiaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEbCaFuQChF7AAGeQAAGfihF7QiaFukaEaQkbEbluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_7.setTransform(448.5,299,0.555,0.55,0,0,0,0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3DB6F9").s().p("AsZdXQlviakakaQkakbialuQihl7AAmfQAAmeChl7QCalvEakaQEakaFviaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEaCaFvQChF7AAGeQAAGfihF7QiaFukaEbQkbEaluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_8.setTransform(1773.8,3482,0.555,0.55,0,0,0,0.2,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#34C12D").ss(20).p("EDB5DbhMgrmggqQR8qHSZrEUAkzgWHACWgEsMh4FgqlMgrwAbgMhSfglgMh5QgZAMgwIgaQMAAAglfIxWAAMARWhYwI/4XwQhhjjhTkwQilpfBLl+QAojOFQkxQDojSH0loQJfm2CWh3QFyknBVixQCjlRD1xHQBMlWBMl5IA8k1MAP8giYIg83w");
	this.shape_9.setTransform(1630.6,1936.6,1.11,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#34C12D").ss(20).p("ALTkII2lIR");
	this.shape_10.setTransform(238.9,-311.3,1.11,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#34C12D").ss(20).p("ABQHPIifud");
	this.shape_11.setTransform(46.6,-420.4,1.11,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#34C12D").ss(20).p("ABkm8IjHN5");
	this.shape_12.setTransform(-297.5,-389.4,1.11,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#34C12D").ss(20).p("AjYE0IGxpn");
	this.shape_13.setTransform(-490.9,-357.7,1.11,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#34C12D").ss(20).p("AH7vyInCHMIAAElIipKGIl8KA");
	this.shape_14.setTransform(-937.6,-562.6,1.11,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#34C12D").ss(20).p("AAAl/IAAL/");
	this.shape_15.setTransform(-1562.8,-918.5,1.11,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#34C12D").ss(20).p("AhUnLICpOX");
	this.shape_16.setTransform(-1642.1,-957.5,1.11,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#34C12D").ss(20).p("AmjJRINHyh");
	this.shape_17.setTransform(-1880.3,-961.1,1.11,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#34C12D").ss(20).p("AlKHnIKVvN");
	this.shape_18.setTransform(-2402.9,-1312.4,1.11,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#34C12D").ss(20).p("AjWE+IGtp7");
	this.shape_19.setTransform(-2651.1,-1500.7,1.11,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#34C12D").ss(20).p("AiPDfIEfm9");
	this.shape_20.setTransform(-2929.8,-1778.4,1.11,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#34C12D").ss(20).p("AH/HcIv9u3");
	this.shape_21.setTransform(-3145.7,-2494.8,1.11,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#34C12D").ss(20).p("AAAqAIAAUB");
	this.shape_22.setTransform(-2636.1,-2903.2,1.11,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#34C12D").ss(20).p("ABlImIjJxM");
	this.shape_23.setTransform(-2301,-3007.9,1.11,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#34C12D").ss(20).p("AJxFAIzhp/");
	this.shape_24.setTransform(-2109.5,-3108,1.11,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#34C12D").ss(20).p("A27PgIDqgkQEdgwD+g7QMqi8C7joQC8jnHRpoQDok1DDkH");
	this.shape_25.setTransform(-1404.5,-3485.2,1.11,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#34C12D").ss(20).p("AnQmoIOhNR");
	this.shape_26.setTransform(-1552.3,-3434.1,1.11,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#34C12D").ss(20).p("AkaJjII1zF");
	this.shape_27.setTransform(-1469.2,-3291.7,1.11,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#34C12D").ss(20).p("AH+JjIv7zF");
	this.shape_28.setTransform(-858,-3242.2,1.11,1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#34C12D").ss(20).p("AFDKAIqF0A");
	this.shape_29.setTransform(-387.7,-3367.6,1.11,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#34C12D").ss(20).p("AAAJaIAAyz");
	this.shape_30.setTransform(-125.4,-3461.3,1.11,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#34C12D").ss(20).p("Ah6GHID1sN");
	this.shape_31.setTransform(237.9,-3438.1,1.11,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#34C12D").ss(20).p("AmRIYIMjwv");
	this.shape_32.setTransform(784.9,-3300,1.11,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#34C12D").ss(20).p("AiiHEIFFuH");
	this.shape_33.setTransform(1134.7,-3224.8,1.11,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#34C12D").ss(20).p("AobCvIQ3ld");
	this.shape_34.setTransform(1616.1,-2755.4,1.11,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#34C12D").ss(20).p("AEYBQIovif");
	this.shape_35.setTransform(3769.4,3138.8,1.11,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#34C12D").ss(20).p("AEJiQIoREh");
	this.shape_36.setTransform(2592.3,-3083.2,1.11,1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#34C12D").ss(20).p("AOZNcQhpj/iKkHQkToMiiglQijgmmUhBIl0g5IO/nq");
	this.shape_37.setTransform(3398.6,-2528.2,1.11,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#34C12D").ss(20).p("AKZj9I0xH6");
	this.shape_38.setTransform(2621.2,-3310,1.11,1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#34C12D").ss(20).p("ABVt+Iipb9");
	this.shape_39.setTransform(1948.5,-3395.6,1.11,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#34C12D").ss(20).p("ADpAjInRhF");
	this.shape_40.setTransform(2006.5,-2848.9,1.11,1.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#34C12D").ss(20).p("AGCFAIsDp/");
	this.shape_41.setTransform(1853,-2552.5,1.11,1.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#34C12D").ss(20).p("Aixi1IFjFr");
	this.shape_42.setTransform(1489.3,-2048.4,1.11,1.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#34C12D").ss(20).p("AJdCKIy5kU");
	this.shape_43.setTransform(1555.6,-1940.7,1.11,1.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#34C12D").ss(20).p("AmjAAINHAA");
	this.shape_44.setTransform(1394.1,-1782.5,1.11,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#34C12D").ss(20).p("AMcDnIuVkqIqqih");
	this.shape_45.setTransform(1410.1,-1609.9,1.11,1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#34C12D").ss(20,0,1).p("ALBkHI0niGIKTNB");
	this.shape_46.setTransform(1375.8,-1234.3,1.11,1.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#34C12D").ss(20).p("AJngsIzNBZ");
	this.shape_47.setTransform(1268.1,-860.2,1.11,1.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#34C12D").ss(20).p("AI/HIIx9uP");
	this.shape_48.setTransform(1288.1,-96.9,1.11,1.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#34C12D").ss(20).p("AFPLkIqd3H");
	this.shape_49.setTransform(1237,-26.9,1.11,1.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#34C12D").ss(20).p("AuHR2IbBxgIqKyv");
	this.shape_50.setTransform(1108.2,-110.7,1.11,1.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#34C12D").ss(20).p("EFD0B2bIpsTEQpBAPqYAXQ0vAtmwAlQjqAVklhkQjQhHlNisQnGjqhegrQk2iOjqgnQjzgoiUhkQhhhBh6iXQiNiwhchPQitiWkIhtUgHrgDKghfACdQoVAnwrBjQtcBPjiAIUgIRAAShTQglmUgRSgH0gqAgTRQ86tRkChkUgJFgDhhOogzFQ4lv+8lyzI3rvoQmGngmkocQtIw4iWksQiWksvPoDQkwihlfijIkiiDIg4BeQhCByg2BpQisFPASBwQATBxojAtQisAOjPAFIitADI3m9i");
	this.shape_51.setTransform(-1234.8,-1159.8,1.11,1.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#34C12D").ss(20).p("ACoCyIlPlj");
	this.shape_52.setTransform(929.2,-88.4,1.11,1.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#34C12D").ss(20).p("AM1IyIvdoZIp2pa");
	this.shape_53.setTransform(701.4,78.4,1.11,1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#34C12D").ss(20).p("ABfqmQiwTwgMAH");
	this.shape_54.setTransform(551.1,144.6,1.11,1.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#34C12D").ss(20).p("AlfjGIK/GN");
	this.shape_55.setTransform(388.7,606.5,1.11,1.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#34C12D").ss(20).p("AmrhwINXDh");
	this.shape_56.setTransform(301.7,790.6,1.11,1.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#34C12D").ss(20).p("AGFBrIsKjV");
	this.shape_57.setTransform(318.6,1085.4,1.11,1.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#34C12D").ss(20).p("AhQjQIChGh");
	this.shape_58.setTransform(184.4,1120.3,1.11,1.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#34C12D").ss(20).p("AFjFUIrFqn");
	this.shape_59.setTransform(214.8,1202.8,1.11,1.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#34C12D").ss(20).p("AiaEiIE1pD");
	this.shape_60.setTransform(175.9,1208.3,1.11,1.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#34C12D").ss(20).p("AlWhjIKtDH");
	this.shape_61.setTransform(93.5,1176.4,1.11,1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#34C12D").ss(20).p("AlSDWIGjmPIFHAA");
	this.shape_62.setTransform(-22.3,1328.9,1.11,1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#34C12D").ss(20).p("AB4ExIjvph");
	this.shape_63.setTransform(68.8,1494.9,1.11,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#34C12D").ss(20).p("AJuhyIzbDl");
	this.shape_64.setTransform(310.6,1483.9,1.11,1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#34C12D").ss(20).p("AKNiCI0ZEF");
	this.shape_65.setTransform(289.4,1606.7,1.11,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#34C12D").ss(20).p("AIlgrIxJBX");
	this.shape_66.setTransform(254.3,1735.7,1.11,1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#34C12D").ss(20).p("AnGDNIONmZ");
	this.shape_67.setTransform(108.2,1941.5,1.11,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#34C12D").ss(20).p("AIXgsIwtBZ");
	this.shape_68.setTransform(340.2,1914,1.11,1.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#34C12D").ss(20).p("AG7C0It1ln");
	this.shape_69.setTransform(330.5,2082.8,1.11,1.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#34C12D").ss(20).p("AXRMwIgEzyMgkFgEEIqyL6");
	this.shape_70.setTransform(744.2,2337,1.11,1.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#34C12D").ss(20).p("AkGlYIHfE2IABHO");
	this.shape_71.setTransform(1330.1,2470.5,1.11,1.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#34C12D").ss(20).p("AA/oUIh9Qp");
	this.shape_72.setTransform(1109.7,2407.6,1.11,1.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#34C12D").ss(20).p("AhEIkICKxH");
	this.shape_73.setTransform(560.5,2398.8,1.11,1.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#34C12D").ss(20).p("AjwF2IHhrq");
	this.shape_74.setTransform(1327.6,2558.7,1.11,1.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#34C12D").ss(20).p("AmoGqINRtT");
	this.shape_75.setTransform(1692.1,2705.8,1.11,1.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#34C12D").ss(20).p("AivJ3IFfzu");
	this.shape_76.setTransform(1773.3,2752.5,1.11,1.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#34C12D").ss(20).p("AhFmFICLML");
	this.shape_77.setTransform(1956.8,2717.5,1.11,1.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#34C12D").ss(20).p("AXo94In0OYIE7IeQFUI0B9BxQDbDFCpECQDoFjgoD6QglDthBC5QghBdgZAtQpsiRqMilQ0YlKijhkQiihkt1n+ItVnq");
	this.shape_78.setTransform(3492.8,2926.9,1.11,1.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#34C12D").ss(20).p("AmBpDIMDSH");
	this.shape_79.setTransform(2309.4,2569,1.11,1.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#34C12D").ss(20).p("AlOJdIKdy5");
	this.shape_80.setTransform(2599,3463.8,1.11,1.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#34C12D").ss(20).p("AOnlnI9NLP");
	this.shape_81.setTransform(2575.7,3108,1.11,1.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#34C12D").ss(20).p("AjhN8IHE73");
	this.shape_82.setTransform(2393.8,3265,1.11,1.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#34C12D").ss(20).p("AAAoWIAAQt");
	this.shape_83.setTransform(2074.5,3237.2,1.11,1.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AimB1IDQk8IB9BTIjQE8g");
	this.shape_84.setTransform(3653.7,2628.2,1.11,1.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("EH5wFR9IDSk9ID7CmIjSE9gEHx7FMxIDRk9ID7CmIjSE9gEHqFFHmIDSk9ID7ClIjSE9gEHiQFCaIDRk9ID7CmIjSE9gEHaaE9OIDSk9ID6CmIjRE9gEHSlE4DIDRk9ID7CmIjSE9gEHKvEy3IDSk9ID6CmIjRE9gEHC6EtsIDRk9ID7ClIjSE9gEG7EEogIDSk9ID6CmIjRE9gEGzPEjUIDRk9ID7CmIjSE9gEGrZEeJIDSk9ID6CmIjRE9gEGjjEY9IDSk9ID7CmIjSE9gEGbuETyIDSk9ID6ClIjRE9gEGT4EOmIDSk9ID7CmIjSE9gEGMDEJaIDRk9ID7CmIjRE9gEGENEEPIDSk9ID7CmIjSE9gEF8YD/DIDRk9ID7CmIjRE9gEF0iD54IDSk9ID7ClIjSE9gEFstD0sIDRk9ID7CmIjRE9gEFk3DvgIDSk9ID7CmIjSE9gEFdCDqVIDRk9ID7CmIjRE9gEFVMDlJIDSk9ID7CmIjSE9gEFNXDf+IDRk9ID7ClIjSE9gEFFhDayIDSk9ID7CmIjSE9gEE9sDVmIDRk8ID7ClIjSE9gEE12DQbIDSk9ID6CmIjRE9gEEuBDLPIDRk9ID7CmIjSE9gEEmLDGEIDSk9ID6CmIjRE8gEEeWDA4IDRk9ID7CmIjSE9gEEWgC7tIDSk9ID6ClIjRE9gEEOrC2hIDRk9ID7CmIjSE9gEEG1CxVIDSk9ID6CmIjRE9gED/ACsKIDRk9ID7CmIjSE9gED3KCm+IDSk9ID6CmIjRE9gEDvUChzIDSk9ID7ClIjSE9gEDnfCcnIDSk9ID6CmIjRE9gEDfpCXbIDSk9ID7CmIjSE9gEDX0CSQIDRk9ID7CmIjRE9gEDP+CNEIDSk9ID7CmIjSE9gEDIJCH5IDRk9ID7ClIjRE9gEDATCCtIDSk9ID7CmIjSE9gEC4eB9hIDRk9ID7CmIjRE9gECwoB4WIDSk9ID7CmIjSE9gECozBzKIDRk9ID7CmIjRE9gECg9Bt/IDSk9ID7ClIjSE9gECZIBozIDRk9ID7CmIjSE9gECRSBjnIDSk9ID7CmIjSE9gECJdBecIDRk9ID7CmIjSE9gECBnBZQIDSk9ID7CmIjSE9gEB5yBUFIDRk9ID7ClIjSE9gEBx8BO5IDSk9ID6CmIjRE9gEBqHBJtIDRk9ID7CmIjSE9gEBiRBEiIDSk9ID6CmIjRE9gEBacA/WIDRk9ID7CmIjSE9gEBSmA6LIDSk9ID6ClIjRE9gEBKxA0/IDRk9ID7CmIjSE9gEBC7AvzIDSk9ID6CmIjRE9gEA7FAqoIDSk9ID7CmIjSE9gEAzQAlcIDSk9ID6CmIjRE9gEAraAgRIDSk9ID7ClIjSE9gEAjlAbFIDRk9ID7CmIjRE9gAbvV5IDSk9ID7CmIjSE9gAT6QuIDRk9ID7CmIjRE9gAMELiIDSk9ID7CmIjSE9gAEPGXIDRk9ID7ClIjRE9gAjmBLIDSk8ID6CmIjSE8gArbkAIDRk9ID7CmIjRE9gAzRpLIDSk9ID7CmIjSE9gA7GuXIDRk9ID7CmIjSE9gEgi8gTiIDSk9ID7CmIjSE8gEgqxgYuIDRk9ID7CmIjSE9gEgymgd5IDRk9ID7ClIjSE9gEg6cgjFIDSk9ID6CmIjRE9gEhCRgoRIDRk9ID7CmIjSE9gEhKHgtcIDSk9ID6CmIjRE9gEhR8gyoIDRk9ID7CmIjSE9gEhZyg3zIDSk9ID6ClIjRE9gEhhng8/IDRk9ID7CmIjSE9gEhpdhCLIDSk9ID6CmIjRE9gEhxShHWIDRk9ID7CmIjSE9gEh5IhMiIDSk9ID6CmIjRE9gEiA+hRtIDSk9ID7ClIjSE9gEiIzhW5IDSk9ID6CmIjRE9gEiQphcFIDSk9ID7CmIjSE9gEiYehhQIDSk9ID6CmIjRE9gEigUhmcIDSk9ID7CmIjSE9gEioJhrnIDRk9ID7ClIjRE9gEiv/hwzIDSk9ID7CmIjSE9gEi30h1/IDRk9ID7CmIjRE9gEi/qh7KIDSk9ID7CmIjSE9gEjHfiAWIDRk9ID7CmIjRE9gEjPViFhIDSk9ID7ClIjSE9gEjXKiKtIDRk9ID7CmIjRE9gEjfAiP5IDSk8ID7ClIjSE9gEjm1iVEIDRk9ID7CmIjRE9gEjuriaPIDSk9ID7CmIjSE9gEj2gifbIDRk9ID7CmIjSE9gEj+WikmIDSk9ID7ClIjSE9gEkGLipyIDRk9ID7CmIjSE9gEkOBiu+IDSk9ID7CmIjSE9gEkV2i0JIDRk9ID7CmIjSE9gEkdsi5VIDSk9ID6CmIjRE9gEklhi+gIDRk9ID7ClIjSE9gEktXjDsIDSk9ID6CmIjRE9gEk1MjI4IDRk9ID7CmIjSE9gEk9CjODIDSk9ID6CmIjRE9gElE3jTPIDRk9ID7CmIjSE9gElMtjYaIDSk9ID6ClIjRE9gElUijdmIDRk9ID7CmIjSE9gElcYjiyIDSk9ID6CmIjRE9gElkOjn9IDSk9ID7CmIjSE9gElsDjtJIDSk9ID6CmIjRE9gElz5jyUIDSk9ID7CmIjSE8gEl7uj3gIDRk9ID7CmIjRE9gEmDkj8rIDSk9ID7ClIjSE9gEmLZkB3IDRk9ID7CmIjRE9gEmTPkHDIDSk9ID7CmIjSE9gEmbEkMOIDRk9ID7CmIjRE9gEmi6kRaIDSk9ID7CmIjSE9gEmqvkWlIDRk9ID7ClIjRE9gEmylkbxIDSk9ID7CmIjSE9gEm6akg9IDRk9ID7CmIjRE9gEnCQkmIIDSk9ID7CmIjSE9gEnKFkrUIDRk9ID7CmIjSE9gEnR7kwfIDSk9ID7ClIjSE9gEnZwk1rIDRk9ID7CmIjSE9gEnhmk63IDSk9ID7CmIjSE9gEnpblACIDRk9ID7CmIjSE9gEnxRlFOIDSk9ID6CmIjRE9gEn5GlKZIDRk9ID7ClIjSE9gEoA8lPlIDSk9ID6CmIjRE9g");
	this.shape_85.setTransform(-13.3,225.5,1.11,1.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AimB1IDQk8IB9BTIjQE8g");
	this.shape_86.setTransform(-3680.3,-2177.2,1.11,1.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#534741").ss(38).p("EoFLlV8MQKXKr5");
	this.shape_87.setTransform(-13.3,225.5,1.11,1.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#34C12D").ss(20).p("EhxgBNqQEOk2D/ltQH+rahLkTQhLkTAjqKQALjLAVjZIASivIBUACQBpgCBlgPQFFgyCvivQAXgXDQjcQCbilBthhQFLknD+AAQD6AAJsEsQE2CWEECWQAFg/AShfQAljABBilQDSoSGphLQDNgkGQgJQDjgFHtgKQGwgSEog5QF6hKD4iWQHCkTXI2RQLkrJKKqRMA3Agbg");
	this.shape_88.setTransform(-2880.9,-2648.1,1.11,1.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#34C12D").ss(20).p("Ekz9gdOILQkiIFoLaIE9gIQF+gHFLAKQQkAeCWCvQCWCvAoFeQAUCvgKCMICchfQDKh4Dfh9QLMmSKmk4QO2m0LhjCQOajxIYCbMBiIAKKIN9lWQQ6mZOslOUAvBgQuAHbABLQFyA6K6BhQNrB5MJBeUAimAELAGCgBNQDMgpNhEhQJ3DTR+G+QJxDyQ6GmQMLEoBAgZQBignE4gxQF8g7GBgNQHsgRGCBAQHWBPEVDCQERC+C4F7QCIEYB1HMQAZBfBCEZQA2DjAiB7QBoFzB/CZQD6EsIwLkQEYFyDmE2MAhxAFd");
	this.shape_89.setTransform(-274.2,-3132,1.11,1.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#34C12D").ss(20).p("Eg8PAZfQA5AAKbmkIKQmkIHCwZMA5LgVGMAY2Al9IKA2V");
	this.shape_90.setTransform(2290.5,3324.6,1.11,1.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#34C12D").ss(20).p("EhfRg3tIQ4jSINmRWILuI6IAASwIHSA1QI8BIISBhQafEzJ8GuQJ+GwVLRxQKlI5ImHiIEiQuIZUpYIGGx0");
	this.shape_91.setTransform(2992.2,-3000.6,1.11,1.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#34C12D").ss(20).p("Eh8HEGeQJYpuKFpvQUKzdDhAAQCBAAClg7QCUg1CXhaQCOhWBlhbQBmheAWhDQAQguATiHQAWibAShMQBGkmC5hKQD1hiA7gaQDbhfCchgQHDkVgUk0IEBA5QE2BKEOBTQNeEGCDD0INmzOQhJkKhpmkQjStGifr8UgH+gmNAC7gMTQCLpGHT8tUAIkghvAIGge0UAXOhYdADngFIQDhk+H+t9QD/m+DSl/IGboFQHrp2GTozQUK8IhLnCQhLnCkduEQhZkZhjkkIhSjtIC03cMAkGgKU");
	this.shape_92.setTransform(1305.7,-1521.6,1.11,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3800.5,-3604.1,7611,7198.3);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3DB6F9").s().p("AsZdXQluiakbkbQkakaialuQihl7AAmfQAAmeChl7QCaluEakbQEbkaFuiaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEbCaFuQChF7AAGeQAAGfihF7QiaFukaEaQkbEbluCaQl7ChmfAAQmeAAl7ihg");
	this.shape.setTransform(-140.7,1299.7,0.555,0.55,0,0,0,0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DB6F9").s().p("AsZdXQlviakakaQkakbibluQigl7AAmfQAAmeCgl7QCblvEakaQEakaFviaQF7ihGeAAQGfAAF7ChQFuCaEaEaQEbEaCbFvQCgF7AAGeQAAGfigF7QibFukbEbQkaEaluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_1.setTransform(3008,3482,0.555,0.55,0,0,0,0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3DB6F9").s().p("AsZdYQlvibkakaQkakaiblvQigl7AAmfQAAmeCgl7QCbluEakbQEakaFvibQF7igGeAAQGfAAF7CgQFuCbEaEaQEbEbCbFuQCgF7AAGeQAAGfigF7QibFvkbEaQkaEaluCbQl7CgmfAAQmeAAl7igg");
	this.shape_2.setTransform(3624.1,-2862.7,0.555,0.55,0,0,0,0.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3DB6F9").s().p("AsZdYQluibkbkaQkakaiblvQigl7AAmfQAAmeCgl7QCbluEakbQEbkaFuibQF7igGeAAQGfAAF7CgQFuCbEaEaQEbEbCaFuQChF7AAGeQAAGfihF7QiaFvkbEaQkaEaluCbQl7CgmfAAQmeAAl7igg");
	this.shape_3.setTransform(2258.8,-3369.8,0.555,0.55,0,0,0,0.2,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3DB6F9").s().p("AsZdXQluiakakbQkbkZiblvQigl7AAmfQAAmeCgl7QCbluEbkaQEakbFuibQF7igGeAAQGfAAF7CgQFvCbEZEbQEbEaCbFuQCgF7AAGeQAAGfigF7QibFvkbEZQkZEblvCaQl7ChmfAAQmeAAl7ihg");
	this.shape_4.setTransform(-2461.9,-3449,0.555,0.55,0,0,0,-0.1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3DB6F9").s().p("AsZdXQluiakakbQkbkaibluQigl7AAmfQAAmeCgl7QCbluEbkaQEakbFuibQF7igGeAAQGfAAF7CgQFvCbEZEbQEbEaCaFuQChF7AAGeQAAGfihF7QiaFukbEaQkZEblvCaQl7ChmfAAQmeAAl7ihg");
	this.shape_5.setTransform(-3687.3,-2181.8,0.555,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3DB6F9").s().p("AsZdYQlvibkakbQkakaialuQihl7AAmfQAAmeChl7QCalvEakZQEakbFvibQF7igGeAAQGfAAF7CgQFuCbEbEbQEaEZCbFvQCgF7AAGeQAAGfigF7QibFukaEaQkbEbluCbQl7CgmfAAQmeAAl7igg");
	this.shape_6.setTransform(3660.8,2632.8,0.555,0.55,0,0,0,0.3,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3DB6F9").s().p("AsZdXQluiakbkbQkakaialuQihl7AAmfQAAmeChl7QCaluEakbQEbkaFuiaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEbCaFuQChF7AAGeQAAGfihF7QiaFukaEaQkbEbluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_7.setTransform(448.5,299,0.555,0.55,0,0,0,0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3DB6F9").s().p("AsZdXQlviakakaQkakbialuQihl7AAmfQAAmeChl7QCalvEakaQEakaFviaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEaCaFvQChF7AAGeQAAGfihF7QiaFukaEbQkbEaluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_8.setTransform(1773.8,3482,0.555,0.55,0,0,0,0.2,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#34C12D").ss(20).p("EDB5DbhMgrmggqQR8qHSZrEUAkzgWHACWgEsMh4FgqlMgrwAbgMhSfglgMh5QgZAMgwIgaQMAAAglfIxWAAMARWhYwI/4XwQhhjjhTkwQilpfBLl+QAojOFQkxQDojSH0loQJfm2CWh3QFyknBVixQCjlRD1xHQBMlWBMl5IA8k1MAP8giYIg83w");
	this.shape_9.setTransform(1630.6,1936.6,1.11,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#34C12D").ss(20).p("ALTkII2lIR");
	this.shape_10.setTransform(238.9,-311.3,1.11,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#34C12D").ss(20).p("ABQHPIifud");
	this.shape_11.setTransform(46.6,-420.4,1.11,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#34C12D").ss(20).p("ABkm8IjHN5");
	this.shape_12.setTransform(-297.5,-389.4,1.11,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#34C12D").ss(20).p("AjYE0IGxpn");
	this.shape_13.setTransform(-490.9,-357.7,1.11,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#34C12D").ss(20).p("AH7vyInCHMIAAElIipKGIl8KA");
	this.shape_14.setTransform(-937.6,-562.6,1.11,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#34C12D").ss(20).p("AAAl/IAAL/");
	this.shape_15.setTransform(-1562.8,-918.5,1.11,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#34C12D").ss(20).p("AhUnLICpOX");
	this.shape_16.setTransform(-1642.1,-957.5,1.11,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#34C12D").ss(20).p("AmjJRINHyh");
	this.shape_17.setTransform(-1880.3,-961.1,1.11,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#34C12D").ss(20).p("AlKHnIKVvN");
	this.shape_18.setTransform(-2402.9,-1312.4,1.11,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#34C12D").ss(20).p("AjWE+IGtp7");
	this.shape_19.setTransform(-2651.1,-1500.7,1.11,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#34C12D").ss(20).p("AiPDfIEfm9");
	this.shape_20.setTransform(-2929.8,-1778.4,1.11,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#34C12D").ss(20).p("AH/HcIv9u3");
	this.shape_21.setTransform(-3145.7,-2494.8,1.11,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#34C12D").ss(20).p("AAAqAIAAUB");
	this.shape_22.setTransform(-2636.1,-2903.2,1.11,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#34C12D").ss(20).p("ABlImIjJxM");
	this.shape_23.setTransform(-2301,-3007.9,1.11,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#34C12D").ss(20).p("AJxFAIzhp/");
	this.shape_24.setTransform(-2109.5,-3108,1.11,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#34C12D").ss(20).p("A27PgIDqgkQEdgwD+g7QMqi8C7joQC8jnHRpoQDok1DDkH");
	this.shape_25.setTransform(-1404.5,-3485.2,1.11,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#34C12D").ss(20).p("AnQmoIOhNR");
	this.shape_26.setTransform(-1552.3,-3434.1,1.11,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#34C12D").ss(20).p("AkaJjII1zF");
	this.shape_27.setTransform(-1469.2,-3291.7,1.11,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#34C12D").ss(20).p("AH+JjIv7zF");
	this.shape_28.setTransform(-858,-3242.2,1.11,1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#34C12D").ss(20).p("AFDKAIqF0A");
	this.shape_29.setTransform(-387.7,-3367.6,1.11,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#34C12D").ss(20).p("AAAJaIAAyz");
	this.shape_30.setTransform(-125.4,-3461.3,1.11,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#34C12D").ss(20).p("Ah6GHID1sN");
	this.shape_31.setTransform(237.9,-3438.1,1.11,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#34C12D").ss(20).p("AmRIYIMjwv");
	this.shape_32.setTransform(784.9,-3300,1.11,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#34C12D").ss(20).p("AiiHEIFFuH");
	this.shape_33.setTransform(1134.7,-3224.8,1.11,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#34C12D").ss(20).p("AobCvIQ3ld");
	this.shape_34.setTransform(1616.1,-2755.4,1.11,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#34C12D").ss(20).p("AEYBQIovif");
	this.shape_35.setTransform(3769.4,3138.8,1.11,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#34C12D").ss(20).p("AEJiQIoREh");
	this.shape_36.setTransform(2592.3,-3083.2,1.11,1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#34C12D").ss(20).p("AOZNcQhpj/iKkHQkToMiiglQijgmmUhBIl0g5IO/nq");
	this.shape_37.setTransform(3398.6,-2528.2,1.11,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#34C12D").ss(20).p("AKZj9I0xH6");
	this.shape_38.setTransform(2621.2,-3310,1.11,1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#34C12D").ss(20).p("ABVt+Iipb9");
	this.shape_39.setTransform(1948.5,-3395.6,1.11,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#34C12D").ss(20).p("ADpAjInRhF");
	this.shape_40.setTransform(2006.5,-2848.9,1.11,1.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#34C12D").ss(20).p("AGCFAIsDp/");
	this.shape_41.setTransform(1853,-2552.5,1.11,1.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#34C12D").ss(20).p("Aixi1IFjFr");
	this.shape_42.setTransform(1489.3,-2048.4,1.11,1.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#34C12D").ss(20).p("AJdCKIy5kU");
	this.shape_43.setTransform(1555.6,-1940.7,1.11,1.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#34C12D").ss(20).p("AmjAAINHAA");
	this.shape_44.setTransform(1394.1,-1782.5,1.11,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#34C12D").ss(20).p("AMcDnIuVkqIqqih");
	this.shape_45.setTransform(1410.1,-1609.9,1.11,1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#34C12D").ss(20,0,1).p("ALBkHI0niGIKTNB");
	this.shape_46.setTransform(1375.8,-1234.3,1.11,1.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#34C12D").ss(20).p("AJngsIzNBZ");
	this.shape_47.setTransform(1268.1,-860.2,1.11,1.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#34C12D").ss(20).p("AI/HIIx9uP");
	this.shape_48.setTransform(1288.1,-96.9,1.11,1.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#34C12D").ss(20).p("AFPLkIqd3H");
	this.shape_49.setTransform(1237,-26.9,1.11,1.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#34C12D").ss(20).p("AuHR2IbBxgIqKyv");
	this.shape_50.setTransform(1108.2,-110.7,1.11,1.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#34C12D").ss(20).p("EFD0B2bIpsTEQpBAPqYAXQ0vAtmwAlQjqAVklhkQjQhHlNisQnGjqhegrQk2iOjqgnQjzgoiUhkQhhhBh6iXQiNiwhchPQitiWkIhtUgHrgDKghfACdQoVAnwrBjQtcBPjiAIUgIRAAShTQglmUgRSgH0gqAgTRQ86tRkChkUgJFgDhhOogzFQ4lv+8lyzI3rvoQmGngmkocQtIw4iWksQiWksvPoDQkwihlfijIkiiDIg4BeQhCByg2BpQisFPASBwQATBxojAtQisAOjPAFIitADI3m9i");
	this.shape_51.setTransform(-1234.8,-1159.8,1.11,1.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#34C12D").ss(20).p("ACoCyIlPlj");
	this.shape_52.setTransform(929.2,-88.4,1.11,1.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#34C12D").ss(20).p("AM1IyIvdoZIp2pa");
	this.shape_53.setTransform(701.4,78.4,1.11,1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#34C12D").ss(20).p("ABfqmQiwTwgMAH");
	this.shape_54.setTransform(551.1,144.6,1.11,1.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#34C12D").ss(20).p("AlfjGIK/GN");
	this.shape_55.setTransform(388.7,606.5,1.11,1.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#34C12D").ss(20).p("AmrhwINXDh");
	this.shape_56.setTransform(301.7,790.6,1.11,1.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#34C12D").ss(20).p("AGFBrIsKjV");
	this.shape_57.setTransform(318.6,1085.4,1.11,1.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#34C12D").ss(20).p("AhQjQIChGh");
	this.shape_58.setTransform(184.4,1120.3,1.11,1.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#34C12D").ss(20).p("AFjFUIrFqn");
	this.shape_59.setTransform(214.8,1202.8,1.11,1.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#34C12D").ss(20).p("AiaEiIE1pD");
	this.shape_60.setTransform(175.9,1208.3,1.11,1.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#34C12D").ss(20).p("AlWhjIKtDH");
	this.shape_61.setTransform(93.5,1176.4,1.11,1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#34C12D").ss(20).p("AlSDWIGjmPIFHAA");
	this.shape_62.setTransform(-22.3,1328.9,1.11,1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#34C12D").ss(20).p("AB4ExIjvph");
	this.shape_63.setTransform(68.8,1494.9,1.11,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#34C12D").ss(20).p("AJuhyIzbDl");
	this.shape_64.setTransform(310.6,1483.9,1.11,1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#34C12D").ss(20).p("AKNiCI0ZEF");
	this.shape_65.setTransform(289.4,1606.7,1.11,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#34C12D").ss(20).p("AIlgrIxJBX");
	this.shape_66.setTransform(254.3,1735.7,1.11,1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#34C12D").ss(20).p("AnGDNIONmZ");
	this.shape_67.setTransform(108.2,1941.5,1.11,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#34C12D").ss(20).p("AIXgsIwtBZ");
	this.shape_68.setTransform(340.2,1914,1.11,1.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#34C12D").ss(20).p("AG7C0It1ln");
	this.shape_69.setTransform(330.5,2082.8,1.11,1.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#34C12D").ss(20).p("AXRMwIgEzyMgkFgEEIqyL6");
	this.shape_70.setTransform(744.2,2337,1.11,1.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#34C12D").ss(20).p("AkGlYIHfE2IABHO");
	this.shape_71.setTransform(1330.1,2470.5,1.11,1.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#34C12D").ss(20).p("AA/oUIh9Qp");
	this.shape_72.setTransform(1109.7,2407.6,1.11,1.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#34C12D").ss(20).p("AhEIkICKxH");
	this.shape_73.setTransform(560.5,2398.8,1.11,1.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#34C12D").ss(20).p("AjwF2IHhrq");
	this.shape_74.setTransform(1327.6,2558.7,1.11,1.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#34C12D").ss(20).p("AmoGqINRtT");
	this.shape_75.setTransform(1692.1,2705.8,1.11,1.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#34C12D").ss(20).p("AivJ3IFfzu");
	this.shape_76.setTransform(1773.3,2752.5,1.11,1.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#34C12D").ss(20).p("AhFmFICLML");
	this.shape_77.setTransform(1956.8,2717.5,1.11,1.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#34C12D").ss(20).p("AXo94In0OYIE7IeQFUI0B9BxQDbDFCpECQDoFjgoD6QglDthBC5QghBdgZAtQpsiRqMilQ0YlKijhkQiihkt1n+ItVnq");
	this.shape_78.setTransform(3492.8,2926.9,1.11,1.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#34C12D").ss(20).p("AmBpDIMDSH");
	this.shape_79.setTransform(2309.4,2569,1.11,1.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#34C12D").ss(20).p("AlOJdIKdy5");
	this.shape_80.setTransform(2599,3463.8,1.11,1.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#34C12D").ss(20).p("AOnlnI9NLP");
	this.shape_81.setTransform(2575.7,3108,1.11,1.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#34C12D").ss(20).p("AjhN8IHE73");
	this.shape_82.setTransform(2393.8,3265,1.11,1.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#34C12D").ss(20).p("AAAoWIAAQt");
	this.shape_83.setTransform(2074.5,3237.2,1.11,1.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AimB1IDQk8IB9BTIjQE8g");
	this.shape_84.setTransform(3653.7,2628.2,1.11,1.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("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");
	this.shape_85.setTransform(-13.3,225.5,1.11,1.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AimB1IDQk8IB9BTIjQE8g");
	this.shape_86.setTransform(-3680.3,-2177.2,1.11,1.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#534741").ss(38).p("EoFLlV8MQKXKr5");
	this.shape_87.setTransform(-13.3,225.5,1.11,1.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#34C12D").ss(20).p("EhxgBNqQEOk2D/ltQH+rahLkTQhLkTAjqKQALjLAVjZIASivIBUACQBpgCBlgPQFFgyCvivQAXgXDQjcQCbilBthhQFLknD+AAQD6AAJsEsQE2CWEECWQAFg/AShfQAljABBilQDSoSGphLQDNgkGQgJQDjgFHtgKQGwgSEog5QF6hKD4iWQHCkTXI2RQLkrJKKqRMA3Agbg");
	this.shape_88.setTransform(-2880.9,-2648.1,1.11,1.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#34C12D").ss(20).p("Ekz9gdOILQkiIFoLaIE9gIQF+gHFLAKQQkAeCWCvQCWCvAoFeQAUCvgKCMICchfQDKh4Dfh9QLMmSKmk4QO2m0LhjCQOajxIYCbMBiIAKKIN9lWQQ6mZOslOUAvBgQuAHbABLQFyA6K6BhQNrB5MJBeUAimAELAGCgBNQDMgpNhEhQJ3DTR+G+QJxDyQ6GmQMLEoBAgZQBignE4gxQF8g7GBgNQHsgRGCBAQHWBPEVDCQERC+C4F7QCIEYB1HMQAZBfBCEZQA2DjAiB7QBoFzB/CZQD6EsIwLkQEYFyDmE2MAhxAFd");
	this.shape_89.setTransform(-274.2,-3132,1.11,1.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#34C12D").ss(20).p("Eg8PAZfQA5AAKbmkIKQmkIHCwZMA5LgVGMAY2Al9IKA2V");
	this.shape_90.setTransform(2290.5,3324.6,1.11,1.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#34C12D").ss(20).p("EhfRg3tIQ4jSINmRWILuI6IAASwIHSA1QI8BIISBhQafEzJ8GuQJ+GwVLRxQKlI5ImHiIEiQuIZUpYIGGx0");
	this.shape_91.setTransform(2992.2,-3000.6,1.11,1.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#34C12D").ss(20).p("Eh8HEGeQJYpuKFpvQUKzdDhAAQCBAAClg7QCUg1CXhaQCOhWBlhbQBmheAWhDQAQguATiHQAWibAShMQBGkmC5hKQD1hiA7gaQDbhfCchgQHDkVgUk0IEBA5QE2BKEOBTQNeEGCDD0INmzOQhJkKhpmkQjStGifr8UgH+gmNAC7gMTQCLpGHT8tUAIkghvAIGge0UAXOhYdADngFIQDhk+H+t9QD/m+DSl/IGboFQHrp2GTozQUK8IhLnCQhLnCkduEQhZkZhjkkIhSjtIC03cMAkGgKU");
	this.shape_92.setTransform(1305.7,-1521.6,1.11,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3800.5,-3604.1,7611,7198.3);


(lib.scherm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EguaBOTMAAAiclMBc1AAAMAAACclgEgmPhGEQiTCTAADPMAAACBIQAADPCTCTQCSCSDPAAMBBzAAAQDPAACTiSQCSiTAAjPMAAAiBIQAAjPiSiTQiTiSjPAAMhBzAAAQjPAAiSCSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.scherm, new cjs.Rectangle(-297,-501.1,594.2,1002.3), null);


(lib.routeGeel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// routeGeel(1).ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBB03B").s().p("AkeEfQh2h3AAioQAAimB2h4QB3h2CnAAQCoAAB2B2QB3B4AACmQAACoh3B3Qh2B2ioAAQinAAh3h2g");
	this.shape.setTransform(568.5,-608.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBB03B").s().p("AkdEeQh3h2AAioQAAinB3h3QB3h2CmAAQCoAAB3B2QB2B3AACnQAACoh2B2Qh3B3ioAAQimAAh3h3g");
	this.shape_1.setTransform(-1340.5,-937.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBB03B").s().p("AkdEfQh3h3AAioQAAimB3h4QB2h2CnAAQCoAAB2B2QB3B4AACmQAACoh3B3Qh2B2ioAAQinAAh2h2g");
	this.shape_2.setTransform(-1738.5,-877.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBB03B").s().p("AkeEeQh2h3AAinQAAinB2h2QB3h3CnAAQCoAAB3B3QB2B2AACnQAACnh2B3Qh3B3ioAAQinAAh3h3g");
	this.shape_3.setTransform(1110.5,926.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBB03B").s().p("AkeEfQh2h3AAioQAAinB2h2QB3h3CnAAQCnAAB3B3QB3B2AACnQAACoh3B3Qh3B2inAAQinAAh3h2g");
	this.shape_4.setTransform(932.5,921.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBB03B").s().p("AkeEfQh2h3AAioQAAinB2h3QB3h2CnAAQCoAAB2B2QB3B3AACnQAACoh3B3Qh2B2ioAAQinAAh3h2g");
	this.shape_5.setTransform(1738.5,256.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#39B54A").s().p("EAmnB7MItfB+IwcjYIgNgHQzqqkhPhDUgBKgA/ghvgo9IsfC0I216/MAcCg4WIBmi0QBrjJAch3QAOg8AciqQAgjMAXhQQAghzA1gtQAfgbCCiwQB4ijCKjGILs3hIB5+gIN2wmIKgqzIAAmPIDIAAIAAHhIrWLqItFPqIh3eHIsEYSIgEAGQh2CshuCWQitDsg3AxQgTAYgXBxQgNA/gUB+QgcCygQBCQggCGhsDQQg8B1g8BhMgbBA2UIUTX9IMhi1IAnAwQMKOyJ3L4QMGOmBBBEQA1AmG+D1QFvDJGmDiIPcDNIOViHIDYC1QByhWDchaQAwk/AhhBQAUgnBhihIBriyIATgeINxkwIKhErIFKC0IhfCwIlHiyIpOkHIrjD/QikEMghBAQgLAagWB3QgTBtgTB+IgIA5Ig2AWQiBAyhvA8QhvA7gUAdIg8Blg");
	this.shape_6.setTransform(585.9,228.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhUA9IB4ieIAwAkIh4Cfg");
	this.shape_7.setTransform(1107.6,924);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("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");
	this.shape_8.setTransform(-115.5,-6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhUA+IB5ifIAvAlIh3Ceg");
	this.shape_9.setTransform(-1338.6,-936.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#42210B").s().p("EjAbiQXIB6ifMF+8EjOIh5Cgg");
	this.shape_10.setTransform(-115.5,-6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#39B54A").s().p("AktgZIBSi3IIJDqIhSC3g");
	this.shape_11.setTransform(-1380.1,-933.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#39B54A").s().p("Am+OuIKKulIqKu4IClhxILYQqIrYQXg");
	this.shape_12.setTransform(36.4,510.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#39B54A").s().p("AoJHiIN4xBICbB+It4RBg");
	this.shape_13.setTransform(162.6,512.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#39B54A").s().p("AqkHNITGwwICDCXIzGQwg");
	this.shape_14.setTransform(216.8,557.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#39B54A").s().p("AmqgHIMpi0IAsDDIspC0g");
	this.shape_15.setTransform(325.5,644.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#39B54A").s().p("AnVnQICgh4IMLQZIigB4g");
	this.shape_16.setTransform(246,724.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#39B54A").s().p("ArAMHITh6FICgB4IzhaFg");
	this.shape_17.setTransform(506.5,860.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#39B54A").s().p("AkjmeIC4hQIGPONIi4BQg");
	this.shape_18.setTransform(727,974.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#39B54A").s().p("Aq5E7IUJsfIBqCqI0JMfg");
	this.shape_19.setTransform(1540.5,385.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#39B54A").s().p("AofIgQAsiEA/iBQB3jzB5hVQA9gqBRgYQAugNBXgNQBOgMAYgKQASgIAEgTQAbhxBEihQAqhlAZguICzBYIg8CEQg/CVgXBiQgZBrheAvQg3AchzASQhEAJggAKQg2AOgkAZQhHAyhWCmQhGCHguCLg");
	this.shape_20.setTransform(1430.9,353.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#39B54A").s().p("AgRGXIAAi0IikmMIAjjtIDEAcIgaC3ICdF+IAADcg");
	this.shape_21.setTransform(1246.9,336.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#39B54A").s().p("AsvAtQg5hZg0huIgqhiIC6hJQBHC4BnCKQBsCRA+gTQDrhFRSluIA/C9QxVFxjwBFQgjALgjAAQi6AAiykZg");
	this.shape_22.setTransform(982.9,233.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#39B54A").s().p("An2EPINxq5IB8CcItxK6g");
	this.shape_23.setTransform(817.1,239.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#39B54A").s().p("ApQMjIOnuUImcrdICuhiIHnNiIwTP/g");
	this.shape_24.setTransform(555.2,179.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#39B54A").s().p("AmBFeIJisyIChB4IpiMxg");
	this.shape_25.setTransform(206.5,60.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#39B54A").s().p("Al8JnIJC0eIC3BRIpCUeg");
	this.shape_26.setTransform(28.9,11.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#39B54A").s().p("AjSK+IDUpHIjUtHIDCgyIDjODIjpKCg");
	this.shape_27.setTransform(58.4,-132.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#39B54A").s().p("AoqWUIN+xvImT8IIDCgsIGodmIu4S5g");
	this.shape_28.setTransform(-312.4,-255.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#39B54A").s().p("AlVucIDCgyIHpdrIjCAyg");
	this.shape_29.setTransform(-156.5,-231.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#39B54A").s().p("AmssjIC5hLIKgaTIi5BKg");
	this.shape_30.setTransform(-393.3,-366);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#39B54A").s().p("Al+IEIJMxkICxBdIpMRkg");
	this.shape_31.setTransform(-636.5,-382.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#39B54A").s().p("Al1FsIJGtJICkByIpFNJg");
	this.shape_32.setTransform(-786.9,-492.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#39B54A").s().p("AmZHpIKHw3ICsBmIqHQ3g");
	this.shape_33.setTransform(-973.6,-649.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#39B54A").s().p("Ai3BOIDPkTICgB5IjPESg");
	this.shape_34.setTransform(-1048.6,-785.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#39B54A").s().p("AiBFpQgijegHhtQgHh1BLjuQAnh8Ayh7IC5BLQg2CEgqCMQgzCsAEBIQAGBlAiDaQARBtAQBbIjEAjQgRhjgShxg");
	this.shape_35.setTransform(-1112.9,-908.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#39B54A").s().p("AhlF1QhXjogYiMQgRhgAOg8QB4oeADgTIDCArIh6IxQgFAbANBEQAWB2BLDKQBCCuBHCdIi1BTQhKijhEi1g");
	this.shape_36.setTransform(-1354.1,-770.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#39B54A").s().p("AmMIAIJrxfICuBgIprRfg");
	this.shape_37.setTransform(-1397,-962.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#39B54A").s().p("AnsHPIBRg6QBhhGBRhCQCVh5BEhWQAmgvAEgUQAbh5B+j1QBKiPBEhxICsBmQhMB/hKCRQhmDKgUBYQgOA/g4BKQhSBqixCSQiJBviHBbg");
	this.shape_38.setTransform(-1591.3,-838.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#39B54A").s().p("ED59BktQgEgcgNgfQgcg9gygSQhQgcmYh0QkMhMgbgLIg4gZQmYi6jehHQiKgsgrAGQg9AaiMA2QicA7iYA2QkZBjiFAfQhIARgogDQgxgFkVg8QkTg8krhHQoliDjThHQh4gogggfQhahblMkXQltkzhQglQh9gMyRBJQutA8xgBSIgXABIgWgIUgg1gNaggYgNVUgqbgRdgPdgGpQoujvgogjQhDg0zQsQQsQnz7axVQ/fz9prmLQp2mSgZgaQgtgsq3stQmqnxmSnYIxzsyQhDBzg9BdQiEDKhiBbQhFBAg9AQQiJAiifgFQjpgGgvhvQgZg1hxhYQiYh4isgpQhIgSh1gBQhBAAiXAHQjoAMhfgLQibgThEhVQg2hEjLi0QiTiCi5iZQhaBLhYAzQh8BHhjALQg0AGi7ghQlWg8s+i7Qo5iBo0iFIg6IPIjGgVIBRrxIBvAaQOkDeLqCiQMuCyBfgEQBHgIByhKQBcg9BKhGIBAg9IBEA4QCcCACiCLQEhD7BOBhQAHAIASAIQAgALA3AFQAyAFBMgCQArgBBmgFQCjgIBNABQCDABBbAWQDJAxC1CGQCWBwA5BoQAqAQBpgBQBygBBcgXQAFgBAKgHQATgNAYgZQBOhQBtioQBfiRBNiNIA2hkIU+PDIAHAKQWoajByB5QBLA3P4KGQJmGHYRPYQflT/LYHQQQAKLBRA/UACbABfAzQAVLUAj4AOzApyAREQKwg0Osg+QRNhJGXgNQDmgIAoAOQBgAgGPFPQExEACOCHQBgAzLuC0QLRCtB+ANQBGgCFwiBQFOh1CshKQBRgjC9A2QDmBBHVDWIAvAVQAWAID+BIQGqB6BLAbQBpAlA+BmQCuikCEiEQCZiYAagpQAVghgIhBQgFgygQgoIgwh0INMiNIAgDGIpjBmQAYCXhBBmQguBJkDD9QiZCTioCcIiQCGg");
	this.shape_39.setTransform(-4.1,-286);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Laag 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#39B54A").s().p("EgeZAnNMA4qgxSIAA9eICAhQIBgg8IApBCIgxAeIAAfsMg50AyTg");
	this.shape_40.setTransform(1300.5,671.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(1));

}).prototype = getMCSymbolPrototype(lib.routeGeel_1, new cjs.Rectangle(-1779,-1023,3558,2066), null);


(lib.knopPaars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2C2C").s().p("AAqA7QgmAAgdgEIgbgFIgCgDQgKgagEgVQgEgVAIgOQAKgRASgFQAHgCAMABQAJABAIAFQANAIAHAUIACAEQATApAVAdIAIAKg");
	this.shape.setTransform(-154.1,48.8,0.815,0.815);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C2C2C").s().p("AkQIUQgKgKgBgRQgBgbACgnQAChYAGgsQAFgjAMgjIAihVIAHgQIAkg1IAGgIIAfgmIAkgtQAMgQAHgHIDDipQANgJAOgRIAPgVIATggQARgeANgdQAMggAGgkQADgfgCgTQgCgPgFgOIgGgNQgGgKADgMQADgMAKgGQAHgEAIAAQASAAAIAPQAPAdAFATQAHAaACAYQABAngIAkQgIAlgZA3QgLAYgSAhIgPAWQgRAXgJAIIgRAQQgWARgYAVIhUBMIgqAmQgJAJgVAaIhGBbIAAAAQgUAdgHANIggBMIgJAdQgGAXgGAgQgDAcgEA1QgDA3gDAZQgCARgJAKQgMALgPAAQgOAAgMgLg");
	this.shape_1.setTransform(-160.6,-54,0.815,0.815);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2C2C").s().p("AkBL4QgMgFgFgKQgSgjgMgfQgRgugEgQQgPg5gFgeQgHgzAAgnIACgoQAAgNAGgwQAGgtAGgcQAPg/AZg9QAdhKAegzIAkg2IAsg8IAqgwIAngtQAggjA9g4IBhhTQAYgUAVgXQAQgQAXgbQAVgeAJgQQANgXANgcIAGgOQAJgYAFgcQACgZgDgeQgEgWgDgHIgEgGQgKgNAAgLQAAgOAKgLQAKgKAOAAQARAAAIAKIALAOQAFAGAEAMQAIATADAUQAKA0gEAjQgFAggDAKIgGAVIgMAgQgLAfgRAeQgJARgJAMQgGALgLANQgWAegWAWIguArIhfBVIgvAsQgcAZgRAVQhDBLgNAQQgoA2gYAnQgSAeggBIQgQAmgMAmQgMAqgHAyQgHA2gCAeQgDAvAFAmQAFAiATBUQAFATAIAbIAPAuQAEAOgHANQgIANgNAEIgJABQgHAAgHgDg");
	this.shape_2.setTransform(-148.7,-35.3,0.815,0.815);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C2C2C").s().p("AgHAZIgKgWQgDgDAAgGQAAgGADgEIACgCQAEgFAGgCIAFgBQAEAAAFADQAIAFABAIIADAKQgIAGgJAJIgKAMg");
	this.shape_3.setTransform(-103.4,-34.7,0.815,0.815);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2C2C").s().p("AgFATQgJgEgDgDIgEgGIALgKQAJgJAHgGIAAADQAHAAAFAFQAEAEAAAHQAAAIgEADQgJAHgDAAIgHACIgEgBg");
	this.shape_4.setTransform(-102.2,-33,0.815,0.815);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2C2C").s().p("AiFMtQgbgMgYgMQgigRgcgYQgagWgTgYQhAhQgNhoQgEghADgbIADggQAFg1AEgbQAFgjAJgeQAGgVAPgoQAUg2AKgWIAghCQASggAQgaQAKgOAegmQAegnAUgYQAUgWAcgaIBkhhIA4g0QANgMAkgnQArgsAsg3IAegpQAQgYAKgUIAIgSQANgiAFgUQAHgVADgaQADgkgCgcIgIgdIgDgHIgFgEIAAgBQgOgJgDgMQgEgPAIgNQAHgNAOgEIAKgBQALAAAHAFQAbATAIASQALAZADAUQAFAcAAAeQAAARgDAVIgHAsQgMAugMAgQgPAogUAeIgXAjQgpA8gyA4QgVAYgcAeIgvAuIhpBkIg0AzIglAsQgpA3gTAiQgTAkgZA3QgnBkgMBCIgJBxQgBAVACAgQAIApALAdQAQAiAVAeQAZAeAhAbIA5ApQAOAKADANQAFAPgJAPQgIANgPAEIgIACQgJAAgMgGg");
	this.shape_5.setTransform(-131.2,-30.6,0.815,0.815);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C2C2C").s().p("AgoCuQghgEgWgVQgMgMgKgPQgJgMgFgKQgNgdAAgZIAAgOIgCgRQgCgtAagsQAJgMAKgLIAFAGQADADAIADQAEACAJgCQACgBAJgGQAFgEAAgIQAAgHgFgFQgEgEgHAAIgBgDQAMgKAKgHIABAAIgDAXQgBAHAHAHQAFAFAJAAQAIAAAFgFQAFgFABgJIAGgsIAUgIQALgDAOgCIgDAeQgBAFAEADQAEADAEAAQADAAAFgDQACgCABgGIADgdQAMABAIADIAQAGQAHAEAHAGQANAKAKAVIAMAYIgDAaQgDAgABAUQABAUAIARIABABIgDAJQgFANgHAMIgHAMIgYAkQgPAUgHAGIgIAHQgXATgUAKQgOAHgIACIgTACIgQACIgLgBgAAHhcQgbAOgQAKQgVASgJALQgKAPgHAQIgFAQQgBANACASIABAZQAGAKAIALQALANAGAGIAIAFIAJACIAPAAIARgEQAPgJAJgHQAVgSAJgLIAOgUQAQgVAGgOQAFgLADgSQABgQgBgNIgDgJIgMgUIgIgMIgEgFIgDgBIgKgDIgPAAQgKACgUAHg");
	this.shape_6.setTransform(-95.6,-24.5,0.815,0.815);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C2C2C").s().p("AgQAaQgHgHACgHIACgVQAQgLAagLIgGArQgBAKgFAEQgGAGgHAAQgIAAgGgGg");
	this.shape_7.setTransform(-98.3,-35.2,0.815,0.815);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C2C2C").s().p("AjOQ5QgSgEgQgGQgjgOgQgJQgdgQglgdIg2gsQgigdgMgNQgUgWgQgWQgRgWgHgMIgWgkIgOgcQgRgigPgjQgQgogMggIgWhDIgSg+IgKgkIgHgnQgDgOgDgeIgDgdIgDhGQgDhhACgxQAHhzAchUIAWhDIA4iOQARgmAig9QAZgtAagmQAxhIAWgcIA/hOQAxg8Awg3IBmhkQAngkBDg2QAoggAWgPQAhgYAYgMQApgWAVgKQAqgSAdgHQAUgFA3gHQAbgDAOAAIATABQAnAFAeAIIAgAMIAEACIAGAEIAgATQANALAHAEIAPAJIAZASIAbARIAEADQgUAPgMAMQgHAGAAAKQAAAJAHAHQAHAHAJAAQAKAAAGgHIANgLQAJgHAJgFIARAQIAJANIAJAQIAGAJIADAIQAEAIAHAFIAHARIgugQQgFgBgGAAQgOAAgMAJQgLAJgEANQgEAMAEANIgGACIgQgoIgBgCIgbgcIgZghQgJgLgMgLQgUgOgSgLIgrgTQgggMgfgGQgfgDgyAGQgRADgVAGIghAMQgoATgZAOQgeARgmAcIgDACQg2Arg3AyQg0AtgtAwIg1A7Ih7CbIgrA8IgsBFIgqBLQgKATgSAoQgTAvgYBFIgTA9QgTA+gIA3QgIBFAFB6IAFBSQABATAFAkIANA6IATBBQAOAtAbBEIAgBHIAXAoIAkA2QAdAjAbAXIA0AnQASAOAMAHQAXAPAYALQAkAOAiAGIgDAQQgLgBgHADQgTAFgJAQQgJAPAEAVQAFAWAKAZIABAEg");
	this.shape_8.setTransform(-143.6,-35.8,0.815,0.815);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C2C2C").s().p("AgKgiQAEgPAOAAIAFAAQAIADAEAHQAEAHgCAIQgGAVgGAgQgaALgPAKQAIg5AIgbg");
	this.shape_9.setTransform(-97.7,-40.1,0.815,0.815);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C2C2C").s().p("AgBAgQgKgBgIgFQgIgHgCgJQgDgNAGgIIAEgGQAHgLAKgCIAHgBQAIAAAFADQAQALAAAQQAAAMgKALQgJAKgMAAIgBAAg");
	this.shape_10.setTransform(-96.5,-24,0.815,0.815);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C2C2C").s().p("AgcAaQgGgHAAgJQAAgKAGgFQAMgMAUgPIAEAFIAIAIIADAGIAQAQQgKAFgJAHIgMALQgGAHgJAAQgJAAgIgHg");
	this.shape_11.setTransform(-95.7,-112.6,0.815,0.815);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C2C2C").s().p("AkKO6IglgBIgmgCIgIgJQgVgdgTgqIgCgFQgHgUgOgIQgIgEgJgCIADgQIAOADQAPACAbAAIApACIAmACIAmACIAbgCIA6gKIB4gWIAqgJQAXgFARgGQAQgIAZgQIgbgJQgpgPgUgLQgTgIgNgIQgPgJgZgTQgTgQgVgUIgVgUIgigmQgUgXgMgTQguhFgLhaQgGgvAGgyIAGgyQAEgYAEgLQAFgQAKgWQAKgVARgWIAbgjIAsg1QA0g6AsgwQAogsA5g8IAvgvQAzgzAUgZQAmgzAshkIAghUQANgqAHgmQAIhAAEhAQADg5gBgLIgBgiIgEgfQgFgkgLgeIAHgCQAHAVAWAHIAnANIAPAJQAJAHAaAeIAHAIQADAugBAgQAAAjgBAiQgCAfgHAtQgIAtgHAWQgJAbgVAqIgFAKIgGAUIgWA8IgMAgIgSAsIgRAjQgQAhgdAmQgYAegnAoIgHAIIhiBmIhcBmQhKBTgUAZQgXAdgKAUQgGASgEAaQgHBBAEAsQAGAfALAhQAOAcAQAXQAlAtA0ArQAYASAUAKICLA7IASAHQALAEAHAFQANAJAIAMIACAEQAIAOAAAPQADAXgOAXQgJASgNALIgeAYIgSANQggAXgKAGQgmAXgvALIjVAtQguAJggAAIgDAAg");
	this.shape_12.setTransform(-120.5,-23.9,0.815,0.815);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C2C2C").s().p("AgGAhIgHAAIAIg7QABgEAEgCIAEgBIADAAQADABACADQACADAAADIgGA5g");
	this.shape_13.setTransform(-91.5,-41.5,0.815,0.815);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C2C2C").s().p("AgIARQgFgDABgEIAEgdIAHgBIAOACIgEAcQgBAFgCACQgEAEgDAAQgEAAgDgEg");
	this.shape_14.setTransform(-91.9,-37.1,0.815,0.815);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C2C2C").s().p("AA4BDQgagdgIgIIgQgIIglgOQgXgHgHgTQgEgNAEgMQAEgOALgJQAMgJAOAAQAGAAAFACIAtAQQAIAWAFATQALAqAEAyg");
	this.shape_15.setTransform(-90.8,-100.1,0.815,0.815);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C2C2C").s().p("AABA5QgHgRgBgUQgBgUADgfIADgaQAHAQABAIIACAXQABAagDAWIgEAUg");
	this.shape_16.setTransform(-83.7,-27.8,0.815,0.815);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C2C2C").s().p("Ag/CfQghgHgTgYQgNgSgDgHIAEgUQADgWgBgbIgCgXQgBgIgIgPQABgJAEgPQAGgYAKgVQALgeAagbIAYgYIAAANIABAGQgEANAKALQAGAFAJABIgBACQgLAOgJARQgOAigGAmIgCAgQgBAVABAQIACAIIAEAGIAHAHIAHAEIAKADQAJABAIgBIAOgEQAMgFAIgHQANgKANgQQAPgTANgcIAHgSIADgPQACgegBgUIgCgIIgNgZIALAGQAIAEAJgCQAJgCAEgIQAIgMgIgMIALgRIALAQQAEAIAJAYQAFAOAAAiIgCAfQgCASgEARIgLAeQgXA3gkAgQgdAbgeAJQgRAHgTAAQgOAAgNgEg");
	this.shape_17.setTransform(-72.8,-31.5,0.815,0.815);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2C2C").s().p("AgEAFIgBgLIAFgFQAAAGAGADIgHAJIgCAFg");
	this.shape_18.setTransform(-76.9,-44.2,0.815,0.815);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C2C2C").s().p("AgVAOQABgfAGgaQABgGAGgEQAFgFAGAAIAFABQAGACAEAFQAEAFAAAHQgCAjgBAhIgQAIQgEgDgDAAQgGAAgFAEQgEAEAAAGIABAFIgFAEIABgsg");
	this.shape_19.setTransform(-75.5,-49.5,0.815,0.815);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C2C2C").s().p("AgOAiQgHgFgCgEIgCgGIgFgGQgKgQALgPQAIgMAPgEIAHgCQAJAAAIAFIAGAFIAFAEQAFAFACAHQABAHgDAGIgBAFQgDAKgFADIgOAMQgEADgIABIgDAAQgFAAgFgDgAgIgCQgFADAAAGQAAAGAFAEQAEAEAFAAQAGAAAEgEQAFgEAAgGQAAgGgFgDQgEgFgGAAQgFAAgEAFg");
	this.shape_20.setTransform(-74.7,-30.6,0.815,0.815);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C2C2C").s().p("AgLAFQAAgFAFgEQAFgEAEgBQAFABAEACIgKAGIgLAJg");
	this.shape_21.setTransform(-76.1,-45.9,0.815,0.815);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C2C2C").s().p("AgdAbQgJgLAEgNQAFAQAPAAQAJAAAGgHQAGgGAAgIIgBgcIAOgCQgBAJAEAGQAFAJAIACIgLADIgLAFQgMALgPAUQgJgBgHgFg");
	this.shape_22.setTransform(-74.3,-43.5,0.815,0.815);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C2C2C").s().p("AgNAEIAMgJIAJgGQAFADABAGQgIACgGAHIgGAGQgGgEgBgFg");
	this.shape_23.setTransform(-75.8,-45.4,0.815,0.815);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C2C2C").s().p("AgKAHIAGgGQAHgFAIgEIAAADQAAAFgEAFQgFAEgFAAQgDAAgEgCg");
	this.shape_24.setTransform(-75.5,-45,0.815,0.815);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C2C2C").s().p("AgPgJIALgHIAKgDIAAAAQAJACAGgDIAFAAQgCALAGAKQAEAHAHAEIADAFIgKgFQgNgFgIgCIgSABIgIABIgSALQgFADgHAAQAQgUAMgKg");
	this.shape_25.setTransform(-71.9,-42.4,0.815,0.815);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C2C2C").s().p("AgHAAIAPgHIAAAMIgGACIgDACQgBgGgFgDg");
	this.shape_26.setTransform(-74.5,-46.4,0.815,0.815);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C2C2C").s().p("AgaAaIgFgiQgCgMALgLQAKgKAMAAQAOAAAJAKQAHAGACAJIAAABIgIAGQgSANgPATIgNASg");
	this.shape_27.setTransform(-75.8,11.4,0.815,0.815);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C2C2C").s().p("AgUAJIACgEIAIgJQAEACADAAQAFgBAEgEQAEgEAAgHIAAgCIAEgCIAGgCIABAbQAAAJgGAGQgHAHgIAAQgPAAgFgQg");
	this.shape_28.setTransform(-75.5,-44,0.815,0.815);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C2C2C").s().p("AhbCGQgIgDgEgHQgKgPABggQAAghAHgRQAGgTAKgTQAFgMAMgPQAZghAmgYIAdgQIAjgTQALgFAJAAIAKABQAOAEAJAOQAIANgEAQQgEAQgOAHQguAZgNAIIgBgBQgCgIgGgHQgKgJgNAAQgNAAgJAJQgLALABAMIAFAiIAEAQIgCAEQgKAOgGANIgJAeQgEANgHAPQgDARgPADIgGABQgFAAgEgCgAAkhPIgFAMIgBAMQAAAEAEAAQAEAAAAgEIAAgGIAEgMIABgCIAAgDIgCgDIgCAAg");
	this.shape_29.setTransform(-76,12.6,0.815,0.815);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2C2C2C").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFABQAGgBAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_30.setTransform(-74.7,-30,0.815,0.815);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C2C2C").s().p("AgIgDIAQgFIgDAPIgNACg");
	this.shape_31.setTransform(-73.1,-46.8,0.815,0.815);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C2C2C").s().p("AgGALIACgLIAEgMIADgCIACAAIACADIAAADIgBACIgFALIAAAGQAAAEgCAAQgFAAAAgEg");
	this.shape_32.setTransform(-73,7.2,0.815,0.815);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2C2C2C").s().p("AgFANQgJgCgFgJQgEgFABgJIALAAIAGAAQAMABAGACIAKAEIAAADQgCAKgMAEIgLAAIgDABg");
	this.shape_33.setTransform(-70.9,-45.1,0.815,0.815);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C2C2C").s().p("AAKAJQgGgCgMgBIgRAAIAEgQIANgBIANgBQAJAAAKACIABABIgFAWg");
	this.shape_34.setTransform(-70.6,-46.7,0.815,0.815);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C2C2C").s().p("AAQArQgKgCgIAAIgNABIgOABIAQhFQACgHAGgFQAFgFAIAAIAGABQAIADAFAIQADAGgBAKIgLA6g");
	this.shape_35.setTransform(-70,-51,0.815,0.815);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C2C2C").s().p("AgGAAIACAAIALAAQgEABgDAAIgGgBg");
	this.shape_36.setTransform(-70.7,-44.1,0.815,0.815);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C2C2C").s().p("AAAAeIgKgGIgDgGQgHgEgFgHQgFgJACgLIgFAAQAMgEACgMIAAgCIAKAFIgHAKQgFAIADAIQACAKAJAFQAHAFAJgDQAJgCAGgJIAGgHQAIALgIAMQgEAIgJACIgGAAQgFAAgGgCg");
	this.shape_37.setTransform(-67.4,-43,0.815,0.815);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C2C2C").s().p("AgKAJIAFgWQAJAEAHAEIgMATg");
	this.shape_38.setTransform(-68.1,-46.3,0.815,0.815);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2C2C2C").s().p("AAHAQIgggSIANgUIAEACQAFADADAGIABABIAKAEIAKAHIAFAEIgMASQgCgEgFgDg");
	this.shape_39.setTransform(-66.1,-45,0.815,0.815);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C2C2C").s().p("AgMATQgJgEgCgKQgDgJAFgIIAHgKIAfATQAFADADADIgGAIQgGAIgJADIgFABQgFAAgGgEg");
	this.shape_40.setTransform(-67,-43.3,0.815,0.815);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2C2C2C").s().p("AgBAjIgKgHIgLgFIgBgBQgEgFgFgEIgDgBQASgaAKgNQAHgJAGgCIAGgBQAGAAAGAEIAEACQAFAFACAGQADAMgFAGIgfArg");
	this.shape_41.setTransform(-64.2,-47.8,0.815,0.815);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2C2C2C").s().p("AAhBNQgQAAgRgEQgagEgJgEQgVgIgMgNQgQgPgIgPQgKgVgDgMIANgSQAQgTASgPIAJgFIAKAdQAMAXAHAKIAGAGIAEADIAeAHQAKADAMABIAQACIAaACQAHgBAPgFQgHAugHAZIAAAAQgMACgWAAg");
	this.shape_42.setTransform(-69,16.4,0.815,0.815);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2C2C2C").s().p("AgPA3QgNgEgJgLQgIgLAAgPQgBgUAIgxIABABIAUAeIAEAEIAKAFQAUAHAUADIAJACQgDAMgLAaQgHAPgSAFQgGABgEAAIgMgBg");
	this.shape_43.setTransform(-55.5,-54.9,0.815,0.815);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2C2C2C").s().p("AgcAkQAHgYAHguIADgBQALgEAMAIQAMAHAEAMQAEAMgIAMQgCAFgEACQgEAFgJADIgZAJIgIABg");
	this.shape_44.setTransform(-59.2,19.5,0.815,0.815);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2C2C2C").s().p("ACVFZQgXgDgRgHIgjgQIgRgLIgNgMQgHgKgKgPIgPgaQgGgIgJgZQgdhPgPgnIgjhLQgJgTgehMQgKgWgOgTIgignIg3hCQgDgxgLgrQgFgTgIgXIAWALQASAMAcAdQAcAdAfAnIAkAnQAXAZAKAQQARAZAXA7IALAbIAYA0IAZA0IAbBDIATAwQAGAPAJAKQgJAyABAVQABAPAHALQAJALAOADQALAEALgEQASgEAHgPQALgaADgNIA6AEIgEAIQgFAPAAARQABAXASALQAIAEAGAAIgCAXQg+gFgxgHg");
	this.shape_45.setTransform(-66.5,-75.8,0.815,0.815);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2C2C2C").s().p("AgxFjQg8gBgRgCQgxgEgpgJIhGgQQhCgPgogWQgsgagYgLQgagLgHgFQgTgNgEgFIgTgXIgigxQgegggNgSQgTgbgNgfIAbAFQAeAEAnAAIAcABQAeAgAKARIAaAlIALANIARAJQAgANARAIIA2AdQAVAIAdAHIA0AMIAvAMQAWAFATACQAwAGAoAAQAvABArgEQAegFAOgEIAvgQQAxgWAlgUQAlgVAwghQAbgVATgVQAbgdARgWQAbgmAOgcQARggAQgkQAQgnALgmIAtijIAIgBIAbgJQAIgDAEgFIAcAHIgBACQgEAHACAJQACAHAIAGQAIAFAIgDIAEgCIgRA8IgFADIgpAWQgXAOgOAMQgJAIgCAOQgBANAGALQAGAIAHAFQAMAHARgDIAPgDQgIAXgLAeQgKAbgYAwQgWAsgPAYQgYApgbAfQglAqgSAQQg9A1hLAoQgiATgsASQg0AVgUAFQgWAFgVAEQgPADggADQgYADggAAIgRAAg");
	this.shape_46.setTransform(-105.8,50,0.815,0.815);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2C2C2C").s().p("AgcA1QgIgFgFgJQgGgLABgNQACgNAJgHQAOgNAWgNIAogWIAGgDIghBtIgOADIgKABQgKAAgIgEg");
	this.shape_47.setTransform(-58.5,33.7,0.815,0.815);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2C2C2C").s().p("AgKAXQgIgGgBgHQgDgJAFgGIABgCQAEgFAHgDIAagKIgMAwIgDACIgGABQgEAAgGgDg");
	this.shape_48.setTransform(-54,22.3,0.815,0.815);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2C2C2C").s().p("AgJAfQgJgGgFgIIgEgKQgEgOAIgOQAJgOAOgEIAKgBQAMAAAHAFIAAAAIgSBMQgLgDgJgHg");
	this.shape_49.setTransform(-52.5,13.1,0.815,0.815);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2C2C2C").s().p("AgrAmIgKgCIAThMIAEADIALACIAwAGQANADAHANQAFAJAAAIQAAAOgKALQgHAGgIADIglADQgUAAgPgDg");
	this.shape_50.setTransform(-47.2,13.6,0.815,0.815);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2C2C2C").s().p("AgLAnQgKgOgDgQIgEgRQgGgHAAgIIABgIQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQgBgFAEgHQAEgGAFgDQAIgEAFAAQAGAAAIAFQAGACAHALQAEAEACAFIAKAXIgDAOQgFASgNApQgPgJgKgOg");
	this.shape_51.setTransform(-49.9,1,0.815,0.815);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2C2C2C").s().p("ACMFFQgUgDgVgHIgKgFIgEgEIgUgeIgBgBIAOhqIABgkQgBgdgEgeIgIgwQgFgbgHgUIgmhUQgQghgLgPQgTgYgJgIIgggeQgZgSgggOIgbgJQgOgDgHgOQgIgNAEgOQAEgMAJgHQAKgHAMAAIAJABQAxANAtASQAdAMASANQAZARAVAUQAWAWAOAVIATAgQARAeANAfIAOAgQAMAbAEASIADARQAIAqAEAlQACAWgBAtQgBAmgJAoIgNBCIgJAlIgBACg");
	this.shape_52.setTransform(-63.9,-81.9,0.815,0.815);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2C2C2C").s().p("AioCTIA8glQAlgfArgrQAfghAjgrIASgbIANgZIAOghQgWAJgRADQghAFgPgCQgYgDgLgCQgbgGgVgJIgJgFQAOgoAEgSIAEgPIABACIADAGIABABIADACQARAGAbAEQASACAPgBQASgEAMgFQAbgLAPgKIAmgbIAGgEQAGgFAKgDQAMgEAMAEQAMADAJAJQAHAHAFAOQADAIgEAUIgCAKIgJArQgMAsgaA+QgKAYgRAXQgXAhgUAYQgfAkgyAqIgzApIgYAQIgbAPQgZANghANQgXAJgQAEg");
	this.shape_53.setTransform(-40.9,17,0.815,0.815);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2C2C2C").s().p("AgegQIAOgFIAigKIAFAAQAGAAAGAEQAFADACAHQACAIgEAHQgEAGgIACIhGAag");
	this.shape_54.setTransform(-49.8,21.5,0.815,0.815);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2C2C2C").s().p("AjYHPQAEgCACgFQAIgMgEgNQgDgNgMgHQgNgHgMAEIgCABIABgIQAFguAGgeQAKgmALgnQANgmAIgqIAGgiQAFgWAKgSQAGgKASgNIAngiQAcgaAUgOIA3grQAegaATgXQA1hEAehEQAIgUAFgXQADgjgCgfIgEgOIgCgCIgIgEIgVgHQgOgBg5ADQggABgggBIgggDIACgWIAFABQALAAAJgGQALgIAFgFQAFgFAJgMQAGgJAGgPIAHgPIAPAAIA7gEQAmgDAfALIANAFIAWAKIAKAHIAKAJQAIAIAFAIIAEAFQALAXADAOQAEANABAOIACAgIgBAkQgCAcgGAYQgIAbgLAYQgJAUgMAWQgPAcgaAlIgWAgQgSAXgJALIgVARQgWAWgjAZIg7AxIgfAaIgRANIgGAiIgDASIgKgXQgDgFgEgEQgGgLgGgCQgKgFgGAAQgFAAgIAEQgFADgEAGQgDAHAAAFQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABIgBAIQAAAIAGAHIAEASQADAQAKAOQAKAOAQAJIgQA0IgBAAQgHgGgMAAIgLACQgOADgJAOQgIAPAEAPIAEAJQAGAJAIAFQAKAHALAEIgIAtIgbAKQgHACgFAGg");
	this.shape_55.setTransform(-40,-16.7,0.815,0.815);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2C2C2C").s().p("AgUAnQgGgBgIgEQgSgLgBgXQAAgPAGgPIADgIIAsADQAeABAYAAIgHAPQgGAOgHAIQgIAMgFAFQgGAGgLAIQgIAFgKAAg");
	this.shape_56.setTransform(-43.4,-51.7,0.815,0.815);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2C2C2C").s().p("AEFGXIgtgDIAVg9QAWhAAGgdIAHheQABgUgCgeIgEgpIgNg2QgKgfgIgTQgZg2gpg5Ig9hIQgLgMgKgIIgdgTIgigTQgdgPgigQIgngOQgNgFgUgDQgtgEg1AGIhfAQQgSAEgPAGIgJAFIgQgRIgDgGIgHgJIgFgEQARgLARgIQAggNAXgHQA/gTAogGQAqgHARAAIAEAAQAdABAhAGQAUAFAgALIA1AXQAmAQATAKQAkASANAKQAUAPANAMIA8A/QAUAYAUAeQAUAeAKATQAPAdAKAfIASA2QAJAcAEAnQAEAeACAeQABASgEAlQgDAqgFAbQgFAggIAZQgIAYgLAeIgTAuIgMAAIgqgBg");
	this.shape_57.setTransform(-64.7,-87.8,0.815,0.815);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2C2C2C").s().p("AlSbGQgtgEgigIQg1gLgegJIhQgXQgSgFgegNQgdgNgNgJQgdgUgQgPQgPgPgVgcIgog4IgSgcQgbgsgKgYQgkhQgbhTQgghhgNg7QgMg4gThmQgLg6gEgSIgRhFIgngJQgcgHgVgHQgYgJhGgeIgwgUQgngPgUgNQgNgIgQgLQgdgUgNgQQgogugIgeQgGgWADgbIAEgeQAEgTAKgVQAJgTARgRQAhghAWgSQAtgkAcgTQAQgLA0geICMhWQBig9AcgUQAWgUANgOIAKgTQAOgiAYhSQANgpAFgVIA1jQQALgtAThZQAKgsAJgeIAahPIAXhJIANglIAOgjQAUg6ANgbQATgoATgbQAYglAegkQAhgoAUgSQBEhBA7grQA5gpBTgwQAkgVAggQIBHgkQApgSAtgTQAMgFBAgUQAdgJAtgLIBKgSIBZgWIBSgTQAkgIA5gHQAzgGAhAAIBYgCQBEgCBVgKQA0gIAsgIQAhgFAmgOQAXgHAugUQBsgyBDgqIAngZIAegRQAjgPATAAQAIAAAIACQASAFALAPQALAQAAASQAAAVgHASQgNAegMAXQgWAmhCBjIhZCLQg0BPgtA2QgqAzgmAgQguAngsAdQg0Ajg3AZQg6AbguAPQg3AUg6AMQg8ANgnAEIgzAFIglAEIgFAAIAAABQABAHgBAIIgKA2IgFBPQgCAkgHAzQgEAmAAASIgCA7QgCAqgIBTQgDAoAABSQAAAUgBAUIBTgWQATgFARgCQAmgFANABQAjADATAGIAlAMQAqARATAOQAXARAGAHQAOAPAGAKQAKAOAIARIANAaQAIATACAKQADANACASQADAlgGA5QgGA0gDARQgKAzgWArQgZAxg7A5QgXAXgmAgQgoAjgxAWIgeANIAHAiQALAxACAkQAEAxgDByIgBBLQgBAsgDAfQgHBOgTBYQgTBZgZBBQgbBHgbApQgiA1gqApQguAshUBCIhoBNIgQAMIgSALIhJApQhtA4hNAOQg5ALgtAAIgcgBgADJteQhKACheAIQhwAJg3AHQgpAGgZAHQgcAJgYAJQg5AZg0AaQgYALghASQhIAlglAaQggAagYAdIgCAGIgYBGQgLAkgIAnQgUBXgSBGIgoCUIgTBEIgKAlIgKAkQgQAwgNAcIgIASQgKATgRATQgTAXgeAXQgbAUgmAaIhEArQhTA1g4AhIhEApIg4AoQgpAhgTAUIAAABQgFAOgDARIAAADIAGALQAQASAPANQAVAQATAKIAjAQIA+AaIAvAWQAmAOAaAGIA1AJQAQAEASAIQAbALANAWQAJAPAHAaIALAkQAJAfAJAvIANBLIAPBKQASBVAXBFQgOABgNAMQgMANAAASQAAASAMAMIAJAHQAJAGANAAIAbADIAYBAIANAcIAYAsIA6BYQAUAXAPAMQASANAXAKIA+AWIArANQBHAVA0AIQAuAFAtgFQA9gKA9gYQAwgVApgXIASgJIASgKIAkgZQAXgPBfhHIAkgdQAVgPAPgOIAhgeQAfggAOgRQAYggAYgyIAPgfQAZhHAKgnQANg4AIg2QAEglACg2QABgogBgoQgCh+gFg1QgEgagHgcIgYhfQgFgVAAgKQgCgZAUgVQAOgOARgDIALgCQAZgEAhgNQAcgNAagTQBFg3AjgqQASgYAOgfQAKgaAFgaQADgbgBgfQgBgogCgUIgEgQQgJgSgPgXIgNgOQgQgKgdgOQgagKgTgEIgYAAQg4AKhnAkQgVAIgKADQgeAIgYgOQgPgIgJgRQgIgPAAgTQgBgPADgYIADgoQACgbACgyIADhOIAHhLQAEgpABgoQACg5AEgcQAFglAHglIAFgzQADgeAFgVQAEgWAGgZIAEgPgAUc53IhDA6QgnAigcAXIgwAgIg1AkIgWAOQglAPgeAHQgjAIg0AIQhqAQhJAFIhlAEQg+ACgoAFQg5AIhPATIiHAhQhcAXgTAGQgoAMgUAHIgsARQgxAWgYAMIhZAwQhTAthDAwQgrAhgtArQgUATgaAdIggAnQgWAegKARQgLASgJARIgNAQQgWAdgGAKQgHAMgVApQgHAMADANQAEAOAMAHQAMAHAOgEQAOgDAGgMIAUgmQAEgIAIgMQAKAIAMgBQAMgBAJgIIA0guIAfgaQAjgZAXgMIBagpQAogKAjgEQA5gIBxgLICrgLIBJgCIBOgBIA2gDIAegCIBNgKQB8gUBogrQA9gaAqgZQAogXAugkQAqghAagbQAbgcAfgnQAbglAigzIA7hbIAmgnQAQgQAVgSQAMgMAagUIAYgTQAJgGADgIQACgKgFgJIgBgBIAMgLQAHgHAAgKQAAgKgHgHQgHgHgKAAQgIAAgJAHg");
	this.shape_58.setTransform(118.3,-68.5,0.815,0.815);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2C2C2C").s().p("AjeDqIgfhZIAAgBIAFAAQAbAFAVgCQARgDARgHQAcgNArgaQAUgLAdgWIAcgXQAngjAfgmQAZghAOgeIAjhLQAPgdAXghIAFgBIAZgCQAGAAAaACIANADIAOAJIABAAIgCACIghA3QgLASgSAlIgZA4QgfBEg5A7QgUAVgXAUIgfAZQglAbgPAJQgoAXgdANQghAOgMACQgVAFgQABIgWgBg");
	this.shape_59.setTransform(74,15.6,0.815,0.815);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2C2C2C").s().p("AAJAqQgNAAgJgGIgJgHQgMgMAAgRQAAgSAMgNQANgMANgBIAAABIAfBYIgagDg");
	this.shape_60.setTransform(53,31,0.815,0.815);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2C2C2C").s().p("AgeBKQgMgHgEgNQgDgNAHgNQAVgoAHgLQAGgKAVgdIANgQIgJARIgaBJIAsgaQACAKAHAGIADADQgIALgEAIIgUAmQgGAMgNAEIgJABQgJAAgIgFg");
	this.shape_61.setTransform(75.2,-130.8,0.815,0.815);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2C2C2C").s().p("AsnEoIAJgRIARgVIA6hBQARgUANgLQAbgYATgOQAZgRASgMIAqgZIBTgtIBYgsIAqgUQAQgHAngOIAsgPIAsgNQBDgSAegEIC9gYQAdgFA9gFIBBgOQAkgKAegGIAxgKQASgFAbgIIBdgfIBegdQAkgMAzgWQAmgQATgLQANgGAQgMIA8gYIATgIIhFBIQgPAPg7AxIgEADIgzAWQgQAHggAJIhfAcIheAfQgZAHhEAQIhfAZQgTAEglAFIhgAOQgiAHg+AIIgzAHIgwAKQhOARhlAnQgXALgwAXQg3AbgbAPIhKApQgbAPgLAIIgNAJIgCABQgnASgWAQQgTAMgqAjQgZAVglAjQgMALADASIgtAbg");
	this.shape_62.setTransform(142.4,-160,0.815,0.815);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2C2C2C").s().p("AgbAcQgLgMAAgQQAAgPALgMQAMgMAPAAQAQAAAMAMQALAMAAAPQAAAQgLAMQgMALgQAAQgPAAgMgLg");
	this.shape_63.setTransform(73.5,-62.1,0.815,0.815);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2C2C2C").s().p("AhXA3QAlgjAZgUQApgjATgMQAWgQAmgSIADgBIgXAPQgbAWgMAMIgkAkIgwA1IgwAbQgDgRAMgLg");
	this.shape_64.setTransform(86.1,-138.9,0.815,0.815);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2C2C2C").s().p("AgvCkQgcgLgOgKQgSgOgJgJIgOgTQgHgMgDgKQgFgSAAgPQAAggAJgeQAKgjAJgQQAPgeAggaQAkgdAhgKQAJgDAigEQAYgEAJAAIAIABQAUABAPAGQAPAFAHAMQAIAMgDAPIABADQgSAVgNAeQgKAYgHAZIgFAYQgEAZAAAYQACAjAYAcIgFAGQgWAUgOAJQgHAFgQAHIgMAEQgSAFgSAAQgZAAgZgKgAAahYQgQAIgMAJQgPAMgOARQgFAGgCAHQgJAWgEAcQgBAQAAANIABABIACADIALAMQAHAFAJAEQAMAEALADIANAAIAKgCIAQgLQAKgHAHgKQAHgJAHgOQADgIABgIQABgTgCgfIgHg9IAAAAQgZAEgQAGg");
	this.shape_65.setTransform(73.9,-62.3,0.815,0.815);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2C2C2C").s().p("AgOAVQgIgIgBgJIAvgaIgjAuIgDgDg");
	this.shape_66.setTransform(80.1,-132.4,0.815,0.815);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2C2C2C").s().p("AgjA3QgBgXAFgaIAFgXQAGgZALgZQAMgeARgVQAJAVADAfIAEA1QACApgMAeQgOAjgWAaQgYgcgBgkg");
	this.shape_67.setTransform(84.1,-62.3,0.815,0.815);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2C2C2C").s().p("AsMEkIAkgkQAMgMAbgWIAXgPQAYgNAqgRIAxgUIAsgQIBfgZQBHgWAbgGQAhgIBGgHIAwgIQAdgGAkgEIAZgBIAZgCIAdgCIAigFQA2gJAugJQAbgGBAgQIAvgLIA3gTIBTgiIAtgTQAJgEAkgUIAqgZIAigYIA5gvIAugWQAcgOASgMIApgeIAogbIA7gqIgfAuIgdAgQgwA0gWASIhMA/Qg1ArgfAVIgqAZIgsAZQgqAUg3AXQhAAaggALQgTAGgbAIIguAKQgsAMg4AMQgxAJgvAHIg8AFIhsAOIhRAKQgvAHgnAKIhVAWIguAMQgVAGgXAJIg3AVQgTAFgeALQgSAGg0AYQgdANg5AeIggARg");
	this.shape_68.setTransform(149.7,-162.5,0.815,0.815);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2C2C2C").s().p("AgbCzQgagCgMgCQgqgJgZgWQgHgFgFgHQAXgaANgjQAMgegCgpIgDg1QgDgfgJgVIAIgJQAZgZAhgSQARgKARgFIAZgFIAPgBIABAAQAdACAOAIQALAFAOAOQAHAHADAIQANAQAGAMQALAUACANQAEAOABATQADAjgCARQgFAmgSAhQgLAVgNAOQgLANgSANQgSAOgHADQgSAKgOADQgUAFgPAAIgDAAgAAHhXQgNAHgNAJQgNAMgJAJQgKAQgGAMQgMAfgGAhQgCAQABAJIAAACIACADIAEAEIALAGQATAHAUAEIAOAAIAMgEQAOgHAPgKIAOgPQAIgLAGgNQAEgJAEgQQAAgMgBgRQgDgSgFgQQgJgRgGgIQgJgFgDgDIgEgEIgHAAg");
	this.shape_69.setTransform(95.1,-63.3,0.815,0.815);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2C2C2C").s().p("AiIBJIAlgvIAfgRQA5gdAdgNQAzgYASgGQAegLAUgFIhaAqQgXALgiAaIgfAYIg0AuQgJAJgMABIgCAAQgLAAgJgHg");
	this.shape_70.setTransform(90.3,-136.4,0.815,0.815);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2C2C2C").s().p("AAqAdIgOgJIgOgDQgYgCgGAAIgZACIgFABIAUgaQAKgPANgDIAKgCQALAAAJAGQANAHAFAPQAFAPgHAOg");
	this.shape_71.setTransform(91.2,-4.8,0.815,0.815);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2C2C2C").s().p("ABgByQgHgHgCgJIgHgvQgFgfgFgQQgFgKgIgLIgCgCQAHgOgFgPQgEgQgOgIQgJgFgLAAIgKACQgMADgLAPIgUAbIgOAEQgLAFgMAJQgIAGgOAQQgIAMgTAAQgQAAgMgMQgLgLAAgQQAAgKAFgKIAGgIQAQgTAKgIIAZgUQASgNAcgHQAQgFAggEIAWgCIAMAAIAJABIAYAEQALADAKAFIAKAGQAcATAJASIAJASQAKAUADALQANA9gPA3QgDAMgJAGQgJAIgMAAQgOgBgJgJg");
	this.shape_72.setTransform(90.2,-0.8,0.815,0.815);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2C2C2C").s().p("AgZAaQgLgKAAgQQAAgOALgLQAKgLAPAAQAPAAALALQALALAAAOQAAAQgLAKQgLALgPAAQgPAAgKgLg");
	this.shape_73.setTransform(94.2,-61.4,0.815,0.815);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2C2C2C").s().p("AiDBjQA7gwAPgPIBEhIIA4gcQArgWAYgPIACgBIgnA5IgBACIg7AqIgnAaIgpAeQgSAMgcAPIguAVg");
	this.shape_74.setTransform(209.5,-187.1,0.815,0.815);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2C2C2C").s().p("Ah+BYIA1gkIAwggQAbgWAngiIBDg6QAJgHAIAAQAKAAAHAHQAHAHAAAKQAAAKgHAHIgMALQgGgLgOAAQgGAAgGADQgzAcgkAcQgRAMgYAWQgOALgYAZIgUAJIg8AYIAWgOg");
	this.shape_75.setTransform(216.1,-195.7,0.815,0.815);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2C2C2C").s().p("Ag9AdQAYgWASgMQAjgcAzgcQAGgDAGAAQAOAAAHALIgmAmIgnAnQgdAbgIAHIABgCIAmg4IgCAAQgXAPgrAWIg4AcQAYgZAOgLg");
	this.shape_76.setTransform(218.6,-195.4,0.815,0.815);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2C2C2C").s().p("AgrAhQAJgHAdgbIAmgnIAmgmIABABQAFAJgDAJQgCAJgJAGIgYATQgaATgNALQgUATgQAQIgmAng");
	this.shape_77.setTransform(221,-193.4,0.815,0.815);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AggTVQg0gIhHgVIgrgOIg+gVQgXgKgSgOQgPgLgUgYIg6hYIgYgsIgNgcIgYhAIAVABQAQAAAWgGQALgCAhgOQAegNAngXQAPgIAngcIAegZQAYgTATgVQA6g7AehFIAag4QASglAKgSIAhg4IABgCIADADQAIALAFAKQAFAQAEAfIABADIAGAtQADAJAGAGQAJAKAPAAQALAAAJgHQAKgHADgLQAPg4gOg9QgCgLgLgVIgJgSQgJgRgbgTIgLgGQgKgGgLgDIgXgDIgIgBIgMAAIgYACQggAEgPAEQgcAIgSANIgZATQgKAIgQAUIgHAIQgFAKAAAKQAAAQAMAMQALALAQAAQATAAAJgLQAOgRAHgHQAMgIALgFIAPgFQgYAigOAcIgkBMQgOAegYAhQgfAngpAjIgbAWQgdAWgVAMQgrAagbAMQgRAHgRAEQgVABgcgEIgEAAQgXhFgShVIgPhLIgNhLQgJgvgJgfIgLgjQgHgbgJgPQgNgVgbgLQgSgJgQgDIg1gKQgagFgmgPIgvgWIg+gZIgjgRQgTgJgVgQQgPgNgQgTIgGgKIAAgEQADgRAFgOIAAgBQATgTApghIA4goIBEgpQA4ggBTg2IBEgrQAmgZAbgVQAegXATgWQARgTAKgUIAIgRQANgcAQgyIAKgkIAKgkIAThEIAoiUQAShHAUhXQAIgmALgkIAYhHIACgFQAYgdAggaQAlgbBIglQAhgRAYgLQAzgaA5gZQAYgKAcgIQAZgHApgHQA3gHBxgJQBegHBKgCICJgBIgEAPQgGAagEAWQgFAUgDAeIgFAzQgHAmgFAkQgEAcgCA6QgBAogEAoIgHBMIgDBNQgCAzgCAbIgDAnQgDAYABAQQAAASAIAQQAJAQAPAJQAYAOAegIQAKgDAVgJQBngjA4gLIAYAAQATAFAaAJQAdAOAQALIANANQAPAXAJASIAEAQQACAVABApQABAfgDAaQgFAagKAbQgOAfgSAXQgjAqhFA3QgaATgcANQghANgZAFIgLACQgRACgOAOQgUAVACAZQAAAKAFAVIAYBfQAHAbAEAaQAFA1ACB/QABAogBAoQgCA2gEAlQgIA1gNA4QgKAngZBHIgPAgQgYAygYAfQgOASgfAgIghAeQgPANgVAQIgkAdQhfBHgXAPIglAYIgSAKIgSAKQgpAXgwAUQg9AZg9AJQgYADgYAAQgUAAgWgCgAjAnUQghAFgKADQghAKglAdQgfAZgQAeQgIAQgKAjQgJAfAAAgQgBAQAFASQADAKAHALIAPATQAIAKATANQAOALAcALQApAQAugLIAMgFQAPgGAHgFQAPgJAVgVIAFgFQAGAHAGAFQAZAWArAJQAMACAaACQAOABAYgGQANgDASgKQAHgDASgOQASgNALgNQANgOALgVQATghAEgmQADgSgDgjQgCgTgDgOQgDgNgLgUQgFgMgOgQQgCgIgIgHQgOgOgKgFQgOgIgdgCIgCAAIgOABIgaAFQgQAFgSAKQggASgZAZIgJAJIgBgDQAEgOgIgNQgIgMgOgFQgQgFgTgCIgJAAQgIAAgZADg");
	this.shape_78.setTransform(93,-37.9,0.815,0.815);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgRBdQgUgEgTgHIgLgGIgEgEIgCgDIAAgCQgBgJACgPQAGgiAMgfQAGgMAKgQQAJgJANgLQANgKANgHIARgFIAHAAIAEAEQADAEAJAFQAGAHAJARQAFAQADASQABARAAAMQgEAQgEAJQgGANgIALIgOAPQgPAKgOAIIgMADgAghgBQgLAJAAAQQAAAPALALQAKALAQAAQAOAAALgLQALgLAAgPQAAgQgLgJQgLgMgOAAQgQAAgKAMg");
	this.shape_79.setTransform(94.8,-63.4,0.815,0.815);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgJBbQgNgDgLgFQgJgEgHgFIgMgLIgCgEIAAAAQgBgNACgRQAEgcAIgWQADgGAFgHQAOgQAPgMQAMgJAPgIQARgGAYgFIABAAIAGA+QADAdgBAUQgCAJgDAIQgHANgGAKQgIAJgJAIIgRAKIgJADgAgrgQQgLAMAAAPQAAAQALAMQAMALAQAAQAPAAAMgLQALgMAAgQQAAgPgLgMQgMgMgPAAQgQAAgMAMg");
	this.shape_80.setTransform(74.8,-62.9,0.815,0.815);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AqAD5QAXgJAVgGIAugMIBUgXQAogJAvgIIBRgJIBsgOIA8gFQAwgHAwgKQA4gMArgLIAugLQAbgHAUgGQAggLBAgaQA3gXAqgVIAsgYIAqgaQAfgUA1gsIBMg+QAVgSAwg0IAeggIg6BaQgjA0gbAkQgfAngbAcQgaAbgqAhQguAjgoAXQgqAag9AaQhoAqh8AVIhMAKIgdABIg2ADIhPACIhJABIirALQhxALg6AIQgjAEgoAKg");
	this.shape_81.setTransform(158.1,-164.9,0.815,0.815);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("ApzDCQALgIAbgPIBLgpQAbgPA3gbQAvgYAYgKQBlgoBNgQIAxgKIAygHQA/gJAhgGIBhgOQAlgFASgEIBggZQBEgQAYgIIBegeIBggcQAfgKAQgGIA0gWIg5AvIgiAYIgqAZQgkAUgKAEIgsAUIhUAhIg2ATIgvALQhAAQgbAGQgvAJg3AJIghAFIgcACIgZACIgZABQgkAEgdAGIgxAIQhGAHggAIQgcAGhGAWIhgAZIgrAQIgxAUQgqASgYAMIAMgJg");
	this.shape_82.setTransform(146.2,-162.2,0.815,0.815);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("Ar0EQQALgRAWgeIAggnQAagdAUgTQAtgrAqghQBEgwBSgsIBagvQAYgNAygWIArgQQAUgIAogMQATgGBdgWICGgiQBPgSA5gJQAngFA+gCIBmgDQBIgFBqgRQA1gHAigJQAegHAmgPQgQAMgOAGQgSALgmAQQgzAWglAMIhdAdIhdAfQgbAIgTAEIgwALQgeAGgkAKIhBAOQg9AFgeAFIi9AYQgdAEhDASIgsANIgsAPQgnAOgQAHIgrATIhXAtIhUAtIgqAZQgRAMgZARQgTAOgbAYQgNALgSAUIg5BBIgRAVQAJgSALgSg");
	this.shape_83.setTransform(140.7,-162.4,0.815,0.815);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgUPWIgmgDIgpgBQgbgBgPgBIgOgDQgigHgkgNQgZgLgXgPQgLgHgTgOIgzgoQgcgWgdgkIgkg2IgWgoIghhGQgahFgOgtIgThAIgNg7QgFgjgBgTIgFhTQgGh5AIhGQAIg2ATg+IAUg9QAYhFATgwQASgoAKgTIAqhKIAshFIAqg8IB8ibIA0g7QAtgwA1guQA3gyA1gqIADgCQAngcAegSQAYgOAogSIAigNQAVgGARgCQAxgHAgADQAfAHAfALIAsAUQASAKATAPQAMAKAJALIAaAhIAaAdIABABIAQApQALAdAFAkIAEAfIABAjQABALgDA4QgEBBgIA/QgHAngNAqIggBTQgsBkgmA0QgUAYgzAzIgvAwQg6A7goArQgsAwg0A8IgsA0IgbAjQgRAWgKAWQgKAVgFAQQgEAMgEAYIgGAyQgFAxAFAwQALBZAuBGQAMATAUAWIAiAnIAVAUQAVAUATAPQAZATAPAJQANAIATAJQAVAKApAQIAbAJQgZAQgQAHQgRAHgYAFIgqAIIh4AXIg6AKIgbABIglgBgAGtrnQgOAEgHANQgIANAEAPQADAMAOAJIAAABIAFAEIADAHIAIAdQACAcgDAkQgDAagHAVQgFAUgNAiIgIASQgKAUgQAYIgeApQgsA3grAsQgkAngNAMIg4A0IhlBhQgcAagUAWQgTAXgeAnQgeAngKAOQgQAagSAgIggBCQgKAWgUA2QgPAogGAVQgJAegFAjQgEAbgFA1IgDAgQgDAbAEAhQANBoBABQQATAYAaAWQAcAYAiARQAYAMAaAMQARAIAMgEQAPgEAIgNQAJgPgFgPQgDgNgOgKIg4gpQghgbgZgeQgVgegQgiQgLgdgIgpQgCggABgVIAJhxQAMhCAnhkQAZg3ATgkQATgiAog3IAlgtIA0gyIBqhkIAvguQAcgeAVgYQAyg4Apg8IAXgjQAUgeAPgoQAMggAMguIAHgsQADgVAAgRQAAgegFgcQgDgUgLgZQgIgSgbgTQgHgFgLAAgAC/rfQgLAKAAAOQAAAMALANIAEAGQACAHAFAWQADAegDAZQgEAbgKAYIgFAOQgNAdgNAWQgKARgVAeQgWAbgQAQQgWAWgYAUIhfBUQg/A4ggAjIgmAsIgqAwIgsA9IglA1QgdA0geBJQgYA9gPBAQgHAcgFAsQgGAwgBAOIgBAoQgBAnAIAzQAEAeAPA4QAFAQAQAuQANAgASAjQAFAKAMAFQALAEALgDQAOgEAHgMQAIgOgEgNIgPguQgJgbgEgUQgUhUgFgiQgEgmADguQABgeAHg3QAIgyAMgpQAMgnAPgmQAhhIASgdQAXgnApg2QANgRBChLQATgUAbgaIAvgrIBehVIAvgsQAVgVAXgeQALgOAGgKQAIgNAJgRQARgeAMgeIALggIAHgWQADgKAEggQAEgigKg1QgDgTgHgTQgFgMgFgGIgKgOQgJgKgQAAQgOAAgKAKgAgGrvQgKAHgDALQgDAMAGALIAGAMQAFAPACAOQACAUgDAfQgGAkgMAgQgNAdgRAeIgTAfIgPAVQgOASgNAJIjECpQgHAHgMAQIgkAtIgfAmIgGAIIgkA1IgHAQIgiBVQgMAigFAjQgGAsgCBZQgCAmABAcQABAQAKAKQAMALAOAAQAPAAAMgLQAJgJACgRQADgaADg3QAEg0ADgcQAGghAGgXIAJgcIAghLQAHgNAUgeIAAAAIBGhaQAVgaAJgJIArgoIBUhMQAYgVAWgRIARgPQAJgIARgYIAPgWQARggALgYQAZg4AIglQAIgkgBgmQgCgZgHgaQgFgTgPgdQgIgOgSAAQgIAAgGADg");
	this.shape_84.setTransform(-142.6,-36.7,0.815,0.815);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("ADDFtIABgCIAJglIANhCQAJgoABgmQABgtgCgWQgEglgIgrIgDgRQgEgSgMgaIgOggQgNgfgRgeIgTggQgOgVgWgWQgVgUgZgRQgTgNgdgMQgsgSgxgNIgJgBQgMAAgKAHQgJAHgEAMQgEAOAIANQAHAOAOADIAbAJQAgAOAZASIAfAeQAJAIATAYQALAPARAhIAmBTQAHAUAFAcIAIAwQAEAeABAdIgBAkIgOBqQgIgLgGgPIgTgwIgbhDIgZg0IgZg1IgKgbQgXg5gRgaQgLgQgWgYIgkgoQgfgmgcgdQgcgegSgMIgWgKIgHgRQgHgFgEgIIgEgIIgFgJIgJgRIgKgNIgQgPIAJgFQAPgGARgEIBggQQA0gGAtAEQAVADAMAFIAnAOQAiAQAdAPIAjATIAcATQAKAIAMAMIA9BIQApA5AZA2QAHATAKAgIAOA1IADApQADAegBAUIgIBeQgFAdgWBAIgVA9g");
	this.shape_85.setTransform(-67.7,-85,0.815,0.815);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgRFgQgKgVgNgKQgHgGgHgEIgQgGQgIgDgMgBIAGg6QABgDgDgDQgCgDgDgBIgDAAIgFABQgDACgBAEIgJA8QgOACgLADIgVAIQAGggAGgWQACgHgEgIQgEgHgIgCIgFgBQgPAAgEAPQgIAbgIA6IgBAAQgKAHgMAKIgCgMQgCgIgHgEQgFgDgGAAIgFABQgFABgEAFIgGgGQAngoAXgeQAegnAPggIARgjIATgtIAMgfIAVg9IAGgSIAGgLQAVgqAIgaQAHgWAIgtQAHgtACgfQACgjAAgiQAAghgCgtIA1BBIAjAnQANATAKAWQAeBNAJAUIAjBKQAQAnAcBOQALAZAFAIIAPAbQAKAPAIAJIAMAMIgBACIgEgDQgGgDgGAAIgGABQgHACgHAJQgKAMgSAbQgHgEgLgEIAMg7QABgLgEgGQgEgHgJgDIgGgBQgHAAgGAFQgGAEgCAIIgQBGIgRAFQAAgiADgjQAAgGgEgFQgFgGgGgBIgFgBQgGAAgGAEQgFAEgCAGQgFAagCAhIAAAsIgYAXQgaAcgLAdQgKAWgFAYQgEAOgBAJg");
	this.shape_86.setTransform(-83.5,-63.2,0.815,0.815);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AkCLpQgngBgxgGQgTgCgVgFIgwgLIgzgMQgegIgVgIIg2gcQgRgJgggNIgQgJIgMgMIgZgmQgLgQgeghIAmACIAkABQAhAAAwgJIDXgtQAugLAmgXQALgGAggXIARgNIAfgYQANgLAJgSQANgXgDgXQAAgPgHgOIgDgEQgHgMgOgJQgGgFgLgEIgTgHIiLg7QgTgKgZgSQg0grgmgtQgQgXgNgcQgMgggGgfQgEgsAHhBQAFgaAGgSQAKgUAXgdQAUgZBJhTIBehnIBihmIAHgIIAGAGIgDADQgCAEAAAGQAAAHACADIAKAVIABACQgKALgJANQgaArACAvIACARIAAANQAAAZANAeQAFAKAJALQAKAQAMAMQAWAUAhAEQAMACAPgCIAUgDQAIgBAOgHQAUgKAXgTIAIgIQAHgGAOgTIAYgkIAHgMQAHgMAFgOIADgJQADAHANASQATAYAhAHQAgAJAggMQAegJAdgbQAkggAXg3IALgeQAEgSACgSIACgfQAAgigFgOQgJgYgEgIIgLgQIAfgsQAFgHgDgLQgCgHgFgFIABgBIARALIAjAQQARAGAXAEQAxAHA/AEIAfADQAhABAggBQA5gDAOABIAWAHIAHAEIACACIAEAOQADAfgEAjQgFAXgIAUQgeBEg0BEQgUAXgfAaIg3ArQgTAPgdAaIgnAiQgSANgFAKQgLASgEAWIgHAiQgIAqgMAmQgMAngJAmQgHAdgFAuIgBAIQgQAFgGABIgagCIgRgCQgLgBgLgDIgegIIgEgDIgGgGQgIgKgLgXIgLgdQAOgIAugYQANgHAEgQQAEgQgHgOQgJgOgOgDIgKgCQgJAAgLAGIgkATIgdAQQgmAXgZAiQgMANgGANQgJAUgHASQgGASAAAhQgBAfAJAQQAEAHAIADQAIADAIgCQAPgEACgQQAIgQADgMIAJgfQAHgNAJgNIADgFQADAMAKAWQAIAPAPAPQANANAVAIQAIAEAbAEQASAEAQAAIAZAAQAWAAAMgCIgtCkQgMAmgPAnQgRAkgRAgQgOAcgbAnQgRAWgbAdQgTAUgbAWQgvAhglAUQglAVgxAVIgvAQQgOAEgeAFQgjAEgmAAIgSAAg");
	this.shape_87.setTransform(-88.5,10.1,0.815,0.815);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgwBoIgIgFQgHgFgLgNQgIgLgFgLIgCgZQgBgRAAgOIAFgPQAIgQAJgPQAJgLAWgSQAPgLAbgOQAUgHAKgCIAPABIALACIACACIAFAFIAHALIANAUIACAJQACAOgBAQQgEASgFAKQgGAOgPAVIgOAUQgJALgVASQgKAHgPAJIgQAEIgQABgAgSgcQgJACgIALIgDAGQgGAIADANQABAJAJAHQAHAFAKABQAOABAIgLQAKgLAAgNQABgPgQgLQgFgDgIAAIgIABg");
	this.shape_88.setTransform(-95.4,-24.1,0.815,0.815);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgqBtIgLgDIgHgEIgHgHIgDgGIgCgIQgCgQABgVIADghQAGglANgiQAJgRAMgOIABgCQAHAAAGgDIARgKIAHgCIATAAQAIABAOAFIAKAGIAMAZIADAIQABAUgDAeIgDAOIgGATQgOAcgOATQgOAQgMAKQgJAHgLAFIgPAEIgIABIgIgBgAgbgDQgPADgIAMQgLAPAKARIAFAGIACAGQACAEAHAFQAGAEAHgBQAJgBAEgDIANgMQAFgDADgKIABgFQADgHgBgHQgCgHgFgFIgFgEIgFgEQgIgFgJAAIgIACg");
	this.shape_89.setTransform(-73,-33.1,0.815,0.815);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhsBSIBGgaQAIgDAFgHQAEgHgCgIQgDgGgFgEQgFgEgGAAIgGABIgiAKIgOAEIAIgsIAKACQAPAEAUAAIAmgEQAHgCAHgHQAKgKAAgOQAAgJgFgJQgHgNgMgDIgxgGIgLgDIgEgCIAQg0IAJAEQAVAKAaAFQALACAYAEQAQABAhgFQAQgCAXgKIgOAhIgOAZIgSAbQgiAsghAgQgpArgmAfIg7Alg");
	this.shape_90.setTransform(-44.4,17.5,0.815,0.815);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(10,1,1).p("AT3AAQAAIOl1F0Ql0F1oOAAQoNAAl0l1Ql1l0AAoOQAAoNF1l1QF0l0INAAQIOAAF0F0QF1F1AAINg");

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#9933CC").s().p("AuCOCQlzl0gBoOQABoNFzl0QF1l1INAAQIOAAF0F1QF0F0AAINQAAIOl0F0Ql0F0oOABQoNgBl1l0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knopPaars, new cjs.Rectangle(-199.5,-209.9,434.4,342), null);


(lib.knopGeel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2C2C").s().p("Aj2FEQgIgIgNAAQgNAAgIAIIgFAGQgCgTAAgKQACgqAKgaQALghATgiQARgiAPgWIBKhuQAUgdAYgeQAhgrAJgKIAtgwIABgBIAUgEQALgBApACQAPABAMgMQALgMAAgPQAAgQgLgLQgIgHgKgDIAOgMQAogiBKgzIADgCIATAGQAOAGAOAIQAQAIAPgEIAHgDIAOAZIgfASQg7Akg+AtQgfAZhNBIQgkAkg5BFQgdAmg1BNQgpA7gcA9QgHATgEAUQgBARABAWIACAMIgVAFQgBgIgHgHg");
	this.shape.setTransform(-150.9,1.8,0.775,0.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C2C2C").s().p("AgUBoQgJgCgFgIQgGgHAAgJQAAgTAFgXIAKgoQAGgaAFgPQAKggAWgbIAHAmQADAQAEAMIAJAUIgMArIgHAbQgEARgFAQQgEALgJAGQgFADgHAAIgIgBg");
	this.shape_1.setTransform(-175.1,35.6,0.775,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2C2C").s().p("AgNAeQgEgLgDgRIgHglIAGgGQAIgJAMAAQAMAAAJAJQAGAGACAJQACAPgKALIgFAFQgIAMgFALIgGAXIgJgVg");
	this.shape_2.setTransform(-171.5,30.2,0.775,0.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C2C2C").s().p("ABDCQIgpgaQgYgSgWgUIg2gxIAEgUQAGgVAGgOQACgGgEgHQgEgGgHgCIgEgBQgHAAgCACQgGADgCAIIgOAgIgTgTQgHgJgOgTIgJgOIgFgIIAHgWQAGgMAIgMIAEgEQALgMgDgPIAVgGQAFATAEAPIAIANIATAWIAaAWIAZAZQALALARAPIBIA2IAYAPQATANAOAMIASAUIAEAGIgJATQgLgHgOACQgOABgKAKIgVATg");
	this.shape_3.setTransform(-159.5,39.6,0.775,0.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2C2C").s().p("AgUBFQgIgHAAgLQACgqALgrQAFgRAHgVIACgDIACACQAKAKASAVIgHBdQAAALgIAHQgGAIgKAAQgLAAgHgIg");
	this.shape_4.setTransform(-167.6,45.4,0.775,0.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2C2C").s().p("AgUAIIgDgCIANgfQADgIAFgDQACgCAGAAIAFABQAHACAEAGQAEAHgDAGQgFAOgGAVIgFAUQgRgVgKgKg");
	this.shape_5.setTransform(-165.9,39,0.775,0.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C2C2C").s().p("ApFNfIgIgdIgKgxIgMg2IgLg7QgIgwgBgRIgEg9IgLh2IgEg3QAAg8ACg8IAEg+QACgZAGgsQAPhjAEgTQALg2ARg7IATg9IAVg3QAfhLAUgjQAdg1Alg1QAegsAzguQA0guApghIA5gsQAfgYAPgJIBmg+QAbgRAZgMIAwgYQBegpAbgJQAbgKAagGQApgIAVAAIAeAAQAhABAYAEQAWACAqALQApALAWAMIAbAPQAMAGAUASIAYAPQAWAIALAHQAPAKAHAHQAJAJAHAKIgNgNQgJgHgfgUQgIgFgMgBQgKABgJAFQgKAFgFAJQgIAOAEAQQAEAPAOAJIACACIgFgCQgJgCgNgHQgRgGgIgFIgQgLIgngTQgQgHgcgHQgTgFgXgFIgsgCQgjgCgWACQgrAIg1ASQgYAJhEAcIiSBOQgvAbggAVQgnAbgdAWQgtAkgdAaQgVATgQAQQgNANgOASQgqA3gZAvQgRAggLAYIgmBdQgHASgJAfQgQA1gJAlQgMAygTCIIgBADQgGAzgCBFQgDBXADAfIAEA7IAGA8IAGA4IAFA4IAYCyIAGAoIAAAMIg8ALIgFgOg");
	this.shape_6.setTransform(-106.4,-98.2,0.775,0.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C2C2C").s().p("AAagmQALACAHAIQAMALAAAQQAAAOgMAMQgLAMgQgBQgogDgKACIgWAEQA6g4AXgVg");
	this.shape_7.setTransform(-147.8,-13.7,0.775,0.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C2C2C").s().p("AjKCLIACgKIAUgXQANgOAQgVQAFgKAAgKQAAgKgFgIQAIgSgMgQIALgSQAPgUAggbQAagVANgHQAjgUApgNIAVgGQANgEAVgCIBEgCQAQABAPAHIgDAFQgFAIAAAJQAAAHAGALQACAHAJAEQAIAEAIAAIAFAAIgBADQgGALgOAEQgJADgJgDIgBAAQgTgCgKAAIgVABIgvADQgbAEguARQgWALgfAXQgMAKgJAKQgIAMgGALIgOAsQgMAHgsAeQgKAHgDAKIgBAEg");
	this.shape_8.setTransform(-134.9,48.3,0.775,0.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C2C2C").s().p("AgnB8QgwgEgjgbQgQgMgGgIIgQgTQgMgSgIgRQgNgcgFgSQgHgXgCgVQgCgYADgcIAWACQgBALAFAHQAFAKAMADQAMAEAJgHIASgLIABAKQADATAJAZQANAaAOAUIAOANQAHAFAGADQALAEAIABQAMABALgBQApgIAtgSIBMgcQATgGASALQASALAFASQADAHgBAMQgDgPgKgJQgNgNgUAAQgTAAgNANQgNANgBATIgBA4IgTAIQgYALgdAIQgPAFgWAEQgTADgRAAIgKAAg");
	this.shape_9.setTransform(-134.6,68.7,0.775,0.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C2C2C").s().p("AgIAUIgSgIIgIgFIAUgTQALgJANgCQAOgBALAHIgRApIgGAAIgUgEg");
	this.shape_10.setTransform(-150.5,51,0.775,0.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C2C2C").s().p("AgTAQIAJgfIADgGQAHgCAFgDQAIgEAHgKIACgHQAFAIAAAKQAAAKgFAKQgQAUgMAOIgUAXQACgPAFgRg");
	this.shape_11.setTransform(-148.4,54.5,0.775,0.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C2C2C").s().p("AACgUIAGAFQAFAFACAGIgDAGQgGAJgHAFQgGADgHACg");
	this.shape_12.setTransform(-147.9,51.2,0.775,0.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C2C2C").s().p("AgTAIQgHgJgDgIIA7gLIgCAWQgCAKgKAGQgGADgHAAQgOAAgIgNg");
	this.shape_13.setTransform(-148.8,-29.5,0.775,0.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C2C2C").s().p("AgBAHIgGgFIAIgSQALAQgHASQgCgGgEgFg");
	this.shape_14.setTransform(-147.1,49.4,0.775,0.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C2C2C").s().p("Aj1GDQgJgCgGgJQgEgHAAgGQgDgfADgaIAFg2IAIg5IALgzQAHgoADgKQAHgVALgcQAPgpAIgPIAXguIAZgtIAcgqIAbgpQAPgVAVgZQATgXAOgPQAUgYAQgNQAfgaAPgIQAXgMAWgKQAegOAQgDIAXgFQAUgDALAAIAvADIAJABQgYAVg6A5IgVAHIgxAYIgrAaQgWASgbAdIgWAcQgJAJgJANIg1BMQgIALgQAeIg1B9QgKAZgEAWIgLAuIgUBcIgVBeQgCAKgKAFQgGADgHAAIgGgBg");
	this.shape_15.setTransform(-166.4,13,0.775,0.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C2C2C").s().p("AgNAsQgLgEgGgJQgFgIABgKIABgEQADgJAKgHQArgeAMgHQgFAUgDASQgCARAAATIgRALQgGAEgHAAIgIgBg");
	this.shape_16.setTransform(-146.3,58.3,0.775,0.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C2C2C").s().p("Al8LvQgLgCgHgJQgLgNgCgJIgOiMQgCgYgBgxIgBhAQAAhCgDgvQgChFADgvIALh2IAOhzQANhIAOgoQAUg7AVgyQAhhPAQgeIAdg3QAPgbANgSQAdgpAKgMIAogwIARgTIAbgbQBCg+BAgeQAlgSAdgJIA8gRIABgBQAEAIAHAKQAIANAOABQAIgBAFgDQALgFABgKIADgYQAngGAZABIAKAAQAYAAAYAEQAVAEAQAFQAgALAiAQQgoAWgsAdQgVgHgMgBQgmgDgpAEQhSAMhNAfQg0AWgsAiQgsAkg0A5Ig0A/QgVAdgEAIQgNATgOAZQgWArgSAqQgdBFgSAzQgMAigGAbIgIAiIgcEDIAAAiQgBAVADAhIAEA1IADBiQALgYAMgWIANgZQAKgQAIgJQAUgTAUAGQARAFAJASQAJATAFAOQAIAaAJAhQAJAiAWBDIAlh8QAMgmAJgSIAEgIQAHgKAFgBQAKgFAFAAQAJAAAHAFQAKAFAGAOIAIAZQAEAKAJArIANA2QALAlAHAXIAHgWQAOg5AIgdQAHgWAHgTQAQgmAGgMQASgiAhgiIAIAFIASAIIAVAEIAHgBIgDAGIgJAhQgFARgCAOIgCACQgMASgRAkQgNAlgHAaIgcBpQgOAogHARIgIAPQgJAPgKAEQgNAIgKAAQgOAAgIgHIgMgKIgKgNIgFgKQgag3gNhfIgUBTQgOA9gFANQgKAdgQAKQgMAGgQgCQgOgBgKgKQgIgIgFgNIgHgXIgNg1IgOg2IgMg3IgJgyIgQAiIgZBNQgIAegHArIgIBDQgCALgJAHQgIAJgKACIgKABIgLgBg");
	this.shape_17.setTransform(-162.7,26.8,0.775,0.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2C2C").s().p("AgdHSQgLgRgEgOIgIgaQgFgUgIg4IgLhRIgIhIIAAhHIAJiXQAFhRAShDQAUhUAXg8IANglQAFgOAMgVQAPgdAVgjQAEgHAJAAQAEAAAEACQAFADACAGQABAGgDAGIgfA9QgRAugSBUIgPBKQgGAhgDAdQgFAogGBuIgGBOQgCAqAAAjIAAASIAVC1IAGAeQAEAUAIAVQAEAIgGAKQgEAHgJAEIgHABQgMAAgIgMg");
	this.shape_18.setTransform(-135.1,-82.6,0.775,0.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C2C2C").s().p("AgFAgQgOgHgPgGIgSgHQAsgcAngVIADACQAOAHAEARQAEAPgIAOQgFAJgMAGIgHADIgKACQgKAAgJgGg");
	this.shape_19.setTransform(-131.4,-25.4,0.775,0.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C2C2C").s().p("AjUCiQgJgFgCgJQgDgJAFgKQAEgFAFgDQAWgQASgKIAmgTQAugVAcgRIAwggIADgCIADgDIACgBIARgNIgBABIADgCIABgBIADgDIBIg+QAigeAsgtQAKgKANAAQAPAAAJAKQAJAJAAAOQAAAOgJAJIgqAqIiBBxIgUAQIg4AlQgaAOg1AVQglAPgvAQIgGABQgGAAgGgEg");
	this.shape_20.setTransform(-127,0.9,0.775,0.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C2C2C").s().p("AiHAcQADgRAGgUIAkgTIApgRQAjgLAugGIAagCIAHAAQAKABASACIARAFQAOAEAIAOQAIAOgEAPQgEANgNAIQgIAFgMABIgRABIguAAIg+AGQgRACgOAEIgkANQgZAKgSALQgBgTACgSg");
	this.shape_21.setTransform(-133.7,55.5,0.775,0.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C2C2C").s().p("Ah6BOIgmgDIgIgBIgBAAQgJADgIgFQgIgEgCgJQgDgJAFgIQAEgJAJgCQANgDAWAEQAeADARgDQAjgFAzgUIADgCIABAAIAAAAIABgBQA0gVB4g5QAGgDAGAAIAGAAQAIADAFAIQAFAHgCAKQgDAKgIAEIhqAxIhKAhQgyAVgjAHQgWADgSAAIgEAAg");
	this.shape_22.setTransform(-137.5,33.7,0.775,0.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C2C2C").s().p("AgDAYQgJgFgDgHQgFgLAAgGQAAgIAEgIIAEgGIAGAEIARANQAHAHACAKQACALgFAJIgFABQgJAAgGgEg");
	this.shape_23.setTransform(-120.6,40,0.775,0.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C2C2C").s().p("AgsgEQAAgTANgNQAOgOASAAQATAAAOAOQAKAJACAQQgBAJgFAIQgJAQgUAGIgnAPIgRAIg");
	this.shape_24.setTransform(-122,71.3,0.775,0.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C2C2C").s().p("AkWPjIi6gaQgagFgSgHQgkgPgMgJQgXgQgUgSIglgiIACABQAIAAAGgGQAFgFAAgIQAAgIgFgGQgGgGgIAAQgIAAgFAGQgGAGAAAIIAAACQgSgTgMgSQgggzgPhOQgKgygCglQgCgggBguIgBhPIgBhnIASgIIAogOQAUgHAJgQQAFgIABgKIABAIIAKCqIADBTQABAxADAhQALA9ASAxQAHAOALAQQAUAWAsAiQAbAVATAJQAXAHAmAGICXAWQAcADAvgEQBCgKAjgKQAwgNA1gWQBTgmBTg8QAhgaAiggQAegcAdglIANgSQASgcALgYQAXg5AShJQAUhSAGgnQAHhEAHgjIAIgoQAGgpATgQIAuguQAgghASgXQATgYAOgZQAMgWAOgeIAGgPQgnAJgjgCQgngDgVgGIgegMIgTgJQgTgNgHgHIgIgJQAAgNgEgYIgGgYQgIgdgYgXIgPgPIgHgpQALgTAKgQQAHgLgEgNQgDgMgLgHQgGgEgJAAIgHABQgIgbgNgkIgXg9QgLgegLgiQgIgcgLgfQgLgWgSgdIghgyIgcguQgRgegLgRQgJgLgQgNIgCgCIAYgQIA0gtIAagaQAMAKAIAKQAWAZAZAoIAoA9IAFAHQgVAkgHAOQgHAMABAOQACAOAKAKQAMAMASAAQASAAALgMIAQgTIAAAAQAOAcAVA6QgiATgPALQgJAFgFAJQgIANAFAQQAEAPANAHQAQAKANgGQANgFAkgTIABADQAfBJAGASQAQArAJBLQAGAiALAcIALAgIAEAGIAGAEQAMAEANACQAbACARgCIAjgEQAWgDARAGQAcAJAOAPQAfAiADAtQACAUgJAqIgIAbQgMAlgQAfQgfA3gxAwQgbAagSAPIgZATIAAAEQAAAJgEAfIgHAuQgGA2gEAbQgEAXgMAuQgQA+gdBLIgNAhQgVAzgkAtQghAngNAOQgwAyg+AyQgbAWgrAbQgkAYgeASQhPArhMAXQhSAZhTAJQgTACgSAAQgQAAgPgBg");
	this.shape_25.setTransform(-67.7,49.2,0.775,0.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C2C2C").s().p("AgLF/Igfh8QgJgkgHg8QgDgUAAgTQgCgZAAgaQgBg5ABgbQACg6AEglQAFguAKgvQAIgqAMgtIANgtQADgNANghQAFgMAIgFQAHgEAIAAIAHABQAMADAGAKQAHAMgEALQgNAegGAWIgMAxQgKApgHAwIgFAlQgFAxgCCCQgBA5ABAdIASCiIAKBVQAAAIgHAHQgHAGgIAAQgPAAgFgQg");
	this.shape_26.setTransform(-121.9,-88.2,0.775,0.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C2C2C").s().p("AgkCYQgCgMgIgGIgSgNIgFgEIABgEIAJgQIAOgqIAHgZIADgSQADgtACgWIAEgmQAAgKgCgSIAqgXIAtgbIADAJQAHAgABAVQABAWgDAVIgGAyIgGAkQgHAagGAMIgTAqQgKAUgJAMQgUAcgOAIIAAAAQgEADgGABQAFgKgCgKg");
	this.shape_27.setTransform(-116.1,28.8,0.775,0.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C2C2C").s().p("AgCADQgEgDgBgHQAHAIAIAHQgGAAgEgFg");
	this.shape_28.setTransform(-117.7,115.7,0.775,0.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C2C2C").s().p("AgcAcQgPgHgFgTIAGgCQAwgUAUgGIAXgGIgMAaQgHAPgIAJQgPAPgPAAQgKAAgKgFg");
	this.shape_29.setTransform(-119,-31.4,0.775,0.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2C2C2C").s().p("AgBATQgIgHgJgJIAAgDQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAg");
	this.shape_30.setTransform(-116.9,114.8,0.775,0.775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C2C2C").s().p("AgpAlIgDgOQgEgVAJgPQAKgRATgGQAGgBAGAAQANAAAMAHQANAHAGAMIguAaIgpAXg");
	this.shape_31.setTransform(-115.1,16.4,0.775,0.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C2C2C").s().p("ABRAwQgFAAgEgDQgrgZgLgFIgVgHIgWgGQgSgBgRACQgTADgJADIgTAHIgBABQANgRAQgOQASgRATgQIANAAQAZACAJADQAXAGASAJQAOAGAMAIIAZAPQAJAFACAKQADAKgFAJQgHAMgNAAIgFAAg");
	this.shape_32.setTransform(-104.3,-39.6,0.775,0.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2C2C2C").s().p("AgmAkQgJgCgFgJQgFgIACgKQADgJAIgFQAlgTAggGQARgDAPgBQgUAQgSARQgPAPgNAQIgLAGQgGADgGAAIgGgBg");
	this.shape_33.setTransform(-112,-40.5,0.775,0.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C2C2C").s().p("AkrDbQgGgGAAgIQgBgIAEgHQAUgnAPgUQAbgjASgUQAmgnAOgOIAxgqQAxgpAfgVIArgfIAngXQA4ggAagMIAygWIAegLQAWgHAlgFIAKgBIAJABIAIADQAMAIAEANQAEAPgHAMQgIAOgNACQgpAGgYAIIgXAJQg4AYhYAzQg3AhhLA5QgeAYgOAOIgZAXIgUATQgwAxgdAjIgSAYQgFAHgMAAQgJAAgIgHg");
	this.shape_34.setTransform(-126.5,-6,0.775,0.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C2C2C").s().p("AiKCEQABgPAFgOQAQgsALgXQAMgZAhglQAUgZAYgWQAKgLANgLQAlgdAUgKQARgIAPgFIAUAWQAHAIAHAEQADADAHADIgCADQgGgCgEAAIgGABQgLADgFAJQgFAJACALQADALAJAFIARAIIgTAHQgWAKgdAWIgEADQgPAAgQAEQghAEgkAUQgJAEgCAKQgDAKAFAIQAFAJAKADQAJACAJgFIALgFIgDADQgMARgKAXIgGANIgYAGQgUAGgwAUIgHADQgCgIABgIg");
	this.shape_35.setTransform(-112.1,-42.7,0.775,0.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C2C2C").s().p("AgtAUQgJgEgDgMQgCgKAFgJQAFgJALgDIAGgBQAEAAAGACIAEACQAjASApAXQgZgBgRACQgWAEgWAHg");
	this.shape_36.setTransform(-99.7,-48.8,0.775,0.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C2C2C").s().p("AAxA8QgogOgygJIgZgCQgogYglgRIgDgCIABgDQALADAMgDQAQgEAGgSQADgOgGgLIgFgLIAYgCIArADQAjADAmALIAYAHIAUAIIAZAKQAWAOAZAWIgqAhQgWARgQAOIgTgLg");
	this.shape_37.setTransform(-90,-50.2,0.775,0.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C2C2C").s().p("AAAAcQgHgCgDgDQgHgEgHgIIgUgVQAZgKASgDIAlgGIAEALQAHALgDANQgGASgRAEIgLACQgGAAgEgCg");
	this.shape_38.setTransform(-101.2,-53.3,0.775,0.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2C2C2C").s().p("AASAmQgfgGgQgDQgOgEgHgNQgHgMAEgOQADgLAJgHQAKgHAMAAIAJABQAWAGAfAGIANABIgGAPQgJAXgEAbg");
	this.shape_39.setTransform(-99.9,40.1,0.775,0.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C2C2C").s().p("AjmBGQALgGAFgJQAIgOgEgRQgEgRgOgGIgDgBIBRglQAFASAPAIQAcANAXgXQAIgJAHgQIAMgaIBSgRQApgFAUAAIAaABIBzARIgTAiQgHAMACAOQACANAKAIIgJgBIg2gFIgigDQgfgBgdADQg1AHguAOQgiAKgwAUQg9AaglAUg");
	this.shape_40.setTransform(-111.1,-28.3,0.775,0.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2C2C2C").s().p("AgbCZQgegCgNgEQgXgIgOgIQgVgOgKgLQgTgTgJgRQgGgLgHgSQgHgSgCgKQgGgeACgRIADgYIAjADQAOABAKgLQAKgLAAgNQAAgOgKgKQgKgJgOgBIgQgBQAGgPAIgOIAfATIABAAQAKAJALAAQANAAAIgJIACgCIARAAQgKANgMAaQgLAdgGAgIAAATQACAPAHARIAMATIAOAOIAPAKIAUAFQAVACAWgCQAMgCALgEQAdgOAggWQAPgNAMgOQANgRADgGIAMgaIAKgiIAJABQgCAVABAOQACAWAHAWQAGAUAKASQgKASgXAaIgRAQQgMALgNAIQgcATgKAFQgYALgNAEIgfAFIgZACIgOgBg");
	this.shape_41.setTransform(-82.4,47.8,0.775,0.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2C2C2C").s().p("AgJAeIAAAAIgfgTIANgVQALgOAMgNIAKAHQAMAHAPAKQAIAIABANQgBAKgGAJIgCADQgIAIgNAAQgLAAgKgIg");
	this.shape_42.setTransform(-91.4,35.1,0.775,0.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2C2C2C").s().p("AhbBtIgIgGIAPACQASAEAOgIQAPgIAEgRQAEgQgIgQQgJgQgQgDIgZgFQAOgWAQgVIASgZQAMgCAGgKQADgFAAgIIATgVQALgLAJgIIABAAQAQAOAOAPQATAUAdgHIgkAfQgXAUgeAmIgUAeIgbAuQgIAOgRAFIgKABQgLAAgJgFg");
	this.shape_43.setTransform(-86.3,-35.8,0.775,0.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2C2C2C").s().p("AABAiIgigDQAEgbAIgXIAHgPIAPABQANABAKAKQAKAJAAANQAAAOgKAKQgJALgMAAIgCgBg");
	this.shape_44.setTransform(-94.4,40.8,0.775,0.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2C2C2C").s().p("AACAlQgQgLgRgQQgHgIAAgKQAAgMAHgIQAJgJAMAAQAHAAAGAEIAiAWIACABQgMAMgKAPIgOAVg");
	this.shape_45.setTransform(-94.8,33,0.775,0.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2C2C2C").s().p("AlcEqQgLAAgKgFIgIgHQgMgMAAgQQAAgRAMgMQALgLASgBIA9gEQAQgCAQgEIAlgKIApgNIAdgMQBEgfBLgrQAzgfBLg4QAYgSAHgHQAPgNASgTQAXgZAagiIAZgjIATgiQAYgpAKgVIAIgVQAIgUANgLQAOgLAMAAQgMAEgHANQgGANAEANQAEAOANAHQAMAHAOgEIABAAIgJAbIgvBjIgNAVQgHANgVAbQgNATgYAbQgUAWgPAOIgpAjQgXATgUAOQgbAUgmAYQgFgMgNgHQgMgHgNAAQgHAAgGABQgSAGgKARQgJAQAEAVIADAOIAAABQgjAUghAOQgsAUgWAIQgYAIgoAMIgiAJIgbAGQgYAEgWAAQgPAAgOgCg");
	this.shape_46.setTransform(-117.2,3.9,0.775,0.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2C2C2C").s().p("ABqBmQAGg2gCggQgEgPgEgKIgEgGQgFgHgBgMIgNgBQggAAgRACQgZAEgkAQQgYAKgPAJQgVARgaAhIgRgBQAHgJAAgKQAAgOgJgIQgOgKgMgHIgMgGIAdgcIACAJIAAAEQgBANALAKQAJAIAOAAQANAAAKgIQAJgKABgNQAAgRgLggIAIgCIAZgJQAhgMAXgEQATgCAQAAQARAAATACIAmAGIAVAEIASAJQAJAGAEAEIAHALQADAEABAFIACADQgSAZgLAZQgJATgOAsQgFAQgCARIgBAFg");
	this.shape_47.setTransform(-78.2,32.9,0.775,0.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2C2C2C").s().p("AgMAqIgPgDQgJgJgCgOQgCgOAGgLIATghIAYAEQAQAEAJAQQAIAQgEAPQgEAQgPAJQgKAFgKAAIgLgBg");
	this.shape_48.setTransform(-91.9,-30.9,0.775,0.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2C2C2C").s().p("AA1AwIhLgwIhEgmQAWgHAXgEQARgCAZABQApAaApAbQAJAHACAJIABAHIgVAZIgGAAQgGAAgFgDg");
	this.shape_49.setTransform(-94.8,-43.5,0.775,0.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2C2C2C").s().p("AALgMQAAAIgEAFQgGAJgLACg");
	this.shape_50.setTransform(-88.6,-40.6,0.775,0.775);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2C2C2C").s().p("AgLAdQgNgHgEgOQgDgLAGgNQAHgNAMgEIAAAAQAPAAALALQAKAKAAAPQAAARgKAJIgEADIAAABIgBAAIgKABQgIAAgIgFg");
	this.shape_51.setTransform(-88.2,-16.7,0.775,0.775);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2C2C2C").s().p("Ah0BqIADgFQACgEABgEQAAgEgDgBIgBAAQgDAAgBADIgBAEIgJANIgBABIAAABIgCAAIgUgCQgTgCgJABIgFAAIAAAAIAEgDQAKgJAAgRQAAgQgKgKQgLgLgQAAIAAAAIAEgCQASgEAPABIAPACQAYACAYgCQAmgGAogNIAjgOIAigNQApgTAQgKIA1giIAYgVIARgRIARABQgJAigRAdIgmAyIgBAAIAQALIgWANQgcAQgVAJIg+AZQghAMgUAGQgeAGgdAEQgPADgTAAg");
	this.shape_52.setTransform(-72.6,-22.5,0.775,0.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2C2C2C").s().p("AgbAUIgJgfQgCgNAGgKQAFgKAMgDIAIgBQAHAAAHADQAHAEADAHQALAXAHARIADAHIgUAJQgQAIgSAQIgDADg");
	this.shape_53.setTransform(-88,26.2,0.775,0.775);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2C2C2C").s().p("AgVAfQgLgKABgNIAAgEIgCgIIADgCQATgRAPgIIATgJQALAgAAAQQgBANgJAKQgKAJgNAAQgNAAgJgJg");
	this.shape_54.setTransform(-86.9,30.3,0.775,0.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2C2C2C").s().p("AgMAsQgLgDgJgJQgIgIgCgFQgHgOABgIQAAgMAFgIQAJgNAHgDQALgFALgBIADAAIAJAAQANACAGAFIADABQAKAHAEAHQANAUgMAXQgIAPgQAHQgKAEgKAAQgFAAgHgCg");
	this.shape_55.setTransform(-83.3,43.5,0.775,0.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2C2C2C").s().p("AgJALIABgBIAAgBIAJgMIABgEQABgDADAAIABAAQADABgBAEQAAAEgDADIgCAEIgEAFIgJAAg");
	this.shape_56.setTransform(-82,-14.8,0.775,0.775);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2C2C2C").s().p("AAAAAIgEAAIABAAIAIAAIAAAAIgCABg");
	this.shape_57.setTransform(-82.4,-13.8,0.775,0.775);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2C2C2C").s().p("AgaAoQgOgPgQgOIgBAAQAPgOAWgRIApghIAXAXQALALADAQQACAOgGAOIgiAcQgHABgHAAQgSAAgOgOg");
	this.shape_58.setTransform(-80.1,-45.5,0.775,0.775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2C2C2C").s().p("AgQArQgLgFgFgKQgIgOAFgSQAFgPAIgJQAIgJAQgGIAHgCQAJAAAJAHQAIAGACAJQACAJgDAIIgBAIIgBAEQgCANgFAHQgJAPgOAEIgIABQgGAAgGgDg");
	this.shape_59.setTransform(-76.4,-113.3,0.775,0.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2C2C2C").s().p("AgiC9IgSgEQgXgHgLgHQgSgLgKgMQgMgOgIgUQgIgVgDgUIgFg7QAAgNACgOQADgTAEgKQARgqAWgeQARgXAvggQAfgUAigDIANAAIAVABQAKABAFACIAMAFQAFADADAFIAEACIANAKIAMAOQAFAGADAFIADAGIgMAlQgFASAAAUQAAAJACARIADAWIADATQABAHAFALQAEAMAFAIIAJAMQgDALgHANQgGAOgGAKIgQAUQgLANgTAPQgVAQgVAJQgaALgRABIgDAAQgOAAgPgEgAAOiIQgIAEgMAJQgdAWgOAQQgMARgQAkQgFAMgCAOQgCATACAYQAGAbAGASIAIANIAFAFIAHAEQAIAEALABIAYABIAJgDQAPgHAUgPQAOgMAMgOQANgSAHgOQAFgPADgSQADgZgBgNIgGgXIgGgRQgIgQgIgMIgGgGIgTgLQgHgCgEgJg");
	this.shape_60.setTransform(-74.7,-112.6,0.775,0.775);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2C2C2C").s().p("AgfBhQgHgXgCgVQgBgOACgWIABgFQACgQAFgQQAOgsAJgTQAKgaASgZIABACQAEAGAGAQQAFAMACAKQACAIABAbIgBAVQgDAbgFAfQgEAVgFAJIgXA4IgNAWIgCACQgKgTgGgUg");
	this.shape_61.setTransform(-66.2,39.6,0.775,0.775);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2C2C2C").s().p("AADBUQgEgHgFgNQgFgKgBgHIgDgVIgCgWQgDgQAAgIQAAgUAFgSIAMgmQAEAJAHATIAGAYQAGAVAAAPIAAAbQABAPgBAOQgCAbgCAHIgEAPIgJgNg");
	this.shape_62.setTransform(-63.9,-115.4,0.775,0.775);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2C2C2C").s().p("Ag3DhQgWgCgagHIgSgGIgVgJQgTgKgNgNQgNgNgMgSIACgBIANgWIAZg4QAEgJAEgVQAFggADgaIACgVQgCgbgCgIQgBgKgGgNQgFgPgFgGIgBgDQAVgdAUgRIAagUIAGAWQADALAKAFQAJAFALgCQAKgDAFgKQAFgJgCgKIgJgiIAMgEIAWgEIgDAGQgFALADAJQACAJAJAGQAJAFALgCQAKgDAFgJIARgjIAUACIgJARQgGALADANQADAMAMAHQAKAGANgDQANgEAGgLIANgZIAUARIAAAAQAHAgAZA5QADAJAKAPIAMAPIABAEQgCAVgEATIgCALQgIAcgOAhQgNAdgOATQgPAXgLALQgOAPgLAIQgdAZgkAPQgaAMgRAEQgXAEgLAAIgFgBgAg2h7QgKAEgOAJIgJALQgMASgFAJIgKAWQgNAjgIApQgBATABAJQADARAHARIAKATIAJAJIAZAOQAWAJANACIAOAAQASgDARgHQAZgMAXgRQAOgLAJgLQAKgPAJgUQAHgRADgMIAIggQACgSgBgOQgEgVgIgYIgEgIIgQgTQgEgGgGgGIgLgGIgSgFIgVAAQgqAIggAMg");
	this.shape_63.setTransform(-51.9,38.6,0.775,0.775);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2C2C2C").s().p("Ak+JuIgfhFQgVgugEgLQgFgOgJgmIgJgzQgEgVgDgoIgFg3QgDgQgBgUIAAgeIAAh/IAAg/QABgegDggIgCgcQgBgRADgMQAEgPAMgIQALgIAPABQAOAAATAFQALACAUAIIAeAKIgCgMQgIgsgDgXIgCgbIACgWIAGgOIAJgLQALgJAEgCIALgGQAhgQAkgMIAhgKIAZgFIgEgcIgBgMIACgRIAGgPIAGgHQAHgJAKgHQAHgEAUgJIARgFQAWgGARAAIA/AAQAUAAAeAFIgDgpQgHgkgBgKQAAgSANgOQALgKAOgDIAYgDQAogCAhAAQAbgBApAEIgXgcIgNgOIgTgNIALADIAIAFIAHAHQAKAOANADQAPAEAPgIQAOgIAEgQQACgHgBgIQgBgJgEgGIgDgDIAOAPIAXAYIAYAfIARAYQAJARADAKQAFAQgDAOQgDAKgIAJQgMgLgNgGIgpgVQgIgFgUgHQgEgCgFAAQgJAAgIAFQgNAIgDAMQgEAOAHANIABAAQgXgCgcgBIgugBIgGAAIAEAlQAGAfAAAIQABAXgLAPQgHALgOAIIgOAFQgPADgFgBIhUgJQgxgEgPACIgTAEIADAOIAGAYQADASgBAFQAAALgJAPQgJASgWAFQgJACgdADQgkAIgXAHIgrAOQAFAaAGARQAKAgADAgQACALgBAJQgBAcgZARQgVANgWAAQgVAAgPgFIgfgNQAFAYACAYQAJBcABAdIgBA+QgBAkAAAcQABAVAFAoIAEA6QAKBEARAsQAMAcAKAdIATA2IARAgIgmAGQgSADgZAJQgKgOgGgNg");
	this.shape_64.setTransform(-81.2,-104.5,0.775,0.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2C2C2C").s().p("AALA0QgMgDgKgNIgHgHIgIgFIgLgDIgDgCQgNgIgFgPQgEgQAIgOQAFgJAKgFQAKgFAKAAQALAAAIAFQAfAUAIAHIANANIADAEQAEAFABAIQABAJgCAHQgEAPgOAIQgKAGgKAAQgFAAgFgCg");
	this.shape_65.setTransform(-60,-154.2,0.775,0.775);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2C2C2C").s().p("Ag6A0IABAAIAlgzQASgcAIgiQAQAIAMAKIAZATIgaAZIgzAtIgYARIgQgLg");
	this.shape_66.setTransform(-56.9,-26.1,0.775,0.775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2C2C2C").s().p("AhTNoIgGgRIA7ghIAygfIAvgjQAjgdAlgoQAbgcAggqQAXggAQgdQAIgOAWgzQAHgRAEgPQAEgMAEgZIADgnQABgTgCgRIgHgjIgGgkQgGgogIggIgWhFIgLglQgEgOgHgOQgSgqgFgRIgJgdIgKggIgMgZQALgJANgIQAOgJAFgQQAFgRgJgPQgGgKgKgFQgKgGgLAAQgLAAgJAGIgHAEIgBgFIgvh1IgHgbQgFgcAGgQQAEgJAIgMIAjgxQAhgrATgiIAWgmQAOgXAHgQQAIgVAEgUIAAgGQgtAQgXAFIgwAIQgrAIgWAAIgkgCIgbgEIgdgGQgagKgYgOIgRgMIgjgVQgTgNgMgNIgIgJIgBgWIgCgPQgCgKgGgOQgEgIgMgOIgNgNIgBgBQgHgKgLgFQgJgFgWgDIgBAAIgHgJIADADIgbglQgOgQgLgLIgegZIgMgHIgDgBQgOgGgGgJIAnAEIAcAGQANAEAQABQANABANgIQAEgCAGgGIARANIAjAkQANAMARAXQAKANAVAWIAfAoQAMAQANAKQASAMASAKIAiATQANAEATAEQAgACAYgCIADAAIAggGIAjgHIAigKIAcgJQAPgEAQAAIAKgBIATACIAEABQAbAJAPAQQAUAWAHAZQAEAMABAMIABALQAAARgEASIgIAdQgJAggVAjQgXAlgNARQgmA0gJAJIgoAtIgDAFQADANANAhIASAlIAQAnQAFANAGAbQAHAaAEANIAPAfQAIARAMAoQAGAWAKAZQATAoAGASIAVA/QAMAhAHAeQAEARAIAwIALBAQAEAfgBALQgBAWgCARQgFAjgJAgQgHAcgXAsIgeA8QgaAxg5BCQgRAUgdAcQgfAegRANQgXATgpAcQgLAIgvAbIhIAnIgXg6g");
	this.shape_67.setTransform(-29.8,-69.6,0.775,0.775);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2C2C2C").s().p("AhwBRQgKgDgFgIQgFgIADgKQACgKAJgFQA7gkAwgYIBpg3QAHgDAGAAQAOAAAHAMQAFAJgDAKQgCAKgJAEIhrA3QgyAbg4AhQgFADgHAAIgGgBg");
	this.shape_68.setTransform(-67.2,-31.6,0.775,0.775);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2C2C2C").s().p("AgXAWQgFgZgCgbQgCgJAJgIQAHgHAKAAQAHAAAHAFQAHAFABAIQAFAcALAmIgSAIQgMAFgMAJIgFADg");
	this.shape_69.setTransform(-58.2,19.7,0.775,0.775);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2C2C2C").s().p("AgrC0QgRgDgQgJQgUgLgLgKIgJgKIAEgPQACgHACgbQABgOgBgPIAAgcQAAgPgGgUIgGgYQgHgTgFgJIACgEQAKgZAFgHQANgSAJgKQAhgiAdgNQAQgHAVgEQAOgCAMAAIAKAAIAWAiIAlAtIAgApQgBAmgGAaIgLA1QgEARgGANQgGAOgNARQgWAbgaAPQgVANgQAEQgNAEgKAAIgDAAIgSgBgAAVh8IgSAFIgPAKQgMAJgOAQQgMARgGANQgJAZgFAdIgBAQIAFAbIACAMIAEASIAGAKIAJAJIAOAIIAIACIABAAIARgFQAKgFAOgJQAMgJAJgMQAFgHAEgJQAGgQAFgSQAFgQACgPIABgRQAAgKgBgKQgCgMgDgJIgDgEIgZgeQgDgFgCgIIgIAAg");
	this.shape_70.setTransform(-53.9,-118.5,0.775,0.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2C2C2C").s().p("AgJAeQgKgGgDgKIgGgVIAFgEQAOgJAKgFIASgHIAJAgQACAKgFAKQgFAJgKADIgHABQgFAAgHgDg");
	this.shape_71.setTransform(-57.2,24.6,0.775,0.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2C2C2C").s().p("AAAAeQgHgBgIgEQgJgFgEgLIgBgGQgCgLAIgLQAIgKANAAIABAAQAGAAAEACIAAABQAMADAFAJIADAHIABAIQABAIgJALIgHAGIgFACQgFACgEAAIgBAAg");
	this.shape_72.setTransform(-54.8,-119.4,0.775,0.775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2C2C2C").s().p("AgeAqQgSgLgDgSQgCgNAEgKQACgKAJgJQAKgLAOgFQAJgCAGAAQAIAAAUAEQAMAEAHAMQAHALgEANQgCAHgFAFQgBAHgEAGQgKASgVAFQgIADgJAAQgLAAgKgGg");
	this.shape_73.setTransform(-56.4,41,0.775,0.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2C2C2C").s().p("AguBuIgdgFQgTgGgJgGQgPgJgJgJQgPgQgJgSIgMgaQgGgOgEgVIgHglQgEgTAJgOQAIgPARgFIAMgCQAMAAAKAHQARAJADAQIAJAuQAEAQAFAOQAEAIAFAHIAIAIIAIAEQANAFAKABQAWADASgDQAIgBAMgEQAKgFALgIQALgIALgOQAIgJADgFIANgaQAKgaAJgLQAJgNAMgEQAOgEANAIQALAGAEALQAFAMgDAMIgHAVIgLAZQgKAXgYAeQgKAOgOAMQgZAVgOAHIgcALIgZAGQgRACgTAAIgXgCg");
	this.shape_74.setTransform(-66,81.3,0.775,0.775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2C2C2C").s().p("AAgAhQgQgBgNgEIgbgFIgngFIAAAAQgHgNAEgNQADgMAMgIQAIgFAKAAQAFAAADACQAVAHAHAFIAoAUQANAGAMALQgGAGgEACQgMAIgLAAIgDgBg");
	this.shape_75.setTransform(-55,-143.1,0.775,0.775);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2C2C2C").s().p("AgTAUQgKgGgCgJQgCgIAFgLIACgGQAVgCAPAAIAQgBIAHAAIgSAiQgEAJgLADIgGABQgHAAgGgEg");
	this.shape_76.setTransform(-51,23,0.775,0.775);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2C2C2C").s().p("AjbCFQgIgIAAgMQAAgMAIgIQA4g+BGgwQBRg4BEgaQAagKAygPIA3gQIAIgBQALAAAJAGQAIAHADAKQAEAMgHAMQgGAMgNADQgPADgpAMQhDAUgbAKQhHAghMA4QgqAhgrAuQgIAJgMAAQgMAAgJgJg");
	this.shape_77.setTransform(-65.9,-37.7,0.775,0.775);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2C2C2C").s().p("AANATIgjgsIgWgiIAAAAQAXADAJAFQAKAFAGAKIABABIANANQANAOAEAIQAGANACAKIACAPIAAAWIgggpg");
	this.shape_78.setTransform(-47.1,-127.9,0.775,0.775);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2C2C2C").s().p("AgTAcQgLgHgEgMQgDgMAGgLIAJgRIABAAIARAEQAWAHAPAJIADADIgOAYQgGALgNAEIgHABQgIAAgHgEgAgDgQQgEAFAAAFQAAAGAEAEQAEAEAGAAQAGAAAEgEQAEgEAAgGQAAgFgEgFQgEgEgGAAQgGAAgEAEg");
	this.shape_79.setTransform(-45.2,23.8,0.775,0.775);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2C2C2C").s().p("AgkAbIAOgbIAOgZQAKgSALgNQAGgHALAAQALAAAHAHQAGAGABAJQABAJgEAGQgNARgRAiIgSAkIgFAAIgRABQgPgBgVADg");
	this.shape_80.setTransform(-48.8,16.4,0.775,0.775);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2C2C2C").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape_81.setTransform(-44.7,23.3,0.775,0.775);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2C2C2C").s().p("AgvBRQgLgKgRgIIgRgBIAGgHIAngtIBRhjQAIgKAQAAQAKAAAIAEQAMAIAEAOQADAIgDAKIgOAeIgKARQgFAHgWAcIgyA6IgNAPIgZgTg");
	this.shape_82.setTransform(-50.6,-35.8,0.775,0.775);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2C2C2C").s().p("AAUAyQgPgKgWgGIgRgEIgBAAIAmhDQAHgLANgEIAHAhIAGAwIgNAYg");
	this.shape_83.setTransform(-44.2,19,0.775,0.775);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#2C2C2C").s().p("AgLgHIgHghIAHAAQAJAAAFAEQALAGAEANQADAMgGAKQgLAQgJAUg");
	this.shape_84.setTransform(-40.9,18,0.775,0.775);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#2C2C2C").s().p("AgeAsQgLgLgBgOQgCgNAHgMQAHgNAWgkQAoA3AMAZIgQATQgMAMgRAAQgRAAgMgMg");
	this.shape_85.setTransform(-42.9,-11.8,0.775,0.775);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2C2C2C").s().p("AARAxQgKgPgEgJQgXg4gHggIAPAPQAXAXAIAcIAGAYQADAYAAANg");
	this.shape_86.setTransform(-38.7,29.3,0.775,0.775);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2C2C2C").s().p("AgdAtQgNgIgEgPQgEgPAIgNQAFgIAIgGQAQgLAhgTIAFAQIAXA6QgjATgNAFQgEADgGAAQgJAAgKgGg");
	this.shape_87.setTransform(-38.3,0.7,0.775,0.775);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#2C2C2C").s().p("AhRCOQgGgGAAgIQAAgJAGgGIAUgVIAQgTQAfgrAWgrIATgqIAahPQAEgNANAAIAFAAQAHADAEAGQADAHgCAGIgNAwIgLAnIgMAcQgOAfgOAXQgQAbgSAYQgKAPgLAMIgTAUQgGAGgJAAQgJAAgGgGg");
	this.shape_88.setTransform(-40.9,-37.6,0.775,0.775);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2C2C2C").s().p("ABWEFIAUgfQAdg4AQgbIAagoIAWgrIAlhJQAJgYAHgmIAIglQABgRgCgMQgBgPgEgLIgKgfQgGgOgJgNIgLgLIgMgHQgLgEgXgEQgYgCgVABIgoAFQgyAHgcAFQgjAGggAKQhNAWhCAaQgQAGgOAIIglAUQgYAOgmAcQAGgOgCgPQgDgQgLgLIgXgXQAOgLARgKIAkgWQATgLAKgEQAsgVAdgKQBdghAzgNQAZgGAqgJIBKgNQAugIAYAAIAHAAQBHADAoAdQAZATAQAYQAMARAJAYIALAhQAFAPADAUIAEAnQAAAOgEAaIgGAlQgIAngCAGQgLAkgZAxIggA9QgJAPghAvQgZAmgNASIgrA4IgOASQgMgZgpg4g");
	this.shape_89.setTransform(-50.3,-36.4,0.775,0.775);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2C2C2C").s().p("Ag4BIIgSgEIgegIQgSgIgFgDQgKgGgJgLQgHgIgGgNQgFgKABgKQABgLAIgIQAIgIALgBQALgCAKAGIAbARQAOAEARADIAPABQAOAAAMgBQAwgIAfgKQAQgIAWgPIAlgYIAGAaQAFAaAIATIAGANIg3AlQgIAFgSAHQgNAFgXAEIguAGIgSABIgGAAQgNAAgUgDg");
	this.shape_90.setTransform(-29.9,-76.2,0.775,0.775);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2C2C2C").s().p("AgPAiQgIgTgFgaIgGgZIAHgEQAJgGALAAQAKAAAKAFQAKAGAGAKQAJAOgFAQQgFARgOAJQgNAIgKAIg");
	this.shape_91.setTransform(-16.4,-79.2,0.775,0.775);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#2C2C2C").s().p("ACSIAQgagJgXgNQgSgJgsgkIgagSQgNgKgJgKIgdgdQgUgUgIgKQgSgVgNgUIgYghQgOgTgIgPQgXglgGgVQgGgRgFgsQgDgcADgoIAEgkQAEgjAFgSIAVhEQAMgmAQgfQANgZAVgjIAkg7IBMh9QAvhHATgaIAOAKIgDAEQgJAPAFAQQAEAPAOAIIAjAZIgxBKIgnA+IgmA/QguBRgRAjIgTA1IgLAjQgHATgDAPIgGAyQgCAaADAiQACAOAFARIARAhQAKASAKAPIAmA3IAfAjIAhAhIAnAaIAmAbQAQAKAZANIAMAGIgSAyIgRAlg");
	this.shape_92.setTransform(23.8,-35.5,0.775,0.775);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2C2C2C").s().p("AhZBoQgrgDgWgHQgcgJgTgMIgWgOIgBAAIAbgoIAUgaIAYAMQAUAHATADQAZADAXgCIARgBQA6gLAigMQAVgKAVgPIAogiQAYgSAXgOQAJgEAJAAQAUAAAKARQAGAKgBAMQgCAMgIAIIgiAjQgYAbgOAMQgdAYgXAMQgWAKgZAIQgVAGgTAEQgcAGgaACIghACIgGAAg");
	this.shape_93.setTransform(52.7,-72.8,0.775,0.775);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2C2C2C").s().p("AgeAZQgOgJgEgPQgEgPAIgOIADgFQAJgLAPgDQAPgDALAHIAqAbIgUAaIgbAng");
	this.shape_94.setTransform(34.9,-72.1,0.775,0.775);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2C2C2C").s().p("AgEAuQgTgBgNgFIAQgkIATgxQAOAIAMANQAKAKACAOQACANgIANQgFAJgKAGQgJAFgIAAIgDAAg");
	this.shape_95.setTransform(38.7,1.3,0.775,0.775);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2C2C2C").s().p("AhnFjQgNgIgOADQgPADgKAMIgNgKIALgPQA3hNAbgrIAlg6IAig5IAhg4IAQgcQgsgYgLgJQgigYgVgaQgSgWgJgMQgRgagFgbQgGgjACgiQAAgOAFgaIACgOIAFgOQAGgPADgFQAWghAVgPQASgNAWgEIAWgDQAvgHAVABIAvADIAEAcQACALALAIQALAIAMAAIADgBIADAdIgRACQgMACgRgBQg5gFgLAAIg7ACIgHACIgCABIgSAUIgDAGIgGASQgCAXAEAeIAHAaIAIAMQAZAhAkAdQAWAQARAKIAWAPQANAJAMALIAHAGQAFAEAFAJQAQAUgLAgQgIAUgUAmIgaAuIgeAyQgjA7gaAnQgNAWgeAqIgUAbg");
	this.shape_96.setTransform(43.7,-103,0.775,0.775);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2C2C2C").s().p("AgUAZQgLgIgCgMIgEgaQAIAAAcgCIAmgIIABAbQABANgKALQgKALgOABIgEAAQgLAAgKgHg");
	this.shape_97.setTransform(56.2,-130.5,0.775,0.775);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2C2C2C").s().p("AgbAcQgLgMAAgQQAAgQALgLQAMgLAPAAQAQAAAMALQAMALAAAQQAAAQgMAMQgMAMgQgBQgPABgMgMg");
	this.shape_98.setTransform(58.2,21.8,0.775,0.775);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2C2C2C").s().p("Ag3A+QADgfAFgOQAJgdALgRQAQgaAQgQQAUgUAhgXIABAPIgBAMIgGADQgTANgTAVIgUAcQgGALgJAWIgLAmQgDAOgCAPIAAAUIgDAEIgSANg");
	this.shape_99.setTransform(68.4,26.8,0.775,0.775);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2C2C2C").s().p("AhHDgQgegIgVgOQg3gmgTgtQgIgTgCgKQgEgWAAgMIAAgHIASgOIADgDIAAAAQABASAOAIQAJAFAKgBQAKgBAHgHQAJgIAKgaIAJgZQAMgcAJgNQAIgJANgMQgKANgFANQgFAOgDAQQgEAnACAeIADALIAIAOIATATQAJAGAHADIAOAEQAPACAOgCQAQgDAMgFQANgGAOgKQAQgNANgOQAJgPAIgTIALgfIAGggIACgRQALAPANADQARAFAPgJQAOgIAFgQQAEgPgIgRIgYgrQgLgQgWgRQgPgKgqgRIgTgIQgQgGgQgBIgJgBQgPAAgQAGQgMAEgLAIIgkAfIgQAIIABgLIgBgQQAVgPAXgKQAwgWAhgBIAEAAQAWAAAPAFQATAGAMAPQALADANAGQANAGAMAIQAVANARAeQANAXADAJQAGATgCAYQAAAPgEAeQgHAugKAdIgIAVQgLAdgGAKQgPAYgSATQgaAZgSAKQgeATgaAHQgeAIgWAAQgfAAgUgGg");
	this.shape_100.setTransform(80.2,31.9,0.775,0.775);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2C2C2C").s().p("AgvBJQACgPADgOIALgmQAIgWAHgLIAUgcQATgVATgNIAGgDIgDAUIgHAcQgLAkgSAeIgSAcQgVAcgRAPg");
	this.shape_101.setTransform(69.2,27.2,0.775,0.775);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2C2C2C").s().p("AhJDIQgLgDgTgIQgLgEgFgEQgXgPgQgTQgPgSgIgQQgNgbgDgOQgKgkAFgoQAGguAIgUQAJgWAGgKIARgXQAPgSAQgMQAOgMAIgEIAagMQATgJATgEQAhgHAdAAIAZABIAcAEIAWAEQARAGAIAEIAMAHQAHAFAIAHQAMAOATAbIAJAQQAJASACALIADAQQghAYgUATQgQARgQAZQgLAQgJAeQgFAPgDAeIgEA2QgMAJgNAFQgcANgQAEQgcAGgZAAQgUAAgSgEgAAGhjQgRADgTAHIgaAIQgJAIgKALQgHALgJARQgGAPgDAWQgCAQAAARIAFAPQAEAJAHAJIAPAPIAMAHQAHADALACQAKABAKgBQAUgEAOgGQAQgIAKgHQAPgNASgUQANgUAJgRQAKgXADgSIgBgIIgCgKIgQgYIgJgKIgFgDIgWgGIgLAAQgPAAgUACg");
	this.shape_102.setTransform(57.1,22.8,0.775,0.775);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2C2C2C").s().p("ABbAqIgSgYQgEgGgIgHIgKgCQgRgEgRgEQgOgCgNACQgbAEgfALIgQAJIgIAHIABgBQATgYAegXQAQgLATgJIAFAFQAFAFAHAGIAUAJIANADIAZAHIALAFIACACIAMAUIgBAXg");
	this.shape_103.setTransform(82.1,24.7,0.775,0.775);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2C2C2C").s().p("Ag8ATQgKgJgBgNQgCgNAHgLQAGgMANgEQALgFANADIAZAFIAXAJIAvARIgBAEIgKgCQgPAAgMALIgyAwQgegOgOgOg");
	this.shape_104.setTransform(75.5,-144.3,0.775,0.775);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2C2C2C").s().p("AgXBiQgVgBgSgFQg0gPgbgcQgSgTgYgmQgLgSAGgWQAGgWASgLQATgLAWAGQAUAGAMASIARAZQAEAGAIAHIAMAGQAOAGAOACQAWACAKgBQAOgDATgHQAPgGAOgKQAQgOAgglQAKgMATAAQASAAAMAMQANANAAARQAAALgGALQgPAhgjAjQgKAKgYASQgPALgNAFQgsAVgiAAg");
	this.shape_105.setTransform(64.5,83.8,0.775,0.775);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#2C2C2C").s().p("AiYBDQAOgBAJgKQALgLgBgOIgBgcQAmgHAigNQA5gbAqgfIAWgUIAaALIAeALQAMAEAMACIgaAaQgSASgHAFIghAZQg4Ang9AYQgfALgbAGIgjAIIgIABg");
	this.shape_106.setTransform(68.5,-133.3,0.775,0.775);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#2C2C2C").s().p("AjeB1IAYgXQALgLAAgQQgBgQgKgKQgHgHgJgCIABgEIAKACQAZADAXgDIAwgGQAngHA7gXQAlgRAbgPQAfgQAagTIAxgnQAJgGALAAQAHAAAFACQAQAFAIAOQAHALgCAPIgNgQIgOgKIgDgCQgHgEgHAAIgDAAIgIABQgLAGgEAGQgDAGAAAHQAAAGACAHQgDAIAJAGIAJAjIAAACQgWARgSAMQgRALgkAUQggASgcAMQgYALgaAIQgMgCgNABIgFAAIgTgBQgeAAgbAKQgSAHgNAHIgNABQgTAAgQgCg");
	this.shape_107.setTransform(97.6,-147.6,0.775,0.775);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2C2C2C").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape_108.setTransform(81.9,32.2,0.775,0.775);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#2C2C2C").s().p("AAAAmIgfgLIgZgLIAygwQALgLAPAAIALACQAJADAGAGQALALAAAQQAAAPgLAKIgXAYQgMgCgLgEg");
	this.shape_109.setTransform(78.6,-141.9,0.775,0.775);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2C2C2C").s().p("AgdAeQgNgMAAgSQAAgRANgMQANgNAQAAQASAAAMANQANAMAAARQAAASgNAMQgMANgSAAQgQAAgNgNgAANgSQgEADAAAHQAAAFAEAEQAFAFAGAAQAGAAAEgFQAEgEAAgFQAAgHgEgDQgEgFgGAAQgGAAgFAFg");
	this.shape_110.setTransform(80.1,32.9,0.775,0.775);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2C2C2C").s().p("AgkgBQAagKAeAAIATABIAEAAQANgBAMACIgOAFIgiAGIgoAFIgvAFQAMgHATgGg");
	this.shape_111.setTransform(89.4,-139.4,0.775,0.775);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2C2C2C").s().p("AivCFQgOgIgBgSIAAgBQARgPAVgcIATgcQASgfALgjIAHgcIADgUIAQgJIAkgeQALgIAMgFQAQgFAPAAIAJAAQAQACAQAGIATAIQAqAQAPALQAWARALAPIAYArQAIARgEAOQgFAQgOAJQgPAIgRgEQgNgEgLgOIABgXIgNgUIgBgCIgLgGIgZgGIgNgDIgUgKQgIgFgFgFIgFgFQgTAJgPALQgeAYgUAXIAAABQgNALgIAJQgJAOgMAcIgJAZQgKAagJAIQgHAHgKACIgDAAQgIAAgIgEg");
	this.shape_112.setTransform(80.3,26.2,0.775,0.775);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#2C2C2C").s().p("AgFAsQgRgBgKgLQgMgMAAgRQABgUAMgKQAMgKAMgDIATgDIABAAQAIAAAHAFQAHAFADAIIABADQAKASgGAOQgFAPgPALQgMAIgOAAIgCAAg");
	this.shape_113.setTransform(87,-126.2,0.775,0.775);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#2C2C2C").s().p("AhQC0QgigGgageQgOgQgJgRQgJgUgEgPQgFgSAFgZQADgVADgKIAWgxQAOgXAUgWQAKgLAegaQAXgTAWgMIAvgFIApgFIAhgHIAPgFIADABQAOAEAHADQAHADAFAGQANAKALAVQAKAUACAXIgOAbQgPAfgIAZIgIAcQgDAMgDAcIgBAMQgQAYgLANIgOAOQgJAKgRANQgMAKgMAGQgXAKgNAEQgZAHgZAAQgPAAgPgDgAAThnIgDAAIgRAMQgXATgIAIIgcAgQgNASgIASIgEALQgFAQgCANIgBALIACAHQAEAJAKAQIAJAIIAEADIAHABQANABANgBQARgDAOgGQAMgGASgMQAPgNASgVQAVgdAJgTQAFgOAEgSQABgSgBgJIgIgZIgFgIIgHgCIgegCQgOAAgTADg");
	this.shape_114.setTransform(86.4,-126,0.775,0.775);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#2C2C2C").s().p("Ai7B5QgHgLAAgNQADgVAEgHIAKgMIASgNIBBgrQA3glAqgWQBFgkAtgQIAogOIAHANQAIAOAUAnIADAFIglABIgYACQgvAIgVAHQgeAJgZAJQhGAhg1AoQgiAbgnAqg");
	this.shape_115.setTransform(80.6,-44.3,0.775,0.775);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#2C2C2C").s().p("AgMAmQgTgDgKgOIAKAAQAXABAQgSQARgQAAgXIAAgDIAGAIQAFAIAEAMQACAGAAAFIAAABIAAACQgGASgQALQgLAGgMAAIgJgBg");
	this.shape_116.setTransform(99,-50.2,0.775,0.775);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#2C2C2C").s().p("AAlAHQgJgCgKgCIgSADQgOACgLAEIgNAEQgKgQgKgMIgIgLQAggDAeAAIAOAAQAXABAQAPQAQAOACAXQgPgRgPgDg");
	this.shape_117.setTransform(95.8,-55.3,0.775,0.775);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#2C2C2C").s().p("AgZBGQADgcAEgMIAIgdQAIgYANgfIAPgbIAAARQAAASgGAdQgJAkgfA1IgGAKg");
	this.shape_118.setTransform(98.3,-126.8,0.775,0.775);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#2C2C2C").s().p("AgDAqIgKAAIgEgGQgTglgJgOIgHgNIANgEQALgEAOgDIASgCQAKABAJADQAPADAPAQIAAAEQAAAWgRARQgRARgVAAIgBAAg");
	this.shape_119.setTransform(96.9,-51.7,0.775,0.775);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2C2C2C").s().p("AiXAoQgIgEgCgJQgDgJAFgIQAEgIAJgCIBqgVIAkgGQBhgLAxgEIABAAQAIAAAGAHQAGAGAAAIQAAAJgGAGQgFAFgKABIiOAQIiHAaIgGABQgFAAgFgDg");
	this.shape_120.setTransform(91,-155.2,0.775,0.775);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2C2C2C").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_121.setTransform(101.6,-42.3,0.775,0.775);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#2C2C2C").s().p("Ai/A6QgHgCgEgHQgEgGACgHQACgIAHgDIARgJIA0gVQAkgNAigJQAogKAjgGQAfgFAfgCIA0gEQAqgDANAAQAHAAAGAFQAFAFAAAHQAAAIgFAFQgFAFgIAAIg8AEQhEAGgUADIgCAAQhcAMhdAmIgDABIgbAOQgFACgFAAIgEAAg");
	this.shape_122.setTransform(90.5,-160.6,0.775,0.775);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2C2C2C").s().p("AgCAlQgKgDgIgLIgLgQQgGgJADgMQAEgNAKgGQAHgEAIAAIAHABQALADAHALIALAPQAHAJgEANQgDANgLAGQgHAEgIAAIgHgBg");
	this.shape_123.setTransform(105.2,-56,0.775,0.775);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#2C2C2C").s().p("AAcAjQgkgEgOgIQgKgGgOgLQgIgGABgKQgBgLAIgHQAGgHALAAQAGAAAGAEIARAKIAOAEIAOABQAMACAHAGQAHAIABAJQgBAKgHAJQgIAIgJAAIgCgBg");
	this.shape_124.setTransform(104.7,-29,0.775,0.775);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#2C2C2C").s().p("AgTArIgJgjQgIgGADgHQgDgHAAgGQAAgHAEgGQADgGAMgGIAHgBIAEAAQAGAAAGAEIAEACIAOAKIAMAQIgBAFQgDANgPAKIgjAdg");
	this.shape_125.setTransform(112,-152.2,0.775,0.775);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2C2C2C").s().p("AgIArIgLgBQgEgBgHgEQgGgCgFgHQgFgHgBgGQgCgLACgIQABgGAGgIQAGgKAJgHQAJgGAHAAIANgCIAMACQAGABAKAFQAMAFADAPQAEAPgHALIgEAGQgEAIgFAGQgKAJgLACIgLACg");
	this.shape_126.setTransform(110.9,-126.7,0.775,0.775);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#2C2C2C").s().p("AmMEfIgCgaIAAgnQAAgiAAgJIAHguQAFgnAEgLIAOgrQAIgWANgbQARgiAFgGQAUgaARgRQAPgOAbgVQAtgjAkgUQAmgWBHgeQA6gaA+gOQAdgFAogFIAogCQAjAAAdAIQANADArAPIARAGQAbALAKAHIARAOIAkAtQgTANgOAMQgKAJgDASIgBgBQgXgZgQgOIgNgIQgRgGghgJQgcgIgVgDQgigEg8AGQgpAHghAJIgoAOIgkAOIhMAjIgrAZIggAXQgUAPgLALQgQAQgMAOQgPAUgQAmIgNAoQgFATgEASQgDAfgCAPIgGAgIgGAwIACAeIgoAIIghACIgDAAg");
	this.shape_127.setTransform(84,-154.5,0.775,0.775);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#2C2C2C").s().p("AgCAlIgigjQgJgHAAgMQAAgMAJgIQAIgIAMAAQAKAAAJAIIAiAjQAJAIAAALQAAAMgJAIQgIAJgMAAQgMAAgHgJg");
	this.shape_128.setTransform(113.5,-37.3,0.775,0.775);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#2C2C2C").s().p("AADBUQgLgDgGgKQgMgXgEgbIgKhNQgBgMAJgIQAJgJAMAAQAJAAAHAHQAIAFACAKIAGAjQAIAwAGAQIACAEQAGALgDAMQgDAMgLAHQgHADgIAAIgIgBg");
	this.shape_129.setTransform(113.8,-51.3,0.775,0.775);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#2C2C2C").s().p("AgIAlQgNgEgIgMIgEgHQADgRAKgJQAPgMARgNQALAOAGAKQAIAMgEANQgEAOgMAHQgIAFgJAAIgIgBg");
	this.shape_130.setTransform(114.1,-165.3,0.775,0.775);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2C2C2C").s().p("AhcDTQgWgEgMgJQgOgLgEgFQgHgHgHgJQgLgQgHgTQgLgaACgeIAGgKQAgg0AIglQAHgdAAgSIgBgQIANgTQAbgoAlgYQAVgNALgFQATgKALgDIAIgFQAJgEALgDQAMASARAVIAlAmIAhAjQANAOAfAYIAJAHIgBAHQgCAWgCALIgHAZQgMAogLAYQgUArgrAjQglAegdANQgnATgnABIgJAAQgOAAgNgDgAAxiPIgLACIg5AfIgKADIgRASQgIALgLASQgGAJgJAUQgIATgFARQgEAPgGAaQgCASABATIAFAQQAEAJAGAKIAIAIIAEACIAKADIAWgBQAVgDAVgIQAUgKAagSQAVgSAKgNQAJgLAHgOQANgiAGgjIACgTIgBgWQgEgbgIgVIgHgMIgDgDIgCgBIgUgFIgEAAIgNABg");
	this.shape_131.setTransform(110.7,-126.2,0.775,0.775);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#2C2C2C").s().p("AgnA6QgLgGgEgNQgDgLAHgOIAMgWQANgUAIgJQAHgHAPgMQAGgFAKAAQAGAAAEABQANADAHANQAHALgEAPQgCAIgGAHIgCABQgKAHgJALIgUAfQgGALgNAEIgIAAQgJAAgIgEg");
	this.shape_132.setTransform(116.7,-13.9,0.775,0.775);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2C2C2C").s().p("AgvBQQgPgJgFgSQgFgRAKgQQAqhFAKgPQAKgPAPgFIALgBQAMAAAKAGQAPAJAFARQAEARgIAQIg0BUQgJAQgRAEQgGACgGAAQgLAAgKgGgAAJghIgRAVIgJALIgQAbIgCAIIABAHQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBIAMgIQAFgCgDgEQgCgEgFACIgDACIACgCIAAAAIABgBIAEgGQAIgJAHgGIABAAIAagRQAFgDABgGQACgFgDgFQgEgHgJAAQgFAAgEAEg");
	this.shape_133.setTransform(125,-30.3,0.775,0.775);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#2C2C2C").s().p("AgdApQgBgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgCgIIADgHIAPgbIAJgMIASgVQAEgDAFAAQAJAAAEAGQADAFgCAGQgCAFgFADIgaARIgBABQgHAGgHAJIgFAFIAAABIgBAAIgBACIADgCQAFgCACAEQADAEgFACIgNAJIgCAAIgBAAg");
	this.shape_134.setTransform(124.9,-30,0.775,0.775);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#2C2C2C").s().p("ABDBKQgfgYgOgOIgggjIgkgmQgSgUgLgTQAPgDAPAAIAhADQAMACAPAIIAQAOIAMAPIAGAIQAGAKAKAZIAGAXQAGAbgBAYg");
	this.shape_135.setTransform(119.2,-136.9,0.775,0.775);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#2C2C2C").s().p("AC0CXIiWhfIiZh3QgTgPgMgMQgNgNgJgLIgOgUQgCABgEgBQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACgDIAEgFIAFgCQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAIAMAQQAQAVAoAgIDFCOIBvBEQAFACABAGQABAFgCAFQgDAEgFACIgDAAQgEAAgDgCg");
	this.shape_136.setTransform(139.9,-142.6,0.775,0.775);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#2C2C2C").s().p("AC1IBQgMgDgJgEIgLgJQgIgGgFgJIgIgTIgDgVQAAgJAGgxQAGgxAEgOIASg2IAKgcIhdBLIgdAUQgKAIgJAFQgSAJgFABQgJADgNABQgNABgPgIQgIgFgMgQQgHgKAAgTIAAgNQAFgmANg0IAUhEIAriXIgYAJQgWAKgsAZIg0AgQgeARgYAJQgMAFgMACQgQADgPgDQgOgCgLgLQgMgKgEgOQgEgPAGgTQADgJAKgWIAghGIAfhFQASgpAOgbQAPgcAZgoIALgQQgbgCgTAAQgiAAgbACIhDAGIgeADQgXADgKgBQgTgBgMgJQgJgFgGgJQAngpAigcQA1goBHghQAZgKAdgJQAWgGAvgIIAYgDIAlAAQAKANASAEQASADAPgJQAQgKAGgSIAAgDQAAAPgKAMQgJANgPAEQgSAFgQgKIgIgHIhDAZQgzAXgzAcIAlgBQAyAAAzALQARAEAQAIQAPAIAIATQAJAUgGARQgGASgGAJIgaAiQgcAmgWAlQgOAXgcA5IgbA3IAbgRQAugeAVgKQAUgKA5gXIATgIIAUgHQAXgEALADQAPAFAMANQAZAZgLApQgHAbgRAzIgWBMQgJAfgRAxIgPAuIBJg9QAdgaAagVIAUgQIAGgFQAHgFAOgFQAMgEATAEQAOAEALALQAQAQADAiQADASgEAWIgHAoIgJAiIgUBFIgRBKICFg1QgKALgDAQQgEAQAEAPQAFARAMALIAMAKIAJAEIgDABIg6AYQhFAegkALQgaAIgTAAQgIAAgGgBg");
	this.shape_137.setTransform(97.7,-10.2,0.775,0.775);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#2C2C2C").s().p("AgGBKQgMgHgFgPQgHgRgDgQQgEgYgEgMIgBgBQgIgOAEgQQAEgQAOgIQAKgGAKAAQAWAAAMAUQALATAEAnIAGAgQADAQgHANQgHAMgPAEIgKACQgKAAgHgFg");
	this.shape_138.setTransform(130.4,2.4,0.775,0.775);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#2C2C2C").s().p("AhOBKQgNgBgLgDQAhgPAZgWQALgKACgQQACgPgIgNQgHgOgPgFQgOgGgPAEQgRADgWAJQAHgIAJgFQALgGAJgDIAggJQAagHAJgBQAngGAWADIAhAEIA6APQgZALgMANQgTAWAHAZQAFASAPAJIgIAcQgdgJgfgEIgXgBIgiAIIgaAFQgMACgJAAIgFAAg");
	this.shape_139.setTransform(137.2,18.5,0.775,0.775);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#2C2C2C").s().p("AgnBJQgMgHgEgOQgDgOAHgNQAbgyAPgiQAFgMAQgFIAJgBQAKAAAIAFQANAIAEANQADANgHAPQgRAjgaAxQgHAMgOAEIgKABQgJAAgIgFg");
	this.shape_140.setTransform(126.6,-51.1,0.775,0.775);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#2C2C2C").s().p("AAgEFQAEgOANgXIAPgbQAKgRAYggIAOgaIAMgaIAJgPIgfgJQgJgCgagKQgWgJgXgMQgegRgsggQABgYgGgcIgGgWQgKgagGgKIgGgIIgMgQIgQgNQgQgJgMgCIghgDQgPAAgPAEIgGgIQgQgbgHgUIgHgVIAkgcQAOgKAEgPIABgEQAHAJAEAKQAOAdANASQAOASAOAPIBMBHIAfAcQAmAcAQAJIAeATIBHAdQAeAKAVAIIATAKQAOAIAHAOQAMAVgIAZQgFAQgTAlIgXAuQgJASgQAWIgBADQgjAMgaAKIgrATQgOAGgGATQgBAIAAAGQgOgTAGgVg");
	this.shape_141.setTransform(129.3,-129.8,0.775,0.775);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#2C2C2C").s().p("AgYA1IgMgKQgMgLgFgRQgEgPAEgPQADgQAKgLQAWgJARgEQAOgDAOAFQAPAGAHANQAIANgCAQQgCAPgLAKQgZAWggAPg");
	this.shape_142.setTransform(130.4,19.5,0.775,0.775);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#2C2C2C").s().p("Ag3FhIABhAIAAgZIApgMQAWgLAqgfIAbgXQAKgKAUgXIAZgiQAMgSALgXQAXg8AJg3QACgTgDgXIgGghQANgGAFgJQAFgJAAgKQAAgRgKgJQgTgPgNgDIgJgDIgPgWIgNgOQgJgKgJgGQgJgHgKgFQgXgJglgFQgRgCgaADQgmAGgrALQgjAJgtARIgmAQQgJAGgNAAIgLgBQgRgFgJgPQgGgKAAgKQAFAGAIAGQAMAGAMAAQAWAAAKgOQAKgMAEgHIAqhCQAngNAogIIApgHQAggFAKAAIAPABQAYADAgAHQAeAIATAJQAVAKAWATQAMAKAJALQAeAhANAWQAOAZAHARIAKAdQAHAXAGAeIgZAcQgOAQgHAOQgIAQAIAOQAFAIAJAEQAKADAKgCIANgEIgGAdQgEAVgPAsQgMAogVAgQgTAdgbAfQgcAfgWASQgjAbgbASQgkAZgeAJQghAKgUABg");
	this.shape_143.setTransform(154.1,-87.4,0.775,0.775);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#2C2C2C").s().p("AA8A6QgHgZgFgNIgGgKIgFgGIgKgFIgNgDQgOgBgOABIgcAIIgYAMQgPAIgPgEQgQgEgIgOQgGgKABgLIABAFQAEAOANAHQAOAIAOgEQAQgEAGgMIAIgOQANgQARgOQAYgSAegOQAWAEAXAVQAHAFAFAHQAOASACADQAUAogCAgQgBAPgJAJQgJAJgOAAQgYABgJgZg");
	this.shape_144.setTransform(144.1,-86.1,0.775,0.775);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#2C2C2C").s().p("AjUBLQAHgPAMgOIAXgYQAOgMAWgPQAQgLAZgNQA/giAjgLQA9gRApgDIAkgCIAKAAQATABAQAEIACAAIANAZQAJAbAGAdQgMAFgLgEIgEgBIg1gEQgeAAgQABQg3AJgwASIgtAVIAAAAQgPgDgSAAQgaAAgVAGIgjAPIgbANQgSAJgBAWQgBgKAGgMg");
	this.shape_145.setTransform(151.2,-95.2,0.775,0.775);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#2C2C2C").s().p("AhKAtQgJgFgEgLQgCgMAFgIQAFgIALgEIB8gtIAHgBQAIAAAHAGQAHAFADAJQADAKgGAKQgEAIgLADIh8AuIgIACQgGAAgGgFg");
	this.shape_146.setTransform(133.3,-13.9,0.775,0.775);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#2C2C2C").s().p("AgwArQgIgFgFgHQgBgGACgHQAGgTAOgGIApgSQAagLAjgMIgpBBQgEAHgKAMQgKANgWAAQgMAAgLgGg");
	this.shape_147.setTransform(137.2,-108.9,0.775,0.775);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#2C2C2C").s().p("AgrAxQgJgCgGgJQgFgJADgKQACgIAJgGQAxgiAdgRQAFgDAGAAQANAAAHALQAEAIgCAJQgCAIgIAGIhNA2QgDACgGABIgDAAIgGgBg");
	this.shape_148.setTransform(138.3,-44.4,0.775,0.775);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#2C2C2C").s().p("Ag+AsQgMgHgFgPIgBgGQABgVASgJIAbgNIAigPQAVgGAaAAQASAAAPADIAAAAQgdAPgaASQgQANgMAPIgIAPQgHANgQADQgFACgFAAQgJAAgJgFg");
	this.shape_149.setTransform(140.6,-89,0.775,0.775);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#2C2C2C").s().p("AggAtQgNgEgHgKQgGgLADgNQADgMALgHQAdgRAZgNQAHgDAIAAIAIABQALADAGAKQAHALgEALQgDALgKAHIg0AhQgHAEgIAAIgIgBg");
	this.shape_150.setTransform(139.7,-30.6,0.775,0.775);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#2C2C2C").s().p("AhyBnQgOgIgFgQQgEgQAIgOQAcgpAUgTQAUgVAqgfIAQgKQANgJASgHIAegKQASgEAZgDIANgBIAMAVQAFAQACANIADAnIgBATIgfADIgRACQglAGgWAIQgeAOgbAUQgHAEgFAGIgLAMIgJANQgJAOgOAEQgGABgGAAQgKAAgIgFg");
	this.shape_151.setTransform(139.3,35.1,0.775,0.775);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#2C2C2C").s().p("AALAvQgTgCgJgKQgIgIgDgKQgEgOAGgMQAFgNAMgHQALgJAcgJIAAAZIgBA/IAAAHg");
	this.shape_152.setTransform(147.5,-63.2,0.775,0.775);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2C2C2C").s().p("AkGRoQg5gHglgKIglgKQgwgRgYgKQgogRgdgUQgngagrgkQgUgRgigqQgRgTgQgXQgcgogWg4QgUgygFgYQgIgjgIgqQgKg+gBgfQgBgXAFg1IAGg9IhDhDQglgtgNgSIgOgWQgNgXgIgUQgGgMgFgRQgJgggMgfQgQgqAGgeQAIgjAhgRQAYgNAsgIIBFgLIAZgFIAMgIQAdgZAkguQAVgcAPgbIAihBQAbg1APghQANAEATACQALABAKgHQAKgGAFgJQAIgMgCgPQgCgNgKgLQgMgMgPgJIAWg9IAuhzQAQgrAMgYQAOgcAOgXIAfg2QAOgXATgcQBBhaAjgmQAeggAagUQAegYAugaQBNgsBOgSIApgIQAbgFAUgCIAHAAIAJAKQAJANAKAQIgnAOQguAQhEAkQgqAWg3AmIhBArIgSANIgKAMQgEAHgDAVQAAANAHALIACAEQghAigzBAQgNASgqBDIgZAqQgLAUgNAeIACgGIgpBkQgNAfgKAbIgSAxQgYA6gwBgIgiBDQgTAjgYAhQgVAegfAjQgRARgOALQgWARgXAKIgaAIIgiAHIgjAIIghAGIAaA7QAMAcAPAUQANARAfAfQAiAiALAIIgMgIQAkAbAVAVQAWAWAFAXQAFAVgBAkQgDBYADAsQAIAwAMAxQAKAuAWA1QAOAeAhAvQAeAkAQARQAWAXAhAaQAgAZArATQATAJASAFQA6AUAmAHQAmAEBLgBIB/gBQBTABAwgFQBHgLBbgmQAzgWAjgaQApghAegmIARgWQAfgrATglIAmhUQAghMAMgnQAOgzALhGQADgagBgSQgDgGgBgFQgHgXANgaQAPgYAggHIAOgCQAXgFAagLQAggPAXgQQATgRAOgPQAUgcATgqQAKgbAIgjIAAgFIALgDQAOgEAJgKQAQgQAAgWQAAgQgLgPQgLgQgRgDQgOgDgMAAIgFAAIgDgDIgNgOIgRgKIgSgGIAIgcQANAIAOAAQASAAAXgGIAngOIAegLIAGAIQAUAdAKAfQAHAXACAjQACAXgBAUQAAARgGAiQgEAdgGASQgNAngQAfQgUAogKAOQgWAfgUASQgXAWgWAPQgcARgPAHQgeANgVAIIgMADIgEAfIgOBMIgQBJQgMApgMAgQggBbggBBQgJASgNAWIgVAgIghAqQgdAkgiAdQgyApgsAWQgmATgmAOIgsAQQg5ASgwAHQgpAGg4ABIhhABIhYADIg+ABIgKAAQgdAAgWgCg");
	this.shape_153.setTransform(82.2,30.6,0.775,0.775);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#2C2C2C").s().p("ADwJcQgPgHgTgHIAkgPIA4gaIgBgBQgSgRgOgMIgIgHQgMgJgEgIQgHgPgBgIQgDgNADgKQAGgPAEgGQAWgCALgTIAcgHQAogJAdgKIgMgKQhBgvgYgVIgSgOQgJgKgEgIQgHgMAAgOIACgNQABgGAFgIQAGgKAJgHQAVgRAcgRIAugaIAugcQAkgWAlgbIhigjIhCgZQgagKgIgEQgSgLgJgOQgJgQADgTQACgTAMgQQAXgeBJhMQAlgnAZgcIgjADQg0AJg8AQIgtAKIgWACQghgCgNgPIgMgOQgHgNAAgNQAAgJADgLIAEgWIAEgYQAEgdABgqIACguQgVAMgYARQgqAbg2AlIglAbQgVANgUAHIgVADIgNgCQgJgDgIgFQgKgGgHgMQgFgHgGgPIgdhNIgXhDIgGBJIAAAiIgCARQgEAMgIAJIgMAJQgHAEgJADQgPAFgagJIhQgbIg0gUQgggMgVgGQAlAwAQAbIAUAoIAYAwQAJATgDAPQAAgGgCgFQgFgMgFgJIgFgIQgCgXgQgPQgQgOgXgBIgPAAQgfAAgfADQgvg2gMgUIgPgYIgGgMQgHgOgBgGIgDgRIACgOQABgIAFgHQAKgRAVgHQAMgFARgCQARgBAOABQArADAdAJICPAzIAEgsQAGg0AIgtQAHggATgMQAMgGANAAQARAAAQAKQA2AgAYAzQAPAjAbBGIAIATIAmgbIA5gnQBGgsAugWQAUgJAGgCQAbgJASAOQAKAFAGALIAFALQADAHADASIABAcIAAAxQgcAJgMAJQgMAHgGAMQgFAOADAOQADAKAIAIQAKAJAUADIARAAIgBAOIAtgLIBFgPQAKgCAVgCIA1gFIA1ADQAOACAOAHQANAFAJANQAKAMACAOQAEAVgEAMIgJAVQgJATghAoIgVAXQgdAggWAUIg/A+IBhAcQAiALAlAOIAhAMIALAGIAPAKIAJALQALAQgBAQQAAASgEAJQgDALgGAIQgKARgTAQIgjAbIggAWQgsAdgOAIIhGAmIAYAPQA6AmAYAVIASAQQAKAKAHAMQAHALABAXQABASgNATQgMARgSAKQgWANggAJIgWAGQAPARAGANQAGAKABAKQACAJAAAMQAAAOgEALQgFAPgLALIgEAFIgUARQgYAOgsAQIgJAEQgegogtgWg");
	this.shape_154.setTransform(131.1,-31.4,0.775,0.775);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#2C2C2C").s().p("AgNAjIgCgnQgCgNgFgPIgMgVIAFAAQAMAAAOADQAQADALAQQALAPAAAQQAAAWgQAQQgJAKgNAEIgLADIABgUg");
	this.shape_155.setTransform(150.9,31,0.775,0.775);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#2C2C2C").s().p("AgKAFQAKgKAQgFQgKASgVACg");
	this.shape_156.setTransform(151.2,1,0.775,0.775);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#2C2C2C").s().p("AAiA0IhZgaQgQgEgIgPQgIgOAEgQQADgNAMgJQALgIANAAIALABQBEAUAVAHQAQAGAIANQAIAOgEAQIgEAJQgRAFgKAKIgFAGQgIAAgGgCg");
	this.shape_157.setTransform(146.2,-2.4,0.775,0.775);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#2C2C2C").s().p("AABAaQgWgEgXgBQgLAAgIgIQgIgHAAgKQAAgKAIgJQAHgHALgBIABAAQARACAjAFIAuAIQAJABAGAKQAFAJgDAJQgDALgIAEQgGAEgHgBg");
	this.shape_158.setTransform(149.1,-25.1,0.775,0.775);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#2C2C2C").s().p("Ag4AtQgPgJgGgSQgGgZATgWQAMgNAYgLQATAHAOAHQAtAWAeAnIgeALIgoAOQgVAGgTAAQgNABgNgJg");
	this.shape_159.setTransform(149.3,18.5,0.775,0.775);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#2C2C2C").s().p("AgLgPIgOgYIAKACQANAEARAPQALAJAAAQQAAAKgFAIQgGAJgMAHQgFgegJgag");
	this.shape_160.setTransform(167.9,-99.2,0.775,0.775);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#2C2C2C").s().p("ADbChIhwgzQhWgpgjgYQgjgXhBg0IhZhEQgLgIgXgOQgHgFgDgJQgCgIAEgIQAHgLANAAQAGAAAEADIAgAUIAnAcIAcAWIAZAUIACABIBFA1QAzAjBKAkIBDAfIBBAeQAIAEADAKQADAJgFAJQgFAIgJADIgHABIgGgBg");
	this.shape_161.setTransform(150.6,-146.1,0.775,0.775);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#2C2C2C").s().p("AgJAxQgJgEgFgJQgIgNAIgRQAHgMAPgRIAXgbIADAUQADATAAAKQAAARgEAaIgBADIgNAFIgIABQgFAAgGgCg");
	this.shape_162.setTransform(174,-91.4,0.775,0.775);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#2C2C2C").s().p("ADXDJIiUisQgTgVgagXQgfggghgaQgigagXgNQgbgQgfgNIhMgbQgIgDgDgGQgEgHACgIQABgGAGgEQAFgEAGAAIAFABIBLAbQArASAcARQA9AlA8A7QArApA6BDIBhBwQAGAGAAAIQAAAIgGAGQgGAGgHAAQgKAAgEgGg");
	this.shape_163.setTransform(164.7,-145.7,0.775,0.775);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#2C2C2C").s().p("AEbIuQAEgaAAgRQAAgKgDgTIgDgVIABgBIBGhfQAng/ASgpQAOgjAJglQALglAFgfQAEgjgBgcQAAgagEgfQgCgQgGgXIgKgoQgKgvgMghQgUgtgNgVQgOgWgegmQgtg5gegZQgMgIgTgKIgfgRQgbgOgXgKQgtgRglgJQgjgIgwgIQgmgDgLAAIg4AAIg6ABIgtAEQhCAKggAIIguAPIgqAQQgXALgTAOIgHAGQgIAIgNAEIgNACQgUAAgOgOQgOgOAAgUIABgHIAEAHQAIAMANAEQAOADAMgHQAMgHAEgOQAEgOgIgMQgGgKgLgOQATgNAKgFIAqgSIAwgSQAjgMAOgDQAZgGAlgEQA5gIA6AAQAoAAAvAEQAxAEBQAQQBBAMA2AVQAVAIApAUIAsAVQAOAHASAPQAZATAaAfQAOAQAfApIAkAxQANATASAjQASAlAJAcQAGASAIAoIANA9QAHAdACAnQAEAlgBAYQgBAhgGAlQgJA4gVA7QgUA2gmA9QglA8guAtQgYAZgRAOQgPAMgNAIQgKAFgIADg");
	this.shape_164.setTransform(153.9,-131.4,0.775,0.775);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("Al8MsQgPgFgVgDQgYgEgZgBIgJAAQgZAAgoAGIAAgMIgGgoIgYixIgFg5IgGg4IgGg7IgEg8QgDgfADhXQAChFAGgyIABgEQATiHAMgzQAJglAQg1QAJgfAHgSIAmhcQALgZARgfQAZgwAqg3QAOgSANgNQAQgQAVgSQAdgaAtgkQAdgWAngcQAggVAvgbICShOQBEgcAYgJQA1gSArgHQAWgDAjACIAsADQAXAEATAFQAcAIAQAGIAnATIAQALQAIAFARAHQANAGAJACIAFACIAUANIANANIAXAcQgqgDgbAAQghAAgoADIgYADQgOADgKAKQgNAOAAASQAAAKAHAkIAEAoQgegEgVgBIg/AAQgRAAgXAGIgRAGQgUAIgHAFQgKAHgGAIIgGAIIgGAPIgCAQIABAMIADAcIgYAFIgiALQgkALggAQIgMAGQgEACgLAJIgJAMIgGAOIgCAVIADAcQACAWAJAsIABANIgdgLQgTgHgLgDQgTgEgOgBQgPgBgMAJQgMAIgDAOQgDANABAQIACAdQACAfgBAgIABA+IgBB+IABAeQABAUACAQIAGA3QADAoADAVIAKAzQAJAnAFANQAEAMAUAtIAfBGQAGANAKAOQgPAFgQAIQgVAKglAdQgNALgLALQgYAWgUAZQghAmgMAZQgLAXgPAsQgFAOgCAPQgBAIADAIIhRAlQghgRghgLgAlPlJQgVAjgPAdQgLAVgFANIgPAmQgWA8gVBTQgRBCgGBSIgICYIgBBGIAIBJIALBRQAJA3AFAUIAHAbQAFANAKARQALAQAQgFQAKgDAEgIQAGgKgEgIQgIgVgEgTIgGgeIgVi2IgBgSQAAgiADgrIAFhNQAHhvAEgpQAEgbAGgiIAQhJQAShVAQguIAfg9QAEgFgCgHQgBgGgGgDQgDgCgEAAQgJAAgFAIgAjKlGQgIAFgFANQgOAhgDANIgNAtQgMAtgIApQgKAwgFAtQgEAmgCA4QgBAdABA4QAAAaACAaQAAATADATQAHA9AJAjIAfB9QAFAQAQAAQAIAAAHgGQAHgHAAgJIgKhUIgSijQgBgcABg6QACiCAFgwIAFglQAHgxAKgpIAMgxQAGgVANgfQAEgLgHgLQgGgKgMgDIgHgCQgIAAgHAEg");
	this.shape_165.setTransform(-104.6,-93.5,0.775,0.775);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("ADkMpIAAAAIANgSIArg4QAOgSAZgmQAggvAJgPIAgg9QAZgxALgkQADgHAHgnIAGglQAEgaABgOIgEgnQgEgUgEgPIgMghQgJgYgLgRQgQgYgZgTQgpgdhGgDIgHAAQgYAAguAIIhKANQgsAJgYAGQgyANheAhQgdAKgrAVQgLAEgTALIgkAWQgRAKgOALQgYgXgXgOIgYgKIgUgIIgZgHQgmgLgkgDIgrgDIgXACIgRggIgTg2QgKgdgMgbQgRgtgKhDIgEg5QgFgpgBgVQAAgcABgkIABg+QgBgdgJhcQgCgZgFgYIAfANQAPAFAVAAQAWAAAVgNQAZgRABgcQABgJgCgLQgDgfgKghQgGgQgFgbIArgOQAXgHAkgIQAdgDAJgCQAWgFAJgSQAJgOAAgMQABgFgDgRIgGgZIgDgOIATgEQAPgCAyAEIBUAJQAFABAPgDIAOgFQAOgIAHgLQALgPgBgXQAAgHgGggIgEglIAGABIAuAAQAcABAXACQAGAKAOAGIACAAIAMAIIAdAZQAMAKAOARIAbAlIgDgEIAHAJIgKAAQgMAAgOADQgXADgPAHQgdAOggAhQgKAKgMASQgFAHgLAZIgBAEIgDgFQgDgFgFgGIgMgOIgNgKIgEgCQgDgGgFgCIgMgFQgFgCgKgBIgVgBIgNAAQgjACgfAVQgvAfgRAYQgWAegRAqQgEAKgDATQgCAPAAANIAFA7QADAUAIAVQAIAUAMAOQAKAMASALQALAHAXAHIASAEQARAEAPgBQASAAAagLQAVgKAVgQQATgOALgNIAQgUQAGgKAGgOQAHgNADgLIAKAKQAKAKAUALQAQAJASADQANACAGAAQALgBANgEQARgEAUgNQAagPAXgbQANgQAFgPQAGgMAEgSIAMg0QAFgcABglIAIAJQANANATANIAiAVIARALQAYAPAbAKIAcAGIAdADIAkACQAWABArgJIAvgIQAXgFAtgQIAAAHQgEATgHAVQgIAQgNAYIgXAmQgSAighArIgkAxQgIAMgDAIQgGARAEAbIAIAbIAuB1IACAGIglAXQgWAPgQAIQgfALgxAHQgMABgOAAIgPgBQgRgDgOgEIgbgRQgKgGgLACQgLABgIAJQgIAHgBAMQgBAKAFAKQAGANAHAIQAJALAKAFQAFADASAJIAeAIIASADQAZAEAOgBIATgBIAugGQAXgEANgFQASgHAIgFIA3gkIAMAaIAJAeIAJAfQAGAQASAqQAGAOAEAOIAMAmIAVBEQAJAgAGAoIAFAkIAHAjQADASgBASIgEAnQgEAZgDANQgEAOgIARQgWAzgIAOQgPAegYAfQggAqgbAdQglAogjAdIgvAiIgzAgIg6AhQgVg6gOgcg");
	this.shape_166.setTransform(-57.2,-72.6,0.775,0.775);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgjB9QgLgCgIgDIgHgEIgGgFIgHgOQgHgSgFgbQgDgYACgTQADgNAFgNQAQgjAMgRQAOgQAcgWQAMgJAIgEIANgEQAFAIAGADIATAKIAHAHQAIALAHARIAGAQIAHAXQABANgDAYQgDAUgGAPQgHAOgMARQgMAOgOAMQgVAPgPAIIgJACIgGAAIgRAAgAgWgmQgRAGgIAKQgIAIgFAPQgFASAIAPQAFAKALAFQAKAFALgEQAOgDAIgPQAFgIACgMIABgFIABgHQADgJgCgJQgCgJgIgGQgIgGgJAAg");
	this.shape_167.setTransform(-74.5,-113.8,0.775,0.775);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgVByIgIgDIgOgIIgJgIIgGgLIgEgSIgCgMIgFgaIABgQQAFgeAJgYQAGgNAMgRQAOgQAMgKIAPgKIASgEIAIgBQACAIADAGIAZAdIADAFQADAIACAMQABAKAAAKIgBARQgCAOgFASQgFASgGAQQgEAJgFAHQgJALgMAKQgOAJgKAFIgRAFgAghgTQgIALACALIABAGQAEALAJAFQAIAEAHABQAFAAAFgCIAFgCIAHgGQAJgLgBgIIgBgIIgDgHQgFgJgLgDIAAgBQgEgCgHAAIgBAAQgNAAgIAKg");
	this.shape_168.setTransform(-54,-119.4,0.775,0.775);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AhSN8IiXgWQgmgFgXgIQgTgJgbgUQgsgigUgXQgLgPgHgPQgSgwgLg9QgDghgBgyIgDhTIgKiqIgBgIQABgMgCgHQgFgTgSgLQgTgLgTAGIhLAcQguATgpAIQgLABgMgBQgJgBgLgEQgGgDgGgFIgPgOQgOgUgMgaQgJgZgEgTIgBgKQASgKAZgLIAlgNQANgEARgCIA/gGIAuABIASgCQALgBAIgFQANgHAEgPQAEgPgHgOQgIgOgPgEIgRgEQgRgDgKgBIgHAAIgaACQgvAGgkALIgoARIglATIAPgsQAFgLAIgMQAJgJANgLQAfgWAVgLQAvgRAcgFIAugDIAVAAQAKgBATACIABABQAJACAJgCQAOgEAGgMIACgDQAFAAAFgEIAAABQAOgJAUgcQAKgMAKgUIATgqQAFgMAHgaIAHglIAGgxQADgWgBgVQgBgWgHgfIgDgKQAlgYAbgUQAUgOAYgTIAogjQAPgNAUgXQAYgbAOgUQAUgaAIgNIAMgWIAvhiIAJgbIAFgBQAJgBATACIAUACIACAAIgBACIAFAAIADABIABgBIAAgBQATgBAPgDQAegDAdgHQAUgFAigNIA+gYQAVgKAcgPIAXgOIACABQAQAOAJALQALAQARAeIAcAvIAhAxQASAeALAWQALAeAIAdQALAiALAdIAXA+QANAjAIAbQgOAEgGALIgnBEIgUgCIASgkQARgjANgRQAEgGgBgJQgBgJgGgGQgHgHgLAAQgLAAgGAHQgLANgLASIgOAZIgOAcIgSAlIgWAEIgMAEQgLgogFgcQgBgHgHgGQgHgFgIAAQgKAAgHAHQgJAJACAJQACAbAFAaIAIAhIgaATQgVASgUAdIgCgDQgBgFgDgEIgHgLQgEgEgJgGIgSgIIgVgFIgmgFQgTgDgRAAQgQAAgTADQgYADggAMIgZAJIgIADIgDgIQgGgSgLgXQgDgGgIgEQgHgEgIAAIgHABQgMAEgGAJQgGAKADANIAIAhIAJAdIgdAbIgDgBIghgWQgHgEgHAAQgMAAgJAJQgIAIAAAMQAAALAIAIQARAQARALIABABQgIANgGAPIgMgBQgggFgXgHIgJgBQgLAAgKAHQgKAIgDALQgEAOAIANQAHAMAOAEQAPAEAgAFIATACIgDAZQgCAQAGAfQACAJAHASQAHASAGALQAJARATAUQAKALAVANQAOAJAXAHQANAFAeACQASABAVgCIAfgGQANgDAYgLQAKgGAcgTQANgIAMgKIARgRQAXgaAKgRQALASANANQANAMAUAKIAVAJIARAGQAbAIAWACQALABAcgFQASgDAagMQAkgQAdgYQALgJAOgOQALgMAPgVQAOgTANgdQAOghAIgcIACgMQAEgTABgVIAAgFIAIAKQAHAGATANIATAKIAeALQAVAHAnADQAjACAngKIgGAQQgOAegMAWQgOAYgTAZQgSAWggAiIguAtQgTAQgGApIgIApQgHAigHBEQgGAogUBSQgSBIgXA5QgLAYgSAdIgNARQgdAlgeAdQgiAgghAZQhTA8hTAmQg2AWgwAOQgjAKhBAJQgbACgUAAIgcgBgAA4E+QgRAFgJAPQgIAPAEASIAHAmQAEAWAGAOIALAaQAJARAQAQQAJAJAOAJQAJAGAUAGIAcAGIAXACQATAAATgDIAZgFIAbgMQAPgHAYgUQAPgNAKgOQAYgeAKgYIAKgYIAHgWQAEgLgFgMQgFgMgKgGQgNgHgOAEQgNAEgIAMQgJAMgLAZIgNAaQgCAFgIAKQgMAOgLAJQgKAHgKAFQgMAFgJABQgSACgXgDQgJgBgNgEIgJgFIgHgIQgFgHgEgJQgGgOgEgQIgJguQgDgQgRgJQgJgGgNAAIgLABg");
	this.shape_169.setTransform(-82,48,0.775,0.775);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("Ag+CRIgUgFIgQgKIgOgOIgLgTQgHgSgDgPIAAgTQAGggALgcQANgaAJgNQAbggAUgRQAQgKAXgLQAlgPAZgEQAQgCAhAAIANABQABAMAEAGIAEAHQAFALADAPQACAggFA2IgKAhIgNAaQgDAGgMARQgNAPgPANQgfAWgdAOQgLAEgLACIgUABIgYgBgAhFgNQgHAEgJALQgFAJAAAMQgBAIAHAOQACAFAIAJQAJAIALAEQAQAFARgHQAQgHAHgPQAMgZgNgUQgDgGgKgGIgDgCQgGgFgNgBIgKgBIgDAAQgLABgLAFg");
	this.shape_170.setTransform(-80,41.4,0.775,0.775);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AhFCDIgZgNIgJgJIgKgUQgHgRgDgRQgBgJABgSQAIgqANgjIAKgVQAFgKAMgSIAJgLQAOgIALgFQAfgMAqgHIAWAAIARAEIALAGQAHAHAEAFIAPATIAEAIQAIAYAEAVQABAOgCATIgIAfQgDAMgHARQgJAUgKAQQgJAKgOAMQgXAQgZAMQgRAHgSADIgNAAQgNgCgXgJgAg6gNQgPAFgKAKQgIAJgDAKQgEAKADAOQADASASALQAPAJAXgGQAVgFALgSQAEgGAAgIQAEgEADgIQADgNgGgLQgGgMgNgDQgUgFgIABQgHAAgIACg");
	this.shape_171.setTransform(-52.9,38.6,0.775,0.775);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("ApvKYIgSgUQgOgMgTgNIgYgQIhIg2QgRgPgLgMIgagYIgZgXIgTgVIgIgNQgFgPgEgTIgDgMQgBgWACgRQADgUAIgTQAbg9Aqg7QA1hNAcgmQA6hGAlgjQBNhIAegZQA/gtA6gkIAfgSQAmgUA8gaQAxgUAigLQAugNA1gIQAegEAeACIAhADIA3AGIAIABIAIAGQAOAIAQgEQARgEAIgOIAbguIAVgfQAegnAXgUIAkgfIABAAIATgPQAHgHAGgFIABAAQAlgcAYgOIAmgVQANgHAQgGQBCgbBNgWQAggJAlgGQAcgFAxgIIAogEQAWgCAXADQAXAEALAEIANAHIALALQAIANAHAOIAKAeQADALACAQQACAMgBAQIgIAmQgHAmgJAXIgmBLIgWAqIgZApQgQAbgdA3IgUAgIgGgHIgng9QgZgogWgZQgIgKgNgKIANgPIAzg6QAWgdAFgIIAKgQIAOgfQADgJgDgJQgEgNgMgIQgIgEgKAAQgQAAgIAKIhSBkIgnAtIgYAYIgXAVIg1AiQgQAKgqATIghANIglAPQgnANgmAGQgZACgYgCIgOgCQgPgBgTAEIgDABQgNAAgNALQgOALgHAUIgIAVQgLAVgXApIgTAiIgZAjQgZAhgYAZQgSATgOANQgHAHgZATQhLA4g0AfQhKArhEAfIgdAMIgpANIglAKQgRAEgPACIg9AEQgTABgKALQgMAMAAARQAAAQAMAMIAIAHQAKAFALAAQAkAFAmgHIAcgGIAigJQAogMAXgIQAXgIAsgUQAggOAkgUQACASgBAJIgDAnQgDAWgCAuIgDARIgHAZIgPArIgJAQIgBAEQgPgHgRgBIhDACQgVACgNAEIgVAGQgqANgjAUQgNAHgaAVQghAbgOAUIgLASgAqZIvIAIAAIAmAEQAUAAAYgEQAjgGAzgWIBKghIBqgyQAIgEADgKQACgJgFgIQgFgIgIgCIgGgBQgGAAgGADQh4A5g1AXIgBAAIAAAAIgBABIgDABQgzAUgjAGQgRACgegDQgWgEgNAEQgJACgEAIQgFAJADAIQACAJAIAFQAIAEAJgCgAi+heQgsAtgjAeIhHA+IgEACIgBABIgTAPIgDACIgDADIgzAiQgbAQgvAWIgmATQgSAJgWAQQgFADgEAGQgFAKADAIQADAKAIAFQAJAFAKgDQAugQAmgOQA1gVAZgOIA5glIAVgRICBhwIApgqQAKgKAAgOQAAgNgKgKQgJgJgOAAQgOAAgJAJgAhbj8QglAGgWAHIgfALIgyAWQgZAMg4AgIgnAWIgtAfQgeAWgxAoIgxAsQgPAMglAoQgTAUgaAjQgQAUgUAnQgEAHABAIQABAIAGAGQAIAHAJAAQALAAAGgHIASgYQAdgkAvgwIAUgUIAZgXQAPgNAegYQBLg5A3ghQBZgzA3gZIAYgIQAXgJAqgFQAMgDAIgNQAIgMgEgPQgEgOgMgHIgIgEIgKgBgAH5m0IhqA3QgwAZg7AkQgJAFgCAKQgDAKAFAIQAFAIAKADQAKADAIgFQA4ghAzgbIBrg4QAJgEACgKQADgKgFgJQgHgMgOAAQgGAAgHADgAMjo5IgaBPIgTApQgXAtgfArIgQATIgUAVQgGAFAAAJQAAAJAGAGQAGAGAJAAQAJAAAGgGIATgVQALgLAKgPQATgZAQgaQAOgYAOgfIAMgdIALgnIANgvQACgHgDgGQgEgHgHgCIgFAAQgNAAgEANgAJnpAIg3AQQgyAPgbAKQhFAahQA4QhHAxg3A9QgIAJAAAMQgBAMAJAIQAIAJAMAAQANAAAIgJQArgvAqggQBMg5BIggQAagLBDgTQAqgMAPgDQAMgDAHgMQAGgMgDgMQgDgLgJgGQgJgGgKAAIgIABg");
	this.shape_172.setTransform(-99,-3.8,0.775,0.775);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAFBGIABgMQARADAIgPQAGgJgDgKQgDgJgIgGIgYgPQgNgIgOgGQgSgIgXgHQgKgDgYgCIgOAAIAEgDQAdgVAWgLIATgHIBEAnIBLAwQAIAFAJgDIgSAZQgQAWgNAXg");
	this.shape_173.setTransform(-98.5,-40.4,0.775,0.775);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AhoAXQALgXAMgQIACgDIACgBIATgHQAJgDATgDQARgCARABIAWAGIAVAHQALAFArAYQAFADAEAAIgBALIgxgGIgagCQgVAAgoAFIhSARg");
	this.shape_174.setTransform(-106.6,-36.7,0.775,0.775);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAaAfQgCgIgJgHQgngcgrgZIAZABQAyAJAoAOIAUAMQgKAHgKALIgUAVIgCgHg");
	this.shape_175.setTransform(-89.9,-44.5,0.775,0.775);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgHI4IgNg2QgJgqgEgLIgIgZQgGgNgKgGQgHgEgJAAQgFAAgKAEQgFACgHAKIgEAHQgJATgMAmIglB7QgWhDgJgiQgJghgIgaQgFgOgJgTQgJgSgRgFQgUgGgUAUQgIAIgKARIgNAYQgMAWgLAZIgDhjIgEg1QgDghABgUIAIiDIAUikIAIghQAGgbAMgiQASgyAdhGQASgqAWgqQAOgZANgUQAEgIAVgcIA0g/QA0g6AsgjQAsgiA0gXQBNgfBSgMQApgEAmADQAMACAVAGIgEACQhJAzgoAiIgPAMIgJgBIgvgDQgLAAgUADIgXAFQgQADgeAOQgWAKgXAMQgPAIgeAaQgQANgVAYQgOAPgTAXQgVAZgPAVIgbApIgcAqIgZAtIgXAuQgIAQgPApQgLAcgHAVQgDAKgHAnIgLAzIgIA5IgFA2QgDAaADAfQAAAGAEAHQAGAJAJACQAJADAKgFQAKgFACgKIAVheIAUhcIALguQAEgVAKgZIA1h+QAQgeAIgLIA1hMQAJgNAJgJIAXgcQAagdAWgSIArgaIAxgYIAVgHIAAABIgtAwQgJAKghArQgYAegUAeIhKBuQgOAWgSAiQgSAigMAhQgJAagCApQgBAKACATQgXAcgKAgQgFAOgGAaIgKApQgFAYAAASQAAAKAGAHQAFAHAJADQALADAKgGQAJgGAEgKQAFgRAEgQIAHgcIAMgrIAEAIIAKAOQANATAIAIIATATIgCAEQgHAVgFARQgLArgCArQAAAKAIAIQAHAHALAAQALAAAGgHQAIgIAAgKIAHheIAOAPIAnAhQAXAVAYASIApAaIAOAJQghAigSAiQgGAMgQAmQgHATgHAWQgIAdgOA5IgHAWQgIgWgKgmg");
	this.shape_176.setTransform(-163,23.5,0.775,0.775);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("ArHNoQgZgNgQgJIgmgbIgngbIghghIgggjIgmg3QgKgOgKgSIgRghQgFgSgCgOQgDgiACgaIAGgyQADgPAHgUIALgjIATg1QARgjAvhRIAmg+IAng/IAxhKIABABIAVAOQAUAMAbAIQAWAHArADQAOABAagCQAagCAcgHQATgDAVgHQAagIAVgKQAXgLAdgYQAPgMAYgcIAhgiQAJgJABgMQACgMgGgKQgKgRgVAAQgJAAgIAFQgYANgXASIgpAjQgVAOgUALQgjANg7AKIgQACQgXACgZgDQgTgDgUgHIgZgNIAUgbQAegqAOgWQAagoAkg6IAdgyIAaguQAUgmAIgUQAMgggQgVQgGgJgFgEIgHgGQgMgLgNgJIgWgPQgRgKgWgRQgkgdgaggIgIgNIgHgZQgDgfACgWIAFgTIADgGIATgTIABgBIAIgCIA7gCQALgBA6AFQAQABAMgCIAagDIAjgHQAbgGAfgMQA+gYA4gnIAhgZQAHgFASgTIAagaQAQACATAAIANAAQgWAMgXASQgeAagKALQgUAXgOAXIgWAxQgDAKgDAVQgFAaAFASQAEAPAJATQAJARAOARQAaAdAiAHQAmAHArgLQANgEAXgLQAMgGAMgKQARgNAIgJIAOgPQALgNAQgYQgCAeALAaQAHATALAQQAHAJAHAHQAEAFAOALQAMAJAWAEQASAFASgCQAngBAogTQAdgNAlgeQArgjAUgrQALgYAMgoIAHgaQACgLACgWIABgHQAsAhAfARQAYAMAVAIQAbALAJACIAeAJIgIAPIgNAaIgOAaQgXAggKARIgQAbQgMAXgEAOQgGAVAOATQAAAKAFAKQAKAPAQAFIAMABQAMAAAKgGIAmgQQAsgRAkgJQArgLAmgGQAagDARACQAlAFAXAJQALAFAJAHQAIAGAKAKIAMAOIAPAWIgCAAQgPgEgTgBIgLAAIgkACQgoADg9ARQgkALhAAiQgZANgQALQgWAQgOAMIgXAYQgMAOgHAPQgGAMACAKQgCAMAHALQAIAOAQAEQAPADAOgHIAZgMIAcgJQAOgCAPACIAMADIAKAGIAFAFIAGALQAFANAIAZQAIAYAYAAQAOAAAKgJQAIgJABgPQADghgVgoQgCgEgOgRQgFgHgHgFQgXgVgVgFIAtgVQAxgTA3gJQAPgBAeAAIA1AEIAFABQALAEAMgFIAGAhQACAXgCATQgJA4gWA8QgLAXgNASIgZAiQgUAXgKAKIgaAXQgqAegXALIgpAMIAAgwIgBgcQgDgRgDgIIgFgLQgGgKgKgGQgSgOgbAJQgGACgUAJQguAWhGAsIg6AmIgmAbIgIgTQgbhFgPgiQgYg0g2ggQgQgKgRAAQgNAAgMAHQgTALgHAhQgIAsgGA1IgEAqIiPgxQgdgKgqgDQgOgBgRACQgRACgMAEQgVAHgKARQgFAGgBAIIgCAOIADARQABAGAHAOIAGAMIAPAYQAMAUAvA2IgHABQgVACgbAFIgpAHQhOAShOAtQgtAageAXQgaAVgeAfQgkAnhABaQgUAcgNAWIgfA3QgOAXgPAbQgMAZgQAqIgtB0IgXA9g");
	this.shape_177.setTransform(92.8,-70.4,0.775,0.775);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("Ag7A5QgLgVgNgKQgFgFgHgDQgHgEgOgEIgDAAQAagIAZgLQAcgLAggSQAjgUARgMQASgMAWgSIAHAVQAHAUARAaIAFAJQgLADgJAEIgIAFQgMADgTAJQgLAFgVANQgkAYgbAoIgNATQgCgXgKgVg");
	this.shape_178.setTransform(104,-140.9,0.775,0.775);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AhGCKIgKgDIgEgCIgIgIQgGgKgEgJIgFgQQgBgTACgSQAGgaAEgPQAFgRAIgTQAJgUAGgJQALgSAIgLIARgSIAKgDIA5gfIALgCIARgBIAUAFIACABIADADIAHAMQAIAVAEAbIABAWIgCATQgGAjgNAiQgHAOgJALQgKANgVASQgaASgUAKQgVAIgVADIgQABIgGAAgAgJgoQgHABgJAGQgKAGgGALQgGAHAAAHQgCAHACAMQAAAGAGAHQAFAGAGADQAHAEADAAIALABIAHABIALgBQAMgCAJgKQAGgFADgJIAEgFQAIgMgEgOQgEgPgMgGQgJgFgGgBIgMgBIgNABg");
	this.shape_179.setTransform(110.9,-126.8,0.775,0.775);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("Ag9BnIgHgCIgFgCIgIgJQgKgQgEgIIgCgHIAAgMQACgMAFgQIAFgMQAIgRANgSIAcggQAIgIAWgTIARgMIAEgBQATgCAOAAIAeACIAHACIAEAIIAJAYQAAAJAAASQgEATgFAOQgJASgVAdQgSAWgQANQgRAMgLAGQgPAGgSADIgMAAIgNAAgAgEgnQgMAEgMAKQgMAKgBATQAAASAMAMQAKAKARABQAQABAMgJQAOgKAGgPQAFgPgJgSIgBgCQgEgIgGgFQgHgGgIAAIgBAAIgTADg");
	this.shape_180.setTransform(86.8,-126.2,0.775,0.775);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AKOGtIgKgeQgGgRgPgZQgNgVgdgiQgKgKgMgKQgVgTgWgLQgTgJgegHQgggHgXgDIgPgBQgMAAgfAEIgqAIQgnAHgoAOIACgDQAPgVAJgSIAYgvQASglAFgQQAJgZgMgVQgHgOgPgHIgTgKQgVgKgegJIhGgdIgfgTQgQgJgmgcIgggcIhKhHQgPgPgNgRQgOgTgOgdQgEgJgGgKQACgPgHgLQgIgOgQgFQgFgCgHAAQgLAAgJAGIgxAnQgaATgfAQQgbAPgmARQg7AYgnAHIgwAGQgXADgZgDIgKgCIgvgRIgXgJIgagFQgNgDgLAEQgNAFgGALQgHAMACANQABANAKAJQAOAOAeAOIgWAUQgqAfg6AbQgiANgmAIIgBgdIAFgwIAGggQADgQADgfQADgRAFgUIANgnQAQgmAPgVQAMgPAQgPQALgLAUgQIAggXIArgYIBMgkIAkgOIApgNQAhgKApgGQA8gGAiADQAVAEAdAIQAhAJAQAGIAOAIQAQAOAWAZIABABIgBAGQAAAUAOAOQAOAOAUAAIANgBQANgEAIgJIAHgFQATgPAXgKIApgQIAugPQAggIBCgKIAtgEIA6gCIA4AAQALAAAmAEQAxAIAjAIQAlAIAtARQAXAKAbAPIAfAQQATAKAMAIQAeAaAtA4QAeAnAOAWQANAUAUAtQAMAiAKAvIAKAnQAGAXACAQQAEAgAAAZQABAdgEAjQgFAegLAmQgJAkgOAkQgSAognBAIhGBfIgBABQgGgfgHgWgAEdlxQgGAEgBAGQgCAIAEAHQADAGAIADIBMAbQAfANAbAQQAXANAiAaQAhAaAgAgQAaAYATAVICUCrQAEAGAKAAQAHAAAGgGQAGgGAAgIQAAgIgGgGIhhhvQg6hEgrgpQg9g7g9glQgcgRgrgSIhLgbIgFgBQgGAAgFAEgAAdjyQAJAMANANQAMAMATAPICaB4ICWBeQAFACAFgBQAFgBADgFQACgFgBgFQgBgFgFgDIhag1IjbidQgogggQgUIgMgQQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgFACIgEAEIgCADQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQAEACACgCgABhlDQgEAIACAIQADAJAHAFQAXAOALAIIBZBEQBBA1AjAXQAkAYBWApIBwAzQAGACAHgCQAJgDAFgIQAFgJgDgJQgDgKgIgEIhBgeIhDgfQhKgkg0gkIhFg1IgCgBIgZgUIgcgWIgngcIgggUQgEgDgGAAQgNAAgHALgAmtk8IgkAGIhqAVQgJACgEAJQgFAIADAIQACAJAIAEQAHAEAJgCIBIgPIDOgbQAKgBAFgFQAGgHAAgIQAAgIgGgGQgGgHgIAAIgBAAQgxAEhiALgAkqmdIgzAEQgfACgfAFQglAGgnAKQgiAJgkANIg0AWIgSAJQgGADgCAIQgCAHAEAGQADAHAIACQAHABAGgDIAcgOIACgBQBdgmBdgNIACAAQAVgDBDgGIA9gEQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAQgOAAgqADg");
	this.shape_181.setTransform(123.9,-132.7,0.775,0.775);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("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");
	this.shape_182.setTransform(125.4,-26.1,0.775,0.775);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("Aj4OZQgngGg5gUQgSgGgUgJQgqgTgggYQgigagVgYQgRgQgdgkQghgwgOgeQgXg1gJguQgMgwgIgwQgEgsAEhZQAAgkgEgVQgFgWgXgWQgUgVgkgcIALAJQgKgJgigiQgfgfgOgRQgOgUgNgcIgZg5IAggGIAkgIIAigHIAagJQAXgJAWgSQAOgLAQgSQAggiAVgeQAYghATgkIAhhDQAxhgAXg5IATgyQAKgbAMgfIAqhjIgDAGQANgfALgUIAagpQAqhEANgSQAzg/AggjQAHAJAJAFQAMAJATABQAKABAXgDIAdgDIBEgGQAZgCAjAAQATAAAbACIgLAQQgZAogPAcQgOAbgSApIgfBFIgfBGQgLAXgCAJQgGATAEAPQAEAOAMAKQAKALAPACQAOADARgDQALgCALgFQAZgJAegRIAzggQAsgZAXgLIAZgJIgsCYIgVBEQgNA0gEAmIgBANQAAATAIAKQAMAQAHAFQAPAIANgBQANgBALgDQAFgBASgJQAJgFAKgIIAdgUIBdhLIgKAcIgTA2QgDAOgGAxQgGAxgBAJIAEAVIAHATQAGAJAIAGIALAJQAJAEALADQAXAFAlgMQAjgLBGgeIA6gYIADgBQALAEAMABQALABAPgDIAbgGIAjgHIAXAAQAeAFAdAJIASAGIASAJIANAOIADADIgOACQgYACgTAFIgeAKQgSAGgOAJIgPALQgrAfgUAUQgTAUgcApQgJANAEARQAFAQAOAIQAOAIAQgFQAOgDAJgPIAJgMIALgMQAGgGAGgFQAbgTAfgOQAWgHAmgHIAQgBIAfgEIAAAGQgIAhgKAbQgUAqgTAcQgOAQgTAQQgXARggAPQgbALgXAEIgNADQghAGgOAZQgNAZAHAXQAAAFADAGQABATgCAaQgLBFgPA0QgLAnggBMIgnBTQgSAlgfAsIgRAWQgeAlgpAiQgkAZgyAXQhbAlhHALQgwAGhTgBIh/AAIgdABQg2AAgegEgAmFIKQgSAKgGAWQgGAWALATQAZAmARATQAbAcA0AQQATAFAUABIATAAQAjAAAsgUQANgGAPgKQAYgSALgLQAigjAPgiQAGgLAAgKQAAgSgMgMQgNgMgSAAQgTAAgKAMQggAlgPANQgPAKgOAHQgUAHgNACQgMABgWgCQgOgCgOgFIgMgHQgHgGgFgGIgQgZQgMgTgVgGQgHgCgHAAQgOAAgNAIgAjogIQAAALAEAWQACAKAIATQAUAsA3AmQAUAOAeAJQAUAFAgAAQAWAAAdgIQAagGAegTQASgLAagZQATgTAOgYQAGgJAMgeIAHgUQAKgdAHgvQAEgdABgPQABgZgGgTQgDgJgMgXQgSgdgVgNQgMgIgMgGQgOgGgKgDQgNgPgTgGQgPgFgWAAIgEAAQggAAgxAWQgWAKgWAQIgEgRQgBgLgKgRIgJgQQgSgbgMgOQgJgIgHgEIgLgIQgIgEgRgFIgWgFIgdgEIgYgBQgeAAghAHQgUAFgSAIIgaAMQgIAFgPAMQgPAMgPASIgRAXQgGAKgKAWQgHAUgGAuQgFApAJAkQADANAOAcQAHAQAQASQAPASAYAPQAFAEAKADQAUAJALACQAmAKA1gMQARgDAbgMQANgFANgKg");
	this.shape_183.setTransform(81.9,37,0.775,0.775);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgsBjQgKgCgIgDIgMgHIgPgPQgGgJgEgJIgFgPQAAgRACgQQADgWAGgPQAJgRAHgLQAKgLAJgIIAagIQATgHARgDQAcgDASABIAVAGIAGADIAJAKIAQAYIACAKIABAIQgEASgJAXQgJARgOAUQgRAUgPANQgKAHgQAIQgPAGgTAEIgKAAIgLAAgAgOgkQgMALAAARQAAAPAMAMQAMALAPAAQAQAAAMgLQALgMAAgPQAAgRgLgLQgMgMgQAAQgPAAgMAMg");
	this.shape_184.setTransform(57.2,22.6,0.775,0.775);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgrBrIgPgDQgHgDgJgHIgTgTIgIgOIgDgLQgCgdAFgoQACgPAFgOQAGgNAJgNIAIgIIARgJQAegLAagFQAOgBAOABQARAEARAFIAKADQAIAGAFAGIASAZIAAABIgBARIgGAfIgLAgQgIASgKAPQgMAOgQAOQgOAJgNAGQgNAFgQADIgOABIgOgBgAgpgYQgNAMAAARQAAASANAMQANANARAAQARAAAMgNQANgMAAgSQAAgRgNgMQgMgNgRAAQgRAAgNANg");
	this.shape_185.setTransform(81,32.5,0.775,0.775);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FFFFFF").ss(10,1,1).p("AT3AAQAAIOl1F0Ql0F0oOAAQoNAAl0l0Ql0l0AAoOQAAoNF0l1QF0l0INAAQIOAAF0F0QF1F1AAINg");

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFF00").s().p("AuCOCQlzl0AAoOQAAoNFzl0QF1l1INAAQIOAAF0F1QF1F0gBINQABIOl1F0Ql0F0oOABQoNgBl1l0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knopGeel, new cjs.Rectangle(-196.3,-176.7,392.6,308.8), null);


(lib.knopAqua = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2C2C").s().p("AgHBpQgRgFgJgPQgIgPAEgSIAKguQAGgZAFgNQALgdAFgIIAXgjIACgCIAEAzIAFBIQACAuADAbQgIAKgNAEQgHADgHAAQgFAAgGgCg");
	this.shape.setTransform(-171.4,15.3,0.768,0.768);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C2C2C").s().p("AgsA2IgCgRQgDgWABgIIADgXQAEgMAKgNQALgMATAAQAMAAAKAFQAWANAGAjIgRAJQggARgsAcg");
	this.shape_1.setTransform(-159,-38.2,0.768,0.768);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2C2C").s().p("AgqBCIgGgpIgJg0IAAAAQAsgdAggRIARgJIABABIAEAaIgLAGQgJAEgCALQgDAKAFAIQAEAIAKADQAIACAHgDIAGAyIACAKIgYAEIgiAIQgUAHgTAKg");
	this.shape_2.setTransform(-158,-31.8,0.768,0.768);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C2C2C").s().p("AABAZQgJgEgEgIQgFgIADgJQACgLAJgEIAKgGIAJAxQgEACgFAAIgGgBg");
	this.shape_3.setTransform(-155.4,-34.2,0.768,0.768);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2C2C").s().p("AgWAmQgTgLgFgTIgGgXQATgKAVgGIAhgJIAYgEIAGAaQAFASgJARQgJASgSAHIgFABQgGACgHAAQgMAAgMgHg");
	this.shape_4.setTransform(-157,-24.2,0.768,0.768);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2C2C").s().p("AgMgBIAZgBIgEACQgFADgEAAQgGAAgGgEg");
	this.shape_5.setTransform(-151.2,-27.8,0.768,0.768);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C2C2C").s().p("AAJAiIgQgJIgBAAQgigCgdACQAEgGAIgHQAVgVAmgYQAKgGAOAAQAcAAAOAXQAHAMgBANQgDALgIAHQgMANgSAAQgLAAgLgGg");
	this.shape_6.setTransform(-142.6,1,0.768,0.768);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C2C2C").s().p("AhNAIQBggtAxgTIADAAIAGAsIiMBEIgFABg");
	this.shape_7.setTransform(-148.9,-36.7,0.768,0.768);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C2C2C").s().p("AAKDGQgQgLgHgVIgJgaIAIAEIAVAPQAZASAMAEQALAEALgGQALgHADgLQADgKgEgKQgEgJgKgFIAAAAIgBAAIgHgEIAAgBIgBAAIAAAAIgdgYQgRgOgMgIIgvgcQgIghgIgpIgGgiIgJgyIAIgEQAGgDADgHQADgIgCgGQgCgHgGgFQgGgFgHAAIgEABIgDgXQAhgLAkgIIAigIIACAEIALAvQAIAfANBCIARBhQALA2AOAqQAGAVgLAUQgMAUgVAFQgHACgHAAQgOAAgNgHg");
	this.shape_8.setTransform(-136.7,-29.2,0.768,0.768);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C2C2C").s().p("AgMgVIAEAAQAHAAAFAFQAGAEACAHQACAGgDAHQgDAHgGAEIgHADg");
	this.shape_9.setTransform(-142.5,-39.4,0.768,0.768);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C2C2C").s().p("Ag+AoQgEgIACgHQACgIAHgFIAxgeQAZgQASgIQAFgDAFABQALAAAGAJIACAFQABAGgCAHQgDAGgGADQgaAOg8AnIgbABQgDgDgCgDg");
	this.shape_10.setTransform(-147.8,-31.4,0.768,0.768);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C2C2C").s().p("AjKBkIgFhJIgEgxQASgWATgTQAegbAYgRQAWgOAcgNQAegOAhgIQAQgFAjgEQAcgFAngBIATgBIAKAAQAVADAIAGIAQALIAPAQQAMAPAAAPQAAAIgCAFQABgOgHgMQgNgXgdgBQgNABgKAFQgoAYgVAWQgHAIgFAGQgRAAgRADIgeAGIgiAMIgcAOIgbASQglAfgXAbQgLASgIAPQgKAcgOA/QgCAKgEAFQgDgbgDgug");
	this.shape_11.setTransform(-153.2,8.9,0.768,0.768);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C2C2C").s().p("AgQB3QgZgCgNgKQgQgMgIgPQgKgXgDgOQgCgMAAgRQAAgOAFgYQADgPAIgTQAIgSAGgIIAOgTQAegCAhACIAAAAIASAJQAKAGAMAAQARAAANgNQAHgHADgLQgBAagWAOQgSAKgLAJQgUASgRAVQgKAOgHAMQgHASgCAOIAAAKIADAOIAEAGIAKAKQANALgEAPQgCAHgFAFQgGAFgGAAIgCgBg");
	this.shape_12.setTransform(-144.3,10.9,0.768,0.768);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C2C2C").s().p("ABNAtIgNgFQgOgGgagFQghgEgjAEQgfAFgeAKIgEgQQARgGAKgSQAIgRgFgSIgFgaIAQgDQAMAJALgHIAEgDQAQAAAOACQAUADAXAGQAXAGAcAPIAGAVQAHAdAOApIghgRg");
	this.shape_13.setTransform(-147,-23.2,0.768,0.768);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C2C2C").s().p("AAdILQglgDgMgDQgRgDgMgFQgYgLgEgDQgYgQgQgRIgdgeQgggigYgiQglgzgKgvQgFgUgEgmIgLhRQgFgtgBgfIgBhFIgDhIIADhNQAEgnAJglIALgnIALgiQAMggATghQATgiAXgZQAPgPAbgWIAhgaQAUgOALgGIAGAYQAFATASALQATALATgGIAFgBIAEAPIgQAHQgSAJgVAQIgXATQgXASgSAWQgSAYgQAiQgKAbgKAkQgEAQgGAlIgEBCIAAAUIgCACIgXAjQgFAIgLAdQgFANgGAZIgLAuQgDASAIAPQAJAPARAFQAMAEAOgFQANgEAIgKIAJA6IAIAxQAGAcAGAUQAKAUAPAUQAQATATAVQAkAnATASIALAHQARAFAPACQAZADAQAAIAGgCIAQgKQAPgNAKgNQAigvAghCQATgoAJgPIAfg2QAGgKAKgFQALgFAMABQgNACgKAKQgLALgCAUQgDAiAEAuIAIBPIACALIgHANQghBGgcAhQgZAegeARQgiATgiACIgQAAIgUgBg");
	this.shape_14.setTransform(-156.2,14.8,0.768,0.768);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C2C2C").s().p("AgyAlIgDgXQgBgRAJgUQAFgKAMgGQALgGAMAAQASAAANANQAKAKAEAHIAJASIAFARIgkAIQgjAHggALg");
	this.shape_15.setTransform(-139.8,-46.4,0.768,0.768);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C2C2C").s().p("AgYBgIgJhQQgEgtADgiQACgTALgMQAKgJAMgDIAGABQAQAFAIANQAFAKAAAKQgCAZgDAIIgYA/IgeBOg");
	this.shape_16.setTransform(-134.7,32.7,0.768,0.768);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C2C2C").s().p("AmSMbIgngDQgigBgKgBQgcgEgKgDQgNgEgPgHIgQgHIgkgRQgvgYgkgpQgkgpgTgyQgOgkgIgvQgIgwgEglQgIhqgGg0IgSiYIAfhOIAYg/QADgIACgYQAAgLgFgJQgIgNgQgFIgGgBIAIgBQAPAAAMAJQAMAJADAOQAKAuAKBMIARB8QALBDAFA9IAKB1QAMBTATAwQAJAVANASQAQATAVASQAZARAxAVIAWAHIAvABQAjACAbgDQAcgEAVgHIAwgPQAogNArgLIBSgYIA5gOQAggJAXgJQAogTAkgZQAOgMARgTIARgZIARggQANgiADgQIAPg5IATg6QAIgWALgmIAEgOIAMgCIAVgHQATgHAggWQARgLAEgQQAGgSgKgSQgJgPgTgGQgUgFgPAKIgFADIAPguIAIgeIAOheQACgPAMgxQANg2AHgUIAPgmIAMgQIAKgKIAwguQAPgQAngtQAYgbBUhWIA0g3QAfggAPgRQANgSAKgVQAEgKACgJIAAgIQgngChDAGIhFAIIgBgRQgDgVgDgHIgHgRIgKgMQgHgHgIgDIgBgJIgJgYQArAAAzgGIAHgBIABALQAAAMAHAKQAIAKAMADQAMAEALgFQALgFAHgLQAJgOACgNIABgHIAZABQApACALADQAkAKAXAfQAOATAFAcQAEATgBATIgEAZIgFAUQgJAZgLAUQgKAUgQAUIgZAdIgaAbIgzA3QgfAfgXAVQgtApgOAPIg4A6IgsAoIgUBRQgNA4gFAdIgEAoQgEAlgFARQgGAYgQA0QgPAxgGAbQgOA3gIAYQgGAVgUA1QgJAXgOAxQgOApgVArQgHAQgLAQIgeAnQglAshDAlQgwAbg2AQIgnALQgwARgYAGIhPAVIhKAVQgZAHgUADQgmAIgeAAIgJAAg");
	this.shape_17.setTransform(-74.5,32.1,0.768,0.768);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2C2C").s().p("AAdBCQgNgFgXgRIgWgPIgJgFQgOgogHgdIgGgVIAvAcQANAIARAOIAdAWIAAABIAAAAIABAAIAHAEIAAAAIABABQAJAFAEAJQAFAJgDAKQgDAMgLAGQgHAEgHAAIgIgBg");
	this.shape_18.setTransform(-135.5,-20.3,0.768,0.768);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C2C2C").s().p("AjfBZQgHgEgCgIQgEgMALgIIAGgDQAYgIAXgJIAtgWIBKglIAtgQIB3giQAygOApgEIACgBQALAAAKAKQAKAKAAANQAAALgHAJQgHAIgKAEIgzALIgwAKIgqAIIgpAJIgmAKQgYAFgPAGIhPAfQgTAIg/ATIgFABQgFAAgEgDg");
	this.shape_19.setTransform(-128.5,-75,0.768,0.768);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C2C2C").s().p("AnKDsQgMgHgEgOQgEgOAIgMQAVgkAUgSIAbgWIApggQAngfA3giQAwgcAqgXQAhgSBEghQBLgjA1gUIA3gSIA+gTQAxgPBKgRIAFgBIB7gbIANgCQALAAAKAGQAQAJAEARQAFARgJARQgIANgSAHQgaAJgiAIIg9APIhsAaIh1AhQgrANg8AaIhYAmQgzAYgrAYQhGAmgSAKQgeARg0AmQgfAagLAMIgNAVQgDAGgGADQgIAGgKABIgCABQgJAAgIgFg");
	this.shape_20.setTransform(-136.8,-59.1,0.768,0.768);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C2C2C").s().p("AhyB5QgHgDgDgIQgEgKAEgJIAMgdQAPgeATgVQAXgaAqghIAvgmQARgNAegSQAHgFAIAAQASAAAJAQQAHALgEANQgDAKgLAIIhAAtIhFAuQgdAXgWAbIgNASQAFANgMAJIgGADQgFADgEAAIgHgCg");
	this.shape_21.setTransform(-101.4,-33.6,0.768,0.768);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C2C2C").s().p("AgfAfQgNgMAAgTQAAgRANgOQAOgNARAAQATAAANANQANAOAAARQAAATgNAMQgNAOgTAAQgRAAgOgOg");
	this.shape_22.setTransform(-93.4,-11.9,0.768,0.768);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C2C2C").s().p("AgcCkQgVgBgRgHQgSgHgJgGQgVgRgEgFQgRgXgEgIQgVgqgBgdQgCghASgnQAPggAegZQAngfAlgMQASgGAMgCQASgDAKAAIAIAAQAWACALAEIAVAIQAZAKAKAIQAIACAFADQAJAFAGAJIAEAGQgKAXgGAgQgDAUgBAQIAAAHIADATIAGASIAHARQgFANgGALQgSAcgbAXQgSAPgOAHQgSAIgPAGQgfAJgYAAIgLgBgAAMhRQgNAHgTAMQgPAMgOAPIgLATIgHAWIAAAIQACAIAEAKQAFAKAHALIAGAHIAJAFIAMADQAKABAKgBQASgEATgHQAMgGALgIQAIgGAJgKIAJgQQAEgKADgLIAAgcIAAgbIgFgRIgagHIgUAAQgQADgMAFg");
	this.shape_23.setTransform(-93.7,-12,0.768,0.768);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C2C2C").s().p("AgGA8IgGgSIgDgUIAAgHQABgQADgUQAGggAJgWQANAVgBAdIgBAYQgBAUgDARQgCANgFAQIgEALg");
	this.shape_24.setTransform(-81.5,-14.4,0.768,0.768);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C2C2C").s().p("ArDJTQgMAAgMgGQgKgGgGgLIgHgPIgCgMIAAgSIACgqIAAhOQAAgVAFg5QAEglAIguQAMhMAQgmQAag9AegsIAWggIAwhEQAXghAeghQAeghAZgWIBEg6QAVgSAzgkQAUgOAwgeIBAgoQCKhPClg6QBJgaBPgQIBNgMQAwgIApgCICagEQAoACArAIIAsALQAKgCALADQAUAGALASQAKASgGAUIgIAaIgIAAQgVAAgOARQgOARAEAUIgBAIIABgGQgCARAHALIAEAGIACADQgPAcgRAaQgbAsg3BDQgkAsgyAwQgdAbgQANIglAdIgYAPQgZAPg3AXQgmAOgjALQg/AUhcAWIh3AaIgFgRIgJgTQgEgHgKgKQgNgNgTAAQgMAAgLAGQgMAGgFAKQgJAUABASIADAXIABAJIgPAEQgWAIgrARIhGAgQgHgkgWgMQgKgGgMAAQgTAAgLANQgLAMgDANIgDAYQgBAHACAWIADARIgHAFIgOAMIgdAaQgWATgZAbQgkAlgpA0QgOATgPAYIgYArIgNAYQgLAXgGAIQgOAUgKALQgaAZgXAAIgBgBgAIbnkIhOAGIhFAGIhUANQgxAIguANQg5AQgpAOQgnAOgrARQgkAQgzAYQhCAggfATIiSBZIgkAaQg5AvgbAZQgkAigrAzQguA8gRAZQghAxgTAqQgQAqgPBPIgMBKQAbgnAQgTIAzg8QA9hAAsgiIASgOQBFgxBEggQBggtA+gRQAhgKAvgLIBRgTIBIgTIBPgVQBCgSBNgeQAegOAcgPQAXgOAegVQAtglAbgeQAeggAkgsQAegrAIgPQAbgxAMgZIgggDIgFAAIg/ACg");
	this.shape_25.setTransform(-133.4,-51.1,0.768,0.768);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C2C2C").s().p("AgQAsIgEgHQgHgKACgRIgBAFIABgHQgEgUAOgRQAOgRAUAAIAIABQgKAegLAWIgUAnIAAABg");
	this.shape_26.setTransform(-78.1,-84.8,0.768,0.768);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C2C2C").s().p("ABaBBIgkgIIgfgIIg1gWIgKABIgoALQgSAFgRgKQgRgKgFgSQgFgRAKgRQAJgQASgFIAagIIASgFQAVgDAHAAIAAAAQAWAAALAEIAYAJIAlASIA9AYIASAwQgFAPgNAIQgJAFgMAAIgLgBg");
	this.shape_27.setTransform(-70.8,-40.1,0.768,0.768);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C2C2C").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_28.setTransform(-72.1,-16.3,0.768,0.768);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C2C2C").s().p("AgJgXQAJAFAFAJQAJAOgFARIgBACg");
	this.shape_29.setTransform(-60.7,-39.1,0.768,0.768);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2C2C2C").s().p("AhxCWQgSgPgJgKIgNgTIgCgEIAEgLQAFgQACgNQADgRABgVIABgYQABgcgNgWQAJgXAPgUQAagiAigRQAjgRAPgEQAYgIAZAAQAQABAQADIAUAFQAMAEAHAFIATAOQAJADAHAGQAHAHACAJQAKArgBAVIgDAeQgDAbgDAHQgGAWgJARQgQAdgLAOQgbAjgeARQgWAMgRAGQgbAJgUAAQgsAAgfgXgAAdhhQgNADgQAGQgWAKgQALIgOAPQgIAKgHAPQgGAQgEAXQgDAVABAOIADAIIAFAKIAJAJIAKAGIAJACQAHABAGgBQAUgEAOgGQANgGALgIQALgJAJgLQANgRAKgUQAEgMABgLQADgVAAgWIAAgTIgOgKIgOgDIgMAAIgKAAg");
	this.shape_30.setTransform(-69.5,-16.3,0.768,0.768);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C2C2C").s().p("AAeB7IgegHQgWgGgRgIQgQgHgWgSQgdgYgGgGQgSgTgJgTQgJgVgDgUQgDgSABgJIAHgoQADgNALgIQALgIAOAAIAKABQANAEAIAKQAJALAAAOIABAaQACANAFAMIAIAOQALANAXARIATAMQARAGAvAIQANABARgBQATgDASgGIAVgNIgEANQgLAigSBDIgCABIgcADIgCAAQgVAAgmgGg");
	this.shape_31.setTransform(-67.4,37.8,0.768,0.768);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C2C2C").s().p("AgYgmIAEgNIAFgEQAPgKATAGQATAFAJAQQAKASgFARQgEAQgRALQgfAVgTAHIgWAHIgMADQAShDALghg");
	this.shape_32.setTransform(-54,42.7,0.768,0.768);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2C2C2C").s().p("Ag/BZQgZgKgNgVQgNgWgEgVQgCgOABgOQABgOACgIQAKghAUgcQASAMAZAIQAJADAeAEIgEAFQgOASgKAUQgEALgBAHIAAAIIADAKIACACIAHACIAHAAQAIgBAJgEQAKgFAHgEIAHgIQAGgHACgGQAEgKADgOIAAgUIgBgBIAlABQAUAAAbgCQAAAOgCATQgEAagLAWQgMAYgSAQQgrAmgtAEIgLABQgUAAgSgIg");
	this.shape_33.setTransform(-44.1,-13.8,0.768,0.768);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C2C2C").s().p("ACOG0QgbgSgTgfQgVgigIgSIgdhBIgQgpIAAgCQAFgRgJgPQgFgJgKgFIgUg6IgahDIgYhEIgMgXIgRgfQgRgdgNgbQgPgigPgmIgSgvQgLgXgWgmQgNgVgIgUIABgBIAUgnQAMgXAKgeIAEABQAYAHAPAaQAIANAMAQIAbAlQAPAVAIATQAQAiATAyQAQAhAMAWIAgA4QAPAaAPAmIAaBBIAyB/QAYBAARAnQAMAbAHAMIAUAhIAIAJIAEACIAAAAQACASAGASQgZACgUAOQgRANgWAdIgCACg");
	this.shape_34.setTransform(-61.7,-54.8,0.768,0.768);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C2C2C").s().p("AgRASQgLgHgHgQIgGgRIAEAAIADAAQAUAAAWAIQAOgIAQAEIAEABQAAALgGAKQgHANgQAFIgLABQgJAAgKgFg");
	this.shape_35.setTransform(-41,-24.1,0.768,0.768);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C2C2C").s().p("AgUACIAIgHIACAAIAHAAIALAEQAEABACABIAHAFg");
	this.shape_36.setTransform(-42.9,-19.4,0.768,0.768);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C2C2C").s().p("AgfAOIgCAAIgEAAQgGgRgCgSQAIADAPADQAfADAagBIAJAXIACAJIgEgBQgQgEgOAIQgWgIgVAAg");
	this.shape_37.setTransform(-41.3,-26.9,0.768,0.768);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C2C2C").s().p("AA5AtIglAAIgHgGQgCgCgEgBIgLgDIgHAAIgCAAIgIAIQgegDgJgEQgZgIgSgLIACgDQAWgcARgMQAUgPAZgBIAGARQAHARAKAGQAOAHAQgDQAQgFAIgNQAFgLAAgKQAIADAHAGIAKANIAHAQQADAGADAVIABARQgXACgRAAIgHAAg");
	this.shape_38.setTransform(-42.8,-22.4,0.768,0.768);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2C2C2C").s().p("AhsBHQgQgDgHgDIAAgSQABgNAFgLQAEgKADgFQAMgSAKgJQAhgeAjgNQASgGAJgCIAWgCIAGAAQAYADAKAEQAOAFALAIQAUAPAJAPQAMAVACAPQAEAVgBAIIgBASIgNAAQgaAAgqAFIgBgXIgFgQIgEgIIgHgHIgFgDIgHgCIgHAAIgXAHQgNAGgLAIIgOAOIgGAJIAAACIAAAJIADALIgIAAQgXAAgbgCg");
	this.shape_39.setTransform(-34.6,-33.6,0.768,0.768);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C2C2C").s().p("AgMAZQgMgDgHgKQgIgKAAgLIAAgLQApgFAaAAIANAAIgCAHQgCANgJANQgHALgLAFQgGACgGAAIgKgBg");
	this.shape_40.setTransform(-27.7,-26.9,0.768,0.768);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2C2C2C").s().p("AAFAqQgQgFgJgRQgKgQAFgQQAFgSAQgJQAOgJARAEIgCBBIAAAZg");
	this.shape_41.setTransform(29.4,31.9,0.768,0.768);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2C2C2C").s().p("AELP8QgvgGgWgFQgZgGgWgDQg8gIgcgIQgqgLgkgTIgkgUQg4gdgYgeQgVgYgIgNQgOgWgFgVQgFgZgDgrIgLhuQgCgaABglQABhXADg5IALiMQADglAHgrIALg6IAAgMIgrgfQgvgigNgMIgZgXQgVgTgIgHQgegigYg2QgJgUgDgNIgHgtIgCgUQAAgWAGgTIAGgVQAFgOAEgGQAJgNAMgMIAMgNQAXgSALgEQA7gcBFABQAdAAAjgCQAXgFATgHQARgIAOgKQAnghAcgiQAHgLAVgoIAYgvQAYguAOgkQAXg3Aag1QAPgcA1hdQASggAOgcIAig7IATgdIAGADIAPAIQANAEAOgIQAIgEAEgHIANAJIgfAxQgKASgSAkIg3BvQgVAsgcBBIgVA1QgPArgMAaQgRApgnBPIgMAYQgMAXgPAOIgTAWQgZAYgMALQgUATgTALQgmAWgoAHIgrAGIgjACIgjACQgcAFgcAKQgKAGgJAGQgHAGgIAHIgCADIgEASIAAANQAFAdAFAPQAMAaAUAdQALANAdAaIB3BVIAQANQAMALAGASQAKAfgHAwIgJA4QgDAagCAoIgEBEIgEBJQgSgDgPAJQgPAIgFASQgFARAJAQQAKARARAFIAUAEQAABMADAnIAJBCIAEBAIAGAWQAGALAKANIAPAQIBPAuIgYgFIghgMQghgLgVAOQgIAFgGAIQgGAKADAQQACAJAHAKQAKAOAQAMQARAMAdALIAmAMQAOAEAcAEQAUADAlAIIAdAFIAeAGQAUAFA2AFIA7AFIA/ADIACAAIgSABIg3ADIgVAAQgUAAgOgCg");
	this.shape_42.setTransform(37.9,-3.9,0.768,0.768);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2C2C2C").s().p("AB7AaIhFgCQgbgBglABIgkABIgigCQgagEgOgDQgYgGgegFIg1gIQgngJgagJIgJgFIAKADIAaAGIApAEIA4AHIAmAEQARACAkACIA+ACIA9AEQAVABAogCQBsgDARgBQApgDATAAIAKABIAAACQgGAAgFACQgvAOgfAGQgSACgmAAIgigBg");
	this.shape_43.setTransform(64.9,64.6,0.768,0.768);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2C2C2C").s().p("AieBsIAAgZIADhCIACAAIAeAGQARACAUgBQAagGAXgJQAtgTAggWQAPgMASgWIAdglQAIgKAPAAQAKAAAHAFQAMAHAEANQACAIgCAJQgLAagGAKQgOAXgOAQQgaAfg0AhQgVANgdANQgnAQglADIgNABQgZAAgdgGg");
	this.shape_44.setTransform(43.6,27.1,0.768,0.768);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2C2C2C").s().p("AgZAZQgLgLAAgOQAAgOALgKQALgMAOAAQAPAAALAMQALAKgBAOQABAOgLALQgLALgPAAQgOAAgLgLg");
	this.shape_45.setTransform(58.7,-31.8,0.768,0.768);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2C2C2C").s().p("AhbCFQgQgGgEgDQgNgJgEgFQgSgTgGgUQgIgXACgUQACgZAFgTQAKgjAWgbQAkgrBEgOQAZgFAPAAIACAAQASAAAPACQAbADALADQAOAEATAKQAOAHABARIAEAGQAKAUgBASIgDATIgEABIgeALQgOAGgOAKQgcASgaAjIgSAaQgGALgJAXQgDAIgDAPIgLADQgVAFgSAAQgXAAgTgIgAAVhMQgRADgPAGQgQAHgQALIgQAQQgGAJgEAJQgEAKgEARIAAAYIACAHIAEAHIACACIAJAFIAJADIAPAAQAPgDAWgIQALgFAOgKQAVgRAQgSQAIgMAJgUIAFgPIABgVIgZgGIgZgBIgPAAg");
	this.shape_46.setTransform(59.7,-31.2,0.768,0.768);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2C2C2C").s().p("AgLAiIgPgHIgFgEIAmg6IACADIABABIADACQAKAFAFAIQAGAMgDAOIgEAJQgEAHgIAEQgJAGgIAAQgEAAgFgCg");
	this.shape_47.setTransform(64.8,-83.9,0.768,0.768);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2C2C2C").s().p("AhFCAIAEgJQADgPgHgMQgFgIgJgFIgEgCIAAgBIgCgDIAmg7QAagnAYgeQAPgTAxg1QAIgJAMAAIAHABQgOACgJAJIgCACIgLAOIgJAVQgDAJgBARIABAsIgGAHQgNARgoBDIgnA/g");
	this.shape_48.setTransform(72.3,-92.3,0.768,0.768);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2C2C2C").s().p("Ag5CaQgngGgagbQgUgWgEgqQgBgRACgMIABgLQAOgEAUgKQAVgIAUgTQAYgVASgZQARgXAKgZIAHgRIADgMQAcgHAXAAIALAAQAYACAQAJQAHAEAMAKQAJAJABAMQACAMgGALIAGAOQAFAOAAAQQABASgGASQgJAggNAVQgEAJgOASQgRAVgMAKQgcAWgeAOQgUAJgRADQgJABgJAAIgSgBgAAUhGQgOAGgOAKQgMAKgRATQgOAUgIARIgGAVIAAAXIADANIAEAEIAKAGIANADIAKAAQAJgCASgHQARgHAOgJQAMgLAKgMQAEgDACgGIAFgKQAFgOADgPIAAgOIAAgIIgFgbQgCgKABgHIgOAAQgUAEgOAGg");
	this.shape_49.setTransform(70.9,-22.3,0.768,0.768);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2C2C2C").s().p("AhHA8QAJgYAGgLIASgZQAbgiAagUQAPgJAOgGIAdgLIAFgCIgDAMIgIARQgLAZgRAXQgRAYgXAWQgUASgVAJQgVAKgOAFQADgQADgHg");
	this.shape_50.setTransform(65.7,-27.3,0.768,0.768);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2C2C2C").s().p("AhdA8QgMgDgGgLQgGgKADgMQAEgMAKgGQAcgRAfgPQAlgRAWgHQAigLAjAAIAAAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgIAHgNACIgDAAIgZADQgfAHggAOQgfANgjAWQgHAFgHAAIgJgCg");
	this.shape_51.setTransform(62.6,-50.3,0.768,0.768);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2C2C2C").s().p("AgZAaQgLgKAAgQQAAgOALgMQALgKAOgBQAQABAKAKQALAMAAAOQAAAQgLAKQgKAMgQAAQgOAAgLgMg");
	this.shape_52.setTransform(70.5,-21.8,0.768,0.768);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2C2C2C").s().p("AgjAPQACgQADgJIAJgVIALgOIABgCQAJgJAOgCQAHADAGAFQAIAIAAAMQAAALgIAJQguAygPATg");
	this.shape_53.setTransform(78.2,-98.2,0.768,0.768);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2C2C2C").s().p("AhPACICfgEQgcAEg1ABg");
	this.shape_54.setTransform(75.5,74.2,0.768,0.768);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2C2C2C").s().p("AAoL9IgugOQgTgHgDgCQgOgJgEgIQgEgHgCgRQgCgLAIgNIAJgPQAJgNAOgEQAPgFANAJQALAGAFAMIAsAKIAJAAQAcgEAPgBIAmgDQAKgCAjgNQAUgIASgKIAggVQAhgdAdglQARgYAJgVIAHgRQAJgaAEgaQACgVgCgWIgCgJIASABIADABQAOADALgGQALgIADgMQAEgNgHgMQgGgKgNgEQgLgEgXgCIgcgBIgTABQgRgQgZgUQgOgKgKgFIgPgEQgTgBgUACQgTAEgdAKQg5AZg7ApIg3AsQgfAYgcgCQgWgBgNgGQgYgJgEgDQgTgMgOgPIgUgZQgFgHgDgIQgFgIgDgLIgEgbQABgNACgPQACgNAGgRIAHgQIgagIQgPgFgLgHQgSgLgLgMIgRgTIgHgLQgHgLgGgQIgFgPIgCgOQgBgIAAgFQAAgLACgJQAEgXAUggIAshGIgTgHQgVgJgIgFIgNgKIgMgLIgRgUQgIgLgFgLQgJgVgDgLQgGgdAAgYQABgdAGgfQAIgmAXgyIAIgPQgNgCgSgFIgSgFQgrgNgQgIQgegQgQgWQgOgSgEgVQgJgngEhIIgBgRQAPgSAvgzQAIgJABgLQAAgMgJgJQgGgFgHgCIAEAAQARAAALALQALALAAARQAAAQgLALIgBABIgCAFQgBAPACAVIADAjIAEAyQAEAYAFAOIADAGIAFAEIARAJIAnANQAiAKALACQASACAPgCIATgDQAWgBALAOQAKAKACAKQADALgDALIAAAEIgMAaIgZAyQgJAUgFATQgFARgCASQgCAfABAQIAGAWIAJAPIAGAHIAOAIIAgAKQAUAFAMAGQAUAKALAVQAHAMABAOQABAQgFAMQgJAZgMAUQgMAWgQAXIgTAcQgLAQgGANIAAAEIAEAMIAFAJIAKAKIAJAFIAzARIAJAFQARAKALAOQAOAQACALQACAKABAJQAAAUgKAbQgGARgCAMIgBAGIAGAJIAMAOIAQAIIAsggQAUgQAbgQQAmgXA+gcIACAAQARgIAOgEQATgFAagDQA1gHAkAOQAZALAVAQQAmAcAOANQATAQAIAKQAaAdAOAeQAMAbADAYQAFAegCATQgCAmgMApQgGAUgLAaQgQAigcAiQgaAfgPAOQgLgCgMAAQgMAAgKAIQgLAIgDAMQgDAJADAKIgNAIQgiARguAPQgfAKggACQgYAAgLABIgUACIgYACQgVAAgUgHg");
	this.shape_55.setTransform(113.2,-43.4,0.768,0.768);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2C2C2C").s().p("AAUBsQgIgHgDgJQgLg3gMgdQgLgZgPgTQgHgJgKgJQgKgKAAgPQAAgOAKgJQAKgLAOAAQANAAALALQAbAbAPAbQATAhAIAkQAFAdADAiQAAAMgJAJQgJAJgMAAQgKgBgIgFg");
	this.shape_56.setTransform(82.2,-39.3,0.768,0.768);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2C2C2C").s().p("AmrGMQAogHAggQIAdgPQANgHAGgPQAFgNgEgPQgDgOgMgIQgMgJgPAAIAAgDIAxACQA4ADA5gGQAkgHBDgQIA0gPQAVgFAXgKIBIgjIAjgQQAPgJARgLQAdgYAWgaQAIgMAMgbIAYg8IAUgyIAPgwIASg1QAFgRAEgVQAFg/gEg4QgEgsAAgNQAAgPAFgPIABABQAWALAMAEQALADAVAEQARACAXACQAFAAAEAAQAFAVABATQAAARgCA8IgFBMQgDAdgHAZIgMAmIgSA3IgWA6IgTA3IgXA6QgFAOgJALIgaAfIgdAdQgkAfgZANQgTALgnARIg1AZQgnARgfAJIg6AQQhbAVgrAFQgjACgcAAQgUAAgogCQgbgEgfABIg+AGIgIAAg");
	this.shape_57.setTransform(114.9,43.6,0.768,0.768);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2C2C2C").s().p("AgLAwIgQgLQgIgHgEgIQgGgKAFgPQADgIAIgLQARgVAPgFQAEgCAFAAQAIAAAGAEQAEACAKAMQAEAGgCAKQgCAJgHAEQgIADgJgBQgDgBgDgCIgKAJIgBAEIALALQAFAFAAAIQAAAHgFAFQgEAEgGABIgDABQgEAAgEgDg");
	this.shape_58.setTransform(89.2,-100.4,0.768,0.768);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2C2C2C").s().p("AAWBUIg5gEQg2gGgUgEIgegHIgdgEQgmgJgTgDQgcgEgOgDIgmgNQgegLgRgMQgRgLgKgOQgGgKgCgIQgDgQAGgLQAFgIAIgFQAWgOAgALIAjAMIAYAGIAKAEQAZAKAoAJIA0AIQAeAFAYAGQAOAEAaAEIAiACIAjgBQAngCAbABIBEADQBBABAagDQAegFAvgPQAGgBAGAAQAOAAAMAJQAMAJAEAOQAEANgGAOQgGAOgMAHIgeAQQggAPgnAHIgFAAIixAEIg/gEg");
	this.shape_59.setTransform(61.5,67.5,0.768,0.768);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2C2C2C").s().p("AgvApQgIgFgCgIQgCgHAFgJIAGgNQAEgIAFgFIAKgKIAPgKQALgGAEgBIAQgBIACAAQAPAAANAKQAJAHACAHQADAJgGAJQgEAIgKACQgLADgHgFIgFgDIgCgBIgCAAIgFACIgKAGIgIAIIgIANQgFAIgIACIgHAAQgFAAgFgCg");
	this.shape_60.setTransform(102.5,-118.8,0.768,0.768);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2C2C2C").s().p("AgTBHQgJgDgEgHQgKgRgGgNQgHgOgCgMQgCgPAGgOQAFgOAMgKQAJgJAPgGQASgHATAAIARABQAJACAEAIQAFAIgCAJQgCAIgIAFQgHAEgKgCIgMAAIgRAFIgHAFIgEAEIgDAEIgBAFIAAAEQABAHADAHIAMAaQAEAIgCAIQgDAIgGAFQgEACgGAAIgFAAg");
	this.shape_61.setTransform(103.4,-100.4,0.768,0.768);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2C2C2C").s().p("ABFA+QgJgCgFgHQgGgIAAgJIgCgTIgHgGIgKgHIgEgBQgLgBgNACQgQADgaAKIgMAFQgIAFgKAAIgJgBQgOgDgHgNQgIgMAEgPQAEgQAMgFIABAAIgEAEQgIAJAAALQAAALAIAIQAIAIAMAAQAMAAAHgIQAUgVALgKIAPgPIAfgVIALABQAKADAMAGQAKAFALAJIAGAGQAJAIAEAIQAIAQAAAMQAAAGgCANIgCANQgDAKgKAGQgGADgHAAIgHgBg");
	this.shape_62.setTransform(117.2,-3,0.768,0.768);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2C2C2C").s().p("AiuAvQAPgNAZgUQAbgTA1gZQA3gbApgKQARgEAjgFIAxgGIAYgCQAOANAKALQAHALAIAQIAFAQIgSgBIgkABQgmADgjAFQgaADgXAHQgWAGgbALQgZALgcAOQgOAIgQAKIgfgCQgOAAgPAFIgVAHIggAOQAQgSAUgUg");
	this.shape_63.setTransform(126.6,-12.5,0.768,0.768);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2C2C2C").s().p("AgXBFQgRgIgHgGQgMgKgBgPQgBgUASgXQALgQAHgGQAHgIALgIQASgPAYgEIAFgBQAGAAAEADQAHADADAJQACAIgEAIQgEAHgIACIgPAFIgMAHIgSASQgLARgEAIIANAHQAHAEADAKQACAJgFAHQgEAIgIACIgFABQgGAAgGgDg");
	this.shape_64.setTransform(112.4,-86,0.768,0.768);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2C2C2C").s().p("Ag1AfQgJgJAAgLQABgLAIgIIAEgEIAggOIATgIQAPgEAPAAIAeACIgfAVIgPAPQgLAJgTAWQgIAIgMAAQgLAAgIgIg");
	this.shape_65.setTransform(114.3,-5,0.768,0.768);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2C2C2C").s().p("AAOAsQgVgFgHgDIgNgGIgGgEIgCgCQgLgLAAgLQAAgKAMgNIASgPQANgIAMAAIACAAQAJAAALAEQAKAEADAGQAEAIgCAIQgCAJgIAEQgIAFgIgEIgJgCIAAAAIgEABIgEABIAVAIQAIACAEAHQADAGgCAIQgCAIgGADQgFADgFAAIgFgBg");
	this.shape_66.setTransform(125.9,-105.5,0.768,0.768);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2C2C2C").s().p("Ag1BBQgGgEgCgHIgGglIAAgPIACgPQAEgMAKgNQAJgLAOgHQARgJALgBIAOgCIABAAIAKABQAOABANAFQAJADAEAHQAFAJgDAIQgCAJgIAFQgIAFgJgDIgSgFIgMAAIgKADIgNAHIgFAFIgDAGIgBAEQgCAQAEAfQABAHgHAHQgGAGgJAAQgHAAgFgEg");
	this.shape_67.setTransform(126.5,-61.7,0.768,0.768);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2C2C2C").s().p("AgcAEQADgLALgIQAKgIALABQAMAAALABIgHAHQgXAVgcARQgDgKADgKg");
	this.shape_68.setTransform(139.7,9.7,0.768,0.768);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2C2C2C").s().p("AieVGIgNggIgCgIQgDgLgJgJQgJgJgLgDQgEgBgIAAQgVAAgMANIgMAPQgDAFgGARIgCAFQgMgGgDgPQAbgRAZgWIAHgHIApAGQAbADANgBQAOgDASgHIATgLQAMgLALgNQAIgMAIgQQAHgSACgLIAAgLIgDgTQgBgLAHgLQAFgKAMgGIAVgIIARgGQAMgGAIgFIAJgIIAIgRQAEgJADgPIAAgdIgFgSQgEgSACgLQAFgOARgMIAEgDQAggaARgUIAJgQIABgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgCgGIgEgGIgFgGQgKgGgFgFQgMgLAAgTQAAgSAMgMQAHgGAIgEIAXgLQAVgLARgNIAVgTIAJgQIADgMIAAgNIgDgMQgGgMAAgJQAAgWAMgKQALgJAIgFIAIgFQAdgRANgKQARgOANgPIAJgQIACgGIAAgDIgEgHIgLgKQgLgIgIgEQgSgKgGgNQgMgXAMgVQAIgNASgHIAagHIAVgHQAfgQAcgUQAbgWAUgYQARgYAJgTQAFgOACgLQABgOgBgNIgHgbQgGgMgEgFQgIgIgRgQQgOgKgEgOQgFgUAJgQQAHgLANgHQAHgFARgGIAqgOQAYgMAVgNQAIgIAJgKIAMgTIAFgRQABgIgBgJIgFgTQgFgUAAgJQAAgKAEgMQAEgLAIgIIAOgKIAHgEQAVgMAQgMQASgOAOgRIAOgXIAGgVIAAgIIgCgGQgHgMgCgKQgEgWAJgQQAEgGAGgHQAIgIAYgIIBLgeQAqgVAigZQAagWAWgZQAPgXAGgOQAGgQADgNIAAgHIgBgFIgGgDQgKgHgIgNQgKgPAFgTQAGgUAQgJQAPgHAjgLIAzgRQAagMANgKIATgSIAIgOQAEgJAEgUQACgZgDggQgEgVgEgJIgEgIIgFgGQgIgHgDgMQgDgLADgKQACgKAJgJQAIgIAKgDIAFgBQAbgNAcgWQATgPAKgMIALgRIAFgTQABgNgBgOQgHgkgPgnQgKgXgKgPIgPgPIgLgHIgJgCIgXAAQgOABgGgCQgOgFgFgGIgEgFIgIgIQgQgKgSgJQgUgHgUgEQgdgCglAEQgcAEgYAJQgbAMgdAWQggAagTAYIgaAiQgXAbgMAJQgRAKgSABQgPAAgSgPQgNgJgOgIQgQgEgOgCQgUgCgUACQgQADgTAHQgMAEgRAMQgMALgLAMQgPAWgLAYQgIAUgCARIgEAWIgGAPQgEAGgHAHQgPARgfABIgZgBIgfAAIgDAAIgDACIgGAHQgIALgHAOIgQAvQgEAMgHAQQgJAOgOAIQgOAJgVgDIgkgIIgEAAIgDAEIgCADIABAMQgBAUgMALQgJAJgKADIgOABIgigGIghgGQgUgCgUACQgWAEgZAIQgsAVggAYQgbAVgXAdQgMAPgKAUIgDAIQgBAQgLAMQgNAMgSAAQgLAAgKgFQgkgBggADQgYAEgPAHQgjAQgfAXQgcAWgZAeIgbAlQgMAOgJAGQgHAEgNAEQgRAHgVgMQgJgFgJgOIgLgSIAAgBIgDgBIghgKQgLgCgKgFIgkgSIgNgEIgPAAIgcAGQgRADgMAAQgRABgrgFIgSgBIgDABIgFADQgHAGgKALQgPAWgKATQgFAPgCAKQgBAUgEAJQgGALgJAFQgLAHgVABIgfABQgMADgSAGQgLAFgPAKQgOANgLANQgIAKgRAgQgJATgJAFIgKAFQgmASgZARIgUAVQgHAKgMAXQgHASgEAYQgDAZACAbQAEAUAIAUQAGANAJAPIgoA7IgLgLQgKgMgKgVQgSglgGghQgGgpAHgoQAGgqAUgjQAMgVANgOQAKgMASgOQAVgPAQgIIAdgNIAHgDIADgGIAPgeQAfguAkgWQAbgOATgFQAPgFAXgDIAGAAQAEgXALgWQASgiAUgWQAcggAfgGQATgFAtAIQAWADATgDIArgHQAdgCAVAIIAkARIALADQASACAGABIAVAGQAYAIANAMIAagjQAZgdAXgSQAjgbAbgQQAQgIAUgIIAZgJQAhgJA0gBIAQABIAAgCQAPgeAXgaQAvg3BIgmQAwgaAhgGQAsgJAaAEQAWACASAEIACgDQANgSAIgGQANgNARgFQAYgHAfAGQAOguAGgNQAKgUAQgUQAPgQAMgGQAVgMAVgCQAPAAAOACIASABQADgaAGgPQAQgoAOgWQAagiAVgRQAdgXAjgNQAngNAhAAQAWACASACIAZAFQAeAKATAOIABABIAegoQARgVAQgPQBIhFBIgPQAvgKAkAAQAxAAAhAMQAlAOAYARQAMAIAGAFIANAAQAZACATAGQApARAaAoQAVAgARAwQAJAbACAQQAGAZAAATQgBAggHAUQgLAcgJALQgRAWgNALQgQAOgVAPIgUANIAGARIAHAiIAEAqQABAZgEAYQgDAWgFAMQgKAYgIAMQgNASgNALQgTASgRAKQgIAFgYALQgYALgYAHIACARQABAngXAxQgLAWgMAQIgfAmQgeAfgnAbQgvAfgqASIgaAKQACAQgBAGIgEAbQgGAbgLATQgKASgRAVQgYAfgmAbIgIAFIAEAcQAAAOgDARQgDASgDAHQgJAWgFAJQgJAOgKANQgSAXgdATQgcARghAMIAFAJQAMAaADARQAEAdAAALQgBAegEAQQgFASgJARQgPAigdAjQgZAdgjAbQgXARgbAOIAIALQAJASABAEQAFATgBALIgDAXQgHAXgQAVQgbAlg1AhIgNAHIADASQABAZgJAaQgOAqglAdQgXARgMAJQAIARACAMQADASgDARQgBAKgGANQgLAagUAUQgSATgQANIgJAIQAFAXgCAVQgCAdgGASQgKAbgHAKQgJANgGAGQgIAHgLAJQgOAMgRAHIgNAGQgBAWgGARQgJAbgGAOQgOAggZAXQgUATgSAJIggAOQgeALgYABg");
	this.shape_69.setTransform(159.7,-89.1,0.768,0.768);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2C2C2C").s().p("AAMAiIgDAAIgRgBIgEgQQgIgQgIgKQgKgLgNgNIATgBIAcABQAWACALAEQANAEAGALQAHALgEAMQgDAMgLAIQgIAEgIAAIgJgBg");
	this.shape_70.setTransform(143.5,-16.5,0.768,0.768);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2C2C2C").s().p("AAOBDIgYgMQgZgNgGgFQgWgRAAgTQAAgOARgTIANgNIARgMQATgLAQgBIACAAQAIAAAIACIAOAGQAKAFACAMQADALgFAKQgGAKgLACQgKAEgLgGIgBgBIgGACIgKAGIgIAGIAYAPIARAKQAJAEACAKQADAKgGAJQgEAIgKADIgFABQgFAAgJgDg");
	this.shape_71.setTransform(140.2,-96.2,0.768,0.768);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2C2C2C").s().p("AAjA5IgggGQgbgGgKgFQgMgEgHgHQgIgJgCgFQgGgLABgGIABgLQAIgRADgDQAPgMAUgHQARgFANAAIAIAAQAUACARAKQAKAGADALQADAMgGAKQgEAHgJAEQAKADAFAKQAFAKgCAKQgEALgJAFQgFAEgJAAIgHgBg");
	this.shape_72.setTransform(139.1,-41.1,0.768,0.768);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2C2C2C").s().p("AAxApQgXgCgRgCQgUgEgLgDQgMgEgWgLIgBgBIACgFQAGgQADgFIAMgPQALgNAVAAQAHAAAEABQALADAJAJQAKAJACALIADAHIAMAgIACAJIgEAAIgFAAg");
	this.shape_73.setTransform(143.2,12.1,0.768,0.768);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2C2C2C").s().p("AgxAxQgIgHgCgIQgGgeAHgQQAJgbAfgKQANgEALAAQANAAALAFQAQAFAGAMQAFAGAEANQAEAMgGAKQgHALgLACQgMADgLgFQgIgFgEgMIgDAAIgIAEIAAAAIAAATQABAKgJAJQgJAIgLAAQgJAAgHgFg");
	this.shape_74.setTransform(148.9,-119.8,0.768,0.768);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2C2C2C").s().p("AABA5IgPgSQgXgegEgJQgEgHgBgLIABgNQAEgJADgEQAFgFAFgCQALgIAQgCIALgBIARABQAJAAAGAFQAFAHAAAHQAAAIgFAGQgHAGgIAAIgVgBIgIACIgDACIAAACQAEAIAWAeIAHAJQAGAHAAAHQAAAJgGAEQgFAGgIABQgIgBgGgGg");
	this.shape_75.setTransform(151.4,-81.1,0.768,0.768);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2C2C2C").s().p("AgmArQgegSACgYQABgHADgGQAGgIAFgCIASgKQAdgMASgBIAIAAQAKAAAHACQAIACADACIAFAEIABAAIABACQAIAGABAGQACAIgEAHQgEAGgIACQgIACgHgEIgHgEIgBAAQgGgBgGABQgKACgJADIgHAEQAGAFACAJQABAIgEAIQgGAIgJADIgHAAQgGAAgGgDg");
	this.shape_76.setTransform(163.9,-57.6,0.768,0.768);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2C2C2C").s().p("AgbA+IgKgHIgMgJIgIgLQgDgFgCgFIgBgDQgDgLABgDIABgKIABgDQADgKADgDIAIgMQAKgKALgHQAPgLAMgDQALgEAOAAQAPAAAJADQAKADAFAJQAFAJgCAKQgDALgJAFQgJAFgLgDIgCAAIgNgBIgGACIgOAJIgJAIIgBACIAAABIAOAOQAIAGAAAMQAAALgIAHQgEAGgKACIgEAAQgHAAgFgEg");
	this.shape_77.setTransform(176.5,-110,0.768,0.768);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2C2C2C").s().p("AgOBBQgLgEgGgJQgJgQANgQIAGgHIADgGIABgDIAAgDQgPgCgJgNQgGgMADgMQAEgMALgIQAKgGAQgBQAMAAANAMQASAQAEAXQAFAagOAXQgJAMgVAOQgFAFgHAAIgHgBg");
	this.shape_78.setTransform(178.3,-88,0.768,0.768);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2C2C2C").s().p("AgvA0QgJgDgIgKQgIgMgCgJQgEgPALgPQAFgJAQgIQAMgIAJgDQASgIAJgCIAUgCIAIAAQASACAMAKQAFAFAGAIQAHAKgEAOQgEALgKAGQgLAHgNgDQgJgDgFgGIgEAAQgHABgLAEIgLAHQABAGgCAFQgCALgLAGQgGAEgIAAIgIgBg");
	this.shape_79.setTransform(171.3,-136.5,0.768,0.768);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2C2C2C").s().p("AgOAtQgKgFgHgHIgMgLIgDgKQgCgGACgGQABgFACgEIAFgGIAPgLIANgJQAQgIARgEIAFAAQAPAAAEAOQACAIgEAHQgEAIgIABIgUAHIgQAJIABABIAGAFQAHAEACAHQABAIgDAHQgEAGgHACIgFABQgEAAgFgDg");
	this.shape_80.setTransform(195.3,-149.2,0.768,0.768);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2C2C2C").s().p("AANBHQgMgDgFgLQgEgIAAgHQACgUgBgVIgBgDIgDgDIAAgBIgLAAQgNACgKgLQgJgJAAgOQAAgNAJgKQAJgIAOgBIAHgBQAUAAATAMQANAJAHAMQAIALABAIQAGAZgJAsQgCAMgMAGQgIAEgHAAIgIgBg");
	this.shape_81.setTransform(205.5,-124.3,0.768,0.768);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2C2C2C").s().p("AgtA0QgJgCgFgIQgFgGgBgJQAAgYAOgSQAQgUARgHQASgHAGgBIALgCIAQADQAQAEANAXQAFAKgCAMQgDAKgLAHQgKAFgLgCQgMgDgGgJIgNAHIgHAHIgDAFIgCAHQgCAKgKAFQgHAEgGAAIgHgBg");
	this.shape_82.setTransform(215.3,-161.8,0.768,0.768);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2C2C2C").s().p("AgnBDQgIgFgCgHQgCgHADgGQACgHAGgDQAMgFAMgIIALgMIAGgLIADgJIgDgGIgKgKQgHgGAAgLQAAgKAHgGQAGgHAKAAQAHAAAJAHQAJAHAIAMQAIALABAIQAEAMgGAPQgGARgEAFQgKAOgIAHQgOAKgEACQgNAHgMAEIgGABQgEAAgFgDg");
	this.shape_83.setTransform(227.5,-148.5,0.768,0.768);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#2C2C2C").s().p("AgpAgQgEgEAAgGQgBgLADgIQADgJAGgGQAKgMATgIQAJgEAJAAIACAAIAIAAQAGACADACQAHAFAFAHQADAGgBALQgBAHgEAFQgFAFgHAAQgHAAgFgFQgFgFAAgGIgHACIgLAGIgFAFIgCADIgBADIAAAFQAAAGgFAEQgEAFgHAAQgGAAgFgFg");
	this.shape_84.setTransform(234.5,-172,0.768,0.768);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("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gCIgIAAQgOAAgRAFgABLFvQgTABgdAMIgSAKQgFACgFAIQgDAGgBAIQgCAYAdASQAJAFAKgCQAJgDAGgIQAEgIgBgIQgCgJgGgFIAHgEQAKgEAKgCQAGgBAGABIABAAIAHAFQAHAEAIgCQAIgDAEgGQAEgHgCgIQgBgGgIgGIgBgCIgBAAIgFgEQgDgCgIgCQgHgCgKAAIgIAAgAmqEkQgLABgRAJQgOAIgJALQgKAMgEANIgCAQIAAAOIAGAmQACAGAGAEQAFAFAHAAQAJAAAGgGQAHgHgBgIQgEgfACgQIABgFIADgGIAFgFIANgHIALgDIAMAAIASAFQAJADAIgFQAIgFACgIQADgJgFgJQgEgHgJgDQgNgEgOgCIgKgBIgBAAIgPACgAhnAtQgPADgLAHQgFADgFAFQgEAEgEAJIgBANQABALAEAHQAFAKAWAdIARATQAFAGAIAAQAIAAAGgGQAFgFAAgIQAAgHgFgHIgIgJQgWgfgFgJIAAgBIAEgCIAJgDIAVABQAHABAHgGQAFgGAAgIQAAgIgFgGQgGgFgIgBIgSgBgAo+gbQgYAEgTAPQgLAIgHAHQgHAGgLAQQgSAYABAUQABAPAMAKQAHAGARAIQAKAFAHgDQAJgCAEgIQAFgHgCgJQgDgKgIgEIgNgHQAEgIAMgSIASgSIAMgHIAPgFQAIgCAEgHQAEgHgCgIQgDgJgHgDQgEgDgGAAgADagpQgLAHgDANQgEAMAHALQAIANAQACIAAADIgBAEIgEAGIgFAGQgOARAKAQQAFAJALADQALADAJgGQAWgOAIgMQAPgXgFgcQgEgVgSgQQgOgMgNAAQgPAAgLAHgAkIiSIgQAMIgNANQgSATAAAPQAAATAWARQAGAFAZANIAaAMQAMAEAHgCQAJgDAFgIQAFgJgCgKQgDgKgJgEIgQgKIgZgPIAIgHIAKgGIAGgCIACABQALAGAKgEQAKgCAGgKQAGgKgDgLQgDgMgKgFIgNgGQgJgCgHAAIgCAAQgQABgVALgArjjPQgPAFgJAJQgMAKgFAPQgGAOACAQQACALAHAOQAGAOAKARQAEAHAJACQAIACAHgEQAHgFADgHQACgIgEgIIgNgbQgDgGgBgIIAAgFIABgEIADgFIAEgEIAIgEIARgFIAMAAQAKACAHgEQAIgFACgIQACgJgFgIQgEgJgJgBIgRgCQgTAAgTAIgAuMjAQgQAFgRAVQgIALgDAIQgFAQAGAKQAEAIAIAHIAQALQAFADAGgBQAHgBAEgEQAFgFAAgHQAAgIgFgFIgMgLIACgEIAKgKQADACADABQAJACAIgEQAHgEACgJQACgKgEgGQgKgMgEgCQgGgEgIAAQgFAAgEACgAnCj2IgSAPQgMANAAALQAAALALALIACACIAGAEIANAGQAHADAWAFQAIACAHgEQAGgDACgIQACgIgDgGQgEgHgIgCIgVgIIAEgCIAEgBIAAAAIAJADQAIAEAIgGQAIgEACgJQACgIgEgIQgDgGgKgEQgLgEgJAAIgCAAQgNAAgNAIgADelKQgMADgPALQgLAHgKAKIgIAMQgDADgDAKIgBADIgBALQgBADADALIABADQACAFADAFIAIALIAMAJIAKAHQAHAFAJgBQAKgCAFgGQAIgHAAgLQAAgMgIgGIgPgOIAAgBIABgCIAJgJIAPgJIAGgCIANABIACAAQALADAJgFQAJgFADgLQACgKgFgJQgFgJgKgDQgJgDgPAAQgOAAgMAEgArhmpQgFABgMAFIgOAKIgKAKQgFAGgEAHIgHAOQgEAKACAGQACAIAIAFQAHAFAJgDQAIgCAFgHIAJgOIAIgIIAKgGIAGgBIABAAIADAAIAFADQAHAGALgDQAJgDAFgIQAFgJgDgJQgBgIgJgHQgOgJgOgBIgDAAIgPACgAiYm+QgfAKgJAaQgHASAGAeQACAIAIAGQAHAGAJAAQALAAAJgIQAJgJgBgKIAAgTIAAAAIAJgEIADAAQAEAMAIAEQALAGAMgDQALgDAHgKQAGgLgEgMQgEgNgFgHQgGgLgQgGQgLgEgNAAQgMAAgNAEgAJOnNIAAAAIADAEIABAEQABAUgCAUQAAAIAEAIQAGAKAMADQALAEAMgHQAMgGACgMQAJgsgGgaQgBgHgIgMQgHgLgNgKQgTgLgVAAIgHAAQgOABgJAJQgJAJAAAOQAAAOAJAIQAKALANgBgACeqYQgKACgSAIQgJAEgMAHQgPAJgGAJQgKAQAEAOQABAJAJAMQAHALAKACQALAEALgHQAKgGACgKQACgFgBgHIANgGQAKgEAHgBIAEgBQAFAGAJADQAOAEAKgHQALgGAEgNQAEgOgIgKQgFgIgGgEQgMgLgRgBIgJgBIgUACgANvtAQgHAGAAAKQAAALAHAFIALAKIADAGIgDAJIgHAMIgLAMQgMAIgMAFQgGADgCAHQgDAHACAGQACAIAIAEQAHAFAIgDQAMgEAOgGQAEgCAOgLQAIgHAKgOQAEgFAGgQQAGgQgEgMQgBgJgIgLQgIgMgJgGQgJgHgHAAQgLAAgGAHgAHts7QgRAEgRAIIgNAJIgPALIgFAGQgCAEgBAFQgCAHACAGIADAKIAMALQAHAHAKAFQAHAEAHgCQAIgCAEgGQADgHgBgIQgCgHgHgEIgHgFIgBgBIARgKIAUgHQAIgBAEgIQAEgHgCgIQgEgOgPAAgALgviQgHABgSAHQgRAHgQAUQgOATAAAYQABAJAFAGQAFAIAJACQAKADAKgGQAKgFACgKIACgHIADgFIAHgHIAOgHQAGAJAMADQALACAKgFQALgHADgLQACgMgFgKQgNgXgQgEIgQgDgAPPxVQgUAIgKAMQgFAHgEAJQgDAJABAKQABAGAEAFQAEAEAHAAQAGAAAFgEQAEgFABgGIAAgFIABgDIACgDIAEgFIANgGIAGgDQAAAHAGAFQAFAFAHAAQAHAAAFgFQAEgFABgHQABgLgEgHQgEgHgIgFQgDgCgGgBIgIgBIgCAAQgJAAgJAEg");
	this.shape_85.setTransform(159.2,-89.3,0.768,0.768);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("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");
	this.shape_86.setTransform(79,-14.2,0.768,0.768);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag3BFIgJgDIgJgFIgCgCIgEgHIgCgHIAAgYQAEgSAEgJQAEgJAGgJIAQgQQAQgLAQgHQAPgGARgDQATgBAVACIAZAGIgBAVIgFAPQgJAUgIALQgQATgVARQgOAKgKAFQgXAIgPADgAgqgYQgLALAAAOQAAAOALALQALALAPAAQAOAAAKgLQALgLAAgOQAAgOgLgLQgKgLgOAAQgPAAgLALg");
	this.shape_87.setTransform(60,-31.8,0.768,0.768);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("Ag0BOIgKgGIgEgEIgDgMIAAgYIAGgVQAIgRAOgTQARgUAMgKQAOgKAOgGQAOgFAUgFIAOAAQgBAHACALIAFAaIAAAJIAAAOQgDAOgFAOIgFALQgCAFgEAEQgKALgMALQgOAJgQAIQgTAHgJABIgKABgAgigTQgLALAAAOQAAAQALALQALALAQAAQAOAAALgLQALgLAAgQQAAgOgLgLQgLgLgOAAQgQAAgLALg");
	this.shape_88.setTransform(71.2,-22.2,0.768,0.768);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AijQ0IgvgBIgWgHQgxgVgZgRQgVgSgQgTQgNgSgJgVQgTgwgMhTIgKh1QgFg9gLhDIgRh8QgKhNgKguQgDgOgMgJQgMgJgPAAIgIABQgMgBgKAFQgLAFgGAKIgfA2QgIAPgUAoQggBCgiAvQgKANgPANIgQAKIgGACQgQAAgZgDQgPgCgRgFIgLgHQgUgSgkgnQgTgVgQgTQgOgUgKgUQgHgUgGgcIgIgxIgJg6QAFgGACgJQAOhAAKgcQAHgOAMgSQAXgbAlggIAagSIAcgOIAkgMIAegGQARgDARAAIgOASQgGAIgIASQgJAUgCAPQgFAZgBAOQAAAQADAMQACAPAKAWQAIAQAQAMQANAKAaACQAHAAAHgFQAGgFACgHQADgOgOgMIgKgJIgDgGIgEgOIAAgLQADgNAHgTQAHgNAKgOQASgVAUgSQAKgIASgLQAXgNABgaQACgFAAgHQAAgPgNgPIgPgQIgPgMQgIgFgVgDIgKAAIgTABQgnABgcAEQgkAFgRAFQggAHgfAPQgbAMgWAPQgYAQgeAbQgUATgRAVIgBgUIAEhBQAGglAEgQQAKgkALgbQAQgiARgYQASgWAXgSIAXgTQAVgQASgJIASgHQAdgJAggGQAigEAiAEQAaAFAPAGIAMAGIAiAQIAJAaQAHAWARAKQAUALAVgFQAVgGAMgUQALgUgGgUQgOgrgLg2IgRhhQgNhDgIgfIgLguIgCgEIB4gaQBdgWA/gUQAigLAngPQA3gXAYgPIAZgPIAkgdQAQgNAdgbQAxgwAkgsQA4hDAbgsQAQgaAPgcQAIAUANAVQAWAmALAXIASAwQAPAmAPAhQANAbARAdIARAfIAMAYIAYBEIAaBDIAVA6Ig9gZIglgSIgXgJQgMgEgWAAIgBAAQgGAAgVAEIgSAEIgaAIQgSAGgKAQQgKAQAFATQAFASARAKQARAKASgGIApgLIAKAAIA1AVIAgAJIAjAHQATAEANgIQAOgHAFgQIAQApIAdBBQAIASAVAiQATAfAbASIABABQgUAcgKAhQgCAIgBAOQgBAPACAOQAEAVANAWQANAVAZAKQAXAKAagDQAugEArgmQASgQAMgYQALgXAEgaQACgTAAgOIBFgIQBDgGAnACIAAAIQgCAJgEAKQgKAVgNASQgPARgfAgIg0A3QhUBWgYAaQgnAtgPAQIgwAuIgKAKIgMAQIgPAmQgHAUgNA2QgMAxgCAPIgOBfIgIAeIgPAuIgWANQgSAGgTADQgQABgNgBQgvgIgSgGIgUgMQgWgSgMgNIgHgOQgFgMgDgNIgBgaQAAgOgIgLQgIgKgNgEIgLgBQgNAAgLAIQgMAIgDANIgHAoQgBAJADASQADAUAKAWQAJATARATQAGAGAdAYQAXASAPAHQARAIAXAGIAeAHQApAHAVgBIAbgDIADgBIgEAOQgLAmgIAWIgTA6IgPA5QgDAQgNAiIgRAgIgRAZQgRATgOAMQgkAZgpATQgXAJggAJIg5AOIhSAYQgrALgnANIgwAPQgVAHgcAEQgRACgUAAIgZgBgAAdlQQgNACgRAGQglAMgnAfQgeAZgPAgQgSAnACAiQABAdAVAqQAEAIARAXQAEAFAVARQAJAGASAHQARAHAVABQAcADAmgLQAPgGASgIQAOgHASgPQAbgXASgcQAGgLAFgNIACAEIANASQAJALASAPQAfAWAsABQAUAAAcgJQARgGAWgMQAegRAbgjQALgOAQgdQAJgRAGgWQADgIADgbIADgfQABgUgKgsQgCgJgHgGQgHgHgJgCIgTgOQgHgFgMgEIgUgGQgQgDgQAAQgZAAgZAIQgPAEgjAQQgiARgaAjQgPAUgJAXIgEgGQgGgJgJgFQgFgDgIgCQgKgIgZgKIgVgIQgLgEgWgCIgIAAQgKAAgSADgAAEo+QgdASgRANIgwAmQgqAhgXAbQgTAVgPAeIgMAdQgEAJAEAKQADAIAHADQAIADAIgEIAGgDQAMgJgFgNIANgSQAWgbAdgXIBGgvIA/gtQALgIADgKQAEgNgHgLQgJgQgSAAQgIAAgHAFg");
	this.shape_89.setTransform(-95.5,1.5,0.768,0.768);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgiBPIgMgDIgJgFIgGgHQgHgLgFgKQgEgKgCgIIAAgIIAHgWIALgTQAOgPAPgMQATgMANgHQAMgFAQgDIAUAAIAaAHIAGARIAAAbIgBAbQgDAMgEAKIgJAQQgJAKgIAGQgKAIgNAGQgTAHgSAEIgKAAIgKAAgAgmgSQgOANAAARQAAATAOANQANANATAAQASAAANgNQANgNAAgTQAAgRgNgNQgNgOgSAAQgTAAgNAOg");
	this.shape_90.setTransform(-92.8,-12.8,0.768,0.768);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgrBaIgJgDIgJgFIgJgKIgGgJIgCgJQgBgOACgVQAFgWAGgQQAHgPAHgKIAOgPQAQgLAWgLQAQgGANgCIAWAAIAPADIAJAGIAFAEIAAATQAAAWgDAVQgCALgEALQgJAVgNARQgKALgKAJQgMAIgNAGQgNAFgUAFIgHAAIgHAAgAg2gMQgJAJAAALQAAAMAJAJQAJAJAMAAQANAAAIgJQAJgJAAgMQAAgLgJgJQgIgJgNAAQgMAAgJAJg");
	this.shape_91.setTransform(-69.5,-17,0.768,0.768);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgaAqIgHgCIgBgCIgDgLIAAgIQABgHAEgLQAJgTAPgSIADgFIAqADIABABIgBAUQgCAOgEAJQgDAGgFAHIgHAIQgIAFgJAFQgJAEgIABg");
	this.shape_92.setTransform(-44.1,-15.9,0.768,0.768);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgzAVIAAgJIABgBIAFgJIAPgNQALgIAMgGIAXgHIAIAAIAHACIAEADIAHAHIAFAHIAEAQIABAXIgIABQgxAGgrAAg");
	this.shape_93.setTransform(-34.8,-30.5,0.768,0.768);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AhHA3IgGgyIAFgBICMhEIAJAyIgGABIgDgFQgGgJgKAAQgFAAgGACQgRAJgZAPIgxAfQgHAEgDAIQgBAIAEAHQABADAEADIgRACg");
	this.shape_94.setTransform(-148.2,-32.7,0.768,0.768);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AALAhQgWgGgVgDQgOgCgQAAQA9gmAagOQAGgDACgHQADgGgCgGIAHgCIAGAjQAIAoAIAiQgdgQgXgGg");
	this.shape_95.setTransform(-145.4,-29.7,0.768,0.768);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AhLASIAAgBIBFggQArgRAWgHIAOgEIAEAXIgDAAQgxAThgAtg");
	this.shape_96.setTransform(-149.3,-39.5,0.768,0.768);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AonEuQAFgEAEgGIANgUQALgNAegZQA1gmAegRQARgLBHgmQArgYAygYIBYgnQA+gZArgNIB0ghIBsgaIA8gOQAjgJAZgJQATgGAHgOQAKgQgFgRQgEgRgQgJQgKgGgLAAIgNABIh7AcIgEgRIAZgGQAKgEAHgIQAHgJAAgLQAAgNgJgKQgLgKgLAAIgCABQgpAEgyAOIh3AiIgsAQIhLAmIgtAWQgXAJgYAIIgFADIgMgUIAVgMQAggTBCggQAygYAlgQQAsgRAlgOQApgOA5gQQAugNAygIIBTgNIBGgGIBNgGQA4gCAMAAIAhADQgNAZgbAxQgHAPgfArQgkAsgdAgQgcAegtAlQgdAVgYAOQgcAOgeAOQhNAehBASIhPAVIhIATIhRATQgwALghAKQg9AShhAtQhEAghEAxIgTAOg");
	this.shape_97.setTransform(-126.8,-64.3,0.768,0.768);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("Am5EPQAOhPAQgqQATgqAigxQARgZAug8QAqgzAlgiQAbgZA5gvIAjgaIB8hNIAMAUQgMAIAEAMQACAIAHAEQAHAEAIgCQA+gTATgIIBQgfQAPgGAYgFIAngKIAogJIAqgJIAxgKIAZgFIAEARIgFABQhKARgxAOIg+ATIg3ATQg2AThLAkQhEAhggASQgqAXgwAdQg3AhgnAfIgpAgIgbAVQgUATgVAkQgIAMAEAOQAEANAMAHQAJAFAKAAQAKgBAIgGIAJAMQgrAig9BAIgzA8QgRATgaAng");
	this.shape_98.setTransform(-148.8,-50.1,0.768,0.768);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(10,1,1).p("AT3AAQAAIOl1F0Ql0F0oOAAQoNAAl0l0Ql0l0AAoOQAAoNF0l1QF0l0INAAQIOAAF0F0QF1F1AAINg");

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6699FF").s().p("AuCOCQlzl0AAoOQAAoNFzl0QF1l1INAAQIOAAF0F1QF1F0gBINQABIOl1F0Ql0F0oOABQoNgBl1l0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.knopAqua, new cjs.Rectangle(-191.6,-193.4,453.3,325.5), null);


(lib.achtergrond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("EhOHBOIMAAAicPMCcPAAAMAAACcPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.achtergrond, new cjs.Rectangle(-500,-500,1000,1000), null);


(lib.routePaars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"ruimzicht-bronsbergen":14,"bronsbergen-more":159,"more-zuthpen":269,"zutphen-doesburg":395,"trein-zutphen-dieren":584,"dieren-doesburg":599,"doesburg-doetinchem-trein":629,"doetinchem-ruimzicht":654,"doesburg-ruimzicht":684,"zutphen-ruimzicht":814,doesburgDieren:994});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_152 = function() {
		this.stop();
		this.dispatchEvent("bronsbergen");
	}
	this.frame_258 = function() {
		this.stop();
		this.dispatchEvent("aankomstMore");
	}
	this.frame_386 = function() {
		this.stop();
		this.dispatchEvent("aankomstZutphen");
	}
	this.frame_574 = function() {
		this.stop();
		this.dispatchEvent("aangekomenFietsDoesburg");
	}
	this.frame_593 = function() {
		this.stop();
		this.dispatchEvent("aankomstStationDieren");
	}
	this.frame_623 = function() {
		this.stop();
		this.dispatchEvent("aankomstDoesburg");
	}
	this.frame_644 = function() {
		this.stop();
		this.dispatchEvent("treinDoetinchem");
	}
	this.frame_673 = function() {
		this.stop();
		this.dispatchEvent("gefietstDoetinchemRuimzicht");
	}
	this.frame_804 = function() {
		this.stop();
		this.dispatchEvent("gefietstDoesburgRuimzicht");
	}
	this.frame_987 = function() {
		this.stop();
		this.dispatchEvent("terugRuimZichtZutphen");
	}
	this.frame_1012 = function() {
		this.stop();
		this.dispatchEvent("doesburgDierenGefietst");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(152).call(this.frame_152).wait(106).call(this.frame_258).wait(128).call(this.frame_386).wait(188).call(this.frame_574).wait(19).call(this.frame_593).wait(30).call(this.frame_623).wait(21).call(this.frame_644).wait(29).call(this.frame_673).wait(131).call(this.frame_804).wait(183).call(this.frame_987).wait(25).call(this.frame_1012).wait(13));

	// Laag 1
	this.instance = new lib.scherm();
	this.instance.parent = this;
	this.instance.setTransform(500,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1025));

	// routePaars.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93278F").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape.setTransform(4295.7,12972.5,2.988,2.988);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93278F").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape_1.setTransform(3999.9,11203.4,2.988,2.988);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93278F").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape_2.setTransform(-3046.7,8259.8,2.988,2.988);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93278F").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape_3.setTransform(472.5,476.9,2.988,2.988);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93278F").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape_4.setTransform(-76.3,-5722.9,2.988,2.988);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#34C12D").s().p("AooMsIOh62ICwBfIuha2g");
	this.shape_5.setTransform(938.3,10193.5,2.988,2.988);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#34C12D").s().p("AxhFRIAAjIINLAAIU0nZIBEC8I1VHlg");
	this.shape_6.setTransform(-1569.9,8389.2,2.988,2.988);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#34C12D").s().p("Au7mXICih1II6MSIQhsnIB6CfIzFOkg");
	this.shape_7.setTransform(-642.6,4771.2,2.988,2.988);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#34C12D").s().p("AouozICeh6IO/ThIieB6g");
	this.shape_8.setTransform(877,-3489.1,2.988,2.988);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#34C12D").s().p("At3AAIBNi3IGYCqITvixIAbDFI0kC4g");
	this.shape_9.setTransform(968.4,-1732.8,2.988,2.988);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#34C12D").s().p("EgpdAEFMBSfgLPIAcDGMhSfALPg");
	this.shape_10.setTransform(494.5,463,2.988,2.988);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#34C12D").s().p("ArsgnIXIh3IARDGI3JB3g");
	this.shape_11.setTransform(1008.3,1556.6,2.988,2.988);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#34C12D").s().p("A4nGYIVrp5Ia7lrIApDDI6lFnI1XJvg");
	this.shape_12.setTransform(1015.8,3971.8,2.988,2.988);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#34C12D").s().p("AGGH9QoLmdg7g6Qg3g2mxmZImsmUICJiSIG4GeQGoGSA5A4QAqArGOE7QE5D3GWE8Ih7CeQj8jDlYkQg");
	this.shape_13.setTransform(1167.5,5825,2.988,2.988);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#34C12D").s().p("AsZAuIANjHIYmBsIgODHg");
	this.shape_14.setTransform(236.8,7454,2.988,2.988);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#34C12D").s().p("AvbJDIdD0oIB0CjI9DUog");
	this.shape_15.setTransform(1902,9383.5,2.988,2.988);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34C12D").s().p("AlHEXIHtqjICiB2IntKjg");
	this.shape_16.setTransform(3311.6,11882.3,2.988,2.988);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#34C12D").s().p("ABxgJMggNAGHIy2sLMgpbgGwI4v45ICNiNIYCYMMApFAGsISVL2If1mDMBxbAogIhDC9g");
	this.shape_17.setTransform(-357.7,9471,2.988,2.988);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhOBEIBrinIAzAgIhsCng");
	this.shape_18.setTransform(4327.6,12994.9,2.988,2.988);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EC7cB7XIBtioIBmBBIhuCogEC4TB5UIBtioIBkBCIhsCngEC1KB3RIBsinIBlBBIhtCngECyAB1OIBsioIBlBCIhsCogECu2BzLIBsinIBlBBIhsCogECrsBxJIBtioIBlBBIhtCogECoiBvHIBuioIBkBBIhtCogEClZBtDIBtinIBlBBIhuCogECiPBrBIBtioIBlBCIhtCngECfFBo+IBtinIBlBBIhsCngECb8Bm7IBsioIBlBCIhtCngECYyBk4IBtinIBkBBIhsCogECVpBi2IBsioIBlBBIhtCpgECSfBgzIBsinIBlBAIhsCpgECPVBewIBtinIBlBBIhtCogECMLBcuIBtioIBlBCIhtCngECJBBarIBuioIBkBCIhtCngECF4BYoIBtioIBlBCIhtCngECCuBWlIBtinIBlBBIhtCogEB/lBUjIBsioIBlBBIhsCogEB8bBSgIBsinIBlBBIhsCogEB5RBQdIBtinIBkBBIhsCogEB2HBOaIBtinIBlBBIhsCogEBy9BMYIBuioIBlBCIhuCngEBv0BKVIBtioIBlBCIhtCngEBsqBISIBtioIBlBCIhtCogEBpgBGQIBuioIBlBBIhuCogEBmXBENIBsinIBmBBIhtCogEBjNBCKIBtinIBlBBIhtCngEBgEBAHIBsinIBlBBIhsCogEBc6A+FIBsioIBlBCIhsCngEBZwA8CIBtioIBlBBIhtCogEBWmA6AIBtipIBlBCIhtCogEBTdA39IBtioIBlBBIhuCogEBQTA16IBtioIBlBCIhtCogEBNJAz3IBtinIBlBBIhtCngEBKAAx0IBsinIBlBBIhtCogEBG2AvyIBtioIBkBCIhsCngEBDtAtvIBsioIBlBBIhtCogEBAjArtIBsipIBlBCIhsCogEA9ZApqIBsioIBlBBIhsCogEA6PAnnIBtioIBlBCIhtCogEA3FAlkIBuinIBkBBIhtCngEAz8AjhIBtinIBlBBIhuCogEAwyAhfIBtioIBlBBIhtCogEAtpAfcIBsioIBlBBIhsCogEAqfAdaIBsipIBlBCIhsCogEAnVAbXIBtioIBkBBIhsCogEAkMAZUIBsioIBlBCIhtCogEAhBAXRIBuinIBkBBIhsCngAd4VOIBtinIBlBBIhtCogAauTMIBtioIBlBBIhtCogAXkRJIBuioIBkBBIhtCpgAUbPHIBtipIBlBCIhuCogARRNEIBtioIBlBBIhtCogAOILBIBsioIBlBCIhsCngAK+I+IBsinIBlBBIhsCngAH0G7IBtinIBkBBIhsCogAEqE4IBtinIBlBBIhtCogABgC2IBuioIBlBBIhuCpgAhoA0IBsioIBlBCIhsCngAkyhOIBtioIBlBBIhtCogAn8jRIBtioIBlBCIhtCngArFlUIBsioIBlBCIhtCngAuPnXIBtioIBlBCIhtCngAxYpaIBsinIBlBBIhsCogA0ircIBsioIBlBBIhsCpgA3stfIBtioIBkBBIhsCpgA62vhIBtioIBlBBIhtCogA+AxkIBuioIBlBCIhuCngEghJgTnIBtioIBlBCIhtCngEgkSgVqIBsioIBlBCIhtCngEgncgXsIBsioIBlBBIhsCogEgqmgZvIBsioIBlBBIhsCpgEgtwgbyIBtioIBlBBIhtCpgEgw5gd0IBsioIBlBBIhsCogEg0Dgf4IBtinIBkBCIhsCngEg3Ngh6IBtioIBlBCIhtCngEg6Xgj9IBtioIBlBCIhtCngEg9hgl/IBuipIBlBCIhuCogEhAqgoCIBtioIBlBBIhtCogEhDzgqFIBsioIBlBBIhtCpgEhG9gsHIBsioIBlBBIhsCogEhKHguLIBsinIBlBBIhsCogEhNRgwNIBtioIBlBBIhtCogEhQbgyQIBuioIBkBCIhtCngEhTkg0SIBtipIBlBCIhuCogEhWug2VIBtioIBlBBIhtCogEhZ3g4YIBtioIBkBBIhsCpgEhdAg6aIBsioIBlBBIhtCogEhgKg8eIBsinIBlBBIhsCogEhjUg+gIBsioIBlBBIhsCogEhmehAjIBtioIBlBBIhtCogEhpohClIBuipIBkBCIhtCogEhsxhEoIBtioIBlBBIhuCogEhv7hGrIBtioIBlBBIhtCpgEhzFhIuIBtinIBlBBIhtCogEh2PhKxIBtinIBlBBIhtCogEh5YhMzIBtioIBkBBIhsCogEh8hhO2IBsioIBlBBIhtCogEh/rhQ4IBsipIBlBCIhsCogEiC1hS7IBsioIBlBBIhsCogEiF/hU+IBtioIBlBBIhtCpgEiJJhXBIBuinIBkBBIhtCogEiMShZEIBtioIBlBCIhuCogEiPchbGIBtioIBlBBIhtCogEiSlhdJIBsioIBlBBIhsCogEiVvhfLIBsipIBlBCIhsCogEiY5hhOIBtioIBkBBIhsCogEicChjRIBsioIBlBCIhtCogEifMhlUIBsioIBlBCIhsCogEiiWhnXIBtioIBlBCIhtCogEilghpaIBtinIBlBBIhtCogEioqhrcIBuioIBkBBIhtCogEirzhteIBtipIBlBCIhtCogEiu9hvhIBtipIBlBCIhtCogEiyGhxkIBsioIBlBCIhsCngEi1QhznIBsioIBlBCIhsCngEi4ah1qIBtioIBkBCIhsCogEi7jh3tIBsinIBlBBIhsCogEi+uh5vIBuioIBlBBIhuCog");
	this.shape_19.setTransform(658.5,10616.8,2.988,2.988);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhPBEIBtinIAyAhIhsCmg");
	this.shape_20.setTransform(-3010.7,8238.7,2.988,2.988);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#42210B").s().p("EjBEh7RIBtioMGAdD5LIhtCog");
	this.shape_21.setTransform(658.5,10616.8,2.988,2.988);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#34C12D").s().p("EhmTBMgICKiPIZfYkMAi3gQKQAxiAAyiVQBPjtA4jbQBmmSAOkoQAOkohMioQiiloinkHQg0hSgug/IglgwIgtgzIAfg9QCFkACEkvQEGpcAMkJQAKjii9sfQiPpbi8qSIpnrDIAGgsQA0mSB2mgQDps3FlkCQChh0Dlh+QCChIENiIQEoiUB1hGQDBh0AvhTQBbilFAqWIEyp9IAWgvIaDkhIAlAuIBxCAQCNCaCeCTQH4HSHnDYQHzDeaiKeQNTFQMBErIhIC6QsDkrtUlQQ6lqgn2jfQnOjNnXmbQkaj1jgkGI2rD7Qo+Sxh/DkQhCB4jOCCQh/BQlSCpQkACBiEBIQjdB6iYBvQiYBtiGEBQiFD/hqGBQg5DOgsDkQgdCVgTCAIJJKhIAGAVIBeFTQBmF0BSFLQEDQPgNEiQgMEGjaIVQiCE+isFVQBVBxBeCgQCMDuCGErQCzGNjUNeQhsG0idGKIgPAlMgl8ARlg");
	this.shape_22.setTransform(-1089.5,6821,2.988,2.988);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#34C12D").s().p("EBPEG+pI8d10Immw9MgsFgqOMgLngi1QjVCgjKB4QpkFulQhlQhegchHhBQhdhWgsiPQhXkbBbkvQA2iyCyk+QCmknAqiRQBEjrhZjWQhBicjpnKQiUkhluq/QmgsgjcmtQlprBj3n8QmFsiibmhQhrkfAAh8QAAmJKa8YQEnsnFouKMAIZiDiQhRishdjdQiel1h+lpQjjqLhgoMQhfoLAmmAQBHrLA76oQAdtVAUuGMgS2g2rMAPDgloQiGtRhlsaQi+3LAxmVQARiMA/jcQAniJBfkhQBrlKAxiqQBSkgAgjVQBVomjcjcQiUiTl6ghQjjgToKAVQkzANiYAAQj6AAiqgbQjrgliNhgQiOhgg0ieQgqh8A3jMQBQkqEanzQFrqDKtvCQGupbIPqvQE7mcEUlaMg9QhfLITVqLIBdCxIwTIlMA8oBeNIguA4QjQEDksGEQpVMGniKjQuETwlKK1QjWG/AwCSQBGDQGAAyQCYAUDjgBQCIgBEbgMQI2gXD6AbQGkAsC8C9QCQCPAxDhQAxDggsE6QggDlhXEzQgzC2hyFeQhdEdgkB+Qg9DTgPB/QgxGPDQYtQBoMYB0LaIAFAbMgO9AlXMASqA2FIgBASIgLH3QgPJbgTIzQg8cChLLpQhILUG4TxQDdJ7DxH1IAMAYMgIfCE2IgGAPQmpQolwQHQoHWxAAE3QAABmB4E0QCeGUFhLYQD1H5FqLBQDSGbGpMxQF4LTCTEfQDkHBBECjQBxEPhQElQggB0hECLQgoBThbChQilEngvCWQhOD6BHDnQAYBOApAuQAqAuA+ATQDgBDHLj8QFHizEajpIBwhdMAMyAmXMAsCAqKIGiQzIbzVUIABABIYPT5MAH7gojIDFAmMgI9Attg");
	this.shape_23.setTransform(1805.6,3222.2,2.988,2.988);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#34C12D").s().p("EgJ9gt9IDEgkMAQ3BcfIjEAkg");
	this.shape_24.setTransform(4161.3,12087.9,2.988,2.988);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2880,-7079.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:-2710,y:-8011.7},4).to({x:-1679.7,y:-7205.5},7).to({x:-1549.7,y:-6885.4},4).to({x:-699.8,y:-6061.5},5).to({x:-477.8,y:-5391.3},4).to({x:-221.7,y:-5533.4},3).to({x:-39.6,y:-5559.4},4).to({x:24.4,y:-5413.4},4).to({x:-51.6,y:-5187.4},4).to({x:-131.7,y:-4977.3},4).to({x:-53.6,y:-4767.3},4).to({x:158.4,y:-4357.2},4).to({x:442.5,y:-3807},5).to({x:622.6,y:-3412.9},5).to({x:696.6,y:-3200.9},4).to({x:564.5,y:-2756.8},4).to({x:412.5,y:-2334.7},5).to({x:310.3,y:-2044.6},5).to({x:274.3,y:-1562.5},5).to({x:248.3,y:-1167.9},5).to({x:202.2,y:-534.9},6).to({x:164.2,y:70},6).to({x:140.1,y:480.6},5).to({x:338.4,y:1011.3},6).to({x:384.5,y:1285.7},5).to({x:356.5,y:1830.5},4).to({x:332.4,y:2685.8},5).to({x:470.7,y:3076.3},4).to({x:614.9,y:3525},5).to({x:640.9,y:3643.2},3).wait(7).to({startPosition:0},0).to({x:685,y:3759.3},4).to({x:546.8,y:4103.8},6).to({x:410.6,y:4446.3},5).to({x:474.7,y:4875},5).to({x:526.7,y:5385.7},5).to({y:5521.9},3).to({x:411.1,y:5873.7},5).to({x:367,y:6138.1},7).to({x:419.1,y:6288.3},4).to({x:557.3,y:6354.4},5).to({x:1030},4).to({x:1222.3,y:6428.5},5).to({y:6544.7},3).to({x:1028,y:6925.3},4).to({x:735.5,y:7347.9},5).to({x:439.1,y:7740.4},5).to({x:334.9,y:7868.6},3).to({x:597.3,y:8273.2},4).to({x:883.7,y:8709.9},5).to({x:1224.2,y:9252.7},4).to({x:1492.6,y:9677.3},5).to({x:1204.1,y:9837.5},3).wait(11).to({startPosition:0},0).to({x:1490.5,y:9685.3},3).to({x:1276.2,y:9330.7},5).to({x:971.7,y:8866},7).to({x:643.2,y:8357.3},5).to({x:390.9,y:7968.7},5).to({x:334.8,y:7874.5},2).to({x:585.1,y:7566.1},6).to({x:853.5,y:7183.5},5).to({x:1035.8,y:6911.1},6).to({x:1208,y:6592.7},6).to({x:1230,y:6430.5},3).to({x:1052.3,y:6359.6},4).to({x:741.8},5).to({x:483.4,y:6339.6},4).to({x:399.3,y:6259.5},4).to({x:377.3,y:6109.2},4).to({x:411.4,y:5876.1},5).to({x:521.5,y:5497.5},6).to({x:497.5,y:5111},5).to({x:449.4,y:4734.4},5).to({x:413.3,y:4440},5).to({x:551.5,y:4091.4},5).to({x:631.6,y:3871.1},6).to({x:687.7,y:3740.9},2).to({x:631.6,y:3656.8},4).wait(9).to({startPosition:0},0).to({x:505.4,y:3194.1},6).to({x:383.3,y:2843.6},5).to({x:339.2,y:2677.4},5).to({x:354.5,y:2018.4},5).to({x:385.8,y:1467.6},5).to({y:1339.4},6).to({x:301.7,y:890.8},5).to({x:133.4,y:488.2},7).to({x:159.5,y:69.5},6).to({x:197.5,y:-559.4},6).to({x:240.9,y:-1150.2},5).to({x:272.9,y:-1554.8},5).to({x:731.6,y:-1384.6},5).to({x:1178.3,y:-1206.3},6).to({x:1556.8,y:-1020.1},7).to({x:1843.3,y:-767.7},6).to({x:2299.9,y:-853.9},6).to({x:2442.1,y:-1134.3},6).to({x:2526.2,y:-1298.5},6).to({x:2870.7,y:-1500.8},5).to({x:2992.9,y:-1582.9},2).to({x:3081.1,y:-1729.2},3).to({x:3173.2,y:-2103.7},5).to({x:2999,y:-2304},5).to({x:2904.1,y:-2686.6},4).to({x:2842,y:-3013.1},5).to({x:2962.1,y:-3359.6},5).to({x:3000.2,y:-3447.7},3).to({x:2858,y:-3704.1},5).to({y:-3942.4},4).to({x:2928.1,y:-4208.8},5).to({x:2968.2,y:-4329},3).to({x:3274.6,y:-4445.1},6).to({x:3635.2,y:-4615.4},6).to({x:4172,y:-4132.7},5).wait(10).to({x:631.6,y:3656.8},0).to({x:5244.7,y:-1364.3},9).wait(6).to({startPosition:0},0).to({x:5734.8,y:-2036.5},4).to({x:6042.9,y:-2484.6},4).to({x:5620.8,y:-2872.7},5).to({x:4982.7,y:-3426.8},5).to({x:4170.5,y:-4130.9},6).wait(6).to({x:5246.7,y:-1368.1},0).to({x:-3171.3,y:-8854.1},15).wait(10).to({startPosition:0},0).to({x:-3111.2,y:-8388},7).to({x:-3007.2,y:-7777.9},7).to({x:-2873.1,y:-7075.7},5).wait(11).to({x:4172,y:-4132.7},0).to({x:3863.9,y:-4412.8},5).to({x:3645.9,y:-4626.8},5).to({x:3385.8,y:-4890.9},4).to({x:3201.8,y:-5066.9},3).to({x:2873.7,y:-5122.9},5).to({x:2419.5,y:-5198.9},3).to({x:2057.4,y:-5425},5).to({x:1705.3,y:-5357},5).to({x:1443.3,y:-5317},4).to({x:907.1,y:-5503},6).to({x:305,y:-5719.1},5).to({x:-151.2,y:-5881.1},5).to({x:-579.3,y:-6033.1},5).to({x:-699.4,y:-6073.1},3).to({x:-965.4,y:-6325.2},5).to({x:-1307.5,y:-6647.3},6).to({x:-1557.6,y:-6883.3},6).to({x:-1673.6,y:-7199.4},5).to({x:-1935.7,y:-7405.5},6).to({x:-2251.8,y:-7647.5},5).to({x:-2529.8,y:-7875.6},4).to({x:-2711.9,y:-8019.6},4).to({x:-2794.5,y:-7607.5},5).to({x:-2856.5,y:-7315.5},5).to({x:-2886.5,y:-7227.4},3).to({x:-2876.5,y:-7079.4},3).wait(10).to({x:631.6,y:3656.8},0).to({x:587.6,y:3422.7},3).to({x:457.6,y:3040.6},3).to({x:333.6,y:2682.5},3).to({x:339.6,y:2354.4},4).to({x:365.5,y:1912.3},4).to({x:385.3,y:1460.2},3).to({y:1308.2},3).to({x:299.3,y:894.1},4).to({x:177.2,y:576.1},3).to({x:137.2,y:498},2).to({x:163.2,y:105.9},4).to({x:197.1,y:-388.2},4).to({x:225,y:-874.3},4).to({x:255,y:-1374.4},5).to({x:288.9,y:-1844.5},5).to({x:304.9,y:-2064.5},3).to({x:523,y:-2632.7},5).to({x:686.9,y:-3126.8},5).to({y:-3224.8},2).to({x:508.8,y:-3654.9},5).to({x:250.8,y:-4181},5).to({x:8.7,y:-4645.2},4).to({x:-131.3,y:-4957.2},5).to({y:-5011.2},2).to({x:10.7,y:-5313.3},5).to({y:-5475.4},3).to({x:-73.4,y:-5569.4},2).to({x:-219.4,y:-5535.4},2).to({x:-401.5,y:-5423.3},4).to({x:-471.5,y:-5381.3},3).to({x:-607.5,y:-5779.4},5).to({x:-701.5,y:-6087.5},4).to({x:-961.6,y:-6317.5},5).to({x:-1265.7,y:-6611.6},4).to({x:-1541.7,y:-6875.7},5).to({x:-1643.8,y:-7139.7},4).to({x:-1683.8,y:-7209.7},1).to({x:-1949.9,y:-7417.8},6).to({x:-2227.9,y:-7631.8},5).to({x:-2500,y:-7865.9},6).to({x:-2710,y:-8025.9},5).to({x:-2770.1,y:-7715.9},4).to({x:-2828.1,y:-7443.8},4).to({x:-2884.1,y:-7203.7},4).to({x:-2876.1,y:-7087.8},2).wait(7).to({x:4172,y:-4132.7},0).to({x:5014.2,y:-3412.5},4).to({x:5778.3,y:-2728.3},4).to({x:6056.4,y:-2478.3},2).to({x:5694.3,y:-1992.2},4).to({x:5242.2,y:-1376},4).wait(13));

	// Laag 2
	this.instance_2 = new lib.achtergrond();
	this.instance_2.parent = this;
	this.instance_2.setTransform(500,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1025));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3170,-5846.2,7589.1,18942);


(lib.routeAqua = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{vreehorst:0,"vreehorst-erveKots":15,"kruispunt-campings":50,"erveKots-marveld":280,marveld:354,"marveld-mallumseMolen":380,mallumseMolen:594,"mallumseMolen-PieperseMolen":630,pieperseMolen:744,"pieperseMolen-mallumseMolen":775,"mallumseMolen-boerderijmuseum":895,boerderijMuseum:1145,"boerderijMuseum-kasteel":1182,kasteelRuurlo:1304,"kasteelRuurlo-marveld":1338,"marveld-vreehorst":1626,"kruispunt-vreehorst":1832,"vreehorst-einde":1866,"tweebruggen-kruispunt":1906,treinterug:2029,treinWinterswijk:2091,"trein-kruispunt":2133,"kruispunt-tweebruggen":2224,terugTweeBruggen:2331});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_260 = function() {
		this.stop();
		this.dispatchEvent("erveKots");
	}
	this.frame_354 = function() {
		this.stop()
		this.dispatchEvent("marveld");
	}
	this.frame_594 = function() {
		this.stop();
		this.dispatchEvent("Mallum");
	}
	this.frame_744 = function() {
		this.stop();
		this.dispatchEvent("Pieper");
	}
	this.frame_868 = function() {
		this.gotoAndPlay("mallumseMolen-boerderijmuseum");
	}
	this.frame_1145 = function() {
		this.stop();
		this.dispatchEvent("boerderijMuseum");
	}
	this.frame_1304 = function() {
		this.stop();
		this.dispatchEvent("kasteel");
	}
	this.frame_1595 = function() {
		this.stop();
		this.dispatchEvent("terugMarveld");
	}
	this.frame_1832 = function() {
		this.dispatchEvent("terugNaarTweeBruggen");
	}
	this.frame_1866 = function() {
		this.stop();
		this.dispatchEvent("vreehorstTerug");
	}
	this.frame_2008 = function() {
		this.gotoAndPlay("kruispunt-campings");
	}
	this.frame_2091 = function() {
		this.stop();
		this.dispatchEvent("stationWinterswijk");
	}
	this.frame_2201 = function() {
		this.dispatchEvent("tweeWegenterug")
	}
	this.frame_2331 = function() {
		this.stop();
		this.dispatchEvent("terugTweeBruggen");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(260).call(this.frame_260).wait(94).call(this.frame_354).wait(240).call(this.frame_594).wait(150).call(this.frame_744).wait(124).call(this.frame_868).wait(277).call(this.frame_1145).wait(159).call(this.frame_1304).wait(291).call(this.frame_1595).wait(237).call(this.frame_1832).wait(34).call(this.frame_1866).wait(142).call(this.frame_2008).wait(83).call(this.frame_2091).wait(110).call(this.frame_2201).wait(130).call(this.frame_2331).wait(275));

	// Laag 2
	this.instance = new lib.scherm();
	this.instance.parent = this;
	this.instance.setTransform(500,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2606));

	// routeAqua.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3DB6F9").s().p("AsZdXQluiakbkbQkakaialuQihl7AAmfQAAmeChl7QCaluEakbQEbkaFuiaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEbCaFuQChF7AAGeQAAGfihF7QiaFukaEaQkbEbluCaQl7ChmfAAQmeAAl7ihg");
	this.shape.setTransform(-2650.3,-1679.9,0.555,0.55,0,0,0,0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DB6F9").s().p("AsZdXQlviakakaQkakbibluQigl7AAmfQAAmeCgl7QCblvEakaQEakaFviaQF7ihGeAAQGfAAF7ChQFuCaEaEaQEbEaCbFvQCgF7AAGeQAAGfigF7QibFukbEbQkaEaluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_1.setTransform(498.4,502.4,0.555,0.55,0,0,0,0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3DB6F9").s().p("AsZdYQlvibkakaQkakaiblvQigl7AAmfQAAmeCgl7QCbluEakbQEakaFvibQF7igGeAAQGfAAF7CgQFuCbEaEaQEbEbCbFuQCgF7AAGeQAAGfigF7QibFvkbEaQkaEaluCbQl7CgmfAAQmeAAl7igg");
	this.shape_2.setTransform(1114.4,-5842.3,0.555,0.55,0,0,0,0.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3DB6F9").s().p("AsZdYQluibkbkaQkakaiblvQigl7AAmfQAAmeCgl7QCbluEakbQEbkaFuibQF7igGeAAQGfAAF7CgQFuCbEaEaQEbEbCaFuQChF7AAGeQAAGfihF7QiaFvkbEaQkaEaluCbQl7CgmfAAQmeAAl7igg");
	this.shape_3.setTransform(-250.8,-6349.4,0.555,0.55,0,0,0,0.2,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3DB6F9").s().p("AsZdXQluiakakbQkbkZiblvQigl7AAmfQAAmeCgl7QCbluEbkaQEakbFuibQF7igGeAAQGfAAF7CgQFvCbEZEbQEbEaCbFuQCgF7AAGeQAAGfigF7QibFvkbEZQkZEblvCaQl7ChmfAAQmeAAl7ihg");
	this.shape_4.setTransform(-4971.5,-6428.6,0.555,0.55,0,0,0,-0.1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3DB6F9").s().p("AsZdXQluiakakbQkbkaibluQigl7AAmfQAAmeCgl7QCbluEbkaQEakbFuibQF7igGeAAQGfAAF7CgQFvCbEZEbQEbEaCaFuQChF7AAGeQAAGfihF7QiaFukbEaQkZEblvCaQl7ChmfAAQmeAAl7ihg");
	this.shape_5.setTransform(-6196.9,-5161.4,0.555,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3DB6F9").s().p("AsZdYQlvibkakbQkakaialuQihl7AAmfQAAmeChl7QCalvEakZQEakbFvibQF7igGeAAQGfAAF7CgQFuCbEbEbQEaEZCbFvQCgF7AAGeQAAGfigF7QibFukaEaQkbEbluCbQl7CgmfAAQmeAAl7igg");
	this.shape_6.setTransform(1151.1,-346.7,0.555,0.55,0,0,0,0.3,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3DB6F9").s().p("AsZdXQluiakbkbQkakaialuQihl7AAmfQAAmeChl7QCaluEakbQEbkaFuiaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEbCaFuQChF7AAGeQAAGfihF7QiaFukaEaQkbEbluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_7.setTransform(-2061.1,-2680.5,0.555,0.55,0,0,0,0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3DB6F9").s().p("AsZdXQlviakakaQkakbialuQihl7AAmfQAAmeChl7QCalvEakaQEakaFviaQF7ihGeAAQGfAAF7ChQFuCaEbEaQEaEaCaFvQChF7AAGeQAAGfihF7QiaFukaEbQkbEaluCaQl7ChmfAAQmeAAl7ihg");
	this.shape_8.setTransform(-735.8,502.4,0.555,0.55,0,0,0,0.2,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#34C12D").ss(20).p("EDB5DbhMgrmggqQR8qHSZrEUAkzgWHACWgEsMh4FgqlMgrwAbgMhSfglgMh5QgZAMgwIgaQMAAAglfIxWAAMARWhYwI/4XwQhhjjhTkwQilpfBLl+QAojOFQkxQDojSH0loQJfm2CWh3QFyknBVixQCjlRD1xHQBMlWBMl5IA8k1MAP8giYIg83w");
	this.shape_9.setTransform(-879.1,-1043,1.11,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#34C12D").ss(20).p("ALTkII2lIR");
	this.shape_10.setTransform(-2270.7,-3290.9,1.11,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#34C12D").ss(20).p("ABQHPIifud");
	this.shape_11.setTransform(-2463,-3400,1.11,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#34C12D").ss(20).p("ABkm8IjHN5");
	this.shape_12.setTransform(-2807.1,-3369,1.11,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#34C12D").ss(20).p("AjYE0IGxpn");
	this.shape_13.setTransform(-3000.6,-3337.3,1.11,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#34C12D").ss(20).p("AH7vyInCHMIAAElIipKGIl8KA");
	this.shape_14.setTransform(-3447.3,-3542.2,1.11,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#34C12D").ss(20).p("AAAl/IAAL/");
	this.shape_15.setTransform(-4072.5,-3898.1,1.11,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#34C12D").ss(20).p("AhUnLICpOX");
	this.shape_16.setTransform(-4151.8,-3937.1,1.11,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#34C12D").ss(20).p("AmjJRINHyh");
	this.shape_17.setTransform(-4390,-3940.7,1.11,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#34C12D").ss(20).p("AlKHnIKVvN");
	this.shape_18.setTransform(-4912.6,-4292,1.11,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#34C12D").ss(20).p("AjWE+IGtp7");
	this.shape_19.setTransform(-5160.7,-4480.3,1.11,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#34C12D").ss(20).p("AiPDfIEfm9");
	this.shape_20.setTransform(-5439.5,-4758,1.11,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#34C12D").ss(20).p("AH/HcIv9u3");
	this.shape_21.setTransform(-5655.4,-5474.4,1.11,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#34C12D").ss(20).p("AAAqAIAAUB");
	this.shape_22.setTransform(-5145.8,-5882.8,1.11,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#34C12D").ss(20).p("ABlImIjJxM");
	this.shape_23.setTransform(-4810.7,-5987.5,1.11,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#34C12D").ss(20).p("AJxFAIzhp/");
	this.shape_24.setTransform(-4619.1,-6087.6,1.11,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#34C12D").ss(20).p("A27PgIDqgkQEdgwD+g7QMqi8C7joQC8jnHRpoQDok1DDkH");
	this.shape_25.setTransform(-3914.1,-6464.8,1.11,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#34C12D").ss(20).p("AnQmoIOhNR");
	this.shape_26.setTransform(-4061.9,-6413.7,1.11,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#34C12D").ss(20).p("AkaJjII1zF");
	this.shape_27.setTransform(-3978.8,-6271.3,1.11,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#34C12D").ss(20).p("AH+JjIv7zF");
	this.shape_28.setTransform(-3367.7,-6221.8,1.11,1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#34C12D").ss(20).p("AFDKAIqF0A");
	this.shape_29.setTransform(-2897.3,-6347.2,1.11,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#34C12D").ss(20).p("AAAJaIAAyz");
	this.shape_30.setTransform(-2635.1,-6440.9,1.11,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#34C12D").ss(20).p("Ah6GHID1sN");
	this.shape_31.setTransform(-2271.7,-6417.7,1.11,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#34C12D").ss(20).p("AmRIYIMjwv");
	this.shape_32.setTransform(-1724.7,-6279.6,1.11,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#34C12D").ss(20).p("AiiHEIFFuH");
	this.shape_33.setTransform(-1375,-6204.4,1.11,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#34C12D").ss(20).p("AobCvIQ3ld");
	this.shape_34.setTransform(-893.6,-5735,1.11,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#34C12D").ss(20).p("AEYBQIovif");
	this.shape_35.setTransform(1259.8,159.2,1.11,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#34C12D").ss(20).p("AEJiQIoREh");
	this.shape_36.setTransform(82.7,-6062.8,1.11,1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#34C12D").ss(20).p("AOZNcQhpj/iKkHQkToMiiglQijgmmUhBIl0g5IO/nq");
	this.shape_37.setTransform(889,-5507.8,1.11,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#34C12D").ss(20).p("AKZj9I0xH6");
	this.shape_38.setTransform(111.5,-6289.6,1.11,1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#34C12D").ss(20).p("ABVt+Iipb9");
	this.shape_39.setTransform(-561.1,-6375.2,1.11,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#34C12D").ss(20).p("ADpAjInRhF");
	this.shape_40.setTransform(-503.1,-5828.5,1.11,1.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#34C12D").ss(20).p("AGCFAIsDp/");
	this.shape_41.setTransform(-656.6,-5532.1,1.11,1.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#34C12D").ss(20).p("Aixi1IFjFr");
	this.shape_42.setTransform(-1020.4,-5028,1.11,1.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#34C12D").ss(20).p("AJdCKIy5kU");
	this.shape_43.setTransform(-954,-4920.3,1.11,1.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#34C12D").ss(20).p("AmjAAINHAA");
	this.shape_44.setTransform(-1115.5,-4762.1,1.11,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#34C12D").ss(20).p("AMcDnIuVkqIqqih");
	this.shape_45.setTransform(-1099.6,-4589.5,1.11,1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#34C12D").ss(20,0,1).p("ALBkHI0niGIKTNB");
	this.shape_46.setTransform(-1133.9,-4213.9,1.11,1.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#34C12D").ss(20).p("AJngsIzNBZ");
	this.shape_47.setTransform(-1241.5,-3839.8,1.11,1.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#34C12D").ss(20).p("AI/HIIx9uP");
	this.shape_48.setTransform(-1221.5,-3076.5,1.11,1.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#34C12D").ss(20).p("AFPLkIqd3H");
	this.shape_49.setTransform(-1272.6,-3006.5,1.11,1.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#34C12D").ss(20).p("AuHR2IbBxgIqKyv");
	this.shape_50.setTransform(-1401.5,-3090.3,1.11,1.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#34C12D").ss(20).p("EFD0B2bIpsTEQpBAPqYAXQ0vAtmwAlQjqAVklhkQjQhHlNisQnGjqhegrQk2iOjqgnQjzgoiUhkQhhhBh6iXQiNiwhchPQitiWkIhtUgHrgDKghfACdQoVAnwrBjQtcBPjiAIUgIRAAShTQglmUgRSgH0gqAgTRQ86tRkChkUgJFgDhhOogzFQ4lv+8lyzI3rvoQmGngmkocQtIw4iWksQiWksvPoDQkwihlfijIkiiDIg4BeQhCByg2BpQisFPASBwQATBxojAtQisAOjPAFIitADI3m9i");
	this.shape_51.setTransform(-3744.4,-4139.4,1.11,1.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#34C12D").ss(20).p("ACoCyIlPlj");
	this.shape_52.setTransform(-1580.4,-3068,1.11,1.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#34C12D").ss(20).p("AM1IyIvdoZIp2pa");
	this.shape_53.setTransform(-1808.2,-2901.2,1.11,1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#34C12D").ss(20).p("ABfqmQiwTwgMAH");
	this.shape_54.setTransform(-1958.5,-2835,1.11,1.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#34C12D").ss(20).p("AlfjGIK/GN");
	this.shape_55.setTransform(-2120.9,-2373.1,1.11,1.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#34C12D").ss(20).p("AmrhwINXDh");
	this.shape_56.setTransform(-2208,-2189,1.11,1.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#34C12D").ss(20).p("AGFBrIsKjV");
	this.shape_57.setTransform(-2191,-1894.2,1.11,1.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#34C12D").ss(20).p("AhQjQIChGh");
	this.shape_58.setTransform(-2325.3,-1859.3,1.11,1.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#34C12D").ss(20).p("AFjFUIrFqn");
	this.shape_59.setTransform(-2294.9,-1776.8,1.11,1.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#34C12D").ss(20).p("AiaEiIE1pD");
	this.shape_60.setTransform(-2333.7,-1771.3,1.11,1.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#34C12D").ss(20).p("AlWhjIKtDH");
	this.shape_61.setTransform(-2416.1,-1803.2,1.11,1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#34C12D").ss(20).p("AlSDWIGjmPIFHAA");
	this.shape_62.setTransform(-2531.9,-1650.7,1.11,1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#34C12D").ss(20).p("AB4ExIjvph");
	this.shape_63.setTransform(-2440.8,-1484.7,1.11,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#34C12D").ss(20).p("AJuhyIzbDl");
	this.shape_64.setTransform(-2199.1,-1495.7,1.11,1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#34C12D").ss(20).p("AKNiCI0ZEF");
	this.shape_65.setTransform(-2220.3,-1372.9,1.11,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#34C12D").ss(20).p("AIlgrIxJBX");
	this.shape_66.setTransform(-2255.3,-1243.9,1.11,1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#34C12D").ss(20).p("AnGDNIONmZ");
	this.shape_67.setTransform(-2401.4,-1038.1,1.11,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#34C12D").ss(20).p("AIXgsIwtBZ");
	this.shape_68.setTransform(-2169.4,-1065.6,1.11,1.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#34C12D").ss(20).p("AG7C0It1ln");
	this.shape_69.setTransform(-2179.2,-896.8,1.11,1.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#34C12D").ss(20).p("AXRMwIgEzyMgkFgEEIqyL6");
	this.shape_70.setTransform(-1765.4,-642.6,1.11,1.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#34C12D").ss(20).p("AkGlYIHfE2IABHO");
	this.shape_71.setTransform(-1179.5,-509.1,1.11,1.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#34C12D").ss(20).p("AA/oUIh9Qp");
	this.shape_72.setTransform(-1400,-572,1.11,1.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#34C12D").ss(20).p("AhEIkICKxH");
	this.shape_73.setTransform(-1949.2,-580.8,1.11,1.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#34C12D").ss(20).p("AjwF2IHhrq");
	this.shape_74.setTransform(-1182.1,-420.9,1.11,1.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#34C12D").ss(20).p("AmoGqINRtT");
	this.shape_75.setTransform(-817.6,-273.8,1.11,1.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#34C12D").ss(20).p("AivJ3IFfzu");
	this.shape_76.setTransform(-736.4,-227.1,1.11,1.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#34C12D").ss(20).p("AhFmFICLML");
	this.shape_77.setTransform(-552.8,-262.1,1.11,1.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#34C12D").ss(20).p("AXo94In0OYIE7IeQFUI0B9BxQDbDFCpECQDoFjgoD6QglDthBC5QghBdgZAtQpsiRqMilQ0YlKijhkQiihkt1n+ItVnq");
	this.shape_78.setTransform(983.2,-52.7,1.11,1.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#34C12D").ss(20).p("AmBpDIMDSH");
	this.shape_79.setTransform(-200.2,-410.6,1.11,1.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#34C12D").ss(20).p("AlOJdIKdy5");
	this.shape_80.setTransform(89.3,484.2,1.11,1.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#34C12D").ss(20).p("AOnlnI9NLP");
	this.shape_81.setTransform(66,128.4,1.11,1.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#34C12D").ss(20).p("AjhN8IHE73");
	this.shape_82.setTransform(-115.9,285.4,1.11,1.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#34C12D").ss(20).p("AAAoWIAAQt");
	this.shape_83.setTransform(-435.1,257.6,1.11,1.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AimB1IDQk8IB9BTIjQE8g");
	this.shape_84.setTransform(1144,-351.4,1.11,1.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("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");
	this.shape_85.setTransform(-2522.9,-2754.1,1.11,1.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AimB1IDQk8IB9BTIjQE8g");
	this.shape_86.setTransform(-6190,-5156.8,1.11,1.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#534741").ss(38).p("EoFLlV8MQKXKr5");
	this.shape_87.setTransform(-2523,-2754.1,1.11,1.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#34C12D").ss(20).p("EhxgBNqQEOk2D/ltQH+rahLkTQhLkTAjqKQALjLAVjZIASivIBUACQBpgCBlgPQFFgyCvivQAXgXDQjcQCbilBthhQFLknD+AAQD6AAJsEsQE2CWEECWQAFg/AShfQAljABBilQDSoSGphLQDNgkGQgJQDjgFHtgKQGwgSEog5QF6hKD4iWQHCkTXI2RQLkrJKKqRMA3Agbg");
	this.shape_88.setTransform(-5390.6,-5627.7,1.11,1.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#34C12D").ss(20).p("Ekz9gdOILQkiIFoLaIE9gIQF+gHFLAKQQkAeCWCvQCWCvAoFeQAUCvgKCMICchfQDKh4Dfh9QLMmSKmk4QO2m0LhjCQOajxIYCbMBiIAKKIN9lWQQ6mZOslOUAvBgQuAHbABLQFyA6K6BhQNrB5MJBeUAimAELAGCgBNQDMgpNhEhQJ3DTR+G+QJxDyQ6GmQMLEoBAgZQBignE4gxQF8g7GBgNQHsgRGCBAQHWBPEVDCQERC+C4F7QCIEYB1HMQAZBfBCEZQA2DjAiB7QBoFzB/CZQD6EsIwLkQEYFyDmE2MAhxAFd");
	this.shape_89.setTransform(-2783.9,-6111.6,1.11,1.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#34C12D").ss(20).p("Eg8PAZfQA5AAKbmkIKQmkIHCwZMA5LgVGMAY2Al9IKA2V");
	this.shape_90.setTransform(-219.2,345,1.11,1.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#34C12D").ss(20).p("EhfRg3tIQ4jSINmRWILuI6IAASwIHSA1QI8BIISBhQafEzJ8GuQJ+GwVLRxQKlI5ImHiIEiQuIZUpYIGGx0");
	this.shape_91.setTransform(482.5,-5980.2,1.11,1.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#34C12D").ss(20).p("Eh8HEGeQJYpuKFpvQUKzdDhAAQCBAAClg7QCUg1CXhaQCOhWBlhbQBmheAWhDQAQguATiHQAWibAShMQBGkmC5hKQD1hiA7gaQDbhfCchgQHDkVgUk0IEBA5QE2BKEOBTQNeEGCDD0INmzOQhJkKhpmkQjStGifr8UgH+gmNAC7gMTQCLpGHT8tUAIkghvAIGge0UAXOhYdADngFIQDhk+H+t9QD/m+DSl/IGboFQHrp2GTozQUK8IhLnCQhLnCkduEQhZkZhjkkIhSjtIC03cMAkGgKU");
	this.shape_92.setTransform(-1203.9,-4501.2,1.11,1.1);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2509.6,-2979.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2204,-2749.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2730.4,-2416.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},26).to({state:[{t:this.instance_3}]},34).to({state:[{t:this.instance_3}]},17).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_3}]},33).to({state:[{t:this.instance_3}]},17).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},25).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},26).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},32).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_3}]},21).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_3}]},36).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},31).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},16).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},27).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},16).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},16).to({state:[{t:this.instance_3}]},26).to({state:[{t:this.instance_3}]},22).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},37).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},34).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},56).to({state:[{t:this.instance_3}]},55).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},31).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},18).to({state:[{t:this.instance_3}]},32).to({state:[{t:this.instance_3}]},22).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_3}]},30).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_3}]},40).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},30).to({state:[{t:this.instance_3}]},21).to({state:[{t:this.instance_3}]},62).to({state:[{t:this.instance_3}]},42).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},23).to({state:[{t:this.instance_3}]},22).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},16).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_3}]},7).wait(275));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({_off:true,x:-2204,y:-2749.2},9).wait(2582));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},9).to({_off:true,x:-2730.4,y:-2416.4},26).wait(2556));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},26).to({x:-1880.8,y:-2114},34).to({x:-1568.8,y:-2302.8},17).to({x:-984.8,y:-2042},24).to({x:-126.6,y:-1869.9},33).to({x:217.5,y:-1679.9},17).to({y:-1419.8},11).to({x:339.5},9).to({x:223.3,y:-805.6},25).to({x:443.4,y:-961.7},15).to({x:477.4,y:-807.7},9).to({x:511.4},7).to({x:531.5,y:-831.7},4).to({x:639.5,y:-799.7},5).wait(20).to({startPosition:0},0).to({x:533.5,y:-825.7},3).to({x:513.5,y:-811.7},3).to({x:479.5,y:-809.7},4).to({x:473.5,y:-783.7},4).to({x:375.5,y:-687.7},8).to({x:227.3,y:-575.7},13).to({x:151.2,y:-305.6},13).to({x:37.2,y:-47.5},15).to({x:51.2,y:194.5},11).wait(26).to({startPosition:0},0).to({x:-178.9,y:422.6},20).to({x:-216.9,y:446.6},5).to({x:-256.9},5).to({x:-334.9,y:502.6},7).to({x:-354.9,y:580.6},6).to({x:-484.9,y:654.5},10).to({x:-496.9,y:686.5},5).to({x:-675.6,y:638.3},10).to({x:-695.6,y:612.3},4).to({x:-796,y:746.8},8).to({x:-697.7,y:1248.8},15).to({x:-703.7,y:1363.1},4).to({x:-1066.2,y:2721.3},32).to({x:-1205.6,y:2952},13).to({x:-1477.5,y:3353},21).to({x:-1489.7,y:3380.5},5).to({x:-1422.6,y:3628.3},13).to({x:-1440,y:3798.5},12).to({x:-1761.9,y:3860.5},19).wait(36).to({startPosition:0},0).to({x:-1932.3,y:3915.6},8).to({x:-2044.1,y:3781.4},10).to({x:-2114.7,y:3729.8},6).to({y:3594.2},8).to({x:-2329.8,y:3566.6},10).to({x:-2484.7,y:3523.6},10).to({x:-2682.6,y:3394.5},11).to({x:-2906.3,y:3206.9},12).to({x:-2933.8,y:3091.6},9).to({x:-3116.3,y:3157},13).to({x:-3152.4,y:3258.5},11).to({x:-3123.1,y:3352.3},6).wait(31).to({startPosition:0},0).to({x:-3145.4,y:3254.2},4).to({x:-3118.2,y:3159},8).to({x:-2934.6,y:3092.7},10).to({x:-2903.7,y:3208},10).to({x:-2590.4,y:3466.2},12).to({x:-2485.4,y:3524.7},6).to({x:-2115.4,y:3603.8},16).to({y:3729.5},8).to({x:-2050,y:3784.5},4).to({x:-1932.9,y:3917.1},10).to({x:-1761.9,y:3860.5},5).wait(27).to({startPosition:0},0).to({x:-1438.3,y:3802},8).to({x:-1419.6,y:3631.7},6).to({x:-1488.5,y:3390.7},12).to({x:-1480,y:3352.9},4).to({x:-1407.7,y:3235.9},9).to({x:-1170.3,y:3275.4},15).to({x:-1017.2,y:3481.9},16).to({x:-953.5,y:3691.9},14).to({x:-907,y:3750.4},4).to({x:-777.9,y:3779.7},7).to({x:-592,y:3762.4},8).to({x:-3.5,y:3963.8},19).to({x:24.1},4).to({x:251.3,y:3982.7},12).to({x:614.4,y:4032.6},16).to({x:1304.5,y:3802},26).to({x:1984.3,y:3869.1},22).to({x:2049.7,y:3879.3},6).to({x:2165,y:3856.1},5).to({x:2571.1,y:3680.6},13).to({x:2598.6,y:3773.5},7).to({x:2843,y:3794.1},11).to({x:2935.9,y:3923.2},6).wait(37).to({startPosition:0},0).to({x:2843,y:3792.4},7).to({x:2596.9,y:3775.2},13).to({x:2572.8,y:3692.6},7).to({x:2961.8,y:3506.7},13).to({x:3259.5,y:3227.9},12).to({x:3317.2,y:3166.8},7).to({x:3628.7,y:3127.1},8).to({x:3670,y:3108.2},7).to({x:3713.1,y:3010.1},9).to({x:3876.6,y:3070.3},7).to({x:3993.6,y:2977.3},9).to({x:4077.9,y:2955},6).to({x:4086.8,y:2824.4},6).to({x:4079.8,y:2778},6).to({x:4124.2,y:2680.4},5).wait(34).to({startPosition:0},0).to({x:4027.8,y:2633.9},5).to({x:3874.6,y:2441.2},9).to({x:3749,y:2458.2},5).to({x:3711.1,y:2542.5},6).to({x:3499.4,y:2425.5},10).to({x:3286,y:2146.7},12).to({x:2141.5,y:1410.2},56).to({x:813.1,y:843.3},55).to({x:284.8,y:874.3},15).to({x:231.4,y:867.2},4).to({x:184.9,y:844.8},4).to({x:121.3,y:781.1},6).to({x:61.1,y:762.4},5).to({x:-133.3,y:680},12).to({x:-494.6,y:691.9},15).to({x:-410.3,y:607.6},6).to({x:-363.9,y:590.4},5).to({x:-339.8,y:504.3},6).to({x:-301.9,y:475.1},5).to({x:-224.5,y:449.4},5).to({x:-209},3).to({x:48.2,y:205},8).wait(31).to({startPosition:0},0).to({x:38,y:-47.9},5).to({x:149.9,y:-300.8},11).to({x:222.1,y:-572.7},10).to({x:475.1,y:-786.1},12).to({x:444.1,y:-956.5},8).to({x:229,y:-803.4},11).to({x:340.9,y:-1418.5},15).to({x:220.4},7).to({y:-1683.5},12).to({x:-116.9,y:-1867.7},18).to({x:-980.2,y:-2043.8},32).to({x:-1566.2,y:-2300.8},22).to({x:-1883.8,y:-2118.9},13).to({x:-2726.9,y:-2410.5},30).to({x:-2198.5,y:-2745.3},20).to({x:-2495.9,y:-2970.5},14).wait(40).to({x:-1274.7,y:-2980.7},0).to({x:-1380.1,y:-2985},5).to({x:-1515.8,y:-2910},9).to({x:-1563.4,y:-2795.9},9).to({x:-1973.4,y:-2647.2},20).to({x:-2146.1,y:-2905},15).to({x:-2215.4,y:-2763.5},10).to({x:-2196.6,y:-2747.6},4).to({x:-2730.4,y:-2416.4},30).wait(21).to({x:4124.2,y:2680.4},0).to({x:-3164.5,y:-2127},62).wait(42).to({startPosition:0},0).to({x:-3144.3,y:-2239.4},5).to({x:-3109.7,y:-2317.2},5).to({x:-3193.3,y:-2452.7},9).to({x:-3249.5,y:-2523.3},6).to({x:-3256.6,y:-2562.2},3).to({x:-3243.6,y:-2627.1},4).to({x:-2954,y:-2556.5},13).to({x:-2726.3,y:-2426.8},15).to({x:-2730.4,y:-2416.4},8).wait(23).to({startPosition:0},0).to({x:-2198.7,y:-2749.2},22).to({x:-2213.2,y:-2765.1},4).to({x:-2148.4,y:-2902},10).to({x:-1976.9,y:-2647},16).to({x:-1566.2,y:-2791.1},24).to({x:-1517.2,y:-2910.7},10).to({x:-1384.6,y:-2988.5},14).to({x:-1278},7).wait(275));

	// Laag 1
	this.instance_4 = new lib.achtergrond();
	this.instance_4.parent = this;
	this.instance_4.setTransform(500,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2606));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6310.1,-6583.7,7611,7584.9);


(lib.keuzeScherm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Illustratie 1.ai
	this.knopGeel = new lib.knopGeel();
	this.knopGeel.parent = this;
	this.knopGeel.setTransform(747.2,705.4);

	this.knopAqua = new lib.knopAqua();
	this.knopAqua.parent = this;
	this.knopAqua.setTransform(204.5,758.7,1,1,0,0,0,-45.1,45);

	this.knopPaars = new lib.knopPaars();
	this.knopPaars.parent = this;
	this.knopPaars.setTransform(461.1,270.8,1,1,0,0,0,-22,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.knopPaars},{t:this.knopAqua},{t:this.knopGeel}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.keuzeScherm, new cjs.Rectangle(-1,-1,1002,1002), null);


// stage content:
(lib.routeGeel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{routeNaarKlimbos:1,vraagSpilman:106,bestemmingKlimbos:240,koffieDrinkenSpilman:255,bestemmingSpilman:287,spilmanTerugOpWeg:334,naarKlimbosTrein:355,stationLievelde:411,stationRuurlo:538,bestemmingKlimBosTrein:568,fietsNaarMegapret:585,megaPret:798,treinNaarMegapret:820,stationRuurloNaarMegapret:840,stationLieveldeNaarMegapret:906,terugNaarMarveld:941,terug:1047});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
		this.dispatchEvent("koffieVragen");
	}
	this.frame_240 = function() {
		this.stop();
		this.dispatchEvent("aankomstKlimbos");
	}
	this.frame_287 = function() {
		this.stop();
		this.dispatchEvent("arriveerKoffie");
	}
	this.frame_334 = function() {
		this.gotoAndPlay("vraagSpilman");
	}
	this.frame_411 = function() {
		this.stop();
		this.dispatchEvent("Lievelde");
	}
	this.frame_538 = function() {
		this.stop();
		this.dispatchEvent("Ruurlo");
	}
	this.frame_568 = function() {
		this.gotoAndStop("bestemmingKlimbos");
	}
	this.frame_798 = function() {
		this.stop();
		this.dispatchEvent("Megapret");
	}
	this.frame_840 = function() {
		this.stop();
		this.dispatchEvent("Ruurlo");
	}
	this.frame_906 = function() {
		this.stop();
		this.dispatchEvent("Lievelde");
	}
	this.frame_921 = function() {
		this.stop();
		this.dispatchEvent("Megapret");
	}
	this.frame_1047 = function() {
		this.stop();
		this.dispatchEvent("einde");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(105).call(this.frame_105).wait(135).call(this.frame_240).wait(47).call(this.frame_287).wait(47).call(this.frame_334).wait(77).call(this.frame_411).wait(127).call(this.frame_538).wait(30).call(this.frame_568).wait(230).call(this.frame_798).wait(42).call(this.frame_840).wait(66).call(this.frame_906).wait(15).call(this.frame_921).wait(126).call(this.frame_1047).wait(22));

	// Laag 7
	this.instance = new lib.scherm();
	this.instance.parent = this;
	this.instance.setTransform(500,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1069));

	// routeGeel.ai
	this.instance_1 = new lib.routeGeel_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7773.7,-708.6,4.76,4.76,0,0,0,-0.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-7444.5,y:-722},4).to({x:-7425.3,y:-848.4},3).to({x:-7124.5,y:-1162},5).to({x:-7083.9,y:-1098},3).to({x:-6738.3,y:-968.4},8).to({x:-6283.9,y:-803.6},10).to({x:-5759.1,y:-954},9).to({x:-4963.9,y:-765.2},11).to({x:-4509.5,y:-392.4},11).to({x:-2928.7,y:-469.2},23).to({scaleX:4.76,scaleY:4.76,x:-866,y:310.3},18).to({scaleX:4.76,scaleY:4.76,x:1164.1,y:1194.8},19).to({x:4492.1,y:3338.8},46).to({x:5247.3,y:4199.6},14).to({x:5855.3,y:4644.4},12).to({x:6066.5,y:4350},6).to({x:6300.1},6).to({x:6546.5,y:4522.8},4).to({x:6956.1},6).to({x:7298.5,y:4820.4},7).to({x:7468.1,y:4740.4},3).to({x:8738.5,y:4996.4},8).to({x:8778.3,y:4692.5},4).wait(15).to({scaleX:4.76,scaleY:4.76,x:-866,y:310.3},0).to({x:-1414.3,y:1322.5},9).to({x:-1487.9,y:2263.3},9).to({x:-2211.1,y:3092.1},10).to({x:-2209.8,y:3429},4).to({y:3104.6},4).to({x:-1490.6,y:2276.3},11).to({x:-1410.1,y:1346.7},15).to({x:-1067.4,y:630.1},13).to({x:-866,y:310.3},4).wait(21).to({scaleX:4.76,scaleY:4.76,x:-7778.9,y:-685.2},0).to({x:-7430.9,y:-728.3},4).to({y:-870},5).to({x:-7135.2,y:-1178},6).to({x:-7095.3,y:-1125.7},2).to({x:-6550.2,y:-1470.6},9).to({x:-6513.2,y:-2403.7},12).to({x:-4785.5,y:-3867.1},18).to({x:6881.6,y:4998.1},127).to({x:6944,y:4931.8},3).to({x:7194.5,y:5021.4},3).to({x:7336,y:4825.4},5).to({x:7489.2,y:4734.5},4).to({x:8749.8,y:4996.7},11).to({x:8778.3,y:4692.5},4).wait(17).to({x:8775.8,y:4716.3},0).to({x:8750.9,y:4998},5).to({x:7538.3,y:4735.8},8).to({x:7300.7,y:4824.1},3).to({x:6948.5,y:4524},8).to({x:6617.1},5).to({x:6447.5,y:4477.1},4).to({x:6309.2,y:4346.6},4).to({x:6051},4).to({x:5863.1,y:4631},5).to({x:5302.2,y:4218.8},10).to({x:4524.8,y:3355.3},12).to({x:1148.8,y:1189.9},33).to({x:-849.6,y:339.4},20).to({x:-771.3,y:42},5).to({x:165.2,y:-1891.2},13).to({x:-489.6,y:-2658.3},13).to({x:-883.6,y:-2585.2},6).to({x:-1946.6,y:-3876.6},12).to({x:-2536.2,y:-4208},9).to({x:-3055.4,y:-4309.7},7).to({x:-3441.5,y:-4254.9},10).to({x:-3572,y:-4351.4},5).to({x:-3755.8,y:-4247.1},6).to({x:-3937.6,y:-3881.1},6).wait(22).to({x:8775.8,y:4716.3},0).to({x:8752.4,y:4975.8},3).to({x:7523.5,y:4709.8},6).to({x:7302.8,y:4812.4},3).to({x:7193.8,y:5013.5},4).to({x:6882.4,y:4970.7},4).to({x:-4792.8,y:-3891.5},66).to({x:-4630.6,y:-3905.7},3).to({x:-4329.5,y:-3781.1},6).to({x:-3937.6,y:-3881.1},6).wait(20).to({x:-4334.7,y:-3781.2},6).to({x:-4608.5,y:-3879.8},8).to({x:-4908.3,y:-3811},4).to({x:-6525.3,y:-2402.9},32).to({x:-6555.2,y:-1510.1},17).to({x:-7126.6,y:-1123},10).to({y:-1191.8},2).to({x:-7417.3,y:-925.8},8).to({x:-7430.3,y:-776.5},3).to({x:-7772.9,y:-714.2},16).wait(22));

	// Laag 1
	this.instance_2 = new lib.achtergrond();
	this.instance_2.parent = this;
	this.instance_2.setTransform(500,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1069));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15740.8,-5090.2,17240.9,9833.6);
// library properties:
lib.properties = {
	width: 1000,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;