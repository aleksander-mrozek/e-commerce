import { Main } from "../components/Main";
import { useCreateProductReviewMutation } from "../generated/graphql";

const Home = () => {
  const [createReview, { data, loading, error }] =
    useCreateProductReviewMutation();

  const addReview = () =>
    createReview({
      variables: {
        review: {
          headline: "789 bad product",
          name: "Aleksander M",
          email: "example123@gmail.com",
          content: "This is the most disgusting thing I ever bought...",
          rating: 1,
        },
      },
    });

  return (
    <Main>
      <button onClick={addReview} type="button">
        Add review
      </button>
      {loading && <div className="text-red-500">Loading...</div>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Main>
  );
};

export default Home;
