import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();
  const { category, product } = router.query;
  const products = [
    {
      id: 1,
      name: "Fridge",
      content: [
        {
          id: 1,
          name: "LCD-Display White 15ft Fridge",
          detail: "This one of a kind fridge is one of a kind.",
        },
        {
          id: 2,
          name: "Black one door Fridge",
          detail: "Black is beautiful.",
        },
      ],
    },
    {
      id: 2,
      name: "Stove",
      content: [
        {
          id: 1,
          name: "LCD-Display White Stove",
          detail: "This one of a kind stove is one of a kind.",
        },
        {
          id: 2,
          name: "Black one door stove",
          detail: "Black is stovutiful.",
        },
      ],
    },
    {
      id: 3,
      name: "Grill",
      content: [
        {
          id: 1,
          name: "White Big Grill",
          detail: "This one of a kindGrill is one of a kind.",
        },
        {
          id: 2,
          name: "Black one door Grill",
          detail: "Black is griutiful.",
        },
      ],
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Category Name: {category}</h1>
      <h1>Product Name: {product}</h1>
      <br />
      {products.map((prod) => {
        return (
          <div key={prod.id}>
            {prod.name === product &&
              prod.content.map((productContent) => {
                return (
                  <div
                    key={`Current Product: ${productContent.id}`}
                    style={{ marginTop: "5em" }}
                  >
                    <h2>{productContent.name}</h2>
                    <h4>{productContent.detail}</h4>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
