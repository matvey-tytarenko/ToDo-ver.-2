const ToDoModel = require("../Models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const ToDo = await ToDoModel.find();
  res.status(200).send(ToDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text })
    .then((data) => {
      console.log("Added Successfully");
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => console.error(`Saving Error: ${err}`));
};

module.exports.UpdateToDo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text: text }).then(() => {
    res.set(201).send("Updated Successfully!");
    console.log("Updated Successfully!");
  }).catch((err) => console.error(`Update Error ${err}`))
};

module.exports.DeleteToDo = async (req, res) => {
    const {_id} = req.body;

    ToDoModel.findByIdAndDelete(_id).then(() => {
         res.set(201).send("Deleted Successfully!");
         console.log("Deleted Successfully!");
    }).catch((err) => console.error(`Delete Error: ${err}`))
} 