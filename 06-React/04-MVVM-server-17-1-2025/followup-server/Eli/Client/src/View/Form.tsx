import React from "react";
import style from "./Form.module.scss";

function Form() {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const description = form.get("description") as string;
    const image = form.get("image") as string;
    const price = form.get("price") as string;
    const category = form.get("category") as string;
    const priceNumber = parseFloat(price);

    console.log(name, description, image, priceNumber);
    addProduct(name, description, category, image, priceNumber);
  }

  async function addProduct(
    name: string,
    category: string,
    description: string,
    image: string,
    price: number
  ) {
    try {
        const inStock=true;
        const response = await fetch("http://localhost:3000/api/products/add-product",{
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify({
              name: name,
              price: price,
              category:category,
              description: description,
              image: image,
              
              inStock
            }),
          });
          const data =await response;
          console.log(data)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form onSubmit={(e) => submit(e)} className={style.form}>
      <input type="text" placeholder="add product name" name="name" required />
      <input
        type="text"
        placeholder="add product description"
        name="description"
        required
      />
      <input
        type="text"
        placeholder="add product image"
        name="image"
        required
      />
      <input
        type="text"
        placeholder="add product category"
        name="category"
        required
      />
      <input
        type="number"
        placeholder="add product price"
        name="price"
        required
      />
      <input type="submit" value="submit" />
    </form>
  );
}

export default Form;
