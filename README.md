# Ecommerce (react)
## Tech
- React
- Tailwind CSS
- Express/Node.js
- Context API for cart/checkout
  
## Demo
### Note: Slow initial load time due to Render free-tier backend hosting
[React Ecommerce](https://react-ecommerce-eight-beta.vercel.app)

## Notes
- Backend .env (PORT, MONGDB_URI, SERVER_URL)
1. 401 when fetching products (Console -> headers: token Bearer undefined)
- ENV variable needs REACT_APP prefix (REACT_APP_STRAPI_API_URL)
2. 404 / Undefined image url in "GET product" data
- GET call needs /products?populate=*; Add ? to check for data (data?.url)
- Same for filtering, like for those not "featured" (/products?populate=*&[filters][type][$eq]=featured)
3. Strapi backend suspended; Suspending resets strapi instance, have to rebuild product info
- Log into /admin; generate token; change .env variables in frontend deployment
