import MenuPage from "components/template/MenuPage";

function Menu(props) {
    const {data} = props;
    return <MenuPage data={data}/>
}

export default Menu;

export async function getStaticProps() {
    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();

    return {
        props: {data},
        revalidate: 10 //Seconds
    }
}