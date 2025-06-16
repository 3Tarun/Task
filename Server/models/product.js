const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    image:{
        type: String
    },
    slug:{
        type: String
    },
     name:{
        type: String
    },
     price:{
        type: String
    },
         emi_amount:{
        type: String
    },
     subscription_amount:{
        type: String
    },
    short_description:{
        type: String
    },
    brand:{
        type: String
    },
    category:{
        type: String
    },
    pro_version:{
        type:Boolean
    },
    description:{
        type: String
    },
    colors:[
        {type:String}
    ],
     specification_data: [
        {
            category: { type: String },
            key: { type: String },
            value: { type: String }
        }
    ],
      standard_subscription: [
    {
      duration_months: Number,
      monthly_subscription: Number,
      refundable_security_deposit: Number
    }
  ],
  exchange_subscription: [
    {
      duration_months: Number,
      first_value: Number, 
            second_value: Number, 

            refundable_security_deposit: Number
    }
  ]

})

const ProductModel = mongoose.model("products",ProductSchema)
module.exports = ProductModel