const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = 5000;

//cors policy
app.use(cors());

app.use(express.json());

const expressUsers = [
  { name: "alamin", email: "alammin@gmail.com", age: 25 },
  { name: "alamin", email: "alammin@gmail.com", age: 25 },

  { name: "alamin", email: "alammin@gmail.com", age: 25 },

  { name: "alamin", email: "alammin@gmail.com", age: 25 },
];

app.get('/expressUsers', (req, res) => {
  res.send(expressUsers);
})


//database
const uri =
  "mongodb+srv://CURD:C3bptUD7zoZi2Z9j@cluster0.sv1wb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );


    // creat by me 
    const detabase = client.db('CURD');
    const usersCollection = detabase.collection('user');
    // const user = { name: "alamin", email: "alammin@gmail.com", age: 25 };
    // const result = await usersCollection.insertOne(user);
    // console.log(user,result);
    app.get('/users', async (req, res) => {
      const query = {};
      const coursor = usersCollection.find(query);
      const users = await coursor.toArray();
      res.send(users);
    })
    app.post('/users', async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
})
  } finally {
 
  }
}
run().catch(console.dir);



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Our curd server on port ${port}`);
});
