import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://agroveg.herokuapp.com/orders/user/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"># </th>
            <th scope="col">id</th>
            <th scope="col">Items </th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {orders.map((order, index) => (
            <tr key={order?._id + index}>
              <td>{index + 1}</td>
              <td>{order?._id}</td>
              <td>
                {order?.products.map((item) => (
                  <li>{item.name} </li>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
