import React, { useEffect, useState } from "react";

// ** MUI Imports
import { TextField, Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// ** Custom components import
import ProductCards from "./Cards";

// **Third part laibraries import
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const matches = useMediaQuery("(min-width:600px)");
  // ** State
  const [productToBeSearched, setProductToBeSearched] = useState("");
  const [productsList, setProductsList] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, []);

  const handleApiResponse = (data) => {
    if (data.status) {
      toast.success(data.message);
    } else toast.error("Something went wrong");
  };

  const getProducts = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_API_KEY}/v1/products`,
        { headers }
      );
      setProductsList(response.data);

      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setLoading(true);
    }
  };

  return (
    <>
      <Box sx={{ p: 2, width: matches ? 500 : 250 }}>
        <Typography
          sx={{ fontWeight: 700, fontFamily: "Poppins", fontSize: 18, mb: 1 }}
        >
          Welcome {""}
          {user.firstName}
        </Typography>
        <TextField
          id="outlined-search"
          label="Search product"
          type="search"
          size="small"
          disabled={productsList?.data?.length < 1}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 5,
            },
          }}
          onChange={(event) => setProductToBeSearched(event.target.value)}
        />
      </Box>

      {/* Cards component */}
      <ProductCards
        productsList={productsList}
        productToBeSearched={productToBeSearched}
        getProducts={getProducts}
        loading={loading}
        handleApiResponse={handleApiResponse}
      />
    </>
  );
};

export default Index;
