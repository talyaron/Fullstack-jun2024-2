import React from "react";

const AddProductVM = () => {
  async function addProduct(
    name: string,
    description: string,
    price: number,
    imgUrl: string
  ) {
    const response = await fetch(
      "http://localhost:3000/api/products/add-product",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, price, imgUrl }),
      }
    );

    if (response.ok) {
      console.log("product added in !");
      alert("product added!");
    } else {
      alert("adding product error");

      console.error("adding product failed");
    }
  }

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const name = form.get("name") as string;
    const description = form.get("description") as string;
    const price = form.get("price") as unknown as number;
    const imgUrl = form.get("imgUrl") as string;
    const secretPassword = form.get("description") as string;
    if (secretPassword !== "12345") {
      alert("WRONG PASSWORD!");
      return;
    }
    if (!name || !description || !price || !imgUrl) {
      return alert("all fields must be full");
    }
    addProduct(name, description, price, imgUrl);
  }
  return {
    addProduct,
    submitForm,
  };
};

export default AddProductVM;
