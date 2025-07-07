const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const vehicles = require('./routes/vehicles');
const reservations = require('./routes/reservations');
const profiles = require('./routes/chargingProfiles');

const app = express();
app.use(cors(), bodyParser.json());

mongoose.connect('mongodb://localhost/chargefinder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('DB error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicles);
app.use('/api/reservations', reservations);
app.use('/api/profiles', profiles);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
