import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
	{
		id: "p1",
		price: 250,
		title: "Story Book",
		description: "This is my favourite story book.",
	},
	{
		id: "p2",
		price: 350,
		title: "Video Game",
		description: "This is my favourite Video game.",
	},
	{
		id: "pe",
		price: 450,
		title: "Mobile",
		description: "This is my first Mobile.",
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
