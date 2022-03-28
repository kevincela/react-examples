export default function ShoppingCart(props) {
    return <div>
        <h1>Shopping Cart</h1>
        {props.items.map(item => (<div key={item.name}>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Quantity: {item.quantity}</p>
        </div>))}
    </div>
}