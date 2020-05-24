"use strict";

module.exports = {
	name: "oakactuator",
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
		"actuator.oak": {
			group: "other",
			handler(payload) {
			    console.log(
					'Oak stanica prima komandu sa command servisa...',
					
				);
				console.log("Oak actuatos izvrsava komandu " + payload.command+" ! ")
				
			}
		},
	}
};