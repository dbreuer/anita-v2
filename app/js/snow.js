var snow = {
	/**
	 * float  The current x position
	 */
	x: 0,

	/**
	 * float  The current y position
	 */
	y: 0,

	/**
	 * float  Alpha
	 */
	alpha: 0.5,

	/**
	 * float  The radius of the circle.
	 */
	radius: 3,

	/**
	 * Velocity for the particle.
	 */
	velocity: {
		x: 0,
		y: 5
	},

	/**
	 * Draws the particle onto the canvas in context.
	 *
	 * @param	c	 The canvas context to draw onto
	 */
	draw:function(c){
		c.fillStyle = this.randomColor(this.alpha);
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		c.fill();
	},

	/**
	 * Updates the particle.
	 */
	update:function(){
		this.x += this.velocity.x
		this.y += this.velocity.y;


	},

	/**
	 * Randomizes the settings for the particle
	 *
	 * @param	zone	The blastZone
	 */
	randomize:function(zone){
		// Get a random point inside the blastzone and set the x/y
		var s = this.getLocation(zone);
		this.x = s.x;
		this.y = s.y;

		this.alpha = this.randomRange(0.8, 1);
		this.radius = this.randomRange(1, 5);

		this.velocity = {
			x: this.randomRange(-0.35, 0.35),
			y: this.randomRange(0.75, 1.5)
		}
	},

	/**
	 * Adds a random drift type motion to the particle.
	 * Taken from the Flint particle system....
	 */
	action:function(){
		this.velocity.x += (Math.random() - 0.5) * 0.1;
	},

	/**
	 * Take a low and high number and gets a random number between them.
	 *
	 * @param	low		The low number
	 * @param	high	The high number
	 * @return	Number
	 */
	randomRange:function(low, high){
		return (Math.random() * (high - low)) + low;
	},


    randomColor:function(alpha){
        var brightness = 5;
        //6 levels of brightness from 0 to 5, 0 being the darkest
        var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
        var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
        var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
        var out = "rgba(" + mixedrgb.join(",") + ", "+alpha+")";
        return out;
    },

	/**
	 * Gets a random starting point for the particle.
	 * Taken from the Flint particle system in AS3
	 *
	 * @param	zone	The zone to get a location from
	 * @return	Object
	 */
	getLocation:function(z){
		var p = {};
		p.x = z.x + Math.random() * z.width;
		p.y = z.y + Math.random() * z.height;
		return p;
	}
};
