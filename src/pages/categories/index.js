import CategoriesPage from "components/template/CategoriesPage";

function Categories({ data }) {
  return <CategoriesPage data={data} />;
}

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  const filtredData = data.filter(item => {
    const difficultyFood = item.details.filter(
      detail => detail.Difficulty && detail.Difficulty === difficulty
    );
    const timeSpendCookong = item.details.filter(detail => {
      const allString = detail["Cooking Time"] || "";
      const timeDetails = allString.split(" ")[0];
      if (time === "less" && timeDetails && +timeDetails <= 30) {
        return detail;
      } else if (time === "more" && +timeDetails > 30) {
        return detail;
      }
    });
    if (time && difficulty && difficultyFood.length && timeSpendCookong) {
      return item;
    } else if (!time && difficulty && difficultyFood.length) {
      return item;
    } else if (time && !difficulty && timeSpendCookong.length) {
      return item;
    }
  });

  return {
    props: {
      data: filtredData,
    },
  };
}
