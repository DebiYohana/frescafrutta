'use client';

import React, { useState, useEffect } from 'react';

function OrderForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  const [orders, setOrders] = useState<{ name: string; address: string; quantity: number; paymentMethod: string }[]>([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && address && quantity > 0) {
      const newOrder = { name, address, quantity, paymentMethod };
      const newOrders = [...orders, newOrder];
      setOrders(newOrders);
      localStorage.setItem('orders', JSON.stringify(newOrders)); // Simpan di localStorage
      alert('Pemesanan berhasil dikirim!');
      setName('');
      setAddress('');
      setQuantity(1);
      setPaymentMethod('Cash on Delivery');
    } else {
      alert('Mohon isi semua kolom dengan benar.');
    }
  };

  const handleDelete = (index: number) => {
    const newOrders = orders.filter((_, i) => i !== index);
    setOrders(newOrders);
    alert('Pemesanan berhasil dihapus! (permanen dari tampilan, tetapi masih di localStorage)');
  };

  return (
    <div className="order-container">
      <h2 className="order-heading">Formulir Pemesanan</h2>

      <form onSubmit={handleSubmit} className="order-form">
        <div className="input-group">
          <label htmlFor="name">Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="address">Alamat Pengiriman:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            rows={4}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="quantity">Jumlah Barang:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            required
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="paymentMethod">Metode Pembayaran:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            className="input-field"
          >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Credit Card">Credit Card</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Kirim Pemesanan</button>
      </form>

      <div className="order-list">
        <h3>Daftar Pemesanan</h3>
        <table className="order-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Jumlah</th>
              <th>Pembayaran</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.quantity}</td>
                <td>{order.paymentMethod}</td>
                <td>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .order-container {
          max-width: 700px;
          margin: 0 auto;
          font-family: 'Arial', sans-serif;
          color: #333;
          background: #fdf4e3;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .order-heading {
          text-align: center;
          color: #d36c6c;
          text-shadow: 0 0 5px #d36c6c, 0 0 10px #d36c6c;
          margin-bottom: 20px;
          font-size: 2rem;
        }

        .order-form {
          background-color: #fff8e1;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .input-group {
          margin-bottom: 1.5em;
        }

        .input-group label {
          color: #d36c6c;
          font-weight: bold;
          display: block;
          margin-bottom: 10px;
        }

        .input-field {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          color: #333;
          background-color: #fff;
          border: 1px solid #d36c6c;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .input-field:focus {
          outline: none;
          border-color: #d36c6c;
          background-color: #ffe4b5;
        }

        .submit-button {
          padding: 12px 24px;
          background-color: #d36c6c;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #b85b5b;
        }

        .order-list {
          margin-top: 3em;
        }

        .order-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          border-radius: 8px;
          overflow: hidden;
        }

        .order-table th, .order-table td {
          padding: 12px;
          text-align: left;
          border: 1px solid #ddd;
        }

        .order-table th {
          background-color: #d36c6c;
          color: white;
        }

        .order-table td {
          background-color: #fff8e1;
          color: #333;
        }

        .order-table tr:hover {
          background-color: #ffe4b5;
        }

        .delete-button {
          padding: 8px 14px;
          background-color: red;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 8px;
          transition: background-color 0.3s ease;
        }

        .delete-button:hover {
          background-color: darkred;
        }
      `}</style>
    </div>
  );
}

export default OrderForm;
