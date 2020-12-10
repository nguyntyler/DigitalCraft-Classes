// Amazon.com

const db = {
	abc: {
		item:
			"Osmo - Little Genius Starter Kit for iPad + Early Math Adventure - 6 Educational Learning Games - Ages 3-5 - Counting, Shapes, Phonics & Creativity iPad Base Included (Amazon Exclusive)",
		images: ["img1.jpg", "img2.jpg", "img3.jpg"],
		price: 116.92,
		ratings: 295,
		description:
			"OSMO IS MAGIC: Award-winning learning games let your child interact with tangible educational toys and an iPad, bringing their actions to life. A hands-on learning adventure awaits your little genius (No WiFi necessary for game play). An Osmo Base is included, an iPad is not included, both are required for game play....",
	},
};

app.get("/:id", (req, res) => {
	const product = db[req.params.id];

	res.render("product-details", {
		locals: {
			title: product.item,
			images: product.images,
			price: product.price,
			ratings: product.ratings,
			description: product.description,
		},
	});
});
