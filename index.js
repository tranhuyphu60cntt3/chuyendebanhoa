const express = require('express')
var bodyParser = require('body-parser')
const app = express();
const port = 5000;
// router
const nguoiDungRoutes = require('./routes/nguoiDungRoutes')
const loaiNguoiDungRoutes = require('./routes/loaiNguoiDungRoutes')
const matHangRoutes = require('./routes/matHangRoutes')
const loaiRoutes = require('./routes/loaiRoutes')
const nhaCungCapRoutes = require('./routes/nhaCungCapRoutes')
const hoaDonRoutes = require('./routes/hoaDonRoutes')
const phanHoiRoutes = require('./routes/phanHoiRoutes')
const chiTietDoaDonRoutes = require('./routes/chiTietHoaDonRoutes')


// model
const NguoiDung = require('./models/NguoiDung')
const LoaiNguoiDung = require('./models/LoaiNguoiDung')
const Loai = require('./models/Loai');
const MatHang = require('./models/MatHang');
const NhaCungCap = require('./models/NhaCungCap');
const PhanHoi = require('./models/PhanHoi');
const ChiTietHoaDon = require('./models/ChiTietHoaDon');
const HoaDon = require('./models/HoaDon');

NguoiDung.belongsTo(LoaiNguoiDung, {
      foreignKey: 'LNDId'
})
MatHang.belongsTo(Loai, {
      foreignKey: 'LoaiId'
})    
MatHang.belongsTo(NhaCungCap, {
      foreignKey: 'NCCId'
})
PhanHoi.belongsTo(MatHang, {
      foreignKey: 'MHId'
})
PhanHoi.belongsTo(NguoiDung, {
      foreignKey: 'NDId'
})
ChiTietHoaDon.belongsTo(MatHang, {
      foreignKey: 'MHId'
})
ChiTietHoaDon.belongsTo(HoaDon, {
      foreignKey: 'HDId'
})
HoaDon.belongsTo(NguoiDung, {
      as :'khachhang',
      foreignKey: {
            name :'KHId'
      } 
})
HoaDon.belongsTo(NguoiDung, {
      as :'nhanvien',
      foreignKey: {
            name :'NVId'
      } 
})

// Kết nối database
const sequelize = require('./utils/db');


sequelize.sync().then(()=> console.log('connect database success')).catch(err => {
      console.log('connect databas fail', err)
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// Cấu hình đường dẫn tĩnh
app.use(express.static('public'))

// Gọi ejs
app.set('view engine', 'ejs')



app.use('/nhaCungCap', nhaCungCapRoutes);
app.use('/nguoiDung', nguoiDungRoutes);
app.use('/loaiNguoiDung', loaiNguoiDungRoutes);
app.use('/loai', loaiRoutes);
app.use('/matHang', matHangRoutes);
app.use('/hoaDon', hoaDonRoutes);
app.use('/chiTietDoaDon', chiTietDoaDonRoutes);
app.use('/phanHoi', phanHoiRoutes);


app.listen(port, function(){console.log("Server Opened ", port)})