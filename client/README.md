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

5. Error when following stripe documentation (const stripe = require("stripe")(process.env.STRIPE_KEY))
Solution (https://stackoverflow.com/questions/76585279/this-expression-is-not-callable-error-when-declaring-stripe-function)
- From documentation: https://stackoverflow.com/questions/76585279/this-expression-is-not-callable-error-when-declaring-stripe-function
- When using TypeScript or ES Modules, import & declare stripe differently:
-- import Stripe from 'stripe'
-- const stripe = new Stripe(process.env.STRIPE_KEY, {apiVersion: '2023-08-16'})
- !* However, when doing above, causes new error (Can't use import statement outside of module.export)
- Narrowed down issue. jsconfig.json in backend has compilerOptions: checkJS: true. Set to false or delete file and error disappears
- lamadev didn't have this file in his api at all, is it necessary?
- Wondering if it's how you're calling / using dotenv

- Files I was looking at / trying to diagnose problem:
- my-project/config/database.js
- UPGRADING.md
- jsconfig.json
- package.json (better-sqlite3?)

POTENTIAL LINKS TO SOLUTIONS, CURRENTLY WORKING SOMEWHAT, ENOUGH TO CALL BACKEND
https://stackoverflow.com/questions/52093618/knex-required-configuration-option-client-is-missing-error
https://www.reddit.com/r/learnprogramming/comments/13jw2yz/getting_the_error_knex_required_configuration/
https://github.com/knex/knex/issues/4032
https://github.com/knex/knex/issues/2023
https://www.google.com/search?q="knex%3A+Required+configuration+option+%27client%27+is+missing"&client=opera&sca_esv=568744667&sxsrf=AM9HkKka9K7hHlFif0aXVF_56GyBukYGyA%3A1695802512917&ei=kOQTZdTNN4zh0PEPucuSkAo&ved=0ahUKEwjU1ZDTrMqBAxWMMDQIHbmlBKIQ4dUDCBA&uact=5&oq="knex%3A+Required+configuration+option+%27client%27+is+missing"&gs_lp=Egxnd3Mtd2l6LXNlcnAiOSJrbmV4OiBSZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiAnY2xpZW50JyBpcyBtaXNzaW5nIkgAUABYAHAAeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQHiAwQYACBB&sclient=gws-wiz-serp
