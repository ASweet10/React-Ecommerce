# React-Ecommerce

Terminal 1: cd client, npm start    Terminal 2: cd backend, npm run dev
Images: Pexels

Problems & solutions:
1. 401 when fetching products; Console tab => headers: token Bearer undefined
+ ENV variable must be REACT_APP_STRAPI_API_URL, not STRAPI_API_URL

2. 403 Unauthorized (Can't connect to strapi backend instance)
+ In Strapi: "Users & Permissions Plugin"
+ Under Roles -> Public, go to Permissions; need find & findOne in "Product" tab

3. 404 / Undefined image url in "GET product" data
Solution (https://forum.strapi.io/t/how-to-retrive-the-image-url-typeerror-cannot-read-properties-of-undefined-reading-formats/21773/8)
+ GET call needs /products?populate=*; Add ? to check for data (data?.url)
+ Same for filtering objects, like for those not "featured" (/products?populate=*&[filters][type][$eq]=featured)

Strapi backend
- Service suspended to avoid fees; Suspending resets strapi instance
- Log into /admin; generate token; change .env variables in frontend deployment