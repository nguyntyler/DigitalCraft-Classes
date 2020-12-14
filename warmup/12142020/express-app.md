# Warmup!

1. Suppose you have an express app that serves a page that shows a list of pet names.
   Draw a diagram showing the Request/Response cycle.

> When the user makes a request to a url, the express app reads the url request and sends back data corresponding to that url. If the user went to /pet-list and the app has a .get that specifies if the user goes to that page, the app will send back a response with the data in either the res.send or res.render.

2. On the diagram, show which parts are the Model, View, and Controller.

> A user interacts within the view and request is send to the controller. It is then manipulated in conjuction with the model where the correct information is then send back in the form of a response back to the controller and is rendered to be seen on the view. The model holds the database information. The controller handles the request and response. The view displays the data for the user.

3. In JavaScript, write an example of the kind of data that is in the Model layer.

```js MODEL LAYER
const db = [
    {name:"becky"}
    {name:"johnny"}
]
```

4. In HTML, write an example of how that data is formatted for the View.

```html VIEW LAYER
<h1>This is your info</h1>
<ul>
	${ db.map(n => `
	<li>${n.name}</li>
	`) }
</ul>
```

5. In JavaScript, write a function that converts your example Model data into your example View format.

```js CONTROLLER LAYER
app.get("/pet-list", (req, res) => {
	res.render("lists", {
		locals: {
			db,
		},
	});
});
```
