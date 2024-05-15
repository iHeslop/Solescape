# Solescape

**Live Demo:** https://solescape.onrender.com/

## Demo & Snippets

- A demonstration of the landing page

  ![alt text](<screenshots/Screenshot 2024-05-15 105115.png>)

- A view of the featured section of the landing page

  ![alt text](<screenshots/Screenshot 2024-05-15 105051.png>)

- A representation of the product page, with more information about the selected product as well as a size selector

  ![alt text](<screenshots/Screenshot 2024-05-15 105349.png>)

- The cart system, with stacked quantities and correct price calculations.

  ![alt text](<screenshots/Screenshot 2024-05-15 111822.png>)

- A mobile demonstration of the application

  ![alt text](<screenshots/Screenshot 2024-05-15 112750.png>) ![alt text](<screenshots/Screenshot 2024-05-15 112928.png>) ![alt text](<screenshots/Screenshot 2024-05-15 113019.png>)

---

## Description / Requirements

Solescape is a fully comprehensive online sneaker store, with the ability to search for sneakers, browse through your favourite brands and add and remove items from your virtual cart. This project makes use of ReactJS and Firebase to create an efficient, aesthetic and streamlined eShop.

With this project, the plan was to practice and implement how to:

- Fetch Data from within a React App
- Use react-router-dom
- Use Firebase/Firestore
- Filter and search through a database

At a minimum the e-shop website should have two pages:

- Home Page

  - This will contain:
    - A Grid of products
    - Carousel of featured products
    - Product Page (with id parameter) Similar to a product page on another site, allows a user to add to cart and select product variants.

- All products should be stored in Firestore:

  - Store the following information:
    - quantity
    - variants (could be colors, sizes, etc)
    - price per unit
    - name
    - image url
    - favourited or not (boolean)
      All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

- Using Firestore and react create, a cart system. Create a cart page in the react app Add logic to prevent users from adding items to cart that are no longer in stock. Will have to check the current cart and the product quantity Cart page should have the following:

- List of products in cart

  - Ability to change quantity of products in cart
  - Ability to remove items from cart

---

## Build Steps

The database is hosted on google firestore, and should be able to be accessed by the front end application until 12/08/2024

Clone the repository, and from the directory, run the following commands

```
npm install
```

```
npm run dev
```

---

## Design Goals / Approach

- I wanted Solescape to appear and feel like an authentic sneaker store, with a modern and sleek aesthetic, so as to feel as close to a genuine sneaker store as possible.
- I implemented a cart system that makes real time updates to the database, with quantity, descriptions and more for each sneaker. The sizes within the database are updated in real time if added or removed from the cart. Cart system also correctly calculates the sub-total as you add more items or remove them from the cart.
- Mobile responsiveness added to create a seamless application that can be viewed and used on any device. This again contributed to the authenticity and overall design approach for the project.

---

## Features

- **Search Functionality:** Ability to search through database by a specific search term.
- **Featured Carousal:** Home page contains a continuously rotating carousal of the current featured products within the Solescape database.
- **Detailed Information:** Each sneaker has its own product page, which contains detailed information about the product, as well as a modal to zoom in and inspect each sneakers design an aesthetic closer.
- **Cart System:** Solescape uses a simple cart system to collect and store your cart during your browsing session. You can add or remove a sneaker from your cart(of your chosen size of course) and this is reflected in realtime through database updates, as the sneaker size will be removed from the database as well. If an item isnt in stock, it wont be available to be added to your cart.
- **Search by Brand:** Have a favourite brand of sneaker? Solescape implements a brand search system to find the latest sneakers from your favourite brands.
- **Design and Aesthetic:** Solescape is design aesthetic is all based around minimalist street culture, creating an efficient and seamless looking eShop.
- **Mobile Responsive Design:** Mobile friendly design, so that Solescape runs and functions smoothly on both a desktop and mobile device.

---

## Technologies:

- **React**
- **JavaScript**
- **SCSS**
- **Firebase**

---

## Known issues

- As per Google Firestore security requirements, constant updating of the security rules are required to ensure that the database is constantly accessible by the front end website.
- Closing application before removing sneakers from cart will permanently remove the sneaker size from the database. Could cause potential database issues.

---

## Future Goals

- Test Stripe integration
- User login and sign-up with database integration (as opposed to using context for cart)

---
