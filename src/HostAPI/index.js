const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// app.use(morgan('combined'))

// Đọc file api.json
app.use(cors());
app.use(express.json());
// Hoặc, bạn có thể chỉ định cho phép yêu cầu từ một miền cụ thể:
// app.use(cors({
//   origin: 'https://letmcode.github.io/Project-CT188-backup'
// }));

app.get('/api/page/:id', (req, res) => {
    const { id } = req.params;

    const filePath = path.join(__dirname, './product.json');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read the JSON file' });
      }
  
      const jsonData = JSON.parse(data);
      res.json(jsonData.product[id].page);  // Trả về tất cả sản phẩm
    });
  });

  app.get('/api/product', (req, res) => {
    const filePath = path.join(__dirname, './product.json'); // Đảm bảo đúng đường dẫn tới file api.json
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read the JSON file' });
      }
  
      // Trả về dữ liệu JSON từ file
      const jsonData = JSON.parse(data);
      return res.json(jsonData.product);
    });
  });
  

app.get('/api/cartUser', (req, res) => {
  const filePath = path.join(__dirname, './product.json'); // Đảm bảo đúng đường dẫn tới file api.json

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read the JSON file' });
    }

    // Trả về dữ liệu JSON từ file
    const jsonData = JSON.parse(data);
    return res.json(jsonData.cartUser);
  });
});

app.get('/api/cartUser/:id', (req, res) => {
  const {id} = req.params;
  const filePath = path.join(__dirname, './product.json'); // Đảm bảo đúng đường dẫn tới file api.json

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read the JSON file' });
    }

    // Trả về dữ liệu JSON từ file
    const jsonData = JSON.parse(data);

    const item = jsonData.cartUser.find(item => item.id === id)    

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Trả về item nếu tìm thấy
    res.status(200).json(item);
  });
});


app.post('/api/cartUser', (req, res) => {
  const newItem = req.body; // Lấy dữ liệu từ body của yêu cầu

  const filePath = path.join(__dirname, './product.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read the JSON file' });
    }

    const jsonData = JSON.parse(data);
    
    // Giả sử bạn muốn thêm item vào giỏ hàng
    jsonData.cartUser.push(newItem);

    // Lưu lại dữ liệu vào file
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to write the JSON file' });
      }

      return res.status(200).json({ message: 'Item added successfully' });
    });
  });
});

app.delete('/api/cartUser/:id', (req, res) => {
  const { id } = req.params; // Lấy id từ URL
  const filePath = path.join(__dirname, './product.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read the JSON file' });
    }

    const jsonData = JSON.parse(data);

    // Kiểm tra nếu cartUser tồn tại và là mản
    if (!Array.isArray(jsonData.cartUser)) {
      return res.status(500).json({ error: 'Invalid cartUser format in JSON file' });
    }

    // Tìm vị trí của item đầu tiên có id khớp
    const index = jsonData.cartUser.findIndex(item => item.id == id);

    // Nếu không tìm thấy item để xóa
    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Xóa duy nhất một item tại vị trí tìm thấy
    jsonData.cartUser.splice(index, 1);

    // Ghi lại thay đổi vào tệp JSON
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to write the JSON file' });
      }

      return res.status(200).json({ message: 'Item deleted successfully' });
    });
  });
});
app.listen(port, () => {
  console.log(`${port}`)
  console.log(`Server running on port https://hostapi-g350.onrender.com`);
});
