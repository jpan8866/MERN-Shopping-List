// implements a pop-up box for adding items
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { addItem }from '../actions/itemActions';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'; // use this temporarily for static data (eventually will be connected to database)


const ItemModal = () => {
    // Note that having an application state (redux) doesn't mean we don't need a component level state
    // e.g. with a form, we want the input to be a piece of state such that we can display in real time the input received
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    
    const dispatch = useDispatch()

    // Toggle the modal (pop-up box to prompt for an item addition)
    const toggle = () => {
        setModal(!modal);
    };
    
    // Whenever we type in input, we fire off onChange and we set state of name to whatever is typed in input
    // so that we can visualize what is being inputted (we display name).
    const onChange = (e) => {
        setName(e.target.value);
    };

    // dont really understand the above and below's difference...
    // const onChange = (e) => {
    //     setName({ [e.target.name]: e.target.value });
    // };

    const onSubmit = (e) => {
        e.preventDefault();
        // since not yet connected w backend, use uuid for now
        const newItem = {
            name: name 
        }
        // dispatch new item to reducer to update state
        dispatch(addItem(newItem));
        // close modal 
        toggle();
    }

    return (
        <div>
            <Button color="dark" style={{marginBottom: '2rem'}} onClick={toggle}>Add New Item</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
                <ModalBody>
                    {/* put a form in here to let user input new item */}
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="item">New Item</Label>
                            <Input  type="text" name="name" id="item" onChange={onChange}/>
                        
                        </FormGroup>
                        <Button color="dark" style={{ marginTop: '2rem' }} block>Add Item</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ItemModal