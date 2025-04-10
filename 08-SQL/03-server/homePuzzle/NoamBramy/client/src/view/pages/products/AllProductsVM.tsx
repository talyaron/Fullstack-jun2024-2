import { useEffect, useState } from 'react';
import { Product } from '../../../model/product/productModel';



export function useAllProductsVM() {
  const [products, setProducts] = useState<Product[]>([]);
  const [userLogged, setUserLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [boughtItems, setBoughtItems] = useState<Product[]>([]); 

  function fetchProducts() {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }

  function fetchBoughtItems() {
    if (userId === null) return;

    fetch(`http://localhost:3000/api/cart/bought/${userId}`)
      .then((response) => response.json())
      .then((data) => setBoughtItems(data))
      .catch((error) => console.error('Error fetching bought items:', error));
  }

  function fetchCart() {
    if (userId === null) return;

    fetch(`http://localhost:3000/api/cart/${userId}`)
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.error('Error fetching cart:', error));
  }

  function checkCookie() {
    fetch("http://localhost:3000/api/users/cookieUser", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data: any) => {
        if (data.success) {
          setUserLogged(true);
          setUserId(data.userId);
        } else {
          setUserLogged(false);
        }
      })
      .catch((error) => {
        console.error("Error checking cookie:", error);
        setUserLogged(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function buyProduct(product_id: number) {
    if (userId === null) {
      alert('User is not authenticated');
      return;
    }
        
    fetch(`http://localhost:3000/api/cart/buy/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_id })
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        fetchCart();
        fetchBoughtItems();
      })
      .catch((error) => console.error('Error buying product:', error));
  }
  
  
  function addToCart(product_id: number) {
    if (userId === null) {
      alert('User is not authenticated');
      return;
    }

    fetch('http://localhost:3000/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_id, user_id: userId }),
    })
      .then((res) => res.json())
      .then((data) => {
      alert(data.message);
      fetchProducts()
      fetchCart();
  })
      .catch((error) => console.error('Error adding to cart:', error));
  }

  useEffect(() => {
    checkCookie();
  }, []);

  useEffect(() => {
    if (userLogged) {
      fetchProducts();
      fetchCart();
      fetchBoughtItems();
    }
  }, [userLogged]);

  return { products, addToCart, cartItems, boughtItems, buyProduct, userLogged, userId, loading };
}
