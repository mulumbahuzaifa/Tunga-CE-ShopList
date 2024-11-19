const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Retrieve the shopping list.
 *     responses:
 *       200:
 *         description: List retrieved successfully.
 */
router.get('/items', itemController.getAllItems);
/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Add an item to the shopping list.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item added successfully.
 */
router.post('/items', itemController.addItem);
/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Retrieve a specific item from the shopping list.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item retrieved successfully.
 */
router.get('/items/:id', itemController.getItem);
/**
 * @swagger
 * /api/items/{id}:
 *   put:
 *     summary: Edit an item in the shopping list.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item updated successfully.
 */
router.put('/items/:id', itemController.updateItem);
/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     summary: Remove an item from the shopping list.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item removed successfully.
 */
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;