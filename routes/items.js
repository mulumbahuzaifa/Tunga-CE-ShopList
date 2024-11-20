const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { authenticate } = require('../middleware/auth');

/**
 * @swagger
  * /api/items:
 *   get:
 *     summary: Retrieve the shopping list with optional filtering and sorting.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: name
 *         in: query
 *         description: Filter items by name.
 *         required: false
 *         schema:
 *           type: string
 *       - name: quantity
 *         in: query
 *         description: Filter items by quantity.
 *         required: false
 *         schema:
 *           type: integer
 *       - name: notes
 *         in: query
 *         description: Filter items by notes.
 *         required: false
 *         schema:
 *           type: string
 *       - name: sortBy
 *         in: query
 *         description: Sort items by a specific field.
 *         required: false
 *         schema:
 *           type: string
 *       - name: order
 *         in: query
 *         description: Order of sorting (asc or desc).
 *         required: false
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *     responses:
 *       200:
 *         description: List retrieved successfully.
 *       401:
 *         description: Unauthorized
 */
router.get('/items', authenticate, itemController.getAllItems);
/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Add an item to the shopping list.
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: Unauthorized
 */
router.post('/items', authenticate, itemController.addItem);
/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Retrieve a specific item from the shopping list.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item retrieved successfully.
 *       401:
 *         description: Unauthorized
 */
router.get('/items/:id', authenticate, itemController.getItem);
/**
 * @swagger
 * /api/items/{id}:
 *   put:
 *     summary: Edit an item in the shopping list.
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: Unauthorized
 */
router.put('/items/:id', authenticate, itemController.updateItem);
/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     summary: Remove an item from the shopping list.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item removed successfully.
 *       401:
 *         description: Unauthorized
 */
router.delete('/items/:id', authenticate, itemController.deleteItem);

module.exports = router;