import express from 'express';  
const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    
    return res.json(
        { name: 'Tinku',
            dad: 'Ram Prasad',
            brother: 'Thule',
            jiju: ['Anil' , 'Shash'],
            timestamp: new Date().toISOString()
         });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
