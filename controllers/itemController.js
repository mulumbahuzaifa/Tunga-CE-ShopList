const Item = require('../models/item');

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json({ data: items });
    // res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching items' });
  }
};

exports.addItem = async (req, res) => {
  try {
    const { name, quantity, notes } = req.body;

    if (!name && !quantity && !notes) {
      return res.status(400).json({ message: 'Name, quantity and notes are required' });
    }

    const item = await Item.create({ name, quantity, notes });
    res.status(201).json({ message: 'Item added successfully', data: item });
  } catch (err) {
    res.status(500).json({ message: 'Error adding item' });
  }
};

exports.getItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findByPk(id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
    } else {
      res.status(200).json({ data: item });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching item' });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, quantity, notes } = req.body;
    const item = await Item.findByPk(id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
    } else {
      await item.update({ name, quantity, notes });
      res.status(200).json({ message: 'Item updated successfully', data: item });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating item' });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findByPk(id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
    } else {
      await item.destroy();
      res.status(200).json({ message: 'Item removed successfully' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting item' });
  }
};