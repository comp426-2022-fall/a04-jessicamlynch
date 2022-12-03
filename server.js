#! /usr/bin/env node

// Load dependencies
import minimist from 'minimist';
import express from 'express';
import { roll } from './lib/roll.js'

// set up
const args = minimist(process.argv.slice(2));
const app = express();

// 1. port arbitrary or default 5000
const port = args.port || 5000;

// 5. Endpoint /app/roll/ accept either JSON or URLencoded string
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. default api endpoint returns '404 not found'
app.get('*', (req, res) => {
  res.status(404).send('404 not found');
});

// 3. Check endpoint at /app/ that returns '200 OK'
app.get('/app/', (req, res) => {
  res.status(200).send('200 OK');
});

const default_sides = 6;
const default_dice = 2;
const default_rolls = 1;

// 4. Endpoint /app/roll/ for default 2 six-sided dice rolls at once
app.get('/app/roll/', (req, res) => {
  res.send(roll(default_sides, default_dice, default_rolls));
});

app.post('/app/roll/', (req, res) => {
  res.send(roll(parseInt(req.body.sides),
                parseInt(req.body.dice),
                parseInt(req.body.rolls)));
});

// 6. endpoint /app/roll/:sides/ for default rolls and dice, input sides
app.get('/app/roll/:sides/', (req, res) => {
  res.send(roll(parseInt(req.body.sides),
                default_dice,
                default_rolls));
});

// 7. endpoint /app/roll/:sides/:dice/ for default rolls, input sides and dice
app.get('/app/roll/:sides/:dice/', (req, res) => {
  res.send(roll(parseInt(req.body.sides),
                parseInt(req.body.dice),
                default_rolls));
});

// 8. endpoint /app/roll/:sides/:dice/:rolls/ for input sides, dice, and rolls
app.get('app/roll/:sides/:dice/:rolls/', (req, res) => {
  res.send(roll(parseInt(req.body.sides),
                parseInt(req.body.dice),
                parseInt(req.body.rolls)));
})

// listen to port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
