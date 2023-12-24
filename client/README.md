Local
Terminal 1: cd to client, npm start       localhost:3000
Terminal 2: cd to my-project, npm run develop       localhost:1337

Deployment
Front end: https://vercel.com/asweet10/react-ecommerce
Back end: https://strapi-5b97.onrender.com
Back end (admin): https://strapi-5b97.onrender.com/admin

API issues:
1. 401 bad request in console when trying to fetch products
- Checked headers in object in console tab, said token was Bearer undefined
++ Changed from STRAPI_API_URL to REACT_APP_STRAPI_API_URL

2. 403 Unauthorized Error when checking console.log
Solution (https://forum.strapi.io/t/react-frontend-not-connecting-to-backend-403/24651)
++ In Strapi: Go under "Users & Permissions Plugin"
++ Under Roles -> Public, go to Permissions
++ Give find & findOne permissions under "Product" tab

3. 404 or Undefined when trying to get image url from "GET product" response data
Solution (https://forum.strapi.io/t/how-to-retrive-the-image-url-typeerror-cannot-read-properties-of-undefined-reading-formats/21773/8)
- Ensure GET api call has   /products?populate=*   as populate needed to get image data
- Added ? to each level of object to see if information exists
    process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url
- Was reading undefined, probably trying to get img before it existed techincally

4. Similar to 3, need populate=* when filtering objects to access img etc. data
- /products?populate=*&[filters][type][$eq]=featured
-- This call checking type attribute and filtering out those not "featured"

5. Error when following stripe documentation (const stripe = require("stripe")(process.env.STRIPE_KEY))
Solution (https://stackoverflow.com/questions/76585279/this-expression-is-not-callable-error-when-declaring-stripe-function)
- From documentation: https://stackoverflow.com/questions/76585279/this-expression-is-not-callable-error-when-declaring-stripe-function
- When using TypeScript or ES Modules, import & declare stripe differently:
-- import Stripe from 'stripe'
-- const stripe = new Stripe(process.env.STRIPE_KEY, {apiVersion: '2023-08-16'})
- !* However, when doing above, causes new error (Can't use import statement outside of module.export)
- jsconfig.json in backend has compilerOptions: checkJS: true. Set to false or delete file and error disappears