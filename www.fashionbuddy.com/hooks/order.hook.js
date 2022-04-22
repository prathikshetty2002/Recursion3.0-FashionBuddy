import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";

const useOrders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromFirestore() {
      auth.currentUser &&
        await db
          .collection("Users")
          .doc(auth.currentUser.uid)
          .get()
          .then(function (doc) {
            const orders = doc.data().orders;
            // console.log("orders: ", orders);
            if (orders) {
              let dataD = []

              console.log(orders)                
              orders.forEach(o => {Object.keys(o).forEach(id => {
                console.log(id)                
                db.collection("Products").doc(id).get().then(d => {
                  dataD = [
                    ...dataD,
                    {
                      id: d.id,
                      ...d.data()
                    }
                  ]
                })
              })
              setData(dataD)
              console.log("dataD", dataD)
              setLoading(false)
            })
              // db.collection("Products")
              //   .get()
              //   .then(function (querySnapshot) {
              //      querySnapshot.docs
              //       .filter((doc) => !orders.includes(doc.id))
              //       .map(function (doc) {
              //         const docD = {
              //           id: doc.id,
              //           ...doc.data(),
              //         };
              //         setData([...data, docD])
              //       });
              //     setLoading(false);
              //   });
            }
          });
    }

    fetchFromFirestore();
  }, [auth.currentUser]);
  // console.log("data: ", data);

  return {
    data,
    loading,
    error,
  };
};

export { useOrders };
