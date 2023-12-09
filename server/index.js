const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://data1:1data@cluster0.ql6u4tr.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB database');

    // Define seat schema
    const seatSchema = new mongoose.Schema({
      seatNumber: { type: Number, required: true },
      empty: { type: Boolean, required: true },
    });

    // Define route schema
    const routeSchema = new mongoose.Schema({
      route_name: { type: String, required: true, unique: true },
      seats: {
        Row1: [seatSchema],
        Row2: [seatSchema],
        Row3: [seatSchema],
      },
    });

    // Create models
    const Seat = mongoose.model('Seat', seatSchema);
    const Route = mongoose.model('Route', routeSchema);

    // Predefined seat details
    const generateRow = (rowCount,j) => {
      const row = [];
      for (let i = 1; i <= rowCount; i++) {
        row.push({ seatNumber: i+j, empty: true });
      }
      return row;
    };

    // Data to insert
    const routesData = [];
    const Data = [
        '15-BOD UPPAL',
        '16-UPPAL',
        '19-MODERN BAKERY',
        '28-SECUNDERABAD',
        '29-ECIL',
        '39-L.B.NAGAR',
        '45-ALAKAPURI',
        '49-BN REDDY',
        '59-BHARATH NAGAR',
        '61-HYDERNAGAR',
        '65-KP-Y-JUNCTION',
        '69-JNTU',
        '10-MODERN BAKERY',
        '12-UPPAL X ROAD',
        '14-BOD UPPAL',
        '17-ZTC',
        '18-ECIL',
        '20-AS RAO Nagar',
        '22-AS RAO Nagar',
        '24-ALWAL',
        '26-SUCHITRA',
        '30-INDU ARANYA Nagar',
        '36-L.B.NAGAR',
        '44-ALAKAPURI',
        '46-VANASTHALIPURAM',
        '47-SAGAR X ROAD',
        '48-BN REDDY',
        '49-BN REDDY',
        '52-SRINAGAR COLONY',
        '54-PR NAGAR',
        '60-ICRISAT',
        '64-PRAGATHI NAGAR',
        '66-JEEDIMETLA',
        '67-KP-JNTU',
        '68-FEROZGUDA',
    ];
    for (let i = 1; i <= 35; i++) {
        let j =0;
      routesData.push({
        route_name: `${Data[i-1]}`, // Change "ROUTE_NAME" to an appropriate name
        seats: {
          Row1: generateRow(18,0),
          Row2: generateRow(18,18),
          Row3: generateRow(6,36),
        },
      });
    }

    // Insert data into MongoDB
    await Route.insertMany(routesData);
    console.log('Data inserted successfully!');
// console.log(routesData[0].seats.Row1[0].seatNumber);
// console.log(routesData[0].seats.Row2[0].seatNumber);
// console.log(routesData[0].seats.Row3[5].seatNumber);
  }

 catch (error) {
    console.error('Error connecting to MongoDB database:', error);
  } finally {
    try {
      // Close the connection to the database
      if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB database');
      }
    } catch (disconnectError) {
      console.error('Error disconnecting from MongoDB database:', disconnectError);
    }
  }
};

// Run the function
connectToDatabase();
