/* eslint-disable @next/next/no-img-element */
import { products } from "../../data/products";

export default function CollectionPage({ params }: { params: { slug: string }; }) {
    const filteredProducts = products.filter(
        (product) => product.category === params.slug
    );
    
    return (
        <div className="p-6">
        <h1 className="text-2x1 font-bold mb-6">
            {params.slug.replace("-", " ")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
                <div key={product.id} className="border p-4 text-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="mx-auto mb-3 h-32 object-contain"
                    />
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-red-600">¥{product.price}</p>
                    <button className="mt-2 rounded bg-red-600 px-4 py-2 text-white">
                        Add to Cart
                    </button>
        </div>
            ))}
        </div>
    </div>
    );
    }