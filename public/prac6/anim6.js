(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"anim6_atlas_1", frames: [[625,0,588,1290],[1215,0,576,1074],[0,0,623,1326]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1616984647_19pfonpolyanka20 = function() {
	this.initialize(img._1616984647_19pfonpolyanka20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2000);


(lib.нога1 = function() {
	this.initialize(img.нога1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);


(lib.нога3 = function() {
	this.initialize(ss["anim6_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.нога4 = function() {
	this.initialize(ss["anim6_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.нога2 = function() {
	this.initialize(ss["anim6_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.овца = function() {
	this.initialize(img.овца);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2171,1813);


(lib.хвост = function() {
	this.initialize(img.хвост);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,2464);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.ус = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(1,1,1).p("Ag6CcQAAgMAAgTQADg6AAgUQACgJAJguQAEgWAAgWQAJhMADgNQADgOAZAAQAeAAARAfQAMAXAAAYQAAAVgKAQQgLATgUAAQgKAAgGgTQgEgQAAgPQAAgLAEgEQAEgCAKAAQAMAAAJAR");
	this.shape.setTransform(5.85,15.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ус, new cjs.Rectangle(-1,-1,13.7,33.2), null);


(lib.телопчелы = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("ACpizQi/CXDEDOAgSi/QidCwCdDPAhNi0QjACdC+DLABgjAQjGCrDFDW");
	this.shape.setTransform(34.5624,19.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("ABgjAQAmADAjAKQi/CXDEDOQglALgqAEQjFjWDGirgAhPC0Qi+jLDAidQAcgIAfgDQidCwCdDPQgggEgdgIg");
	this.shape_1.setTransform(34.5624,19.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUDBQicjQCciwQAegEAgAAQAbAAAZADQjGCrDFDXQgYACgbAAQggAAgegDgAitCLQhag6hUhRQBUhQBag5QArgcA0gPQjBCdC/DLQgzgOgqgbgACnizQAxAPAqAbQBZA5AABQQAABRhZA6QgoAZgtAOQjFjNC/iYg");
	this.shape_2.setTransform(34.75,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.телопчелы, new cjs.Rectangle(0,-0.7,69.5,40.7), null);


(lib.крыло = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5FFFF").s().p("Ag8BOQgpgYgQgnQgPgmASghQATggAqgGQAqgGAoAYQAoAXAQAnIAoBmQg+ABgqAGIgRABQgfAAghgSg");
	this.shape.setTransform(12.4717,9.6339);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.крыло, new cjs.Rectangle(0,0,25,19.3), null);


(lib.Символ31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.нога4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,576,1074), null);


(lib.Символ10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.нога3();
	this.instance.setTransform(35,0,0.0595,0.0595,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,35,76.8), null);


(lib.Символ9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.нога1();
	this.instance.setTransform(0,0,0.0214,0.0214);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,53,75), null);


(lib.Символ8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.нога2();
	this.instance.setTransform(0,0,0.0672,0.0672);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,41.9,89.2), null);


(lib.Символ7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.хвост();
	this.instance.setTransform(0,0,0.0323,0.0323);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,80,79.5), null);


(lib.Символ6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.овца();
	this.instance.setTransform(0,0,0.1437,0.1437);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,311.9,260.5), null);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,2.4,2.4), null);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AASAAQAAAHgGAFQgFAGgHAAQgGAAgGgGQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFQAGAGAAAGg");
	this.shape.setTransform(1.75,1.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAFAGQAFAFABAGQgBAHgFAFQgFAFgHABQgGgBgFgFg");
	this.shape_1.setTransform(1.75,1.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-1,-1,5.5,5.5), null);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ4();
	this.instance.setTransform(60.75,19.45,1.5833,1.5833,0,0,0,1.2,1.2);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(59.45,19.1,2.1789,2.1789,0,0,0,1.9,1.9);

	this.ikNode_1 = new lib.телопчелы();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(34.8,19.6,1,1,0,0,0,34.8,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,-0.2,69.5,39.7), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ус();
	this.instance.setTransform(9.15,14.35,1,0.7659,0,-15.0003,165.001,5.8,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-0.6,-0.5,18.700000000000003,27.1), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крыло();
	this.instance.setTransform(14.7,15.8,1,1,59.9996,0,0,12.7,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,29.2,31.3), null);


// stage content:
(lib.итог = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Каркас_35
	this.ikNode_13 = new lib.Символ6();
	this.ikNode_13.name = "ikNode_13";
	this.ikNode_13.setTransform(-195.05,336.95,1,1,0,0,0,121.8,143.1);

	this.ikNode_14 = new lib.Символ8();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(-251.55,428.55,1,1,0,0,0,23.2,37.8);

	this.ikNode_16 = new lib.Символ9();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(-219.8,427.1,0.9999,0.9999,0,0,0,26.9,26.4);

	this.ikNode_18 = new lib.Символ10();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(-141.3,434.75,1,1,0,0,0,19.9,35.8);

	this.ikNode_20 = new lib.Символ31();
	this.ikNode_20.name = "ikNode_20";
	this.ikNode_20.setTransform(-118.6,416.7,0.073,0.073,-4.8432,0,0,283.4,305.1);

	this.ikNode_22 = new lib.Символ7();
	this.ikNode_22.name = "ikNode_22";
	this.ikNode_22.setTransform(-324.25,323.7,0.9997,0.9997,-2.8943,0,0,32.5,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_22,p:{regX:32.5,regY:48.1,scaleX:0.9997,scaleY:0.9997,rotation:-2.8943,x:-324.25,y:323.7}},{t:this.ikNode_20,p:{regX:283.4,regY:305.1,rotation:-4.8432,x:-118.6,y:416.7}},{t:this.ikNode_18,p:{x:-141.3,y:434.75,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.4,x:-219.8,y:427.1,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-251.55,y:428.55,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-195.05,y:336.95}}]}).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48,scaleX:0.9996,scaleY:0.9996,rotation:-2.8935,x:-316.5,y:323.8}},{t:this.ikNode_20,p:{regX:283.3,regY:305.5,rotation:-4.894,x:-110.8,y:417.65}},{t:this.ikNode_18,p:{x:-133.2,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-211.75,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-243.45,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-186.8,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48,scaleX:0.9996,scaleY:0.9996,rotation:-2.8901,x:-308.25,y:323.75}},{t:this.ikNode_20,p:{regX:283.2,regY:305.7,rotation:-4.9178,x:-102.6,y:417.7}},{t:this.ikNode_18,p:{x:-124.95,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-203.5,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-235.2,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-178.55,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48,scaleX:0.9996,scaleY:0.9996,rotation:-2.8857,x:-300,y:323.75}},{t:this.ikNode_20,p:{regX:283.2,regY:305.1,rotation:-4.9428,x:-94.35,y:417.55}},{t:this.ikNode_18,p:{x:-116.7,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-195.25,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-226.95,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-170.3,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48,scaleX:0.9996,scaleY:0.9996,rotation:-2.8822,x:-291.75,y:323.75}},{t:this.ikNode_20,p:{regX:283.7,regY:305.3,rotation:-4.9666,x:-86.05,y:417.6}},{t:this.ikNode_18,p:{x:-108.5,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-187.05,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-218.75,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-162.1,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48,scaleX:0.9996,scaleY:0.9996,rotation:-2.8787,x:-283.55,y:323.7}},{t:this.ikNode_20,p:{regX:283.6,regY:305.4,rotation:-4.9905,x:-77.9,y:417.6}},{t:this.ikNode_18,p:{x:-100.25,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-178.8,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-210.5,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-153.85,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8751,x:-275.25,y:323.85}},{t:this.ikNode_20,p:{regX:283.4,regY:305.5,rotation:-5.0144,x:-69.6,y:417.65}},{t:this.ikNode_18,p:{x:-92,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-170.55,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-202.25,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-145.6,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8717,x:-267,y:323.85}},{t:this.ikNode_20,p:{regX:283.2,regY:305.6,rotation:-5.0382,x:-61.4,y:417.65}},{t:this.ikNode_18,p:{x:-83.8,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-162.35,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-194.05,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-137.4,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8682,x:-258.8,y:323.8}},{t:this.ikNode_20,p:{regX:283.1,regY:305.7,rotation:-5.061,x:-53.15,y:417.7}},{t:this.ikNode_18,p:{x:-75.55,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-154.1,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-185.8,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-129.15,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8647,x:-250.5,y:323.8}},{t:this.ikNode_20,p:{regX:283.2,regY:304.5,rotation:-5.087,x:-44.9,y:417.55}},{t:this.ikNode_18,p:{x:-67.3,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-145.85,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-177.55,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-120.9,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-242.25,y:323.8}},{t:this.ikNode_20,p:{regX:283.6,regY:305.3,rotation:-5.1098,x:-36.65,y:417.6}},{t:this.ikNode_18,p:{x:-59.05,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-137.6,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-169.3,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-112.7,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-231.25,y:323.8}},{t:this.ikNode_20,p:{regX:283,regY:305.2,rotation:-2.4927,x:-23.8,y:415.7}},{t:this.ikNode_18,p:{x:-48.05,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-126.6,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-158.3,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-101.65,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-220.25,y:323.75}},{t:this.ikNode_20,p:{regX:283.5,regY:305.2,rotation:0.0959,x:-10.9,y:413.85}},{t:this.ikNode_18,p:{x:-37,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-115.55,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-147.25,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-90.6,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-209.25,y:323.75}},{t:this.ikNode_20,p:{regX:283.4,regY:305.5,rotation:2.7206,x:1.9,y:411.95}},{t:this.ikNode_18,p:{x:-25.95,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-104.5,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-136.2,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-79.55,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-198.25,y:323.75}},{t:this.ikNode_20,p:{regX:283.2,regY:305.2,rotation:5.3517,x:14.6,y:409.95}},{t:this.ikNode_18,p:{x:-14.9,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-93.45,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-125.15,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-68.5,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-187.2,y:323.75}},{t:this.ikNode_20,p:{regX:283.5,regY:304.8,rotation:7.981,x:27.3,y:407.9}},{t:this.ikNode_18,p:{x:-3.85,y:434.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-82.4,y:427.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-114.1,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-57.5,y:336.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-175.45,y:324.05}},{t:this.ikNode_20,p:{regX:283.7,regY:304.9,rotation:7.6556,x:38.8,y:408.55}},{t:this.ikNode_18,p:{x:7.9,y:435.1,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-70.65,y:427.6,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-101.95,y:429.15,rotation:-0.7344,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-45.7,y:337.25}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-163.7,y:324.4}},{t:this.ikNode_20,p:{regX:283.2,regY:305.6,rotation:7.3286,x:50.3,y:409.2}},{t:this.ikNode_18,p:{x:19.65,y:435.45,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-58.9,y:427.95,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-89.85,y:429.7,rotation:-1.4707,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-33.95,y:337.6}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-151.95,y:324.7}},{t:this.ikNode_20,p:{regX:283.2,regY:304.9,rotation:7.0017,x:61.8,y:409.8}},{t:this.ikNode_18,p:{x:31.35,y:435.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-47.15,y:428.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-77.7,y:430.2,rotation:-2.2073,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-22.2,y:337.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-140.2,y:325}},{t:this.ikNode_20,p:{regX:283.4,regY:304.9,rotation:6.6762,x:73.3,y:410.4}},{t:this.ikNode_18,p:{x:43.1,y:436.1,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-35.4,y:428.6,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-65.6,y:430.8,rotation:-2.9442,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:-10.45,y:338.25}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-128.45,y:325.35}},{t:this.ikNode_20,p:{regX:283.5,regY:305.7,rotation:6.3389,x:84.8,y:411.05}},{t:this.ikNode_18,p:{x:54.85,y:436.45,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-23.65,y:428.95,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-53.4,y:431.3,rotation:-3.6808,scaleX:0.9999,scaleY:0.9999,regY:37.8}},{t:this.ikNode_13,p:{x:1.3,y:338.6}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-116.7,y:325.65}},{t:this.ikNode_20,p:{regX:282.9,regY:305.1,rotation:6.0134,x:96.25,y:411.6}},{t:this.ikNode_18,p:{x:66.6,y:436.8,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-11.9,y:429.3,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-41.3,y:431.85,rotation:-4.417,scaleX:0.9999,scaleY:0.9999,regY:37.8}},{t:this.ikNode_13,p:{x:13.05,y:338.95}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-104.95,y:326}},{t:this.ikNode_20,p:{regX:283.8,regY:305,rotation:5.6879,x:107.8,y:412.25}},{t:this.ikNode_18,p:{x:78.4,y:437.15,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:-0.1,y:429.65,rotation:0,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-29.15,y:432.4,rotation:-5.1541,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:24.8,y:339.3}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-97.85,y:325.75}},{t:this.ikNode_20,p:{regX:283.4,regY:304.9,rotation:5.2671,x:114.6,y:412.35}},{t:this.ikNode_18,p:{x:85.5,y:436.9,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:7.1,y:429.45,rotation:-0.1539,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-22.35,y:432,rotation:-4.6854,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:31.95,y:339.05}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-90.7,y:325.55}},{t:this.ikNode_20,p:{regX:283.1,regY:305.4,rotation:4.8462,x:121.4,y:412.5}},{t:this.ikNode_18,p:{x:92.6,y:436.7,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:14.45,y:429.2,rotation:-0.3104,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-15.4,y:431.7,rotation:-4.2162,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:39.05,y:338.85}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-83.6,y:325.35}},{t:this.ikNode_20,p:{regX:283.4,regY:305.2,rotation:4.4373,x:128.25,y:412.6}},{t:this.ikNode_18,p:{x:99.75,y:436.5,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:21.65,y:429.05,rotation:-0.466,scaleX:1,scaleY:1,regX:26.9}},{t:this.ikNode_14,p:{x:-8.55,y:431.35,rotation:-3.7474,scaleX:0.9999,scaleY:0.9999,regY:37.8}},{t:this.ikNode_13,p:{x:46.2,y:338.65}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-76.5,y:325.15}},{t:this.ikNode_20,p:{regX:283.8,regY:304.9,rotation:4.0165,x:135.1,y:412.65}},{t:this.ikNode_18,p:{x:106.85,y:436.3,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:28.85,y:428.95,rotation:-0.6225,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:-1.7,y:431.1,rotation:-3.2787,scaleX:1,scaleY:1,regY:37.9}},{t:this.ikNode_13,p:{x:53.3,y:338.45}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-69.35,y:324.95}},{t:this.ikNode_20,p:{regX:283.4,regY:304.9,rotation:3.5965,x:141.9,y:412.85}},{t:this.ikNode_18,p:{x:113.95,y:436.1,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:36.05,y:428.8,rotation:-0.7782,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:5.15,y:430.65,rotation:-2.8103,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:60.4,y:338.25}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-62.25,y:324.75}},{t:this.ikNode_20,p:{regX:283.2,regY:305.4,rotation:3.1765,x:148.7,y:413}},{t:this.ikNode_18,p:{x:121.1,y:435.85,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:43.35,y:428.6,rotation:-0.9347,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:12.1,y:430.3,rotation:-2.3411,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:67.55,y:338}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-55.1,y:324.5}},{t:this.ikNode_20,p:{regX:282.9,regY:305.3,rotation:2.7685,x:155.5,y:413.1}},{t:this.ikNode_18,p:{x:128.2,y:435.65,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:50.55,y:428.45,rotation:-1.0904,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:19,y:430.15,rotation:-1.8731,scaleX:1,scaleY:1,regY:37.9}},{t:this.ikNode_13,p:{x:74.65,y:337.8}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-48,y:324.3}},{t:this.ikNode_20,p:{regX:283.4,regY:305.2,rotation:2.349,x:162.35,y:413.2}},{t:this.ikNode_18,p:{x:135.3,y:435.45,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:57.8,y:428.25,rotation:-1.2469,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:25.8,y:429.8,rotation:-1.4043,scaleX:1,scaleY:1,regY:37.9}},{t:this.ikNode_13,p:{x:81.75,y:337.6}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-40.85,y:324.1}},{t:this.ikNode_20,p:{regX:283.1,regY:305.1,rotation:1.9291,x:169.15,y:413.25}},{t:this.ikNode_18,p:{x:142.45,y:435.25,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:65,y:428.1,rotation:-1.4034,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:32.65,y:429.3,rotation:-0.9355,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:88.9,y:337.4}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-33.75,y:323.9}},{t:this.ikNode_20,p:{regX:282.9,regY:305.1,rotation:1.5096,x:175.95,y:413.45}},{t:this.ikNode_18,p:{x:149.55,y:435.05,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:72.3,y:427.9,rotation:-1.5592,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:39.55,y:428.95,rotation:-0.4669,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:96,y:337.2}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-26.6,y:323.7}},{t:this.ikNode_20,p:{regX:284,regY:305,rotation:1.0902,x:182.85,y:413.55}},{t:this.ikNode_18,p:{x:156.7,y:434.85,rotation:0,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:79.55,y:427.7,rotation:-1.7157,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:46.45,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:103.1,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:-9.95,y:323.65}},{t:this.ikNode_20,p:{regX:284,regY:305,rotation:1.0902,x:199.5,y:413.55}},{t:this.ikNode_18,p:{x:173.9,y:434.45,rotation:1.5714,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:96.25,y:427.65,rotation:-1.7148,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:63.05,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:119.8,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:6.7,y:323.65}},{t:this.ikNode_20,p:{regX:284,regY:305,rotation:1.0902,x:216.15,y:413.55}},{t:this.ikNode_18,p:{x:191.1,y:434.1,rotation:3.1448,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:112.9,y:427.65,rotation:-1.714,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:79.7,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:136.4,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:23.35,y:323.6}},{t:this.ikNode_20,p:{regX:283.9,regY:305.1,rotation:1.0782,x:232.8,y:413.55}},{t:this.ikNode_18,p:{x:208.35,y:433.9,rotation:4.7188,scaleX:0.9999,scaleY:0.9999,regY:35.9,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:129.55,y:427.65,rotation:-1.714,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:96.35,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:153.1,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:39.9,y:323.6}},{t:this.ikNode_20,p:{regX:283.9,regY:305.1,rotation:1.0782,x:249.45,y:413.55}},{t:this.ikNode_18,p:{x:225.5,y:433.55,rotation:6.292,scaleX:0.9999,scaleY:0.9999,regY:35.9,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:146.2,y:427.65,rotation:-1.7131,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:113,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:169.75,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8611,x:56.6,y:323.6}},{t:this.ikNode_20,p:{regX:283.9,regY:305.2,rotation:1.0662,x:266.1,y:413.6}},{t:this.ikNode_18,p:{x:242.8,y:433.05,rotation:7.8666,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:162.85,y:427.65,rotation:-1.7131,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:129.7,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:186.45,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:61.25,y:323.55}},{t:this.ikNode_20,p:{regX:283.9,regY:305.2,rotation:1.0662,x:270.8,y:413.55}},{t:this.ikNode_18,p:{x:248.55,y:432.4,rotation:6.7348,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:167.5,y:427.6,rotation:-1.7122,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:134.35,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:191.1,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:65.95,y:323.55}},{t:this.ikNode_20,p:{regX:283.8,regY:305.2,rotation:1.0543,x:275.45,y:413.55}},{t:this.ikNode_18,p:{x:254.35,y:431.85,rotation:5.6047,scaleX:0.9999,scaleY:0.9999,regY:35.9,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:172.2,y:427.6,rotation:-1.7122,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:139.05,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:195.8,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:70.6,y:323.5}},{t:this.ikNode_20,p:{regX:283.8,regY:305.2,rotation:1.0543,x:280.1,y:413.55}},{t:this.ikNode_18,p:{x:260.15,y:431.05,rotation:4.4741,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:176.9,y:427.6,rotation:-1.7122,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:143.75,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:200.5,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:75.3,y:323.5}},{t:this.ikNode_20,p:{regX:283.8,regY:305.2,rotation:1.0423,x:284.8,y:413.5}},{t:this.ikNode_18,p:{x:265.75,y:430.4,rotation:3.3436,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.8}},{t:this.ikNode_16,p:{regY:26.5,x:181.6,y:427.6,rotation:-1.7122,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:148.4,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:205.15,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:79.95,y:323.5}},{t:this.ikNode_20,p:{regX:283.8,regY:305.2,rotation:1.0423,x:289.45,y:413.5}},{t:this.ikNode_18,p:{x:271.65,y:429.6,rotation:2.2126,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:186.3,y:427.6,rotation:-1.7122,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:153.1,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:209.85,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:84.6,y:323.5}},{t:this.ikNode_20,p:{regX:283.8,regY:305.2,rotation:1.0423,x:294.1,y:413.45}},{t:this.ikNode_18,p:{x:277.35,y:428.95,rotation:1.0825,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:190.95,y:427.55,rotation:-1.7122,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:157.8,y:428.65,rotation:0,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:214.55,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:94.85,y:323.5}},{t:this.ikNode_20,p:{regX:283.7,regY:304.6,rotation:1.0303,x:304.3,y:413.5}},{t:this.ikNode_18,p:{x:286.45,y:429.7,rotation:1.3317,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.4,x:201.15,y:427.45,rotation:-2.5513,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:168.85,y:429.1,rotation:2.8803,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:224.75,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:105.05,y:323.55}},{t:this.ikNode_20,p:{regX:283.7,regY:304.6,rotation:1.0303,x:314.5,y:413.55}},{t:this.ikNode_18,p:{x:295.5,y:430.5,rotation:1.5819,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:211.3,y:427.55,rotation:-3.3901,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:179.95,y:429.65,rotation:5.7636,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:234.95,y:337}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:115.25,y:323.55}},{t:this.ikNode_20,p:{regX:283.7,regY:304.6,rotation:1.0303,x:324.7,y:413.55}},{t:this.ikNode_18,p:{x:304.65,y:431.3,rotation:1.832,scaleX:0.9999,scaleY:0.9999,regY:35.9,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:221.45,y:427.5,rotation:-4.2296,scaleX:0.9999,scaleY:0.9999,regX:26.8}},{t:this.ikNode_14,p:{x:191.05,y:430.25,rotation:8.6447,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:245.15,y:337.05}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:125.45,y:323.6}},{t:this.ikNode_20,p:{regX:283.7,regY:304.6,rotation:1.0303,x:334.9,y:413.6}},{t:this.ikNode_18,p:{x:313.7,y:431.9,rotation:2.0823,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.6,x:231.75,y:427.65,rotation:-5.0682,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:202.15,y:430.9,rotation:11.5268,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:255.35,y:337.05}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:135.65,y:323.6}},{t:this.ikNode_20,p:{regX:283.7,regY:304.6,rotation:1.0303,x:345.1,y:413.6}},{t:this.ikNode_18,p:{x:322.7,y:432.6,rotation:2.3325,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:241.95,y:427.6,rotation:-5.908,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:213.2,y:431.2,rotation:14.4107,scaleX:1,scaleY:1,regY:37.8}},{t:this.ikNode_13,p:{x:265.55,y:337.05}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8603,x:145.9,y:323.65}},{t:this.ikNode_20,p:{regX:283.7,regY:304.6,rotation:1.0303,x:355.3,y:413.65}},{t:this.ikNode_18,p:{x:331.85,y:433.35,rotation:2.5828,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:252.05,y:427.5,rotation:-6.7464,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.3,y:431.85,rotation:17.2922,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8594,x:145.85,y:323.65}},{t:this.ikNode_20,p:{regX:283.5,regY:304.7,rotation:-1.0662,x:355.8,y:413.05}},{t:this.ikNode_18,p:{x:331.8,y:433.3,rotation:2.5819,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:252.05,y:427.5,rotation:-6.7463,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.3,y:431.85,rotation:17.2913,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8594,x:145.85,y:323.6}},{t:this.ikNode_20,p:{regX:283.4,regY:305.5,rotation:-3.2124,x:356.4,y:412.5}},{t:this.ikNode_18,p:{x:331.8,y:433.3,rotation:2.5819,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:252.05,y:427.5,rotation:-6.7463,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.3,y:431.85,rotation:17.2913,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8594,x:145.85,y:323.6}},{t:this.ikNode_20,p:{regX:283.2,regY:305.2,rotation:-5.3398,x:356.9,y:411.85}},{t:this.ikNode_18,p:{x:331.8,y:433.3,rotation:2.5819,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:252.05,y:427.45,rotation:-6.7463,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.25,y:431.85,rotation:17.2913,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8594,x:145.85,y:323.6}},{t:this.ikNode_20,p:{regX:283.4,regY:304.7,rotation:-7.4862,x:357.45,y:411.2}},{t:this.ikNode_18,p:{x:331.75,y:433.3,rotation:2.5819,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:252.05,y:427.45,rotation:-6.7454,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.25,y:431.85,rotation:17.2913,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8594,x:145.85,y:323.55}},{t:this.ikNode_20,p:{regX:283.2,regY:305.2,rotation:-9.6297,x:358,y:410.6}},{t:this.ikNode_18,p:{x:331.75,y:433.3,rotation:2.5819,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:252.05,y:427.45,rotation:-6.7454,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.25,y:431.85,rotation:17.2905,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8594,x:145.85,y:323.55}},{t:this.ikNode_20,p:{regX:283.5,regY:305.5,rotation:-11.7776,x:358.6,y:409.95}},{t:this.ikNode_18,p:{x:331.75,y:433.3,rotation:2.5819,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:252.05,y:427.45,rotation:-6.7454,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.2,y:431.8,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8585,x:145.8,y:323.55}},{t:this.ikNode_20,p:{regX:283.5,regY:305.5,rotation:-11.7776,x:358.6,y:409.95}},{t:this.ikNode_18,p:{x:333.1,y:432.55,rotation:0.7458,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:250.3,y:427,rotation:-7.1771,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.2,y:431.8,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8585,x:145.8,y:323.5}},{t:this.ikNode_20,p:{regX:283.6,regY:305.4,rotation:-11.7658,x:358.6,y:409.95}},{t:this.ikNode_18,p:{x:334.5,y:431.6,rotation:-1.086,scaleX:1,scaleY:1,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:248.45,y:426.4,rotation:-7.6091,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.2,y:431.85,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8585,x:145.8,y:323.5}},{t:this.ikNode_20,p:{regX:283.6,regY:305.4,rotation:-11.7634,x:358.6,y:409.9}},{t:this.ikNode_18,p:{x:335.75,y:430.75,rotation:-2.9216,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.8}},{t:this.ikNode_16,p:{regY:26.5,x:246.75,y:425.9,rotation:-8.0416,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.2,y:431.85,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8585,x:145.8,y:323.5}},{t:this.ikNode_20,p:{regX:283.6,regY:305.4,rotation:-11.7634,x:358.6,y:409.9}},{t:this.ikNode_18,p:{x:337.2,y:429.8,rotation:-4.7575,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:244.95,y:425.3,rotation:-8.4745,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.2,y:431.85,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8585,x:145.8,y:323.5}},{t:this.ikNode_20,p:{regX:283.6,regY:305.4,rotation:-11.7517,x:358.6,y:409.9}},{t:this.ikNode_18,p:{x:338.6,y:428.95,rotation:-6.5939,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:243.15,y:424.65,rotation:-8.9062,scaleX:0.9999,scaleY:0.9999,regX:26.8}},{t:this.ikNode_14,p:{x:224.2,y:431.85,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8585,x:145.8,y:323.5}},{t:this.ikNode_20,p:{regX:283.6,regY:305.4,rotation:-11.7517,x:358.6,y:409.9}},{t:this.ikNode_18,p:{x:338.6,y:428.95,rotation:-6.5939,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:244.25,y:424.95,rotation:-7.274,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.15,y:431.8,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8576,x:145.8,y:323.5}},{t:this.ikNode_20,p:{regX:283.6,regY:305.4,rotation:-11.7517,x:358.6,y:409.9}},{t:this.ikNode_18,p:{x:338.6,y:428.95,rotation:-6.5939,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.4,x:245.1,y:425.2,rotation:-5.6416,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.15,y:431.8,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8576,x:145.8,y:323.5}},{t:this.ikNode_20,p:{regX:283.7,regY:305.3,rotation:-11.7399,x:358.6,y:409.85}},{t:this.ikNode_18,p:{x:338.6,y:428.9,rotation:-6.5922,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:246.15,y:425.65,rotation:-4.0096,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.15,y:431.8,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8576,x:145.8,y:323.5}},{t:this.ikNode_20,p:{regX:283.7,regY:305.3,rotation:-11.7399,x:358.6,y:409.85}},{t:this.ikNode_18,p:{x:338.6,y:428.9,rotation:-6.5922,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:247,y:425.9,rotation:-2.3772,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.15,y:431.8,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8576,x:145.8,y:323.5}},{t:this.ikNode_20,p:{regX:283.7,regY:305.3,rotation:-11.7399,x:358.55,y:409.85}},{t:this.ikNode_18,p:{x:338.55,y:428.9,rotation:-6.5922,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:248,y:426.25,rotation:-0.7458,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.15,y:431.8,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).to({state:[{t:this.ikNode_22,p:{regX:32.4,regY:48.1,scaleX:0.9996,scaleY:0.9996,rotation:-2.8576,x:145.8,y:323.5}},{t:this.ikNode_20,p:{regX:283.8,regY:305.2,rotation:-11.7282,x:358.5,y:409.85}},{t:this.ikNode_18,p:{x:338.55,y:428.9,rotation:-6.5922,scaleX:0.9999,scaleY:0.9999,regY:35.8,regX:19.9}},{t:this.ikNode_16,p:{regY:26.5,x:249.05,y:426.4,rotation:0.8822,scaleX:0.9999,scaleY:0.9999,regX:26.9}},{t:this.ikNode_14,p:{x:224.1,y:431.8,rotation:17.2902,scaleX:0.9999,scaleY:0.9999,regY:37.9}},{t:this.ikNode_13,p:{x:275.8,y:337.1}}]},1).wait(1));

	// Каркас_5
	this.ikNode_2 = new lib.Символ5();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(40,160.2,1,1,0,0,0,38.1,21.1);

	this.ikNode_3 = new lib.крыло();
	this.ikNode_3.name = "ikNode_3";
	this.ikNode_3.setTransform(24.35,134.1,0.9999,0.9999,0,0,0,14.5,13.1);

	this.ikNode_5 = new lib.Символ1();
	this.ikNode_5.name = "ikNode_5";
	this.ikNode_5.setTransform(39.2,127.55,0.9998,0.9998,9.3995,0,0,14.2,18.9);

	this.ikNode_7 = new lib.ус();
	this.ikNode_7.name = "ikNode_7";
	this.ikNode_7.setTransform(57.55,136,0.9999,0.7657,0,0,0,0.4,23.8);

	this.ikNode_9 = new lib.Символ2();
	this.ikNode_9.name = "ikNode_9";
	this.ikNode_9.setTransform(53.3,132.55,0.9999,0.9999,0,0,0,14.2,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:0,x:53.3,y:132.55,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:0,x:57.55,y:136,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:9.3995,x:39.2,y:127.55,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:0,x:24.35,y:134.1,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:40,y:160.2}}]}).to({state:[{t:this.ikNode_9,p:{regY:14.2,rotation:1.9529,x:59.15,y:134.55,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:0.4008,x:63.15,y:137.7,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.7322,x:44.65,y:129.3,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:0.369,x:30.15,y:135.85,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:45.7,y:162}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:3.9081,x:65.05,y:136.25,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:0.8061,x:68.85,y:139.5,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:6.0672,x:50.15,y:131.25,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:0.7398,x:36.1,y:137.6,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:51.45,y:163.85}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:5.8633,x:70.95,y:138.2,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:1.2104,x:74.5,y:141.3,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.4013,x:55.7,y:133.05,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:1.1106,x:42,y:139.3,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:57.2,y:165.65}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:7.8177,x:76.9,y:140.15,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:1.6147,x:80.3,y:143.1,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.7364,x:61.25,y:134.85,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:1.4814,x:47.9,y:141.05,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:62.95,y:167.5}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:9.7724,x:82.8,y:142.05,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:2.0191,x:85.9,y:144.85,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.0722,x:66.7,y:136.7,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:1.8514,x:53.8,y:142.8,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:68.7,y:169.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:11.7278,x:88.75,y:144,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:2.4236,x:91.6,y:146.65,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.5877,x:72.25,y:138.55,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:2.2224,x:59.7,y:144.5,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:74.45,y:171.15}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:13.6829,x:94.65,y:145.9,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:2.8271,x:97.3,y:148.45,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.2542,x:77.7,y:140.55,regY:19,regX:14.2}},{t:this.ikNode_3,p:{rotation:2.5935,x:65.6,y:146.3,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:80.2,y:173}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.2,rotation:15.637,x:100.5,y:148,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:3.2319,x:102.95,y:150.2,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9199,x:83.15,y:142.35,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:2.9638,x:71.5,y:148.05,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:85.95,y:174.8}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:17.5918,x:106.6,y:149.8,scaleX:0.9998,scaleY:0.9998,regX:14.3}},{t:this.ikNode_7,p:{rotation:3.6368,x:108.65,y:152.1,regY:23.9,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-5.5847,x:88.8,y:144.15,regY:18.9,regX:14.3}},{t:this.ikNode_3,p:{rotation:3.3351,x:77.4,y:149.85,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:91.65,y:176.65}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:19.5474,x:112.5,y:151.8,scaleX:0.9999,scaleY:0.9999,regX:14.3}},{t:this.ikNode_7,p:{rotation:4.0419,x:114.4,y:153.9,regY:23.9,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-7.2498,x:94.35,y:146,regY:18.9,regX:14.3}},{t:this.ikNode_3,p:{rotation:3.7057,x:83.3,y:151.55,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:97.4,y:178.45}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:21.5018,x:118.3,y:153.6,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:4.4461,x:120.05,y:155.6,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-8.9138,x:99.75,y:147.9,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:4.0764,x:89.1,y:153.25,scaleX:0.9999,scaleY:0.9999,regX:14.4,regY:13.1}},{t:this.ikNode_2,p:{x:103.15,y:180.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:23.4562,x:124.2,y:155.55,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:4.8504,x:125.7,y:157.4,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-10.5803,x:105.2,y:149.7,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:4.4473,x:95.15,y:154.9,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13}},{t:this.ikNode_2,p:{x:108.9,y:182.15}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:25.4118,x:130.1,y:157.55,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:5.2551,x:131.4,y:159.15,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-12.246,x:110.7,y:151.55,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:4.8184,x:101.1,y:156.8,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:114.65,y:183.95}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:27.3667,x:136,y:159.45,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:5.6589,x:137.15,y:161.05,regY:23.9,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-13.9107,x:116.3,y:153.55,regY:19,regX:14.2}},{t:this.ikNode_3,p:{rotation:5.1888,x:106.95,y:158.55,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:120.4,y:185.8}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.2,rotation:29.3218,x:141.95,y:161.45,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:6.064,x:142.8,y:162.75,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-15.5763,x:121.7,y:155.3,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:5.5595,x:112.9,y:160.35,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:126.15,y:187.6}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:31.2758,x:147.95,y:163.3,scaleX:0.9998,scaleY:0.9998,regX:14.3}},{t:this.ikNode_7,p:{rotation:6.4673,x:148.45,y:164.5,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-17.2402,x:127.25,y:157.2,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:5.9303,x:118.75,y:162.1,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:131.9,y:189.45}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:33.231,x:153.8,y:165.3,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:6.8731,x:154.15,y:166.3,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-18.9056,x:132.85,y:158.95,regY:18.9,regX:14.3}},{t:this.ikNode_3,p:{rotation:6.3023,x:124.55,y:163.85,scaleX:0.9998,scaleY:0.9998,regX:14.4,regY:13.1}},{t:this.ikNode_2,p:{x:137.65,y:191.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:31.8835,x:173.8,y:163.9,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:8.9852,x:174.55,y:165.3,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-17.9391,x:152.8,y:157.85,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:6.2654,x:144.4,y:162.7,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:157.7,y:190}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:30.535,x:193.85,y:162.65,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:11.0992,x:194.95,y:164.3,regY:23.9,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-16.9719,x:172.95,y:156.5,regY:18.9,regX:14.3}},{t:this.ikNode_3,p:{rotation:6.2302,x:164.25,y:161.5,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13}},{t:this.ikNode_2,p:{x:177.8,y:188.75}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:29.1883,x:213.9,y:161.4,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:13.2112,x:215.45,y:163.2,regY:23.8,scaleX:0.9998,regX:0.5}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.0051,x:192.85,y:155.25,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:6.1941,x:184.05,y:160.4,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13}},{t:this.ikNode_2,p:{x:197.85,y:187.5}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:27.8408,x:233.95,y:160.15,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:15.3246,x:235.85,y:162.3,regY:23.8,scaleX:0.9999,regX:0.5}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-15.0376,x:212.95,y:154,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:6.1581,x:203.8,y:159.4,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:217.95,y:186.25}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:26.4931,x:254,y:158.9,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:17.4376,x:256.25,y:161.25,regY:23.8,scaleX:0.9998,regX:0.5}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.071,x:233,y:152.85,regY:19,regX:14.2}},{t:this.ikNode_3,p:{rotation:6.1228,x:223.5,y:158.25,scaleX:0.9998,scaleY:0.9998,regX:14.4,regY:13.1}},{t:this.ikNode_2,p:{x:238,y:185}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:25.1458,x:274.05,y:157.65,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:19.5504,x:276.5,y:160.2,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-13.104,x:253.05,y:151.5,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:6.0877,x:243.3,y:157.15,scaleX:0.9998,scaleY:0.9998,regX:14.4,regY:13.1}},{t:this.ikNode_2,p:{x:258.1,y:183.75}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:23.7977,x:294.1,y:156.45,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:21.6636,x:296.8,y:159.25,regY:23.9,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-12.137,x:273.2,y:150.15,regY:18.9,regX:14.3}},{t:this.ikNode_3,p:{rotation:6.0507,x:263.1,y:156,scaleX:0.9999,scaleY:0.9999,regX:14.4,regY:13.1}},{t:this.ikNode_2,p:{x:278.15,y:182.5}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.2,rotation:22.4496,x:314.1,y:155.15,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:23.7754,x:317.2,y:158.15,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-11.1707,x:293.15,y:149,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:6.0147,x:283.05,y:154.95,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:298.25,y:181.25}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:21.1029,x:334.2,y:153.8,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:25.889,x:337.6,y:157.15,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-10.2032,x:313.2,y:147.7,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:5.9787,x:302.8,y:153.85,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:318.35,y:180}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:19.7546,x:354.25,y:152.55,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:28.0016,x:358,y:156.15,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-9.2363,x:333.3,y:146.4,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:5.9435,x:322.6,y:152.75,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:338.4,y:178.75}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.2,rotation:18.4073,x:374.2,y:151.4,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:30.1142,x:378.35,y:155.2,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-8.269,x:353.3,y:145.15,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:5.9084,x:342.4,y:151.65,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:358.5,y:177.5}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.2,rotation:17.0595,x:394.3,y:150.15,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:32.2281,x:398.75,y:154.2,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-7.3034,x:373.35,y:143.9,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:5.8714,x:362.1,y:150.5,scaleX:0.9999,scaleY:0.9999,regX:14.4,regY:13.1}},{t:this.ikNode_2,p:{x:378.55,y:176.25}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:15.7117,x:414.4,y:148.8,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:34.3409,x:419.1,y:153.3,regY:23.9,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-6.3363,x:393.4,y:142.75,regY:19,regX:14.2}},{t:this.ikNode_3,p:{rotation:5.8354,x:381.9,y:149.4,scaleX:0.9999,scaleY:0.9999,regX:14.4,regY:13.1}},{t:this.ikNode_2,p:{x:398.65,y:175}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:14.3643,x:434.4,y:147.5,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:36.4536,x:439.4,y:152.3,regY:23.9,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-5.3694,x:413.45,y:141.4,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:5.8002,x:401.85,y:148.35,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:418.7,y:173.75}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:13.017,x:454.45,y:146.3,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:38.5669,x:459.75,y:151.2,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-4.4021,x:433.5,y:140.1,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:5.7642,x:421.65,y:147.25,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:438.8,y:172.5}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:11.6688,x:474.5,y:145,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:40.6796,x:480.1,y:150.2,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.4353,x:453.55,y:138.85,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:5.7282,x:441.5,y:146.2,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:458.9,y:171.25}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.2,rotation:12.2643,x:479.8,y:147.1,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:38.5312,x:485.2,y:152.1,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.4713,x:458.95,y:140.75,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:7.2313,x:446.8,y:147.85,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:463.95,y:173.1}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:12.86,x:485.2,y:149.05,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:36.3826,x:490.25,y:153.95,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.5071,x:464.25,y:142.55,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:8.7359,x:452.1,y:149.65,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:469.05,y:175}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:13.4562,x:490.5,y:151.05,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:34.2332,x:495.35,y:155.8,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.5431,x:469.7,y:144.35,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:10.2405,x:457.3,y:151.4,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:474.15,y:176.85}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:14.0513,x:495.85,y:153.15,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:32.0839,x:500.4,y:157.75,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.579,x:475.1,y:146.2,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:11.7441,x:462.65,y:153.1,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:479.2,y:178.75}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:14.6462,x:501.3,y:155.2,scaleX:0.9998,scaleY:0.9998,regX:14.3}},{t:this.ikNode_7,p:{rotation:29.9362,x:505.5,y:159.6,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.6149,x:480.5,y:148.05,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:13.2479,x:467.95,y:154.8,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:484.3,y:180.6}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:15.2424,x:506.5,y:157.25,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:27.7871,x:510.5,y:161.5,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.6508,x:485.85,y:150,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:14.752,x:473.2,y:156.6,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:489.4,y:182.5}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:15.8379,x:511.8,y:159.2,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:25.6387,x:515.6,y:163.35,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.6859,x:491.2,y:151.8,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:16.2566,x:478.55,y:158.3,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:494.45,y:184.35}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:16.4332,x:517.1,y:161.25,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:23.4901,x:520.7,y:165.2,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.7218,x:496.7,y:153.7,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:17.7608,x:483.8,y:160.05,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:499.55,y:186.25}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:17.0293,x:522.45,y:163.4,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:21.3407,x:525.7,y:167.05,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.7578,x:502.05,y:155.55,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:19.2651,x:489.15,y:161.75,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13}},{t:this.ikNode_2,p:{x:504.65,y:188.15}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:17.6247,x:527.9,y:165.45,scaleX:0.9999,scaleY:0.9999,regX:14.3}},{t:this.ikNode_7,p:{rotation:19.1925,x:530.8,y:168.9,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.7937,x:507.45,y:157.4,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:20.768,x:494.3,y:163.55,scaleX:0.9998,scaleY:0.9998,regX:14.4,regY:13.1}},{t:this.ikNode_2,p:{x:509.7,y:190}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:18.2204,x:533.1,y:167.45,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:17.0429,x:535.9,y:170.8,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.8296,x:512.75,y:159.25,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:22.2731,x:499.75,y:165.35,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:514.8,y:191.9}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:18.816,x:538.4,y:169.55,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:14.8953,x:540.95,y:172.65,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.8656,x:518.2,y:161.2,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:23.7769,x:505,y:167.1,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:519.9,y:193.75}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:19.4119,x:543.7,y:171.6,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:12.7459,x:546.2,y:174.5,regY:23.8,scaleX:0.9999,regX:0.5}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9016,x:523.6,y:163.05,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:25.2815,x:510.3,y:168.9,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:524.95,y:195.65}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:20.0074,x:549.15,y:173.65,scaleX:0.9999,scaleY:0.9999,regX:14.3}},{t:this.ikNode_7,p:{rotation:10.5969,x:551.1,y:176.35,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.9374,x:529,y:164.9,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:26.7852,x:515.65,y:170.65,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:530.05,y:197.5}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:20.603,x:554.35,y:175.7,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:8.4481,x:556.15,y:178.3,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9725,x:534.35,y:166.8,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:28.2887,x:520.9,y:172.35,scaleX:0.9998,scaleY:0.9998,regX:14.4,regY:13.1}},{t:this.ikNode_2,p:{x:535.15,y:199.4}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:21.1983,x:559.65,y:177.75,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:6.2995,x:561.25,y:180.15,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-4.0084,x:539.7,y:168.65,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:29.7929,x:526.25,y:174.1,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:540.25,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.2,rotation:21.3028,x:565.05,y:177.7,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:6.0514,x:566.65,y:179.85,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-4.8609,x:544.95,y:168.8,regY:19,regX:14.2}},{t:this.ikNode_3,p:{rotation:27.2396,x:531.5,y:174.35,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:545.9,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.2,rotation:21.4068,x:570.4,y:177.4,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:5.8035,x:572,y:179.65,regY:23.9,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-5.7129,x:550.2,y:168.7,regY:18.9,regX:14.3}},{t:this.ikNode_3,p:{rotation:24.6881,x:536.75,y:174.6,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:551.6,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:21.5101,x:575.9,y:177.05,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:5.5556,x:577.35,y:179.35,regY:23.9,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-6.5661,x:555.2,y:168.7,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:22.1351,x:542.05,y:174.8,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:557.3,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:21.6145,x:581.3,y:176.9,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:5.3078,x:582.7,y:179,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-7.4181,x:560.5,y:168.75,regY:18.9,regX:14.3}},{t:this.ikNode_3,p:{rotation:19.5831,x:547.3,y:175,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:562.95,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:21.7189,x:586.75,y:176.75,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:5.0591,x:588.1,y:178.7,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-8.271,x:565.6,y:168.8,regY:18.9,regX:14.3}},{t:this.ikNode_3,p:{rotation:17.0307,x:552.55,y:175.25,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:568.65,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:21.8225,x:592.15,y:176.5,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:4.8115,x:593.4,y:178.45,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-9.1236,x:570.6,y:168.85,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:14.4774,x:557.9,y:175.5,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:574.35,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:21.9261,x:597.55,y:176.3,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:4.5629,x:598.75,y:178.15,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-9.9767,x:575.9,y:168.85,regY:18.9,regX:14.3}},{t:this.ikNode_3,p:{rotation:11.9254,x:563.15,y:175.75,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:580.05,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:22.0317,x:602.9,y:176.1,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:4.3156,x:604.15,y:177.85,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-10.8287,x:580.95,y:169,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:9.3726,x:568.45,y:175.9,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13}},{t:this.ikNode_2,p:{x:585.7,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:22.134,x:608.35,y:175.9,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:4.0672,x:609.45,y:177.7,regY:23.9,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9998,scaleY:0.9998,rotation:-11.6826,x:586.05,y:169.05,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:6.8199,x:573.7,y:176.3,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:591.4,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:22.2375,x:613.75,y:175.7,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:3.8187,x:614.8,y:177.4,regY:23.9,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-12.5342,x:591.2,y:169.2,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:4.2684,x:579,y:176.6,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:597.1,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:22.3418,x:619.2,y:175.55,scaleX:0.9998,scaleY:0.9998,regX:14.3}},{t:this.ikNode_7,p:{rotation:3.5716,x:620.1,y:177.1,regY:23.8,scaleX:0.9998,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-13.387,x:596.3,y:169.25,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:1.715,x:584.3,y:176.9,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:602.75,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.2,rotation:22.4457,x:624.5,y:175.45,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:3.3222,x:625.45,y:176.85,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.2405,x:601.5,y:169.35,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:-0.8333,x:589.6,y:177.15,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:608.45,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:22.5488,x:629.95,y:175.15,scaleX:0.9999,scaleY:0.9999,regX:14.2}},{t:this.ikNode_7,p:{rotation:3.0741,x:630.75,y:176.55,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-15.0932,x:606.6,y:169.45,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:-3.3859,x:594.75,y:177.45,scaleX:0.9998,scaleY:0.9998,regX:14.4,regY:13.1}},{t:this.ikNode_2,p:{x:614.15,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:22.6531,x:635.3,y:174.95,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:2.8271,x:636.1,y:176.35,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-15.9461,x:611.8,y:169.55,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:-5.9399,x:600.2,y:177.75,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:619.85,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:22.7573,x:640.7,y:174.8,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:2.5779,x:641.45,y:176.05,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-16.7978,x:616.95,y:169.9,regY:19,regX:14.2}},{t:this.ikNode_3,p:{rotation:-8.4909,x:605.55,y:178.05,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:625.5,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:22.8608,x:646.1,y:174.6,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:2.3299,x:646.75,y:175.9,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-17.6498,x:622.2,y:169.85,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:-11.0438,x:610.85,y:178.3,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:631.2,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:22.9651,x:651.45,y:174.55,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:2.082,x:652.05,y:175.6,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-18.503,x:627.25,y:170,regY:18.9,regX:14.2}},{t:this.ikNode_3,p:{rotation:-13.5958,x:616.2,y:178.7,scaleX:0.9999,scaleY:0.9999,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:636.9,y:201.3}}]},1).to({state:[{t:this.ikNode_9,p:{regY:14.1,rotation:23.0688,x:656.9,y:174.25,scaleX:0.9998,scaleY:0.9998,regX:14.2}},{t:this.ikNode_7,p:{rotation:1.8341,x:657.35,y:175.45,regY:23.8,scaleX:0.9999,regX:0.4}},{t:this.ikNode_5,p:{scaleX:0.9997,scaleY:0.9997,rotation:-19.3559,x:632.55,y:170.15,regY:18.9,regX:14.3}},{t:this.ikNode_3,p:{rotation:-16.1484,x:621.55,y:179,scaleX:0.9998,scaleY:0.9998,regX:14.5,regY:13.1}},{t:this.ikNode_2,p:{x:642.6,y:201.3}}]},1).wait(1));

	// Слой_1
	this.instance = new lib._1616984647_19pfonpolyanka20();
	this.instance.setTransform(-61,-2,0.2411,0.2411);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-59.1,238,733.1,248.3);
// library properties:
lib.properties = {
	id: '3EFF15C3810D744F8D66A13D8FCCC3F9',
	width: 600,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_1616984647_19pfonpolyanka20.jpg", id:"_1616984647_19pfonpolyanka20"},
		{src:"images/нога1.png", id:"нога1"},
		{src:"images/овца_.png", id:"овца"},
		{src:"images/хвост_.png", id:"хвост"},
		{src:"images/anim6_atlas_1.png", id:"anim6_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3EFF15C3810D744F8D66A13D8FCCC3F9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;