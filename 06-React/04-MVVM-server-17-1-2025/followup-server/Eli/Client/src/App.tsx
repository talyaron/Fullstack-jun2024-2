import "./App.css";
import getAllProducts from "./View/getAllProducts";
import Form from "./View/Form";

function App() {
  const { getProducts, renderProduct } = getAllProducts();

  return (
    <>
      <Form />
      <button onClick={getProducts}> get products</button>
      {renderProduct()}
    </>
  );
}

export default App;
