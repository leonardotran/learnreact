import axios from "axios";

export default function Covid(props) {
    console.log(props);
    return (
        <h1> Covid Data </h1>
    )
}

export async function getServerSideProps() {
      // Fetch data from external API

    const res = await axios.get(`https://api.covid19api.com/summary`);
    // fetch(`https://api.covid19api.com/summary`)
    const data = await res.status === 200 ? await res.data : {};
    // const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }

}

//https://api.themoviedb.org/3/search/movie?query=batman&api_key=cfe422613b250f702980a3bbf9e90716&page=1