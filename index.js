
const express = require('express');
const axios = require('axios');


const app = express();
const port = 8008;


app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

 
  if (!urls) {
    return res.status(400).json({ error: 'No URLs provided' });
  }
  const urlList = Array.isArray(urls) ? urls : [urls];

  try {
    const results = await Promise.all(
      urlList.map(async (url) => {
        try {
          const response = await axios.get(url);
          return response.data.numbers;
        } catch (error) {
          return null; 
        }
      })
    );
    const combinedResults = results.reduce((acc, curr) => {
      if (curr) {
        acc = acc.concat(curr);
      }
      return acc;
    }, []);

    res.json({ numbers: combinedResults });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`number-management-service is running on port ${port}`);
});
