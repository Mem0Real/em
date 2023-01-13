import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../../components/layout";

const ROUTE_PROD_ID = "/categories/[category]/[product]/";
const Categories = () => {
  const router = useRouter();
  const { category } = router.query;
  const items = [
    {
      id: 1,
      name: "Electronics",
      content: [
        { id: 1, name: "Fridge" },
        { id: 2, name: "Stove" },
        { id: 3, name: "Grill" },
      ],
    },
    {
      id: 2,
      name: "Building",
      content: [
        { id: 1, name: "Excavator" },
        { id: 2, name: "Truck" },
        { id: 3, name: "Cement" },
      ],
    },
    {
      id: 3,
      name: "Handheld",
      content: [
        { id: 1, name: "Drill" },
        { id: 2, name: "Paint-Gun" },
        { id: 3, name: "Air-Blower" },
      ],
    },
  ];
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textDecoration: "underline" }}>Categories</h1>
        {items.map((item) => {
          return (
            <div key={item.id}>
              {item.name === category && (
                <div>
                  <h1 style={{ paddingTop: "3em" }}>
                    Category Name: {item.name}
                  </h1>
                  <h2 style={{ marginTop: "12px", marginBottom: "15px" }}>
                    Product List
                  </h2>
                  {item.content.map((product) => {
                    return (
                      <ul key={`product-${product.id}`}>
                        <li>
                          <Link
                            href={{
                              pathname: ROUTE_PROD_ID,
                              query: {
                                category: category,
                                product: product.name,
                              },
                            }}
                          >
                            {product.id}. {product.name}
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Categories;
