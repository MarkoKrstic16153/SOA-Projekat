"use strict";

module.exports = {
	name: "sixthreeactuator",
	actions: {
		set: {
			params: {
				offset: { type: "number" },
				sensorId: { type: "number" }
			},
			async handler(ctx) {
				console.log(ctx.params);
                this.broker.emit(`temperature.set.${ctx.params.sensorId}`, ctx.params);
                return 'Success setting temperature!';
			}
        }
	},
	events:{
		"actuator.sixthree": {
			group: "other",
			handler(payload) {
			    console.log(
					'63rd stanica prima komandu sa command servisa...',
					
				);
				console.log("63rd actuatos izvrsava komandu " + payload.command+" ! ")
				
			}
		},
	}
};