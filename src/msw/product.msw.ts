import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { rest } from 'msw'

const productsRes = {
  message: 'Lấy các sản phẩm thành công',
  data: {
    products: [
      {
        _id: '60af6f12f1a3041b289d8b9b',
        images: [
          'https://api-ecom.duthanhduoc.com/images/b18506cc-3d5f-4160-aee3-8e4242ed5717.jpg',
          'https://api-ecom.duthanhduoc.com/images/0e91ba6d-8e35-4fee-8812-6f81bbe0e3de.jpg',
          'https://api-ecom.duthanhduoc.com/images/519d5750-23b3-4ba1-8fb6-e74bf594c558.jpg',
          'https://api-ecom.duthanhduoc.com/images/3640d703-9add-45b7-b726-767c13cf3238.jpg',
          'https://api-ecom.duthanhduoc.com/images/46b7bebc-6a8d-4fb3-aa63-e9cf550f6490.jpg',
          'https://api-ecom.duthanhduoc.com/images/30273cc8-98fb-4cc6-85e6-02c447e45f4a.jpg'
        ],
        price: 75000,
        rating: 5,
        price_before_discount: 150000,
        quantity: 52,
        sold: 5,
        view: 3413,
        name: 'Áo thun Polo nam cổ bẻ BASIC vải cá sấu Cotton xuất xịn, chuẩn đẹp, màu HỒNG',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/b18506cc-3d5f-4160-aee3-8e4242ed5717.jpg',
        createdAt: '2021-05-27T10:06:10.339Z',
        updatedAt: '2024-08-23T07:41:42.113Z'
      },
      {
        _id: '60ad02422fb52902585972a9',
        images: [
          'https://api-ecom.duthanhduoc.com/images/08b79b1d-169d-4de1-85a2-4e5e8ff535b7.jpg',
          'https://api-ecom.duthanhduoc.com/images/182d6e25-65fa-4abe-b822-70d87550bf4e.jpg',
          'https://api-ecom.duthanhduoc.com/images/827e675d-e553-497e-9b15-d2df5fc7192d.jpg',
          'https://api-ecom.duthanhduoc.com/images/b6425e3f-3cc3-4696-94f7-5053afca2c71.jpg',
          'https://api-ecom.duthanhduoc.com/images/4d80b312-e605-4508-ab80-14dd75f6d23d.jpg',
          'https://api-ecom.duthanhduoc.com/images/9e628716-0b94-44d8-850c-e96adc4b1c8f.jpg',
          'https://api-ecom.duthanhduoc.com/images/20a1a8e5-1b49-4854-a221-0f96130b5fd8.jpg'
        ],
        price: 279000,
        rating: 5,
        price_before_discount: 315000,
        quantity: 1959,
        sold: 36,
        view: 662,
        name: '[Mã FAMALLT5 giảm 15% đơn 150K] Áo thun tay lỡ GENZ phông Unisex nam nữ Cotton oversize form rộng Racing Genz GZT021',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/08b79b1d-169d-4de1-85a2-4e5e8ff535b7.jpg',
        createdAt: '2021-05-25T13:57:22.760Z',
        updatedAt: '2024-08-14T04:39:16.360Z'
      },
      {
        _id: '60ad01102fb52902585972a7',
        images: [
          'https://api-ecom.duthanhduoc.com/images/05f090b8-736e-4100-b4f4-7a09f48e718a.jpg',
          'https://api-ecom.duthanhduoc.com/images/594a2d08-04f4-4902-873f-e9ba865bc497.jpg',
          'https://api-ecom.duthanhduoc.com/images/0f906616-bc7f-4661-9bbe-5570b5d902b7.jpg',
          'https://api-ecom.duthanhduoc.com/images/e129d0b1-8a45-463a-a668-d619461ae984.jpg',
          'https://api-ecom.duthanhduoc.com/images/780a9d1a-74e9-4d8c-bbae-ed3d5eca8b97.jpg',
          'https://api-ecom.duthanhduoc.com/images/986f2f5b-23cc-498f-9adb-9d07e6923eb3.jpg',
          'https://api-ecom.duthanhduoc.com/images/e383805f-e875-4398-800d-ae07f2d2e8ce.jpg',
          'https://api-ecom.duthanhduoc.com/images/c3df0eba-05f8-4ba8-9ef4-f67a28fa4b81.jpg',
          'https://api-ecom.duthanhduoc.com/images/7cefd5f0-6ded-443d-821b-4909592e6490.jpg'
        ],
        price: 53000,
        rating: 5,
        price_before_discount: 106000,
        quantity: 16746,
        sold: 2255,
        view: 1259,
        name: 'Áo thun nam nữ tay lỡ YINXX, áo phông nam nữ form rộng A304',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
        createdAt: '2021-05-25T13:52:16.271Z',
        updatedAt: '2024-08-22T08:44:42.219Z'
      },
      {
        _id: '60ad004c2fb52902585972a6',
        images: [
          'https://api-ecom.duthanhduoc.com/images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
          'https://api-ecom.duthanhduoc.com/images/2df345c5-4381-4863-9510-17f44572ad45.jpg',
          'https://api-ecom.duthanhduoc.com/images/00b21c79-e1a0-45f0-9152-6881e644b15b.jpg',
          'https://api-ecom.duthanhduoc.com/images/dc35e2ed-0407-4f27-9b97-bad9bc785deb.jpg',
          'https://api-ecom.duthanhduoc.com/images/f1de05b8-60c5-4940-be9f-b6cc98d34061.jpg',
          'https://api-ecom.duthanhduoc.com/images/4788c7fd-d728-4f47-8000-e858d6466384.jpg',
          'https://api-ecom.duthanhduoc.com/images/b4614934-0164-4845-bf14-d19de6c36835.jpg',
          'https://api-ecom.duthanhduoc.com/images/1ec5e192-c2fc-4411-b170-4aa2b1635ddb.jpg',
          'https://api-ecom.duthanhduoc.com/images/a751a941-7d74-4f2a-a238-c806b055ed11.jpg'
        ],
        price: 49000,
        rating: 5,
        price_before_discount: 70000,
        quantity: 6797,
        sold: 21,
        view: 1108,
        name: 'Mẫu Mới Khuyến Mãi Sốc 3 Ngày ⚡ Áo Thun Tay Lỡ In Bướm Dirty Coins Ao Thun Unisex From Rộng -BONSEN STORE',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
        createdAt: '2021-05-25T13:49:00.060Z',
        updatedAt: '2024-08-20T12:00:46.844Z'
      },
      {
        _id: '60acfac72fb529025859729f',
        images: [
          'https://api-ecom.duthanhduoc.com/images/ad82b185-5c18-41ca-90ec-1c54c846fd49.jpg',
          'https://api-ecom.duthanhduoc.com/images/04001c71-9d8f-4e68-b9ac-cbb47406f30f.jpg',
          'https://api-ecom.duthanhduoc.com/images/3142a89e-8301-42c3-9621-1c901e4a097b.jpg',
          'https://api-ecom.duthanhduoc.com/images/849be86c-8880-44dd-a037-ffc447d336f3.jpg',
          'https://api-ecom.duthanhduoc.com/images/0856c2f1-fcc7-470d-9e99-d7b9f6f32dcc.jpg'
        ],
        price: 39000,
        rating: 5,
        price_before_discount: 60000,
        quantity: 17453,
        sold: 97,
        view: 483,
        name: '[Có video] Áo phông form rộng tay lỡ unisex - Áo thun orange soda - Sỉ áo thun số lượng lớn',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/ad82b185-5c18-41ca-90ec-1c54c846fd49.jpg',
        createdAt: '2021-05-25T13:25:27.965Z',
        updatedAt: '2024-08-20T12:00:08.097Z'
      },
      {
        _id: '60acf0ec2fb5290258597299',
        images: [
          'https://api-ecom.duthanhduoc.com/images/25c409a5-9e6c-4e2d-a49e-23a8c291f749.jpg',
          'https://api-ecom.duthanhduoc.com/images/85e6928d-9e7f-4ff9-8105-8389448f6a48.jpg',
          'https://api-ecom.duthanhduoc.com/images/1705c99d-e61b-4eb3-a786-7d90e927b242.jpg',
          'https://api-ecom.duthanhduoc.com/images/6f9f953c-6048-419f-87c3-24c24620dfab.jpg',
          'https://api-ecom.duthanhduoc.com/images/49eaf710-c340-43fc-b321-43bf896d7a39.jpg',
          'https://api-ecom.duthanhduoc.com/images/400b5529-01d4-42d7-be63-e179f8c0a4df.jpg',
          'https://api-ecom.duthanhduoc.com/images/f0b9ff49-824f-4a7a-8bce-a4d6599e26a6.jpg',
          'https://api-ecom.duthanhduoc.com/images/03c61a2a-f703-486b-961d-73b38be7240f.jpg',
          'https://api-ecom.duthanhduoc.com/images/59bcd4bd-fd27-416c-b7df-dd831a3da621.jpg'
        ],
        price: 119000,
        rating: 5,
        price_before_discount: 198000,
        quantity: 234,
        sold: 24,
        view: 872,
        name: 'Áo thun nam ngắn tay thể thao chất liệu thun lạnh 4 chiều AT39',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/25c409a5-9e6c-4e2d-a49e-23a8c291f749.jpg',
        createdAt: '2021-05-25T12:43:24.537Z',
        updatedAt: '2024-08-15T19:27:45.400Z'
      },
      {
        _id: '60abaa9adbfa6e153cb9962c',
        images: [
          'https://api-ecom.duthanhduoc.com/images/c9e6cdf9-5d7c-4767-ab19-5d64b133fd3b.jpg',
          'https://api-ecom.duthanhduoc.com/images/d938561d-9ad1-4f61-822a-9d29b3cb663e.jpg',
          'https://api-ecom.duthanhduoc.com/images/7c2e9bd9-0773-4f17-9568-62ab8ce3a689.jpg',
          'https://api-ecom.duthanhduoc.com/images/a70f8655-53c8-4359-96c2-ac733f11279e.jpg',
          'https://api-ecom.duthanhduoc.com/images/dd139f2c-14cf-43f8-ab58-2b4cadcd2140.jpg'
        ],
        price: 69000,
        rating: 5,
        price_before_discount: 80000,
        quantity: 8129,
        sold: 4100,
        view: 709,
        name: '[Mã FAMAYMA2 giảm 10K đơn 50K] Áo thun nam nữ form rộng Yinxx, áo phông tay lỡ ATL43',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/c9e6cdf9-5d7c-4767-ab19-5d64b133fd3b.jpg',
        createdAt: '2021-05-24T13:31:06.769Z',
        updatedAt: '2024-08-16T07:32:26.885Z'
      },
      {
        _id: '60aba9a2dbfa6e153cb9962b',
        images: [
          'https://api-ecom.duthanhduoc.com/images/2b5e1bfa-b202-46b3-b68b-f6c8a19cb1cf.jpg',
          'https://api-ecom.duthanhduoc.com/images/71ff840e-80bd-4d01-b997-f409392c3901.jpg',
          'https://api-ecom.duthanhduoc.com/images/9fb54b27-bb8d-415c-bb41-72a113f33fb5.jpg',
          'https://api-ecom.duthanhduoc.com/images/2741ba1d-844f-4b6d-baa8-8ebe41a4d5af.jpg',
          'https://api-ecom.duthanhduoc.com/images/63a231e8-aa62-4b0a-a7c7-9d327181ae0a.jpg',
          'https://api-ecom.duthanhduoc.com/images/050e6792-e9bb-4093-b198-3864eddffa3f.jpg',
          'https://api-ecom.duthanhduoc.com/images/92a099c0-b9b7-4d37-b234-ee319868bfe4.jpg',
          'https://api-ecom.duthanhduoc.com/images/23d8c0fb-8d30-4438-a973-3908a89db968.jpg',
          'https://api-ecom.duthanhduoc.com/images/4553c8a6-dfb8-4323-97b9-bf17cac384a4.jpg'
        ],
        price: 69000,
        rating: 5,
        price_before_discount: 100000,
        quantity: 23565,
        sold: 3800,
        view: 1084,
        name: '[Mã FAMAYMA2 giảm 10K đơn 50K] Áo thun tay lỡ unisex Yinxx, áo phông form rộng ATL187',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/2b5e1bfa-b202-46b3-b68b-f6c8a19cb1cf.jpg',
        createdAt: '2021-05-24T13:26:58.072Z',
        updatedAt: '2024-08-16T08:55:36.245Z'
      }
    ],
    pagination: {
      page: 1,
      limit: 30,
      page_size: 1
    }
  }
}

const productDetailRes = {
  message: 'Lấy sản phẩm thành công',
  data: {
    _id: '60afb1c56ef5b902180aacb8',
    images: [
      'https://api-ecom.duthanhduoc.com/images/a7fb7a18-743a-42bb-bead-36370c1d1aba.jpg',
      'https://api-ecom.duthanhduoc.com/images/b09ff60d-c6bd-4d3a-b778-0fc2708a65fb.jpg',
      'https://api-ecom.duthanhduoc.com/images/fc5ecd4c-47eb-4f12-ae82-ef26fd492887.jpg',
      'https://api-ecom.duthanhduoc.com/images/a87f854d-37a9-4252-a2f7-243fc21f8b55.jpg',
      'https://api-ecom.duthanhduoc.com/images/3ecf878d-6742-43d4-abe7-044c15c84120.jpg'
    ],
    price: 20990000,
    rating: 5,
    price_before_discount: 26990000,
    quantity: 17,
    sold: 482,
    view: 27842,
    name: 'Điện thoại Apple Iphone 12 64GB - Hàng chính hãng VNA',
    description:
      '<p>H&agrave;ng Ch&iacute;nh h&atilde;ng m&atilde; VN/A, mới 100%, chưa k&iacute;ch hoạt</p><p>iPhone 12 64GB- Sự n&acirc;ng cấp chỉnh chu cho thế hệ tiền nhiệm<br />M&agrave;n h&igrave;nh iPhone 12 64GB - N&acirc;ng cấp đ&aacute;ng gi&aacute; từ tấm nền OLED<br />Hai năm qua, Apple vẫn trung th&agrave;nh với tấm nền IPS LCD d&agrave;nh cho c&aacute;c phi&ecirc;n bản điện thoại gi&aacute; rẻ. Trong đ&oacute;, iPhone XR, iPhone 11 v&agrave; thậm ch&iacute; l&agrave; SE 2020 l&agrave; những đại diện ti&ecirc;u biểu. Thế nhưng, điều n&agrave;y sẽ thay đổi khi m&agrave; giờ đ&acirc;y, thế hệ kế nhiệm đ&atilde; được n&acirc;ng cấp l&ecirc;n tấm nền OLED sắc n&eacute;t.</p><p>iPhone 12 64GB sở hữu m&agrave;n h&igrave;nh 6,1 inch (tương tự XR v&agrave; 11) với tấm nền OLED XDR tương tự c&aacute;c bản cao cấp. Ngo&agrave;i ra, một điểm nổi bật kh&ocirc;ng thể kh&ocirc;ng nhắc đến ch&iacute;nh l&agrave; việc n&acirc;ng cấp độ ph&acirc;n giải chuẩn HD+ vốn bị c&aacute;c fan đ&aacute;nh gi&aacute; k&eacute;m qua hai thế hệ l&ecirc;n chuẩn Full HD+. Do đ&oacute;, Cupertino đ&atilde; ch&iacute;nh thức thay đổi điểm yếu cố hữu tr&ecirc;n c&aacute;c phi&ecirc;n bản gi&aacute; rẻ của h&atilde;ng. Ngay cả bản 5,4 inch cũng được trang bị tấm nền OLED Super Retina.</p><p>Ngo&agrave;i ra, theo c&ocirc;ng bố của h&atilde;ng, m&agrave;n h&igrave;nh của thế hệ mới sẽ c&oacute; độ s&aacute;ng l&ecirc;n tới 1200 knits v&agrave; hỗ trợ c&aacute;c c&ocirc;ng nghệ HDR v&agrave; Dolby Vision. Đặc biệt, lớp k&iacute;nh sẽ được phủ một lớp &ldquo;Ceramic Shield&rdquo; gi&uacute;p m&aacute;y cứng c&aacute;p v&agrave; sống s&oacute;t cao hơn trong những t&igrave;nh huống &ldquo;tiếp đất&rdquo;.</p><p>Thiết kế iPhone 12 64GB mang n&eacute;t ho&agrave;i cổ<br />Năm nay c&aacute;c sản phẩm &ldquo;t&aacute;o khuyết&rdquo; đều sở hữu chung ng&ocirc;n ngữ thiết kế. Đ&oacute; l&agrave; sự kết hợp giữa iPhone 11 v&agrave; iPhone 5 với c&aacute;c cạnh viền được l&agrave;m vu&ocirc;ng vức hơn. Mặt trước vẫn l&agrave; m&agrave;n h&igrave;nh với notch &ldquo;tai thỏ&rdquo; chứa camera selfie v&agrave; Face ID. Thiết kế n&agrave;y khiến series smartphone năm nay của nh&agrave; T&aacute;o tr&ocirc;ng sang trọng v&agrave; mang d&aacute;ng dấp ho&agrave;i cổ từ ng&ocirc;n ngữ thiết kế của thế hệ thứ 5 trước đ&acirc;y.<br />C&ograve;n mặt sau của m&aacute;y vẫn sẽ l&agrave; một cụm m&aacute;y ảnh k&eacute;p đặt trong khung vu&ocirc;ng tương tự như thế hệ năm 2019. Do l&agrave; bản ti&ecirc;u chuẩn, thiết bị sẽ c&oacute; khung l&agrave;m từ nh&ocirc;m thay v&igrave; bằng th&eacute;p kh&ocirc;ng gỉ như bản cao cấp.</p><p>Hiệu năng iPhone 12 64GB mạnh mẽ<br />Cung cấp sức mạnh cho m&aacute;y ch&iacute;nh l&agrave; chip A14 Bionic. Theo c&ocirc;ng bố của Cupertino, A14 l&agrave; vi xử l&yacute; c&oacute; tới 6 nh&acirc;n CPU, chứa hơn 11,8 tỷ b&oacute;ng b&aacute;n dẫn, hứa hẹn sẽ cho hiệu năng hơn khoảng 40% so với A13. Điểm số benchmark của một mẫu m&aacute;y cũng sở hữu chipset n&agrave;y l&agrave; iPad Air 4 đ&atilde; cho thấy A14 thật sự vượt trội. Điểm số đơn nh&acirc;n 1583 va đa nh&acirc;n l&agrave; 4918, chỉ thua k&eacute;m một ch&uacute;t so với A12Z tr&ecirc;n iPad Pro 2020.<br />Ngo&agrave;i ra, nh&agrave; T&aacute;o c&ograve;n trang bị th&ecirc;m chip U1 với băng tần rộng (ultra-wideband) cho ph&eacute;p định vị vị tr&iacute; th&ocirc;ng qua AirDrop v&agrave; kết nối c&aacute;c thiết bị c&ugrave;ng hệ sinh th&aacute;i trong gia đ&igrave;nh</p><p>Camera iPhone 12 64GB - Thay đổi đến từ b&ecirc;n trong <br />Du l&agrave; thế hệ kế nhiệm iPhone 11, thế nhưng thiết bị n&agrave;y kh&ocirc;ng c&oacute; cải tiến nhiều về m&aacute;y ảnh. M&aacute;y vẫn sở hữu cụm camera k&eacute;p với 2 cảm biến 12MP (1 g&oacute;c rộng v&agrave; 1 g&oacute;c si&ecirc;u rộng). Apple đ&atilde; sắp xếp lại v&agrave; bổ sung th&ecirc;m thấu k&iacute;nh để cho chất lượng ảnh chụp trong v&agrave; sắc n&eacute;t hơn.</p>',
    category: {
      _id: '60afafe76ef5b902180aacb5',
      name: 'Điện thoại',
      __v: 0
    },
    image: 'https://api-ecom.duthanhduoc.com/images/a7fb7a18-743a-42bb-bead-36370c1d1aba.jpg',
    createdAt: '2021-05-27T14:50:45.708Z',
    updatedAt: '2024-08-25T03:20:34.449Z'
  }
}

const productsRequest = rest.get(`${config.baseUrl}products`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(productsRes))
})
const productDetailRequest = rest.get(`${config.baseUrl}products/:id`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(productDetailRes))
})

const productRequests = [productsRequest, productDetailRequest]

export default productRequests
