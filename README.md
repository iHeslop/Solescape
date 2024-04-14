# Solescape

# React e-cShop Website

## Outline

This project is designed to reinforce your React learnings and make sure that you are comfortable with most aspect of the framework.
With this project you will practice how to:

- Fetch Data within a React App
- Use react-router-dom
- Use Firebase/Firestore

## MVP

At a minimum your e-shop website should have two pages:

- Home Page
  - This will contain:
    - A Grid of products
    - Carousel of featured products
    - Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
- All products should be stored in Firestore:
  - You should store the following information:
    - quantity
    - variants (could be colors, sizes, etc)
    - price per unit
    - name
    - image url
    - favourited or not (boolean)
      All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

### Bonus

Using Firestore and react create, a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

- List of products in cart

  - Ability to change quantity of products in cart
  - Ability to remove items from cart

### Bonus extra bonus

- Try and add Stripe integration to "pay" for the items in the cart (TEST MODE)
  - 4242 4242 4242 4242
- TIPS :

1. Make sure your site is scoped to one category of products

## Useful links

- [React-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Dummy JSON](https://dummyjson.com/)
- [Fake Store](https://fakestoreapi.com/)
