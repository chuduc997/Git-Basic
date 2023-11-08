class Product {
    name: string;
    price: number;
    description: string;

    constructor(name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

interface Discount {
    discountPercent: number;
    applyDiscount(): number;
}

class SaleProduct extends Product implements Discount {
    discountPercent: number;

    constructor(name: string, price: number, description: string, discountPercent: number) {
        super(name, price, description);
        this.discountPercent = discountPercent;
    }

    applyDiscount(): number {
        const discountAmount = ( this.discountPercent / 100 ) * this.price;
        return this.price - discountAmount;        
    }
}

const coat = new SaleProduct("Coat", 450000, "Very Warm", 20);
const shoes = new SaleProduct("Shoes", 3200000, "Adidas", 50);

console.log(`Product: ${coat.name}`);
console.log(`Price: ${coat.price}`);
console.log(`Descripton: ${coat.description}`);
console.log(`Discount Price: ${coat.applyDiscount()}`);

console.log(`Product: ${shoes.name}`);
console.log(`Price: ${shoes.price}`);
console.log(`Descripton: ${shoes.description}`);
console.log(`Discount Price: ${shoes.applyDiscount()}`);
