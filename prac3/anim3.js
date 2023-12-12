(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"anim3_atlas_1", frames: [[1547,902,343,800],[0,1338,964,442],[745,902,800,395],[745,0,900,900],[966,1299,460,483],[0,0,743,1336]]}
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



(lib.барби1 = function() {
	this.initialize(ss["anim3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.машина = function() {
	this.initialize(ss["anim3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.content_6rosedom = function() {
	this.initialize(ss["anim3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pngimgcomcar_wheel_PNG23307 = function() {
	this.initialize(ss["anim3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom3ввв = function() {
	this.initialize(ss["anim3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom4 = function() {
	this.initialize(ss["anim3_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.колесо = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pngimgcomcar_wheel_PNG23307();
	this.instance.setTransform(0,0,0.1056,0.1056);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({rotation:14.9944,x:13.95,y:-10.65},0).wait(3).to({rotation:29.9894,x:30.15,y:-17.3},0).wait(3).to({scaleX:0.1055,scaleY:0.1055,rotation:44.9883,x:47.55,y:-19.55},0).wait(3).to({rotation:59.991,x:64.95,y:-17.25},0).wait(3).to({rotation:74.9912,x:81.2,y:-10.55},0).wait(3).to({scaleX:0.1053,scaleY:0.1053,rotation:0,x:0,y:1},0).wait(2).to({rotation:-14.9988,x:-10.65,y:15.15},0).wait(3).to({rotation:-30.0013,x:-17.15,y:31.4},0).wait(3).to({rotation:-45,x:-19.2,y:48.75},0).wait(3).to({rotation:-59.9998,x:-16.7,y:66.05},0).wait(3).to({scaleX:0.1054,scaleY:0.1054,rotation:-74.9996,x:-9.8,y:82.1},0).wait(3).to({rotation:-90,x:1,y:95.85},0).wait(3).to({rotation:-105.0062,x:14.6,y:106.5},0).wait(3).to({rotation:-120.0104,x:30.95,y:113.05},0).wait(3).to({rotation:-135.0117,x:48.45,y:115.15},0).wait(3).to({rotation:-150.0092,x:65.85,y:112.65},0).wait(3).to({rotation:-165.0082,x:82.05,y:105.75},0).wait(3).to({rotation:-180.0083,x:95.9,y:94.9},0).wait(3).to({rotation:-195.0137,x:106.1,y:81},0).wait(3).to({scaleX:0.1055,scaleY:0.1055,rotation:-210.0153,x:112.7,y:64.75},0).wait(3).to({rotation:-225.0176,x:114.9,y:47.35},0).wait(3).to({rotation:-240.0156,x:112.5,y:30},0).wait(3).to({rotation:-255.0131,x:105.7,y:13.85},0).wait(3).to({rotation:-270.0083,x:94.95,y:0},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-19.7,135.1,135.5);


(lib.Крыло_левое = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pngwingcom4();
	this.instance.setTransform(26.25,11.05,0.2165,0.236,-0.5223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:0.2138,rotation:3.4693,x:38.35,y:5.75},0).wait(7).to({scaleX:0.2084,rotation:4.7172,x:43.85,y:4.4},0).wait(7).to({scaleX:0.2003,rotation:8.6791,x:58.25,y:0.8},0).wait(8).to({scaleX:0.1761,rotation:8.6566,x:67.15,y:2.15},0).wait(6).to({scaleX:0.1716,scaleY:0.2301,rotation:8.6546,x:68.15,y:6.3},0).wait(2).to({scaleX:0.1895,scaleY:0.236,rotation:6.8962,x:57.05,y:2.85},0).wait(8).to({scaleX:0.1976,rotation:3.8929,x:45.4,y:5.6},0).wait(7).to({scaleX:0.2138,rotation:2.9723,x:36.85,y:6.2},0).wait(6).to({scaleX:0.2137,rotation:-0.7298,x:26.55,y:11.15},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.7,0.8,194.70000000000002,334.2);


(lib.фея = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// барби1
	this.instance = new lib.барби1();
	this.instance.setTransform(95.45,70.9,0.3708,0.3708,-6.4571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Крыло_левое
	this.instance_1 = new lib.Крыло_левое();
	this.instance_1.setTransform(224.2,168.85,1,1,0,0,180,108.1,168);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Крыло_левое
	this.instance_2 = new lib.Крыло_левое();
	this.instance_2.setTransform(96.8,185.35,1,1,0,0,0,108.1,168);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.фея, new cjs.Rectangle(15,10.5,291.1,355.2), null);


(lib.едет = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pngwingcom3ввв();
	this.instance.setTransform(287.15,58.1,0.1509,0.1509,3.2412);

	this.instance_1 = new lib.колесо();
	this.instance_1.setTransform(422.25,204.5,1,1,0,0,0,47.5,47.5);

	this.instance_2 = new lib.колесо();
	this.instance_2.setTransform(105.5,204.5,1,1,0,0,0,47.5,47.5);

	this.instance_3 = new lib.машина();
	this.instance_3.setTransform(0,0,0.593,0.593);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.едет, new cjs.Rectangle(0,0,571.7,262.1), null);


// stage content:
(lib.prac3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.фея();
	this.instance.setTransform(1499.7,325.1,0.382,0.382,0,-30.0009,149.9991,160.5,188.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:160.6,scaleX:0.4356,scaleY:0.4356,skewX:-14.9992,skewY:165.0008,x:1241.7,y:269.95},11).to({regX:160.2,regY:188.5,x:1113.9,y:330.5},13).to({regX:160.7,regY:188.1,skewX:-14.9983,skewY:165.0017,x:987.85,y:266.2},12).to({regX:160.6,regY:188,x:853.9,y:339},11).to({regX:160.3,regY:188.2,scaleX:0.4355,scaleY:0.4355,skewX:-14.9974,skewY:165.0026,x:788.45,y:311.45},12).to({skewX:-29.9974,skewY:150.0026,x:650.7,y:427.65},7).to({regX:160.5,skewX:-29.9966,skewY:150.0034,x:465.6,y:323.35},9).to({regX:160.4,regY:188.3,skewX:-14.995,skewY:165.005,x:197.8,y:310.7},12).to({regX:160.1,regY:188.6,x:-79.95,y:358.95},17).wait(1));

	// принцессса
	this.instance_1 = new lib.едет();
	this.instance_1.setTransform(1602.8,589,1,1,0,0,0,285.8,131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:136.4,x:1574.75,y:589.1},0).wait(1).to({x:1546.7,y:583.9},0).wait(1).to({x:1518.7,y:578.7},0).wait(1).to({x:1490.65,y:573.5},0).wait(1).to({x:1462.65,y:568.3},0).wait(1).to({x:1434.6,y:563.1},0).wait(1).to({x:1406.6,y:557.9},0).wait(1).to({x:1388.2},0).wait(1).to({x:1369.8},0).wait(1).to({x:1351.4},0).wait(1).to({x:1333},0).wait(1).to({x:1314.6},0).wait(1).to({x:1296.2},0).wait(1).to({x:1277.8},0).wait(1).to({x:1259.4},0).wait(1).to({x:1241},0).wait(1).to({x:1222.65},0).wait(1).to({x:1208.6},0).wait(1).to({x:1194.55},0).wait(1).to({x:1180.5},0).wait(1).to({x:1166.45},0).wait(1).to({x:1152.4},0).wait(1).to({x:1138.35},0).wait(1).to({x:1124.3},0).wait(1).to({x:1110.25},0).wait(1).to({x:1096.2},0).wait(1).to({x:1082.15},0).wait(1).to({x:1068.1},0).wait(1).to({x:1052.85},0).wait(1).to({x:1037.65},0).wait(1).to({x:1022.45},0).wait(1).to({x:1007.25},0).wait(1).to({x:992.05},0).wait(1).to({x:976.8},0).wait(1).to({x:961.6},0).wait(1).to({x:946.4},0).wait(1).to({x:931.2},0).wait(1).to({x:916},0).wait(1).to({x:902.6},0).wait(1).to({x:889.2},0).wait(1).to({x:875.85},0).wait(1).to({x:862.45},0).wait(1).to({x:849.1},0).wait(1).to({x:835.7},0).wait(1).to({x:822.35},0).wait(1).to({x:808.95},0).wait(1).to({x:795.6},0).wait(1).to({x:782.2},0).wait(1).to({x:768.85},0).wait(1).to({x:751.05},0).wait(1).to({x:733.25},0).wait(1).to({x:715.5},0).wait(1).to({x:697.7},0).wait(1).to({x:679.9},0).wait(1).to({x:662.15},0).wait(1).to({x:644.35},0).wait(1).to({x:626.6},0).wait(1).to({x:596.5,y:561.95},0).wait(1).to({x:566.45,y:566.05},0).wait(1).to({x:536.35,y:570.15},0).wait(1).to({x:506.3,y:574.25},0).wait(1).to({x:476.25,y:578.35},0).wait(1).to({x:446.15,y:582.45},0).wait(1).to({x:414.1,y:584.8},0).wait(1).to({x:382,y:587.15},0).wait(1).to({x:349.95,y:589.55},0).wait(1).to({x:317.85,y:591.9},0).wait(1).to({x:285.8,y:594.3},0).wait(1).to({x:270.9},0).wait(1).to({x:255.95},0).wait(1).to({x:241},0).wait(1).to({x:226.05},0).wait(1).to({x:211.1},0).wait(1).to({x:196.15},0).wait(1).to({x:181.2},0).wait(1).to({x:166.25},0).wait(1).to({x:151.3},0).wait(1).to({x:136.35},0).wait(1).to({x:121.4},0).wait(1).to({x:112.3},0).wait(1).to({x:103.15},0).wait(1).to({x:94},0).wait(1).to({x:84.85},0).wait(1).to({x:75.7},0).wait(1).to({x:66.6},0).wait(1).to({x:57.45},0).wait(1).to({x:48.3},0).wait(1).to({x:39.15},0).wait(1).to({x:30},0).wait(1).to({x:20.85},0).wait(1).to({x:-12.4},0).wait(1).to({x:-45.7},0).wait(1).to({x:-79},0).wait(1).to({x:-112.3},0).wait(1).to({x:-145.55},0).wait(1).to({x:-178.85},0).wait(1).to({x:-212.15},0).wait(1).to({x:-245.45},0).wait(1).to({x:-278.75},0).wait(1).to({x:-312},0).wait(1).to({x:-345.3},0).wait(1).to({x:-378.6},0).wait(1).to({x:-411.9},0).wait(1).to({x:-445.2},0).wait(1));

	// фея
	this.instance_2 = new lib.фея();
	this.instance_2.setTransform(-139.55,286.75,0.6519,0.6519,14.9972,0,0,153,175.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:160.5,regY:183.7,rotation:14.5693,x:-126.35,y:287.65},0).wait(1).to({rotation:14.1396,x:-116.6,y:282.4},0).wait(1).to({rotation:13.71,x:-106.85,y:277.2},0).wait(1).to({rotation:13.2804,x:-97,y:272},0).wait(1).to({rotation:12.8507,x:-87.3,y:266.7},0).wait(1).to({rotation:12.4211,x:-77.45,y:261.5},0).wait(1).to({rotation:11.9915,x:-67.75,y:256.3},0).wait(1).to({rotation:11.5619,x:-57.95,y:251},0).wait(1).to({rotation:11.1322,x:-48.15,y:245.8},0).wait(1).to({rotation:10.7026,x:-38.4,y:240.55},0).wait(1).to({rotation:10.273,x:-28.6,y:235.3},0).wait(1).to({rotation:9.8433,x:-18.8,y:230.1},0).wait(1).to({rotation:9.4137,x:-9.1,y:224.8},0).wait(1).to({rotation:8.9841,x:0.7,y:219.6},0).wait(1).to({rotation:8.5544,x:10.45,y:214.3},0).wait(1).to({rotation:8.1248,x:20.3,y:209.1},0).wait(1).to({rotation:7.6952,x:30,y:203.9},0).wait(1).to({rotation:7.2655,x:39.8,y:198.65},0).wait(1).to({rotation:6.8359,x:49.6,y:193.35},0).wait(1).to({rotation:6.4063,x:59.35,y:188.1},0).wait(1).to({rotation:5.9766,x:71.75,y:191.25},0).wait(1).to({rotation:5.547,x:84.2,y:194.35},0).wait(1).to({rotation:5.1174,x:96.55,y:197.45},0).wait(1).to({rotation:4.6878,x:109,y:200.6},0).wait(1).to({rotation:4.2581,x:121.4,y:203.65},0).wait(1).to({rotation:3.8285,x:133.85,y:206.85},0).wait(1).to({rotation:3.3989,x:146.25,y:209.95},0).wait(1).to({rotation:2.9692,x:158.7,y:213.05},0).wait(1).to({rotation:2.5396,x:171.1,y:216.2},0).wait(1).to({rotation:2.11,x:183.5,y:219.25},0).wait(1).to({rotation:1.6803,x:195.95,y:222.35},0).wait(1).to({rotation:1.2507,x:208.35,y:225.5},0).wait(1).to({rotation:0.8211,x:220.8,y:228.6},0).wait(1).to({rotation:0.3914,x:233.25,y:231.7},0).wait(1).to({rotation:-0.0382,x:245.65,y:234.85},0).wait(1).to({rotation:-0.4678,x:258.1,y:237.95},0).wait(1).to({rotation:-0.8974,x:270.45,y:241.05},0).wait(1).to({rotation:-1.3271,x:282.85,y:244.15},0).wait(1).to({rotation:-1.7567,x:295.3,y:247.3},0).wait(1).to({rotation:-2.1863,x:307.7,y:250.35},0).wait(1).to({rotation:-1.304,x:322.2,y:244.3},0).wait(1).to({rotation:-0.4216,x:336.75,y:238.3},0).wait(1).to({rotation:0.4607,x:351.25,y:232.25},0).wait(1).to({rotation:1.3431,x:365.7,y:226.15},0).wait(1).to({rotation:2.2255,x:380.2,y:220.1},0).wait(1).to({rotation:3.1078,x:394.7,y:214.05},0).wait(1).to({rotation:3.9902,x:409.15,y:208},0).wait(1).to({rotation:4.8725,x:423.65,y:201.9},0).wait(1).to({rotation:5.7549,x:438.15,y:195.9},0).wait(1).to({rotation:6.6373,x:452.65,y:189.8},0).wait(1).to({rotation:7.5196,x:467.15,y:183.75},0).wait(1).to({rotation:8.402,x:481.6,y:177.65},0).wait(1).to({rotation:9.2844,x:496.1,y:171.65},0).wait(1).to({rotation:10.1667,x:510.55,y:165.5},0).wait(1).to({rotation:11.0491,x:525.05,y:159.5},0).wait(1).to({rotation:11.9314,x:539.5,y:153.4},0).wait(1).to({rotation:12.8138,x:553.95,y:147.3},0).wait(1).to({rotation:13.4367,x:573.95,y:153.7},0).wait(1).to({rotation:14.0595,x:594.05,y:160.15},0).wait(1).to({rotation:14.6824,x:614.05,y:166.6},0).wait(1).to({rotation:15.3052,x:634.05,y:173},0).wait(1).to({rotation:15.9281,x:654.1,y:179.45},0).wait(1).to({rotation:16.551,x:674.15,y:185.9},0).wait(1).to({rotation:17.1738,x:694.15,y:192.3},0).wait(1).to({rotation:17.7967,x:714.15,y:198.75},0).wait(1).to({rotation:18.4195,x:734.15,y:205.1},0).wait(1).to({rotation:19.0424,x:754.25,y:211.6},0).wait(1).to({rotation:19.6652,x:774.25,y:217.95},0).wait(1).to({rotation:20.2881,x:773.35,y:224.4},0).wait(1).to({rotation:18.1453,x:790,y:216.05},0).wait(1).to({rotation:16.0025,x:806.65,y:207.6},0).wait(1).to({rotation:13.8598,x:823.3,y:199.15},0).wait(1).to({rotation:11.717,x:840,y:190.75},0).wait(1).to({rotation:9.5742,x:856.6,y:182.35},0).wait(1).to({rotation:7.4314,x:873.25,y:173.9},0).wait(1).to({rotation:5.2886,x:889.9,y:165.45},0).wait(1).to({rotation:3.1459,x:906.5,y:157},0).wait(1).to({rotation:1.0031,x:923.15,y:148.55},0).wait(1).to({rotation:-1.1397,x:939.8,y:140.05},0).wait(1).to({rotation:-3.2825,x:956.35,y:131.55},0).wait(1).to({rotation:-5.4253,x:972.95,y:123.1},0).wait(1).to({rotation:-7.568,x:989.55,y:114.6},0).wait(1).to({rotation:-9.7108,x:1006.2,y:106.15},0).wait(1).to({rotation:-8.1319,x:1027.2,y:115.8},0).wait(1).to({rotation:-6.5529,x:1048.15,y:125.45},0).wait(1).to({rotation:-4.9739,x:1069.15,y:135.15},0).wait(1).to({rotation:-3.3949,x:1090.1,y:144.8},0).wait(1).to({rotation:-1.816,x:1111.1,y:154.45},0).wait(1).to({rotation:-0.237,x:1132.05,y:164.1},0).wait(1).to({rotation:1.342,x:1153,y:173.75},0).wait(1).to({rotation:2.9209,x:1173.95,y:183.45},0).wait(1).to({rotation:4.4999,x:1194.9,y:193.05},0).wait(1).to({rotation:6.0789,x:1215.85,y:202.75},0).wait(1).to({rotation:7.6578,x:1236.85,y:212.35},0).wait(1).to({rotation:9.2368,x:1257.75,y:221.95},0).wait(1).to({rotation:10.8158,x:1278.7,y:231.65},0).wait(1).to({rotation:12.3948,x:1299.65,y:241.2},0).wait(1).to({rotation:13.9737,x:1320.6,y:250.8},0).wait(1).to({rotation:15.5527,x:1341.55,y:260.4},0).wait(1).to({rotation:17.1317,x:1362.5,y:270.05},0).wait(1).to({rotation:18.7106,x:1383.4,y:279.6},0).wait(1).to({rotation:20.2896,x:1404.35,y:289.25},0).wait(3));

	// фон
	this.instance_3 = new lib.content_6rosedom();
	this.instance_3.setTransform(-148,-31,1.9014,1.9014);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(105));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-91,329,1979.7,391.1);
// library properties:
lib.properties = {
	id: '7D70B2FDA35B1E4DAEC6E6D51CDA4946',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/anim3_atlas_1.png", id:"anim3_atlas_1"}
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
an.compositions['7D70B2FDA35B1E4DAEC6E6D51CDA4946'] = {
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