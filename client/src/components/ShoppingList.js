import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import { v4 as uuid } from 'uuid'; // use this temporarily for static data (eventually will be connected to database)
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getItems, deleteItem } from '../actions/itemActions';


const ShoppingList = () => {
    const dispatch = useDispatch();
    // const [items, setItems] = useState([
    //     { id: uuid(), name: 'Eggs'},
    //     { id: uuid(), name: 'Milk'},
    //     { id: uuid(), name: 'Steak'},
    //     { id: uuid(), name: 'Water'},
    // ])

   
    // dispatch the action to the reducer
    useEffect(() => {
        const stableDispatch = () => {
            console.log("dispatching");
            dispatch(getItems());
            console.log("dispatched");
        }
        stableDispatch();
    }, []);

    // get state from redux store
    const items = useSelector((state) => state.item.items); 

    // state.item.items because the state is the object items array in our item reducer, which is what we want to return
    // we can use the state from redux as initial (default) state in useState hook. Note that items will be a copy of that initial state from redux, 
    //  and subsequent changes to it is NOT reflected in the redux state



    return (
        <Container>
            {/* <Button 
             color="dark" 
             style={{marginBottom: '2rem'}}
             onClick={() => {
                 const name = prompt('Enter Item'); // Temporary. Use bootstrap modal later
                 if(name) { // if a name was entered, add to state
                     dispatch(addItem({ id: uuid(), name: name }));
                 }
                 else {
                     prompt('Please enter an item.');
                 }
             }}>
            Add Item
            </Button> */}

            {/* Display the list on the UI */}
            {/* note destructuring of item into {id, name} */} 
            <ListGroup> 
                <TransitionGroup className="shopping-list">
                    {items.map(({_id, name}) => ( 
                        // destructure the item in items, the database uses _id as key name
                        <CSSTransition key={_id} timeout={800} classNames="fade">
                            <ListGroupItem>
                                <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => dispatch(deleteItem(_id))}
                                // note that onClick takes a callback
                                >&times;
                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>

            
        </Container>
    )
}

export default ShoppingList
