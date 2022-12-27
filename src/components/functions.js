import data from "./data.json";

export const getProducts = (categoryId) =>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res(
                categoryId
                ? data.filter((product)=> product.category === categoryId)
                : data
            );
        }, 1000);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.find((product) => product.id === productId));
      }, 1000);
    });
  };