import express from 'express';  
const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    
    return res.json(
        { name: 'Teknath',
            age: 22,
            country: 'INDIA',
            timestamp: new Date().toISOString()
         });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
