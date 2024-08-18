// @deno-types="npm:@types/express@4.17.15"
import express from 'npm:express@4.18.2';

// data
import data from './data.json' assert { type: 'json' };

const app = express();

app.get('/', (req, res) => {
  res.send('Response!');
  console.log('Deno / Express server running on port 8000.');
});

app.get('/api', (req, res) => {
  res.send(data);
});

app.get('/api/:dinosaur', (req, res) => {
  if (req?.params?.dinosaur) {
    const found = data.find(
      (item) => item.name.toLowerCase() === req.params.dinosaur.toLowerCase()
    );
    if (found) {
      res.send(found);
    } else {
      res.send('No dinosaurs found.');
    }
  }
});

app.listen(8000);
