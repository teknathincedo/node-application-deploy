import express from 'express';  
const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    
    return res.json(
        { name: 'Homanth',
            age: 24,
            country: 'canada',
            warehouse: 'ping pong ding dong',
            timestamp: new Date().toISOString()
         });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
