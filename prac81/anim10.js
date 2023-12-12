(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"anim10_atlas_1", frames: [[0,0,1703,1523]]},
		{name:"anim10_atlas_2", frames: [[0,0,1703,1523]]},
		{name:"anim10_atlas_3", frames: [[0,0,1703,1523]]},
		{name:"anim10_atlas_4", frames: [[0,0,1703,1523]]},
		{name:"anim10_atlas_5", frames: [[0,0,1703,1523]]},
		{name:"anim10_atlas_6", frames: [[0,0,1703,1523]]},
		{name:"anim10_atlas_7", frames: [[0,0,1703,1523]]},
		{name:"anim10_atlas_8", frames: [[0,0,1703,1523]]},
		{name:"anim10_atlas_9", frames: [[0,1525,1006,508],[1008,1525,1006,490],[0,0,1703,1523]]},
		{name:"anim10_atlas_10", frames: [[0,477,1006,426],[1008,459,1006,452],[1008,0,1006,457],[0,905,1006,408],[0,0,1006,475],[1008,913,1006,392],[1008,1307,1006,392],[0,1315,591,80]]}
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



(lib.CachedBmp_10 = function() {
	this.initialize(ss["anim10_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["anim10_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["anim10_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["anim10_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["anim10_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["anim10_atlas_10"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["anim10_atlas_10"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["anim10_atlas_10"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["anim10_atlas_10"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["anim10_atlas_10"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(ss["anim10_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["anim10_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["anim10_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["anim10_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.initialize(ss["anim10_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.initialize(ss["anim10_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.initialize(ss["anim10_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.initialize(ss["anim10_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.initialize(ss["anim10_atlas_9"]);
	this.gotoAndStop(2);
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


(lib.Символ11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(204,204,153,0.008)").s().p("Eg1BArwMAAAhXfMBqDAAAMAAABXfg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-339.4,-280,678.9,560.1), null);


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
	this.instance = new lib._2();
	this.instance.setTransform(-282.9,-253,0.3322,0.3322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-282.9,-253,565.8,506), null);


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
	this.instance = new lib._1();
	this.instance.setTransform(-285.7,-255.5,0.3355,0.3355);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-285.7,-255.5,571.4,511), null);


// stage content:
(lib.итог1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("https://www.youtube.com/watch?v=Hvw2cNQUuUc");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72));

	// Слой_34
	this.movieClip_2 = new lib.Символ11();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(392.6,350.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(72));

	// Слой_33
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("AhtlBQAeARBTAvQBHAoAjATAhtlBIAADgAA9FCQAAgJACgPQADgaAIgtQAMhIAAggQAAhEguhaQhQiShFiM");
	this.shape.setTransform(608.475,639.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(72));

	// Слой_32
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(364.6,654.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72));

	// Слой_31
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFCC00").ss(16,1,1).p("AiJnNQgGgYgJgXIgJgRQAIAaAQAmQAVAzAgBIQAzBwAVAkQAqBLAaAXQASAPAbABQAlAAAZALQAyAUBHA/QijCrgkA7QhbCUBFB+QhSiQgrhFQhIh1hFheAg1h4QAAAAAAgBIACgFQgBADgBADgAg1hzQABgCAAAAQABgBgCgCQAAACAAADQAAAHABAKQABACAAABQAFARACALQgJgPgEgGQgDgEgBgBQgFgKgGgHQAIABAEgCQAFgDACgBgAhIhuQgHgHgGgEQgMgHgJgPQAEAIACAKQADABADACQAMAJAKADgAhkh9QABADABAEAg0hiQgCAFgDAFQgHANABAJQAAAJAEAQIAPAbQAIgNAAgPQgBgKgFgLQgBgDgBgBQABAKABAGIAGAJIAPAaQgBgKgLgSQgKgRAEgQgAhRANQgMgBgRgEQgngIgLgRIgUAAIAAAoQAMANBJAuQBEAyAIApIAEAGQAHAFAOAAQAWAAAdgpQAQgVASgdAhOAEIgDAJIgEARIAxBVQAOgJAjgqQAkgrAbgPIATAhAg7AMQgIACgOgBAh4hpQgPgbABgHQALgBAXAPAA/IKIACAEAkbBPQAGgwAmhHQAVgoAvhZQBFiUgjiQ");
	this.shape_1.setTransform(1197.125,635.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFCC00").ss(16,1,1).p("AiKk8QgBgGgCgGQgLgigbgdQAVAoAUAjQA8BmA5AzQB6ByCfgsQgXBHgdAhQgRAUgcAPQgZANgHAPQgNAXAAA7QAABuADATQAGAoAmBDQhVhUiNhIQh6g+grAAQAdgcAfghQAygyAfgqQAGgGAEgHQADgEADgEAhdgNQgFgVgFgZQgEgWgUhKQgEgSAAg3QAAgxAEgRQAPAkARAkQAJAagEAqAjiloQAAA1AICIQAICHAAANQAAAXgKAyQgOBMgZAgAjDAAQAAhZAfg6QAfg5AAg/QAAgbgFgWAh1guQACADADAEQAJANAKANQAJALAJAKQARATATAUQA1A4AqAWIAAhuAhVAVQgEgQgEgSAhSBxIAEgEQAEAEAnAcQAqAhAVAWIANAIQgeglgagUQgXgOgJgJQgQgRgWhW");
	this.shape_2.setTransform(1169.875,648.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFCC00").ss(16,1,1).p("AChm1QAJgZAGgbIAPg7QgTA3gLA4Qg7EWBuEgQgsAYhXAvQhIAqguAnQhuBcgmCRQgFAPgDAPAiUgeQAfg9A2g5QA/hAAfgeQBdhcAlhnAAJg0QAGgLAEgKIgKAAQAAALAAAKQgBAzgFAaQgDAMgGASQgJAWgPAgABoBbIABgEIgBADQAAAAAAABQgCACgCAAQgGAFgEAGQgDgGACgFIgSgFQgCAGgKAKQgNAMgEAHABoBaQABAEACAEIAFgUQgDAHgFAFgAhDBdQAQAIAOACQALgPAUghQANgZATgiQAohLADgNABfB6IAJgfAhIBbIAAARQADgHACgIQAFgOAIgQQAphHAWgsAi5IGQAXh2gSisQgdi+gBgqQATAFA7AxQAiAcAaANQADABACABAhIAwIAAArAhIBsIAABcQgOgoAOg0g");
	this.shape_3.setTransform(1199.35,644.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFCC00").ss(16,1,1).p("AiJnNQgGgYgJgXIgJgRQAIAaAQAmQAVAzAgBIQAzBwAVAkQAqBLAaAXQASAPAbABQAlAAAZALQAyAUBHA/QijCrgkA7QhbCUBFB+QhSiQgrhFQhIh1hFheAg1h4QAAAAAAgBIACgFQgBADgBADgAg1hzQABgCAAAAQABgBgCgCQAAACAAADQAAAHABAKQABACAAABQAFARACALQgJgPgEgGQgDgEgBgBQgFgKgGgHQAIABAEgCQAFgDACgBgAhkh9QABADABAEAhkh9QADABADACQAMAJAKADQgHgHgGgEQgMgHgJgPQAEAIACAKgAg0hiQgCAFgDAFQgHANABAJQAAAJAEAQIAPAbQAIgNAAgPQgBgKgFgLQgBgDgBgBQABAKABAGIAGAJIAPAaQgBgKgLgSQgKgRAEgQgAhRANQgMgBgRgEQgngIgLgRIgUAAIAAAoQAMANBJAuQBEAyAIApIAEAGQAHAFAOAAQAWAAAdgpQAQgVASgdAg7AMQgIACgOgBIgEARIAxBVQAOgJAjgqQAkgrAbgPIATAhAhOAEIgDAJAh4hpQgPgbABgHQALgBAXAPAA/IKIACAEAkbBPQAGgwAmhHQAVgoAvhZQBFiUgjiQ");
	this.shape_4.setTransform(1197.125,635.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFCC00").ss(16,1,1).p("AiKk8QgBgGgCgGQgLgigbgdQAVAoAUAjQA8BmA5AzQB6ByCfgsQgXBHgdAhQgRAUgcAPQgZANgHAPQgNAXAAA7QAABuADATQAGAoAmBDQhVhUiNhIQh6g+grAAQAdgcAfghQAygyAfgqQAGgGAEgHQADgEADgEAhdgNQgFgVgFgZQgEgWgUhKQgEgSAAg3QAAgxAEgRQAPAkARAkQAJAagEAqAjDAAQAAhZAfg6QAfg5AAg/QAAgbgFgWAjiloQAAA1AICIQAICHAAANQAAAXgKAyQgOBMgZAgAhdgNQAJALAJAKQARATATAUQA1A4AqAWIAAhuAh1guQACADADAEQAJANAKANAhVAVQgEgQgEgSAhSBxIAEgEQAEAEAnAcQAqAhAVAWIANAIQgeglgagUQgXgOgJgJQgQgRgWhW");
	this.shape_5.setTransform(1169.875,648.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFCC00").ss(16,1,1).p("AChm1QAJgZAGgbIAPg7QgTA3gLA4Qg7EWBuEgQgsAYhXAvQhIAqguAnQhuBcgmCRQgFAPgDAPAAJg0QAGgLAEgKIgKAAQAAALAAAKQgBAzgFAaQgDAMgGASQgJAWgPAgAiUgeQAfg9A2g5QA/hAAfgeQBdhcAlhnABoBbQgCACgCAAQgGAFgEAGQgDgGACgFIgSgFQgCAGgKAKQgNAMgEAHABoBaQAAAAAAABIABgEIgBADQABAEACAEIAFgUQgDAHgFAFgAhDBdQAQAIAOACQALgPAUghQANgZATgiQAohLADgNABfB6IAJgfAhIBbQADABACABAhIBbIAAARQADgHACgIQAFgOAIgQQAphHAWgsAhIAwIAAArAi5IGQAXh2gSisQgdi+gBgqQATAFA7AxQAiAcAaANAhIBsIAABcQgOgoAOg0g");
	this.shape_6.setTransform(1199.35,644.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFCC00").ss(16,1,1).p("AChm1QAJgZAGgbIAPg7QgTA3gLA4Qg7EWBuEgQgsAYhXAvQhIAqguAnQhuBcgmCRQgFAPgDAPAAJg0QAGgLAEgKIgKAAQAAALAAAKQgBAzgFAaQgDAMgGASQANgZATgiQAohLADgNAiUgeQAfg9A2g5QA/hAAfgeQBdhcAlhnABoBbIABgEIgBADQAAAAAAABQgCACgCAAQgGAFgEAGQgDgGACgFIgSgFQgCAGgKAKQgNAMgEAHABoBaQABAEACAEIAFgUQgDAHgFAFgAgGA3QgJAWgPAgAhDBdQAQAIAOACQALgPAUghABfB6IAJgfAhIBbIAAARQADgHACgIQAFgOAIgQQAphHAWgsAi5IGQAXh2gSisQgdi+gBgqQATAFA7AxQAiAcAaANQADABACABAhIAwIAAArAhIBsIAABcQgOgoAOg0g");
	this.shape_7.setTransform(1199.35,644.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},6).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_6}]},6).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_7}]},6).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_7}]},6).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_7}]},6).wait(1));

	// Слой_30
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFCC00").ss(16,1,1).p("AAXlzQACgWgCgWIAAgwQgDAvADAtQANDkCgDHQggAcg/A2Qg1AvgeAoQhJBeABB4QgHhgg3iBQhEiNgLghQASAAA+AaQA6AZAjgEQALgXAShIQAQhCAAgLAiUAHQANg0Ahg5QAog9AUgeQA5hbAIhXABfAwQAAAAAAABIAAgEIAAADQABADADADIAAgRQgBAHgDAEgABfAxQgBABgCACQgEAEgCAGQgEgEAAgEIgQAAQAAAEgHALQgIAMgCAFABfBKIAAgZAg2G3QAAAMABAN");
	this.shape_8.setTransform(63.525,80.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFCC00").ss(16,1,1).p("ABulpQAGgTADgUIAAgPQgEAWgFAgQgGAtgGBAQgKBjAAAiQAABHAJAaQAHASATALQAZAPAOASQAaAiAYBKQi4A2gxAbQh8BDgCB0QAAiGgChCQgDhvgLhfAglgIIgPAOIAABQQANAAAqgQQArgPAZAAIAAAfAAAhtQABACABADQAGALAFAFQgBgHgDgFQgGgLAAgQQAAAJgDAJQAAADgBADAAPhCQAAgDAAgBQAAgKgCgIQAFAFAFAAQAEAAACAAQABAAABAAQAAgBAAgCQgBABgBACQgDAFgDAIQAAABgBACQgDAMgEAJQAAgNAAgHQgKAHgEAHQgCAGgEANIAAAZQAKgGAGgKQAEgIABgJQAAgDgBgCQgCAIgCAFIAAAJIAAAYQAEgHgBgSQAAgQAJgJIAAgUQgEACgEACgAAfhWQAAgBAAAAIADgDQgBACgCACgAgVhnQAAgZAEgEQAIADAJAUAjTgnQAYgfA3gjQAggUBFgrQBshNAhh0AiTGcIAAAF");
	this.shape_9.setTransform(76.025,80.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFCC00").ss(16,1,1).p("AiKk8QA8BmA5AzQB6ByCfgsQgXBHgdAhQgRAUgcAPQgZANgHAPQgNAXAAA7QAABuADATQAGAoAmBDQhVhUiNhIQh6g+grAAQAdgcAfghQAygyAfgqQgEgQgEgSQgFgVgFgZQgEgWgUhKQgEgSAAg3QAAgxAEgRQAPAkARAkQAJAagEAqAiKk8QgBgGgCgGQgLgigbgdQAVAoAUAjgAjDAAQAAhZAfg6QAfg5AAg/QAAgbgFgWAjiloQAAA1AICIQAICHAAANQAAAXgKAyQgOBMgZAgAh1guQACADADAEQAJANAKANQAJALAJAKQARATATAUQA1A4AqAWIAAhuAhLAIQADgEADgEAhVAVQAGgGAEgHAhSBxIAEgEQAEAEAnAcQAqAhAVAWIANAIQgeglgagUQgXgOgJgJQgQgRgWhW");
	this.shape_10.setTransform(79.225,94.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFCC00").ss(16,1,1).p("ABulpQAGgTADgUIAAgPQgEAWgFAgQgGAtgGBAQgKBjAAAiQAABHAJAaQAHASATALQAZAPAOASQAaAiAYBKQi4A2gxAbQh8BDgCB0IAAAFAglgIIgPAOIAABQQANAAAqgQQArgPAZAAIAAAfAANhYQgBgHgDgFQgGgLAAgQQAAAJgDAJQABACABADQAGALAFAFgAAPhCQAAgDAAgBQAAgKgCgIQAFAFAFAAQAEAAACAAQgDAFgDAIQAAABgBACQgDAMgEAJQAAgNAAgHQgKAHgEAHQgCAGgEANIAAAZQAKgGAGgKIAAAYQAEgHgBgSQAAgQAJgJIAAgUQgEACgEACgAAfhWQgBABgBACQABAAABAAQAAgBAAgCQAAgBAAAAIADgDQgBACgCACgAgVhnQAAgZAEgEQAIADAJAUQAAADgBADAjTgnQAYgfA3gjQAggUBFgrQBshNAhh0AAPguQgCAIgCAFIAAAJQAEgIABgJQAAgDgBgCgAiTGcQAAiGgChCQgDhvgLhf");
	this.shape_11.setTransform(76.025,80.95);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFCC00").ss(16,1,1).p("AiKk8QA8BmA5AzQB6ByCfgsQgXBHgdAhQgRAUgcAPQgZANgHAPQgNAXAAA7QAABuADATQAGAoAmBDQhVhUiNhIQh6g+grAAQAdgcAfghQAygyAfgqQgEgQgEgSQgFgVgFgZQgEgWgUhKQgEgSAAg3QAAgxAEgRQAPAkARAkQAJAagEAqAiKk8QgBgGgCgGQgLgigbgdQAVAoAUAjgAjDAAQAAhZAfg6QAfg5AAg/QAAgbgFgWAjiloQAAA1AICIQAICHAAANQAAAXgKAyQgOBMgZAgAh1guQACADADAEQAJANAKANQAJALAJAKQADgEADgEAhLAIQARATATAUQA1A4AqAWIAAhuAhVAVQAGgGAEgHAhSBxIAEgEQAEAEAnAcQAqAhAVAWIANAIQgeglgagUQgXgOgJgJQgQgRgWhW");
	this.shape_12.setTransform(79.225,94.225);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFCC00").ss(16,1,1).p("AiKk8QA8BmA5AzQB6ByCfgsQgXBHgdAhQgRAUgcAPQgZANgHAPQgNAXAAA7QAABuADATQAGAoAmBDQhVhUiNhIQh6g+grAAQAdgcAfghQAygyAfgqQgEgQgEgSQgFgVgFgZQgEgWgUhKQgEgSAAg3QAAgxAEgRQAPAkARAkQAJAagEAqAjDAAQAAhZAfg6QAfg5AAg/QAAgbgFgWQgBgGgCgGQgLgigbgdQAVAoAUAjAjiloQAAA1AICIQAICHAAANQAAAXgKAyQgOBMgZAgAh1guQACADADAEQAJANAKANQAJALAJAKQARATATAUQA1A4AqAWIAAhuAhLAIQADgEADgEAhVAVQAGgGAEgHAhSBxIAEgEQAEAEAnAcQAqAhAVAWIANAIQgeglgagUQgXgOgJgJQgQgRgWhW");
	this.shape_13.setTransform(79.225,94.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},4).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_8}]},3).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(14).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(17).to({_off:false},0).to({_off:true},3).wait(17).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(2));

	// кот9
	this.instance_1 = new lib._9();
	this.instance_1.setTransform(63,94,0.3447,0.3447);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).wait(8));

	// текст9
	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(777.15,262,0.5,0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).wait(8));

	// фон9
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000066").ss(1,1,1).p("Eh0whGWMDphAAAMAAACMtMjphAAAg");
	this.shape_14.setTransform(693.725,404.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCC99").s().p("Eh0wBGXMAAAiMtMDphAAAMAAACMtg");
	this.shape_15.setTransform(693.725,404.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},64).wait(8));

	// кот8
	this.instance_3 = new lib._8();
	this.instance_3.setTransform(97,100,0.3362,0.3362);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({_off:true},8).wait(8));

	// текст8
	this.instance_4 = new lib.CachedBmp_3();
	this.instance_4.setTransform(777.15,262,0.5,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56).to({_off:false},0).to({_off:true},8).wait(8));

	// фон8
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000066").ss(1,1,1).p("Ehwkg+3MDhJAAAMAAAB9vMjhJAAAg");
	this.shape_16.setTransform(663.075,356.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFCC").s().p("EhwkA+4MAAAh9vMDhJAAAMAAAB9vg");
	this.shape_17.setTransform(663.075,356.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},56).to({state:[]},8).wait(8));

	// кот7
	this.instance_5 = new lib._7();
	this.instance_5.setTransform(105,96,0.3449,0.3449);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48).to({_off:false},0).to({_off:true},8).wait(16));

	// текст7
	this.instance_6 = new lib.CachedBmp_4();
	this.instance_6.setTransform(777.15,243.45,0.5,0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48).to({_off:false},0).to({_off:true},8).wait(16));

	// фон7
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000066").ss(1,1,1).p("EhxxhA9MDjjAAAMAAACB7MjjjAAAg");
	this.shape_18.setTransform(678.4,369.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC9999").s().p("EhxxBA+MAAAiB7MDjjAAAMAAACB7g");
	this.shape_19.setTransform(678.4,369.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18}]},48).to({state:[]},8).wait(16));

	// кот6
	this.instance_7 = new lib._6();
	this.instance_7.setTransform(49,65,0.378,0.378);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).to({_off:true},8).wait(24));

	// текст6
	this.instance_8 = new lib.CachedBmp_5();
	this.instance_8.setTransform(777.15,258,0.5,0.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40).to({_off:false},0).to({_off:true},8).wait(24));

	// фон6
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000066").ss(1,1,1).p("EhwRg/dMDgjAAAMAAAB+7MjgjAAAg");
	this.shape_20.setTransform(665,375.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCFF").s().p("EhwRA/eMAAAh+7MDgjAAAMAAAB+7g");
	this.shape_21.setTransform(665,375.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},40).to({state:[]},8).wait(24));

	// кот5
	this.instance_9 = new lib._5();
	this.instance_9.setTransform(66,61,0.3763,0.3763);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(32).to({_off:false},0).to({_off:true},8).wait(32));

	// текст5
	this.instance_10 = new lib.CachedBmp_6();
	this.instance_10.setTransform(777.15,237.6,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(32).to({_off:false},0).to({_off:true},8).wait(32));

	// фон5
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000066").ss(1,1,1).p("Ehq4hFwMDVxAAAMAAACLhMjVxAAAg");
	this.shape_22.setTransform(657.3,400.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF99").s().p("Ehq4BFxMAAAiLhMDVxAAAMAAACLhg");
	this.shape_23.setTransform(657.3,400.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22}]},32).to({state:[]},8).wait(32));

	// кот4
	this.instance_11 = new lib._4();
	this.instance_11.setTransform(87,81,0.3791,0.3791);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({_off:true},8).wait(40));

	// текст4
	this.instance_12 = new lib.CachedBmp_7();
	this.instance_12.setTransform(777.15,247,0.5,0.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).to({_off:true},8).wait(40));

	// фон4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000066").ss(1,1,1).p("EhwRhCdMDgjAAAMAAACE7MjgjAAAg");
	this.shape_24.setTransform(645.825,356.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0099CC").s().p("EhwRBCeMAAAiE7MDgjAAAMAAACE7g");
	this.shape_25.setTransform(645.825,356.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24}]},24).to({state:[]},8).wait(40));

	// кот3
	this.instance_13 = new lib._3();
	this.instance_13.setTransform(97,90,0.3555,0.3555);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(16).to({_off:false},0).to({_off:true},8).wait(48));

	// текст3
	this.instance_14 = new lib.CachedBmp_8();
	this.instance_14.setTransform(777.15,253.55,0.5,0.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(16).to({_off:false},0).to({_off:true},8).wait(48));

	// фон3
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000066").ss(1,1,1).p("Ehpsg9EMDTZAAAMAAAB6JMjTZAAAg");
	this.shape_26.setTransform(642,360.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#66CC99").s().p("EhpsA9FMAAAh6JMDTYAAAMAAAB6Jg");
	this.shape_27.setTransform(642,360.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26}]},16).to({state:[]},8).wait(48));

	// кот2
	this.movieClip_2_1 = new lib.Символ2();
	this.movieClip_2_1.name = "movieClip_2_1";
	this.movieClip_2_1.setTransform(389.9,360);
	this.movieClip_2_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2_1).wait(8).to({_off:false},0).to({_off:true},8).wait(56));

	// текст2
	this.instance_15 = new lib.CachedBmp_9();
	this.instance_15.setTransform(777.15,233.05,0.5,0.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},0).to({_off:true},8).wait(56));

	// фон2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000066").ss(1,1,1).p("Ehw3g+kMDhvAAAMAAAB9JMjhvAAAg");
	this.shape_28.setTransform(680.325,369.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF99CC").s().p("Ehw3A+lMAAAh9JMDhvAAAMAAAB9Jg");
	this.shape_29.setTransform(680.325,369.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28}]},8).to({state:[]},8).wait(56));

	// кот1
	this.movieClip_1 = new lib.Символ1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(399.7,371.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).to({_off:true},8).wait(64));

	// текст1
	this.instance_16 = new lib.CachedBmp_10();
	this.instance_16.setTransform(777.15,233.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},8).wait(64));

	// фон1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000066").ss(1,1,1).p("EhmAg61MDMBAAAMAAAB1rMjMBAAAg");
	this.shape_30.setTransform(640.725,366.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC99").s().p("EhmAA62MAAAh1rMDMBAAAMAAAB1rg");
	this.shape_31.setTransform(640.725,366.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30}]}).to({state:[]},8).wait(64));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(566.3,290.1,875.8,565.6);
// library properties:
lib.properties = {
	id: '04164121C5B3EC429B0D05184F67092B',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/anim10_atlas_1.png", id:"anim10_atlas_1"},
		{src:"images/anim10_atlas_2.png", id:"anim10_atlas_2"},
		{src:"images/anim10_atlas_3.png", id:"anim10_atlas_3"},
		{src:"images/anim10_atlas_4.png", id:"anim10_atlas_4"},
		{src:"images/anim10_atlas_5.png", id:"anim10_atlas_5"},
		{src:"images/anim10_atlas_6.png", id:"anim10_atlas_6"},
		{src:"images/anim10_atlas_7.png", id:"anim10_atlas_7"},
		{src:"images/anim10_atlas_8.png", id:"anim10_atlas_8"},
		{src:"images/anim10_atlas_9.png", id:"anim10_atlas_9"},
		{src:"images/anim10_atlas_10.png", id:"anim10_atlas_10"}
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
an.compositions['04164121C5B3EC429B0D05184F67092B'] = {
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