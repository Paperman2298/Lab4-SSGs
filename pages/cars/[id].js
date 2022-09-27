import Head from "next/head";
import { useRouter } from "next/router"
export default function Car({ car }) {
    const router = useRouter();
    const { id } = router.query;

    return (<>
        <Head>
            <title>{car.color} {car.id}</title>
        </Head>
        <h1>Soy un {id}</h1>
        <img src={car.image} width="300px" />
    </>)
}

export async function getStaticProps({ params }) {
    const req = await fetch(`https://graceful-pixie-09ca47.netlify.app/${params.id}.json`);
    const data = await req.json();

    return {
        props: {car: data},

    }
}

export async function getStaticPaths() {
    const req = await fetch(`https://graceful-pixie-09ca47.netlify.app/cars.json`);
    const data = await req.json();

    const paths = data.map(car => {
        return { params: { id: car } }
    })

    return {
        paths,
        fallback: false
    }
}