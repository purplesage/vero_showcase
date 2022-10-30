import React from "react";
import ProductForm from "../components/form-inputs/ProductForm";
import ProductTable from "../components/product-table/ProductTable";
import AddProductForm from "../components/form-inputs/AddProductForm";
const ZustandDashboard = () => {
  return (
    <div>
      <AddProductForm />
      <ProductTable />
    </div>
  );
};

export default ZustandDashboard;
