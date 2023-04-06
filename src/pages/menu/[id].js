import DetailsPage from "components/template/DetailsPage";
import { useRouter } from "next/router";

function FoodDetails({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading Page...</h1>;
  }

  return <DetailsPage {...data} />;
}

export default FoodDetails;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  const slicedPaths = data.slice(0, 10);

  const paths = slicedPaths.map(food => ({
    params: { id: food.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${id}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 10,
  };
}
