// OrdersPage.tsx
import React, { useEffect, useState } from 'react';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId) {
        alert('Please log in first');
        return;
      }

      const response = await fetch(`http://localhost:3000/api/orders/user-orders?userId=${userId}`);
      const data = await response.json();
      setOrders(data.orders);
    };

    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div key={order.id}>
            <p>Product ID: {order.product_id}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersPage;
