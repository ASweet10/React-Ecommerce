# 
Terminal 1: cd to client, npm start       localhost:3000
Terminal 2: cd to my-project, npm run develop       localhost:1337

API call problems diagnosed:
1. 401 bad request error in console when trying to fetch products 
- Checked headers in object in console tab, said token was Bearer undefined
- Changed from STRAPI_API_URL to REACT_APP_STRAPI_API_URL
2. 403 Unauthorized Error when checking console.log
Solution (https://forum.strapi.io/t/react-frontend-not-connecting-to-backend-403/24651)
- In Strapi: Go under "Users & Permissions Plugin"
- Under Roles -> Public, go to Permissions
- Give find & findOne permissions under "Product" tab
3. 404 or Undefined when trying to get image url from "GET product" response data
Solution (https://forum.strapi.io/t/how-to-retrive-the-image-url-typeerror-cannot-read-properties-of-undefined-reading-formats/21773/8)
- Ensure GET api call has   /products?populate=*   as populate needed to get image data
- Added ? to each level of object to see if information exists
    process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url
- Was reading undefined, probably trying to get img before it existed techincally
4. Similar to 3, need populate=* when filtering objects to access img etc. data
- /products?populate=*&[filters][type][$eq]=featured
-- This call checking type attribute and filtering out those not "featured"