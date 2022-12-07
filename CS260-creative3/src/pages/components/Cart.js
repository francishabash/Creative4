import Item from "./Item.js"


export default function Cart(props){
    const {items, error, updatecart} = props;
    console.log("items: ",items);
    return (
        <div>
        {items.map( item => (
        <div class="cartItemz">
        <Item item={item} error={error} updatecart={updatecart} key={item.id}/>
        </div>
      ))}
        </div>
    );
}