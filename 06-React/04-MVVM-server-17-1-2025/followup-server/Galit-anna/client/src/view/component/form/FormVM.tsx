export async function addProduct(product: any) {
    try {
      const res = await fetch('http://localhost:3000/api/products/add-products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
  
      if (!res.ok) {
        throw new Error(`Failed to add product: ${res.statusText}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  }
  