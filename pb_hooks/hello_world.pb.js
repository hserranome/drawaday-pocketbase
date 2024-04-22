/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/hello_world/:name", (c) => {
	let name = c.pathParam("name");

	return c.json(200, { message: "Hello " + name });
});
