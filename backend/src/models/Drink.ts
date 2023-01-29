import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IDrink {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const drinkSchema = new Schema<IDrink>({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

const Drink = model<IDrink>('Drink', drinkSchema);

module.exports = Drink;