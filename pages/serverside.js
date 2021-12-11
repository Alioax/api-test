function Page({ data }) {
    return (
        <>
            <h1>{data.fact}</h1>
            <h2>{data.length}</h2>
        </>
    );
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://catfact.ninja/fact`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default Page;
