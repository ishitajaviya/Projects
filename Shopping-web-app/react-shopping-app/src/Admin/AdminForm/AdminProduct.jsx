// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addProduct, updateProduct, deleteProduct } from './AdminProductSlice/AdminProductSlice';
// import { Box, Button, TextField, Grid, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// const generateUniqueId = () => {
//   return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
// };

// const AdminProduct = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.products);

//   const [productData, setProductData] = useState({
//     _id: '',
//     name: '',
//     description: '',
//     oldPrice: '',
//     newPrice: '',
//     image: '',
//     category: '',
//     subCategory: '',
//   });

//   const [isUpdating, setIsUpdating] = useState(false);
//   const [filterCategory, setFilterCategory] = useState('');
//   const [filterSubCategory, setFilterSubCategory] = useState('');
//   const [sortOrder, setSortOrder] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({ ...productData, [name]: value });
//     console.log(`Field ${name} changed to:`, value);
//   };

//   const handleSubmit = () => {
//     if (isUpdating) {
//       dispatch(updateProduct({ _id: productData._id, updatedProduct: productData }));
//       setIsUpdating(false);
//       console.log('Updated product:', productData);
//     } else {
//       const newProduct = { ...productData, _id: generateUniqueId() }; // Generate unique ID
//       dispatch(addProduct(newProduct));
//       console.log('Added product:', newProduct);
//     }
//     setProductData({ _id: '', name: '', description: '', oldPrice: '', newPrice: '', image: '', category: '', subCategory: '' });
//   };

//   const handleEdit = (product) => {
//     setProductData(product);
//     setIsUpdating(true);
//     console.log('Editing product:', product);
//   };

//   const handleDelete = (productId) => {
//     dispatch(deleteProduct(productId));
//     console.log('Deleted product with ID:', productId);
//   };

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'filterCategory') {
//       setFilterCategory(value);
//     } else if (name === 'filterSubCategory') {
//       setFilterSubCategory(value);
//     }
//   };

//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//   };

//   // Filter and Sort Products
//   const filteredAndSortedProducts = products
//     .filter((product) => {
//       return (
//         (filterCategory === '' || product.category === filterCategory) &&
//         (filterSubCategory === '' || product.subCategory === filterSubCategory)
//       );
//     })
//     .sort((a, b) => {
//       if (sortOrder === 'lowToHigh') {
//         return a.newPrice - b.newPrice;
//       } else if (sortOrder === 'highToLow') {
//         return b.newPrice - a.newPrice;
//       }
//       return 0;
//     });

//   return (
//     <Box sx={{ p: 3, marginTop: '50px' }}>
//       <Typography variant="h4">Admin Products</Typography>

//       {/* Form to add/update product */}
//       <Box sx={{ mt: 3 }}>
//         <TextField
//           label="Name"
//           name="name"
//           value={productData.name}
//           onChange={handleInputChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Description"
//           name="description"
//           value={productData.description}
//           onChange={handleInputChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Old Price"
//           name="oldPrice"
//           value={productData.oldPrice}
//           onChange={handleInputChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="New Price"
//           name="newPrice"
//           value={productData.newPrice}
//           onChange={handleInputChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Image URL"
//           name="image"
//           value={productData.image}
//           onChange={handleInputChange}
//           fullWidth
//           margin="normal"
//         />

//         {/* Category and SubCategory Fields */}
//         <FormControl fullWidth margin="normal">
//           <InputLabel>Category</InputLabel>
//           <Select
//             label="Category"
//             name="category"
//             value={productData.category}
//             onChange={handleInputChange}
//           >
//             <MenuItem value="Men">Men</MenuItem>
//             <MenuItem value="Women">Women</MenuItem>
//             <MenuItem value="Kids">Kids</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth margin="normal">
//           <InputLabel>SubCategory</InputLabel>
//           <Select
//             label="SubCategory"
//             name="subCategory"
//             value={productData.subCategory}
//             onChange={handleInputChange}
//           >
//             <MenuItem value="Topwear">Topwear</MenuItem>
//             <MenuItem value="Bottomwear">Bottomwear</MenuItem>
//             <MenuItem value="Winterwear">Winterwear</MenuItem>
//           </Select>
//         </FormControl>

//         <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
//           {isUpdating ? 'Update Product' : 'Add Product'}
//         </Button>
//       </Box>

//       {/* Filter and Sort Options */}
//       <Box sx={{ mt: 4 }}>
//         <FormControl sx={{ minWidth: 200, marginRight: 2 }}>
//           <InputLabel>Category</InputLabel>
//           <Select
//             value={filterCategory}
//             name="filterCategory"
//             onChange={handleFilterChange}
//             label="Category"
//           >
//             <MenuItem value="Men">Men</MenuItem>
//             <MenuItem value="Women">Women</MenuItem>
//             <MenuItem value="Kids">Kids</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl sx={{ minWidth: 200, marginRight: 2 }}>
//           <InputLabel>SubCategory</InputLabel>
//           <Select
//             value={filterSubCategory}
//             name="filterSubCategory"
//             onChange={handleFilterChange}
//             label="SubCategory"
//           >
//             <MenuItem value="Topwear">Topwear</MenuItem>
//             <MenuItem value="Bottomwear">Bottomwear</MenuItem>
//             <MenuItem value="Winterwear">Winterwear</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl sx={{ minWidth: 200 }}>
//           <InputLabel>Sort by Price</InputLabel>
//           <Select
//             value={sortOrder}
//             onChange={handleSortChange}
//             label="Sort by Price"
//           >
//             <MenuItem value="Relevant">Relevant</MenuItem>
//             <MenuItem value="lowToHigh">Low to High</MenuItem>
//             <MenuItem value="highToLow">High to Low</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//       <Grid container spacing={3} sx={{ mt: 4 }}>
//         {filteredAndSortedProducts.map((product) => (
//           <Grid item xs={12} sm={6} md={2.4} key={product._id}>
//             <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2 }}>
//               <img src={product.image} alt={product.name} width="100%" />
//               <Typography variant="h6">{product.name}</Typography>
//               <Typography variant="body2">{product.description}</Typography>
//               <Typography variant="body1">
//                 <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>
//                   ${product.oldPrice}
//                 </span>
//                 <span>${product.newPrice}</span>
//               </Typography>
//               <Typography variant="body2">Category: {product.category}</Typography>
//               <Typography variant="body2">SubCategory: {product.subCategory}</Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 2, mr: 1 }}
//                 onClick={() => handleEdit(product)}
//               >
//                 Edit
//               </Button>
//               <Button variant="contained" color="error" sx={{ mt: 2 }} onClick={() => handleDelete(product._id)}>
//                 Delete
//               </Button>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default AdminProduct;


import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, updateProduct, deleteProduct } from './AdminProductSlice/AdminProductSlice';
import { Box, Button, TextField, Grid, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const generateUniqueId = () => {
  return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

const AdminProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [productData, setProductData] = useState({
    _id: '',
    name: '',
    description: '',
    oldPrice: '',
    newPrice: '',
    image: '',
    category: '',
    subCategory: '',
  });

  const [isUpdating, setIsUpdating] = useState(false);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterSubCategory, setFilterSubCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, description, oldPrice, newPrice, image, category, subCategory } = productData;

    // Check if all required fields are filled
    if (!name || !description || !oldPrice || !newPrice || !image || !category || !subCategory) {
      alert('Please fill out all fields');
      return;
    }

    if (isUpdating) {
      dispatch(updateProduct({ _id: productData._id, updatedProduct: productData }));
      setIsUpdating(false);
    } else {
      const newProduct = { ...productData, _id: generateUniqueId() };
      dispatch(addProduct(newProduct));
    }

    // Reset form
    setProductData({
      _id: '',
      name: '',
      description: '',
      oldPrice: '',
      newPrice: '',
      image: '',
      category: '',
      subCategory: '',
    });
  };

  const handleEdit = (product) => {
    setProductData(product);
    setIsUpdating(true);
  };

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(productId));
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'filterCategory') {
      setFilterCategory(value);
    } else if (name === 'filterSubCategory') {
      setFilterSubCategory(value);
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Memoize filtered and sorted products to avoid unnecessary re-renders
  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter((product) => {
        return (
          (filterCategory === '' || product.category === filterCategory) &&
          (filterSubCategory === '' || product.subCategory === filterSubCategory)
        );
      })
      .sort((a, b) => {
        if (sortOrder === 'lowToHigh') {
          return a.newPrice - b.newPrice;
        } else if (sortOrder === 'highToLow') {
          return b.newPrice - a.newPrice;
        }
        return 0;
      });
  }, [products, filterCategory, filterSubCategory, sortOrder]);

  return (
    <Box sx={{ p: 3, marginTop: '50px' }}>
      <Typography variant="h4">Admin Products</Typography>

      {/* Form to add/update product */}
      <Box sx={{ mt: 3 }}>
        <TextField
          label="Name"
          name="name"
          value={productData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={productData.description}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Old Price"
          name="oldPrice"
          value={productData.oldPrice}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Price"
          name="newPrice"
          value={productData.newPrice}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Image URL"
          name="image"
          value={productData.image}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Category and SubCategory Fields */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
          >
            <MenuItem value="Men">Men</MenuItem>
            <MenuItem value="Women">Women</MenuItem>
            <MenuItem value="Kids">Kids</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>SubCategory</InputLabel>
          <Select
            label="SubCategory"
            name="subCategory"
            value={productData.subCategory}
            onChange={handleInputChange}
          >
            <MenuItem value="Topwear">Topwear</MenuItem>
            <MenuItem value="Bottomwear">Bottomwear</MenuItem>
            <MenuItem value="Winterwear">Winterwear</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
          {isUpdating ? 'Update Product' : 'Add Product'}
        </Button>
      </Box>

      {/* Filter and Sort Options */}
      <Box sx={{ mt: 4 }}>
        <FormControl sx={{ minWidth: 200, marginRight: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={filterCategory}
            name="filterCategory"
            onChange={handleFilterChange}
            label="Category"
          >
            <MenuItem value="Men">Men</MenuItem>
            <MenuItem value="Women">Women</MenuItem>
            <MenuItem value="Kids">Kids</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200, marginRight: 2 }}>
          <InputLabel>SubCategory</InputLabel>
          <Select
            value={filterSubCategory}
            name="filterSubCategory"
            onChange={handleFilterChange}
            label="SubCategory"
          >
            <MenuItem value="Topwear">Topwear</MenuItem>
            <MenuItem value="Bottomwear">Bottomwear</MenuItem>
            <MenuItem value="Winterwear">Winterwear</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Sort by Price</InputLabel>
          <Select
            value={sortOrder}
            onChange={handleSortChange}
            label="Sort by Price"
          >
            <MenuItem value="Relevant">Relevant</MenuItem>
            <MenuItem value="lowToHigh">Low to High</MenuItem>
            <MenuItem value="highToLow">High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {filteredAndSortedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={2.4} key={product._id}>
            <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2 }}>
              <img src={product.image} alt={product.name} width="100%" />
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="body1">
                <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>
                  ${product.oldPrice}
                </span>
                <span>${product.newPrice}</span>
              </Typography>
              <Typography variant="body2">Category: {product.category}</Typography>
              <Typography variant="body2">SubCategory: {product.subCategory}</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, mr: 1 }}
                onClick={() => handleEdit(product)}
              >
                Edit
              </Button>
              <Button variant="contained" color="error" sx={{ mt: 2 }} onClick={() => handleDelete(product._id)}>
                Delete
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminProduct;
