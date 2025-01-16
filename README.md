# React-Ecommerce
Images: Pexels

1. 401 when fetching products Console > headers: token Bearer undefined
- ENV variable needs REACT_APP prefix (REACT_APP_STRAPI_API_URL)
2. 403 Unauthorized (Can't connect to strapi backend)
- Strapi admin: "Users & Permissions Plugin" > Roles > Public > Permissions > find & findOne checked
3. 404 / Undefined image url in "GET product" data
- GET call needs /products?populate=*; Add ? to check for data (data?.url)
- Same for filtering, like for those not "featured" (/products?populate=*&[filters][type][$eq]=featured)
4. Strapi backend suspended; Suspending resets strapi instance, have to rebuild product info
- Log into /admin; generate token; change .env variables in frontend deployment