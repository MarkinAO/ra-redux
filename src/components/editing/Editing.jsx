import { useDispatch, useSelector } from "react-redux";
import{useState, useEffect} from "react";
import Product from "./Product";
import "./Editing.css";
import changePrice from "./redux/changePrice.js";
import changeProdName from "./redux/changeProdName.js";
import saveProduct from "./redux/saveProduct.js";
import editProduct from './redux/editProduct.js';
import changeId from "./redux/changeId.js";
import { v4 as uuidv4 } from 'uuid';

export default function Editing() {    
    const dispatch = useDispatch();
    const { prodName, price, id, products } = useSelector((state) => state.product);
    const [filterProd, setFilterProd] = useState(products);
    const [filter, setFilter] = useState(products);
    let debounceCheck = true;

    const setDefaultState = () => {
        dispatch(changeProdName(''))
        dispatch(changePrice(''))
        dispatch(changeId(''))
    }

    useEffect(() => {
        const newProducts = products.filter(prod => {
            if(prod.prodName.includes(filter)) {
                return prod
            }
        })
        setFilterProd(newProducts)
    }, [products, filter])

    return(
        <>
            <input 
                type="text"
                value={prodName}
                onChange={(e) => {
                    dispatch(changeProdName(e.target.value))
                }}
            />
            <input 
                type="text" 
                value={price}
                onChange={(e) => {
                    dispatch(changePrice(e.target.value))
                }}
            />
            <button 
                className="button"
                onClick={(e) => {
                    e.preventDefault()
                    if(id.length > 0) {
                        dispatch(editProduct({prodName, price, id}))
                    } else {
                        dispatch(saveProduct({prodName, price, id: uuidv4()}))
                    }                    
                    setDefaultState()
                }}
            >Save</button>
            {id && 
                <button
                    className="button"
                    onClick={() => setDefaultState()}
                >Cancel</button>
            }
            <div>
                Фильтр:
                <input 
                    type="text" 
                    value={filter}
                    onChange={(e) => {
                        if(debounceCheck) {
                            debounceCheck = false;
                            setFilter(e.target.value)
                            setTimeout(() => {                                
                                debounceCheck = true
                            }, 300)                            
                        }                        
                    }}
                />
                <button
                    className="button"
                    onClick={() => {
                        setFilter('')
                    }}
                >Clear</button>
            </div>

            <ul className="products">
                {filterProd.map(prod => {
                    return(
                        <Product product={prod} key={prod.id} />                        
                    )
                })}
            </ul>
        </>
    )
}