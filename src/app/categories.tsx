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
       else if(categoryName === "Sort Price") {
        let sortedProducts = [...products];
        sortedProducts.sort((a,b) => a.price - b.price);
        setFilteredProducts(sortedProducts);
       }
       else {
        const filtered = products.filter(({ category }) => category === categoryName);
            setFilteredProducts(filtered);
       }
    }

    return (
        <div className="category-buttons">
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

        </div>
    )
}