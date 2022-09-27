import { useRouter } from "next/router"
export default function Flag({ flag }) {
    const router = useRouter();
    const { id } = router.query;
    return (<>
        <h1>Soy la bandera de {id}</h1>
        <img src={flag} width="300px" />
    </>)
}

export async function getStaticProps({ params }) {
    const req = await fetch(`https://countryflagsapi.com/png/${params.id}`);

    return {
        props: {flag: req.url},

    }
}

export async function getStaticPaths() {
    const data = ["brazil", "mexico", "usa"]

    const paths = data.map(flag => {
        return { params: { id: flag } }
    })

    return {
        paths,
        fallback: false
    }
}