import { getStoredCart } from "../../utilities/fakedb"


export const ProductsLoader =async()=>{
    const productsData=await fetch('products.json')
    
    const products=await productsData.json();
    const saveCart=getStoredCart();
    const initialCart=[];
    // console.log(saveCart)
    for(const id in saveCart){
        const addedProducts=products.find(product=>product.id===id)
        // console.log(addedProducts)
        if(addedProducts){
            const quantity=saveCart[id];

            // console.log(id,quantity);
            addedProducts.quantity=quantity;
            // console.log(addedProducts);
            initialCart.push(addedProducts)
            
        }

    }
    // console.log('prev',previousCart)
    return {products:products,initialCart:initialCart};
}