
import { useRouter } from "next/router"
export default function Car({ }) {
    const router = useRouter();
    const { id } = router.query;

    return (<>
        <h1>Soy un {id}</h1>
        {/* <img src={car.image} width="300px" /> */}
    </>)
}

// export async function getStaticProps({ params }) {
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props: {car: data},

//     }
// }

// export async function getStaticPaths() {
//     const req = await fetch(`http://localhost:3000/cars.json`);
//     const data = await req.json();

//     const paths = data.map(car => {
//         return { params: { id: car } }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }