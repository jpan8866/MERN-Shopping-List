// Routes will go here
// We want to use the express router
// Note this is an API (url is api/items as defined in server)

const express = require('express');
const router = express.Router();

// Item model. need this to make queries (Item.find, .save etc.)

const Item = require('../../models/Item'); // es6 would be import statement

// @route GET api/items
// @desc GET ALL Items
// @access Public
router.get("/", (req,res) => {
    // fetch items in database
    Item.find()
        .sort({ date: -1 }) // -1 for descending
        .then(items => res.json(items))
})
// Note whenever we hit the end point api/items, we are routed to this very file, hence '/'

// @route POST api/items
// @desc Create an Item
// @access Public
router.post("/", (req,res) => {
    const newItem = new Item({
        name: req.body.name // bodyParser allows us to do this
        // date is inserted automatically
    });
    // Note that Mongoose documents (e.g. newItem) track changes (see documentation)
    // Created a new item, save to database:
    newItem.save().then(item => res.json(item)).catch(err => res.status(404).json({success: false}));
})

// @route DELETE api/items
// @desc Delete an Item
// @access Public
router.delete("/:id", (req,res) => {
    Item.findById(req.params.id) // this gets the id from the request url
     .then(item => item.remove().then(() => res.json({success: true})))
     .catch(err => res.status(404).json({success: false}));
     // When we catch the error, we want to set the status as 404 to highlight error. Otherwise it is 200, which implies theres no error.
}) 

// @route PUT api/items
// @desc Update an Item
// @access Public
router.put("/:id", (req,res) => {
    Item.findByIdAndUpdate(req.params.id, {name: req.body.name}).then(() => res.json({success: true})).catch(err => res.status(404).json({success: false}));

    /* ALTERNATELY: */
    // Item.findById(req.params.id, function (err, doc) {
    //     if (err) res.status(404).json({ success: false });
    //     doc.name = req.body.name;
    //     doc.save(() => res.json({success: true}));


    /* THE BELOW IS DEPRECATED */
    // Item.findById(req.params.id) 
    //     .then(item => item.update( {_id: req.params.id}, {name: req.body.name} ).then(() => res.json({success: true})))
    //     .catch(err => res.status(404).json({success: false}));  
}) 

// export default router; // es6
module.exports = router; 