"use strict";

module.exports = {
	name: "fosteractuator",
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
		"actuator.foster": {
			group: "other",
			handler(payload) {
			    console.log(
					'Foster stanica prima komandu sa command servisa...',
					
				);
				console.log("Foster actuatos izvrsava komandu " + payload.command+" ! ")
				
			}
		},
	}
};