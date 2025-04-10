import { useState } from "react";

export function useAddProductVM() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/products/addproduct', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, image })
    });

    const data = await res.json();
    alert(data.message);
    setName('');
    setPrice('');
    setImage('');
  };
  return {name, setName, price, setPrice, image, setImage, handleSubmit}
}