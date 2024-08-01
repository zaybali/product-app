"use client"

import { ProductItemType } from "./product-type"

type SetFilteredProductsType =(products: ProductItemType[]) => void;

type CategoryType = {
    categories: string[]
    setFilteredProducts: SetFilteredProductsType
    products: ProductItemType[]
}

export default function Categories({ categories, setFilteredProducts, products }: CategoryType) {
    
    const selectCategory = (categoryName: string) => {
       if(categoryName === "All") {
        setFilteredProducts(products);
       }
       else {
        const filtered = products.filter(product => product.category === categoryName);
            setFilteredProducts(filtered);
       }
    }

    return (
        <>
            {
                categories.map((category, i) => (
                    <button 
                        key={category + i} 
                        onClick={() => { selectCategory(category) }}
                    >
                        {category}
                    </button>
                ))
            }

        </>
    )
}