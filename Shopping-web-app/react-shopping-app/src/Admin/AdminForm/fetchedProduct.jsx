import { useState,useEffect } from "react";
import { addProduct,deleteProduct,updateProduct } from "./AdminProductSlice/AdminProductSlice";
import { useDispatch,useSelector} from "react-redux";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

export default function fetchedProduct() {
const uniqueId = `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
console.log(uniqueId); 

const dispatch=useDispatch();
const products=useSelector((state)=>state.products.products)
const [productData,setProductData]=useState({
    _id:'',
    name:'',
    description:'',
    oldPrice:'',
    newPrice:'',
    image:'',
    category:'',
    subCategory:'',
})
const [isUpdating,setIsUpdating]=useState(false);
const [filterCategory,setFilterCategory]=useState('');
const [filterSubCategory,setFilterSubCategory]=useState('');
const [sortOrder,setSortOrder]=useState('');

const handleInputChange=()=>{
    const {name,value}=e.target;
    setProductData({...productData,[name]:value})
    console.log(`Field ${name} changed to:`, value);
}

const handleSubmit=()=>{
    if(isUpdating){
        dispatch(updateProduct({_id:productData._id,updatedProduct:productData}));
        setIsUpdating(false);
        console.log('updated product',productData);
    }
    else{
const newProduct={...productData,_id:uniqueId()};
dispatch(addProduct(newProduct));
console.log('added product',newProduct);

setProductData({_id:'',name:'',oldPrice:'',newPrice:'',description:'',image:'',category:'',subCategory:''})}
}
const handleDelete=(productId)=>{
dispatch(deleteProduct(productId));
console.log(productId);
}
const handleEdit=(product)=>{
    dispatch(product);
}
const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  

  const filteredAndSortedProducts = products
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
   {
    /*
if(setvisible===_id)
{
fetched.getitem
}
    */
   }
  return (
    <>
<Box>
    <Typography variant="h5">Admin Products</Typography>
    <Box>
<TextField onChange={handleInputChange} value={productData.name} fullWidth margin="normal" label='name' name="name"/>
<TextField onChange={handleInputChange} value={productData.description} fullWidth margin="normal" label='description' name="description"/>
<TextField onChange={handleInputChange} value={productData.newPrice} fullWidth margin="normal" label='newPrice' name="newPrice"/>
<TextField onChange={handleInputChange} value={productData.oldPrice} fullWidth margin="normal" label='oldPrice' name="oldPrice"/>
<TextField onChange={handleInputChange} value={productData.image} fullWidth margin="normal" label='image' name="image"/>

<FormControl fullWidth margin="normal">
    <InputLabel>Category</InputLabel>
    <Select label='Category' name='category' value={productData.category} onChange={handleInputChange}>
        <MenuItem value='Men'>Men</MenuItem>
        <MenuItem value='Women'>Women</MenuItem>
        <MenuItem value='Kids'>Kids</MenuItem>
    </Select>
</FormControl>
<FormControl fullWidth margin="normal">
    <InputLabel>SubCategory</InputLabel>
    <Select label='SubCategory' name='subCategory' value={productData.subCategory} onChange={handleInputChange}>
        <MenuItem value='Topwear'>TopWear</MenuItem>
        <MenuItem value='Bottomwear'>Bottomwear</MenuItem>
        <MenuItem value='Winterwear'>Winterwear</MenuItem>
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
    {filteredAndSortedProducts.map((product)=>(
<Grid item  xs={12} sm={6} md={2.4} key={product._id}>

    <Box sx={{border:'1px solid white', padding:2, borderRadius:2}}>
        <img src={product.image} width={'100%'}/>
        <Typography>{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="body1">
            <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>
                  ${product.oldPrice}
                </span>
                <span>${product.newPrice}</span>
            </Typography>
            <Typography variant="body2">category:{product.category}</Typography>
            <Typography variant="body2">subCtaegory:{product.subCategory}</Typography>
            <Button variant="contained" color="primary" onClick={()=>handleEdit(product)}>
                Edit
            </Button>
            <Button color="error" onClick={()=>handleDelete(product._id)}>
                Delete
            </Button>
    </Box>
</Grid>

    ))}
</Grid>
</Box>

    </>
  )
}
