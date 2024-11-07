


async function ProductDetails({params}){
    const { id } = await params
    return(
        <h1>this is product {id}</h1>
    )
}

export default ProductDetails