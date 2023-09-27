//import Stripe from 'stripe'
//const stripe = new Stripe(process.env.STRIPE_KEY, {apiVersion: '2023-08-16'})
("use strict")
const stripe = require("stripe")(process.env.STRIPE_KEY)

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi}) => ({
    async create(ctx) {
        const { products } = ctx.request.body

        try{
            const lineItems = await Promise.all(
                // For each item from front end...
                products.map(async (product) => 
                {   
                    // Check for product id
                    const item = await strapi
                        .service("api::product.product")
                        .findOne(product.id)
    
                        return {
                            price_data:{
                                currency:"usd",
                                product_data:{
                                    name: item.title,
                                },
                                unit_amount: item.price * 100
                            },
                            quantity: item.quantity
                        }
                })
            )

            const session = await stripe.checkout.sessions.create({
                mode: "payment",
                success_url: `${process.env.CLIENT_URL}?success=true`,
                cancel_url: `${process.env.CLIENT_URL}?success=false`,
                line_items: lineItems,
                shipping_address_collection:{allowed_countries:["US", "CA"]},
                payment_method_types: ["card"],

            })

            await strapi.service("api::order:order").create({
                data:{
                    products,
                    stripeId: session.id,
                }
            })

            return { stripeSession: session }
        } catch(err) {
            ctx.response.status = 500
            return { err }
        }
    }
}))