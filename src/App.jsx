import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [product, setProduct] = useState([]);

  async function getProduct() {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let result = await res.json();
      console.log('Product datas', result);
      setProduct(result);
    } catch (error) {
      console.log('Error While fetching data', error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {product.length > 0 &&
              product.map((item, index) => {
                const { id, name, phone, website, email } = item;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{website}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
