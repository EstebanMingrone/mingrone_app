import './ItemListContainer.css';
import { Text, CircularProgress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./functions";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    let { categoryId } = useParams();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getProducts(categoryId)
        .then((products) => setProducts(products))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [categoryId]);
  
    return (
      <>
        <h1>
          {categoryId ? `Tipo ${categoryId}` : "Todos los instrumentos"}
        </h1>
        <div className="list-container">
          {loading ? (
            <CircularProgress isIndeterminate color="green.300" />
          ) : products.length > 0 ? (
            <ItemList products={products} />
          ) : (
            <h1>Productos no encontrados</h1>
          )}
        </div>
      </>
    );
  };
  

export default ItemListContainer;