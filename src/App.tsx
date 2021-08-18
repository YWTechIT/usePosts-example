/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "./components/container";
import Card from "./components/molecules/card";
import usePosts from "./hooks/useposts";

const App = () => {
  const [data, loading, error ]= usePosts();

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Container>
      {data.map((item) => (
        <Card item={item}></Card>
      ))}
    </Container>
  );
};

export default App;
