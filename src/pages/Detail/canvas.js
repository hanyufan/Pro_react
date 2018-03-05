export const getClock = (canvasElem) => {
	function Clock(canvasElem) {
			this.canvas = canvasElem;
			this.ctx = canvasElem.getContext('2d');
			this.time = new Date()
		}

		Clock.prototype = {
			constructor: Clock,

			init: function() {
				this.initAxios();
				this.drawClock();
				this.startAnimation();
			},

			startAnimation: function() {
				var this_ = this;
				setInterval(function() {
					this_.clearScreen();
					this_.drawClock();
				}, 1000)
			},

			drawClock: function() {
				this.drawTable();
				this.drawCenter();
				this.drawMinutes();
				this.drawHours();
				this.drawNumber();
				this.drawHourPointer();
				this.drawMunitePointer();
				this.drawSecondsPointer();
			},

			clearScreen: function() {
				this.ctx.clearRect(-250, -250, 500, 500);
				this.time = new Date();
			},

			initAxios: function() {
				this.ctx.translate(135, 135);
			},

			drawTable: function() {
				this.ctx.beginPath();
				this.ctx.arc(0, 0, 100, 0, Math.PI *2);
				this.ctx.fillStyle = '#eee';
				this.ctx.strokeStyle = '#333'
				this.ctx.fill()
				this.ctx.stroke();
			},

			drawCenter: function() {
				this.ctx.beginPath();
				this.ctx.arc(0, 0, 5, 0, Math.PI *2);
				this.ctx.fillStyle = 'red';
				this.ctx.fill()
			},

			drawMinutes: function() {
				for(var i = 0; i < 60; i++) {
					this.ctx.save();
					this.ctx.beginPath();
					this.ctx.rotate(i * Math.PI / 30);
					this.ctx.moveTo(0, -100);
					this.ctx.lineTo(0, -96);
					this.ctx.lineWidth = 2
					this.ctx.stroke();
					this.ctx.restore();
				}
			},

			drawHours: function() {
				for(var i = 0; i < 12; i++) {
					this.ctx.save();
					this.ctx.beginPath();
					this.ctx.rotate(i * Math.PI / 6);
					this.ctx.moveTo(0, -100);
					this.ctx.lineTo(0, -92);
					this.ctx.lineWidth = 2
					this.ctx.stroke();
					this.ctx.restore();
				}
			},

			drawNumber: function() {
				for(var i = 1; i <= 12; i++) {
					var x = 85 * Math.sin(Math.PI / 6 * i),
						y = - 85 * Math.cos(Math.PI / 6 * i);
					this.ctx.beginPath();
					this.ctx.fillStyle = '#333';
					this.ctx.textAlign = 'center';
					this.ctx.textBaseline = 'middle';
					this.ctx.fillText(i, x, y)
				}
			},

			drawHourPointer: function() {
				var hours = (this.time.getHours() + (this.time.getMinutes() / 60)) % 12;
				this.ctx.save();
				this.ctx.beginPath();
				this.ctx.rotate(hours * Math.PI / 6);
				this.ctx.moveTo(0, -50);
				this.ctx.lineTo(0 , 0);
				this.ctx.stroke();
				this.ctx.restore();
			},

			drawMunitePointer: function() {
				this.ctx.save();
				this.ctx.beginPath();
				this.ctx.rotate(this.time.getMinutes() * Math.PI / 30);
				this.ctx.moveTo(0, -70);
				this.ctx.lineTo(0 , 0);
				this.ctx.stroke();
				this.ctx.restore();
			},

			drawSecondsPointer: function() {
				this.ctx.save();
				this.ctx.beginPath();
				this.ctx.rotate(this.time.getSeconds() * Math.PI / 30);
				this.ctx.moveTo(0, -80);
				this.ctx.lineTo(0 , 0);
				this.ctx.stroke();
				this.ctx.restore();
			}
		}

		var clock = new Clock(canvasElem);
		clock.init()

}
