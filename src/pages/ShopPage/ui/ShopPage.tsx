import { useEffect, useState } from "react";
import api from "../api/api";

export default function ShopPage() {
    const [products, setProducts] = useState<any[]>([])
    useEffect(() => {
        setProducts(api)
    }, [])
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Shop page</h1>
            {
                products.map( (product: any) => (
                    <div key={product.id} className="border p-4 m-4">
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="font-bold">${product.price}</p>
                        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mt-2" />
                        <button>add to cart</button>
                    </div>
                ))
            }
        </div>
    );
}