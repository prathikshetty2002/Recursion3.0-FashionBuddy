import { firebase, auth, db, analytics } from "../config/firebase";


function addFavorite(id) {
  const currentUser = auth.currentUser.uid;
  // analytics.logEvent('add_to_fav', { item: id});

  return db
    .collection("Users")
    .doc(currentUser)
    .update({
      favorites: firebase.firestore.FieldValue.arrayUnion(id),
    });
}

function removeFavorite(id) {
  const currentUser = auth.currentUser.uid;

  return db
    .collection("Users")
    .doc(currentUser)
    .update({
      favorites: firebase.firestore.FieldValue.arrayRemove(id),
    });
}

function addToCart(newCart) {
  // analytics.logEvent('add_to_cart', { items: newCart});
  const currentUser = auth.currentUser.uid;

  return db.collection("Users").doc(currentUser).update({
    cart: newCart,
  });
}

function submitOrders(cart) {
  const currentUser = auth.currentUser.uid;
  // analytics.logEvent('submit_order', { items: cart});

  return db.collection("Users").doc(currentUser).update({
    orders: firebase.firestore.FieldValue.arrayUnion(cart),
  });
} 

async function getProductImageUrl(photoUrl) {
  const storageRef = firebase.storage().ref()
  return await storageRef.child(`/products/${photoUrl}`).getDownloadURL()
}

export { addFavorite, removeFavorite, addToCart, getProductImageUrl, submitOrders };
