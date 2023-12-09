import deleteProduct from './redux/deleteProduct.js'
import changePrice from "./redux/changePrice.js";
import changeProdName from "./redux/changeProdName.js";
import changeId from "./redux/changeId.js";
import { useDispatch } from "react-redux";

export default function Product(props) {
    const dispatch = useDispatch();
    const { price, id, prodName } = props.product;
    
    return(
        <li>
            {`${prodName} ${price} `}
            <button 
                className="button"
                onClick={() => {
                    dispatch(changePrice(price))
                    dispatch(changeProdName(prodName))
                    dispatch(changeId(id))
                }}
            >Edit</button>
            <button 
                className="button"
                onClick={() => {
                    dispatch(deleteProduct(id))
                    dispatch(changeProdName(''))
                    dispatch(changePrice(''))
                    dispatch(changeId(''))
                }}
            >Delete</button>
        </li>
    )
}