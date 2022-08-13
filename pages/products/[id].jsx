
export const getStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

 const paths = data.map(ninja => {
 	return {
 		params: {id: ninja.id.toString()}
 	}
 })
  return {
	  paths,
	  fallback: false
  }
}

export const getStaticProps = async(context) => {
	const id = context.params.id;
	const res = await fetch('https://fakestoreapi.com/products/' + id);
	const data = await res.json();

	return {
		props: {product: data}
	}
}
  

const product = ({product}) => {
	const {image, id , title, category, description, price, rating} = product;
  return (
	<div className="mx-auto my-4 w-4/5 h-4/5">
		<img src={image} alt="" className="h-2/5 object-contain mx-auto mb-3"/>
		<h1 className="mb-3">{title}</h1>
		<article className='text-xs mb-3'>
			<p className="mb-2">{description}</p>
			<p>Price	: <span className='text-red-400 font-semibold text-l'>{price}$</span></p>
			<p>Category	: <span className='text-red-400 font-semibold text-l'>{category}</span></p>
			<p>Rating	: <span className='text-red-400 font-semibold text-l'>{rating.rate}</span></p>
		</article>
		<button className="bg-red-400 p-2 w-full rounded-md text-white font-poppins ">Add to Card</button>
	</div>
  )
}

export default product