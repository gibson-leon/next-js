

const productDetails = async ({params}) => {
    const { product_id } = await params;
    return ( 
        <p>Product Details {product_id}</p>
     );
}
 
export default productDetails;