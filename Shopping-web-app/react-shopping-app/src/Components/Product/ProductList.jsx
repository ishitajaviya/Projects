// import React, { useState } from 'react';
// import { Grid, Typography, Box, FormControlLabel, Checkbox, TextField, Select, MenuItem, Button } from '@mui/material';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../Slices/CartSlice'
// import { products } from '../../assets/assets';
// import Header from '../Header/Header';
// import { addToWishlist } from '../Slices/WishListSlice';
// const ProductList = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user.user); 
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState([]);
//   const [subCategoryFilter, setSubCategoryFilter] = useState([]);
//   const [sortOrder, setSortOrder] = useState('relevant');

//   const handleCategoryChange = (event) => {
//     const { value } = event.target;
//     setCategoryFilter((prev) =>
//       prev.includes(value) ? prev.filter((cat) => cat !== value) : [...prev, value]
//     );
//   };

//   const handleSubCategoryChange = (event) => {
//     const { value } = event.target;
//     setSubCategoryFilter((prev) =>
//       prev.includes(value) ? prev.filter((subCat) => subCat !== value) : [...prev, value]
//     );
//   };

//   const handleAddToCart = (product) => {
//     if (user) {
//       dispatch(addToCart({ userId: user, product }));
//       alert(`${product.name} added to cart!`);
//     } else {
//       alert('Please log in to add products to the cart');
//     }
//   };
  
//   const handleAddToWishlist = (product) => {
//     if (user) {
//       dispatch(addToWishlist({ userId: user, product }));
//       alert(`${product.name} added to wishlist!`);
//     } else {
//       alert('Please log in to add products to the wishlist');
//     }
//   };
//   const filteredProducts = products
//     .filter((product) =>
//       categoryFilter.length > 0 ? categoryFilter.includes(product.category) : true
//     )
//     .filter((product) =>
//       subCategoryFilter.length > 0 ? subCategoryFilter.includes(product.subCategory) : true
//     )
//     .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     .sort((a, b) =>
//       sortOrder === 'asc' ? a.price - b.price : sortOrder === 'desc' ? b.price - a.price : 0
//     );

//   return (
//     <>   
//     <Header/> 
//     <Box sx={{ display: 'flex', flexDirection: 'row', p: 3 }}>
//     <Box sx={{ width: '250px', mr: 4 }}>
//         <Typography variant="h6" gutterBottom>
//           Filters
//         </Typography>
//         <Typography variant="subtitle1" gutterBottom>
//           Categories
//         </Typography>
//         <FormControlLabel
//           control={<Checkbox value="Men" onChange={handleCategoryChange} />}
//           label="Men"
//         />
//         <FormControlLabel
//           control={<Checkbox value="Women" onChange={handleCategoryChange} />}
//           label="Women"
//         />
//         <FormControlLabel
//           control={<Checkbox value="Kids" onChange={handleCategoryChange} />}
//           label="Kids"
//         />
//         <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
//           Type
//         </Typography>
//         <FormControlLabel
//           control={<Checkbox value="Topwear" onChange={handleSubCategoryChange} />}
//           label="Topwear"
//         />
//         <FormControlLabel
//           control={<Checkbox value="Bottomwear" onChange={handleSubCategoryChange} />}
//           label="Bottomwear"
//         />
//         <FormControlLabel
//           control={<Checkbox value="Winterwear" onChange={handleSubCategoryChange} />}
//           label="Winterwear"
//         />
//       </Box>
//       <Box sx={{ flexGrow: 1 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//           <TextField
//             variant="outlined"
//             label="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             sx={{ width: '300px' }}
//           />
//           <Select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//             displayEmpty
//             variant="outlined"
//           >
//             <MenuItem value="relevant">Sort by: Relevant</MenuItem>
//             <MenuItem value="asc">Price: Low to High</MenuItem>
//             <MenuItem value="desc">Price: High to Low</MenuItem>
//           </Select>
//         </Box>
//         <Grid container spacing={3}>
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <Grid item xs={12} sm={6} md={4} lg={2.1} key={product._id}>
//                 <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2 }}>
//                   <img src={product.image[0]} alt={product.name} width="100%" />
//                   <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold' }}>
//                     {product.name}
//                   </Typography>
//                   <Typography variant="body2">${product.price}</Typography>
                  
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 2 }}
//                     onClick={() => handleAddToCart(product)}
//                   >
//                     Add to Cart
//                   </Button>

//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     sx={{ mt: 2, ml: 1 }}
//                     onClick={() => handleAddToWishlist(product)}
//                   >
//                     Add to Wishlist
//                   </Button>
//                 </Box>
//               </Grid>
//             ))
//           ) : (
//             <Typography variant="h6" sx={{ m: 2 }}>
//               No products found
//             </Typography>
//           )}
//         </Grid>
//       </Box>
//     </Box>
//     </>
//   );
// };

// export default ProductList;

// import React, { useState } from 'react';
// import { Grid, Typography, Box, TextField, Select, MenuItem, Button } from '@mui/material';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../Slices/CartSlice';
// import Header from '../Header/Header';
// import { addToWishlist } from '../Slices/WishListSlice';

// const ProductList = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user.user);
  
//   // Fetching products from Redux store instead of static data
//   const products = useSelector((state) => state.products.products); 

//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortOrder, setSortOrder] = useState('relevant');

//   const handleAddToCart = (product) => {
//     if (user) {
//       dispatch(addToCart({ userId: user, product }));
//       alert(`${product.name} added to cart!`);
//     } else {
//       alert('Please log in to add products to the cart');
//     }
//   };

//   const handleAddToWishlist = (product) => {
//     if (user) {
//       dispatch(addToWishlist({ userId: user, product }));
//       alert(`${product.name} added to wishlist!`);
//     } else {
//       alert('Please log in to add products to the wishlist');
//     }
//   };

//   const filteredProducts = products
//     .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     .sort((a, b) =>
//       sortOrder === 'asc' ? a.price - b.price : sortOrder === 'desc' ? b.price - a.price : 0
//     );

//   // Check if products and image URLs are being fetched
//   console.log('Products fetched from Redux:', products);

//   return (
//     <>   
//     <Header/> 
//     <Box sx={{ display: 'flex', flexDirection: 'row', p: 3 }}>
//       <Box sx={{ flexGrow: 1 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//           <TextField
//             variant="outlined"
//             label="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             sx={{ width: '300px' }}
//           />
//           <Select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//             displayEmpty
//             variant="outlined"
//           >
//             <MenuItem value="relevant">Sort by: Relevant</MenuItem>
//             <MenuItem value="asc">Price: Low to High</MenuItem>
//             <MenuItem value="desc">Price: High to Low</MenuItem>
//           </Select>
//         </Box>
        
//         {/* Render Product List */}
//         <Grid container spacing={3}>
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <Grid item xs={12} sm={6} md={4} lg={2.1} key={product._id}>
//                 <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2 }}>
//                   {/* Render product image with fallback */}
//                   <img
//                     src={product.image || 'https://via.placeholder.com/150'}  // Fallback image
//                     alt={product.name}
//                     width="100%"
//                   />
//                   <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold' }}>
//                     {product.name}
//                   </Typography>
//                   <Typography variant="body2">${product.price}</Typography>
                  
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 2 }}
//                     onClick={() => handleAddToCart(product)}
//                   >
//                     Add to Cart
//                   </Button>

//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     sx={{ mt: 2, ml: 1 }}
//                     onClick={() => handleAddToWishlist(product)}
//                   >
//                     Add to Wishlist
//                   </Button>
//                 </Box>
//               </Grid>
//             ))
//           ) : (
//             <Typography variant="h6" sx={{ m: 2 }}>
//               No products found
//             </Typography>
//           )}
//         </Grid>
//       </Box>
//     </Box>
//     </>
//   );
// };

// export default ProductList;


import React, { useState } from 'react';
import { Grid, Typography, Box, TextField, Select, MenuItem, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Slices/CartSlice';
import Header from '../Header/Header';
import { addToWishlist } from '../Slices/WishListSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  
  // Fetching products from Redux store instead of static data
  const products = useSelector((state) => state.products.products);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [subCategoryFilter, setSubCategoryFilter] = useState([]);
  const [sortOrder, setSortOrder] = useState('relevant');

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setCategoryFilter((prev) =>
      prev.includes(value) ? prev.filter((cat) => cat !== value) : [...prev, value]
    );
  };

  const handleSubCategoryChange = (event) => {
    const { value } = event.target;
    setSubCategoryFilter((prev) =>
      prev.includes(value) ? prev.filter((subCat) => subCat !== value) : [...prev, value]
    );
  };

  const handleAddToCart = (product) => {
    if (user) {
      dispatch(addToCart({ userId: user, product }));
      alert(`${product.name} added to cart!`);
    } else {
      alert('Please log in to add products to the cart');
    }
  };

  const handleAddToWishlist = (product) => {
    if (user) {
      dispatch(addToWishlist({ userId: user, product }));
      alert(`${product.name} added to wishlist!`);
    } else {
      alert('Please log in to add products to the wishlist');
    }
  };

  const filteredProducts = products
    .filter((product) => 
      categoryFilter.length > 0 ? categoryFilter.includes(product.category) : true
    )
    .filter((product) =>
      subCategoryFilter.length > 0 ? subCategoryFilter.includes(product.subCategory) : true
    )
    .filter((product) => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => 
      sortOrder === 'asc' ? a.newPrice - b.newPrice : sortOrder === 'desc' ? b.newPrice - a.newPrice : 0
    );

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'row', p: 3 }}>
        {/* Filters Section */}
        <Box sx={{ width: '250px', mr: 4 }}>
          <Typography variant="h6" gutterBottom>
            Filters
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Categories
          </Typography>
          <FormControlLabel
            control={<Checkbox value="Men" onChange={handleCategoryChange} />}
            label="Men"
          />
          <FormControlLabel
            control={<Checkbox value="Women" onChange={handleCategoryChange} />}
            label="Women"
          />
          <FormControlLabel
            control={<Checkbox value="Kids" onChange={handleCategoryChange} />}
            label="Kids"
          />
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
            Type
          </Typography>
          <FormControlLabel
            control={<Checkbox value="Topwear" onChange={handleSubCategoryChange} />}
            label="Topwear"
          />
          <FormControlLabel
            control={<Checkbox value="Bottomwear" onChange={handleSubCategoryChange} />}
            label="Bottomwear"
          />
          <FormControlLabel
            control={<Checkbox value="Winterwear" onChange={handleSubCategoryChange} />}
            label="Winterwear"
          />
        </Box>

        {/* Product List Section */}
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <TextField
              variant="outlined"
              label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: '300px' }}
            />
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              displayEmpty
              variant="outlined"
            >
              <MenuItem value="relevant">Sort by: Relevant</MenuItem>
              <MenuItem value="asc">Price: Low to High</MenuItem>
              <MenuItem value="desc">Price: High to Low</MenuItem>
            </Select>
          </Box>

          {/* Grid of Products */}
          <Grid container spacing={3}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={2.1} key={product._id}>
                  <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2 }}>
                    {/* Render product image */}
                    <img
                      src={product.image || 'https://via.placeholder.com/150'}  // Fallback image if no URL
                      alt={product.name}
                      width="100%"
                    />
                    <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2">Price: ${product.newPrice}</Typography> {/* Show newPrice */}

                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>

                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ mt: 2, ml: 1 }}
                      onClick={() => handleAddToWishlist(product)}
                    >
                      Add to Wishlist
                    </Button>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography variant="h6" sx={{ m: 2 }}>
                No products found
              </Typography>
            )}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProductList;
