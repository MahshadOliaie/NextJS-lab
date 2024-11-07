import { notFound } from "next/navigation"



async function ProductDetails({ params }) {
    const { id } = await params

    if (id > 10) {
        notFound()
    }
    return (
        <h1>this is product {id}</h1>
    )
}

export default ProductDetails