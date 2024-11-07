

async function Post({ params }) {
    const { slug } = await params
    console.log(slug)
    return (
        <>
            Post {
                (slug?.length > 0) ?
                    slug.map(item => {
                        return ` ${item}`
                    })
                    :
                    ""
            }
        </>
    )
}

export default Post