import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  priceOff: Number,
  rating: Number,
  imgUrl: {
    required: true,
    type: String,
  },
  itemSold: Number,
  likes: Number,
  dislikes: Number,
  description: {
    type: String,
  },
  category: {
    type: [String],
    required: true,
  },
  ingredients: {
    type: [String],
  },
  allergens: {
    type: [String],
  },
  availability: {
    type: Boolean,
    default: true,
  },
  preparationTime: {
    type: Number, // Time in minutes
  },
  tags: {
    type: [String],
  },
  calories: {
    type: Number,
  },
  servingSize: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Middleware to update the updatedAt field on save
menuItemSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;
