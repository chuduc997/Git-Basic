interface Product1 {
    name: string;
    quantity: number;
    price: number;
}

abstract class Invoice {
    products: Product1[];

    constructor(products: Product1[]) {
        this.products = products;
    }

    abstract caculateTotal(): number;
}

class PurchaseInvoice extends Invoice {
    caculateTotal(): number {
        let total = 0;
        for(const product of this.products) {
            total += product.quantity * product.price;
        }
        return total;
    }
}

class SalesInvoice extends Invoice {
    caculateTotal(): number {
        let total = 0;
        for(const product of this.products) {
            total += product.quantity * product.price;
        }
        return total;
    }
}

const purchaseProducts: Product1[] = [
    {name: "Coat", quantity: 6, price: 50 },
    {name: "Shoes", quantity: 8, price: 200 },
];

const salesProducts: Product1[] = [
    {name: "Pant", quantity: 4, price: 35 },
    {name: "Jacket", quantity: 9, price: 80 },
];

const purchaseInvoise = new PurchaseInvoice(purchaseProducts);
const salesInvoise = new PurchaseInvoice(salesProducts);

console.log("Purchase Invoice Total: " + purchaseInvoise.caculateTotal() + "$");
console.log("Sales Invoice Total: " + salesInvoise.caculateTotal() + "$");