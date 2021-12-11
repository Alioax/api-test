// posts will be populated at build time by getStaticProps()
function Blog({ data }) {
    return (
        <>
            <h1>{data.fact}</h1>
            <h2>{data.length}</h2>
        </>
    );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    // Call an external API endpoint to get data.
    // You can use any data fetching library
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();

    // By returning { props: { data } }, the Blog component
    // will receive `data` as a prop at build time
    return {
        props: {
            data,
        },
    };
}

export default Blog;
