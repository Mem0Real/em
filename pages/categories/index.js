import React from "react";
import Link from "next/link";
import Layout from "../../components/layout";

const ROUTE_CAT_ID = "/categories/[category]";
const categories = [
  {
    id: 1,
    title: "Electronics",
  },
  {
    id: 2,
    title: "Building",
  },
  {
    id: 3,
    title: "Handheld",
  },
];

export default function Categories() {
  return (
    <Layout>
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>Here are our categories.</h1>
      {categories.map((category) => {
        return (
          <div key={`category-${category.id}`}>
            <Link
              href={{
                pathname: ROUTE_CAT_ID,
                query: { category: category.title },
              }}
            >
              {category.title}
            </Link>
          </div>
        );
      })}
    </div>
    </Layout>
  );
}
