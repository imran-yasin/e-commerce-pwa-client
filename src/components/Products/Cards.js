import React, { useState } from "react";

// ** MUI imports
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

// ** Custom components imports
import BuyProductDetails from "./BuyProductDetails";

const Cards = ({
  productsList,
  productToBeSearched,
  getProducts,
  loading,
  handleApiResponse,
}) => {
  //** */ States
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  // ** functions
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box
        sx={{
          height: "74vh",
          overflowY: "auto",
          p: 2,
        }}
      >
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ color: "#D52027" }} />
          </Box>
        ) : productsList?.data?.length < 1 ? (
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Products Not Found
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {productsList &&
              productsList?.data
                .filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(productToBeSearched.toLowerCase())
                )
                .map((product, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                      sx={{
                        maxWidth: 365,
                        marginBottom: 2,
                        height: product.lot ? 280 : 200,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardContent sx={{ flex: "1" }}>
                        <Box sx={{ my: 2 }}>
                          <Typography
                            sx={{
                              textTransform: "capitalize",
                              textAlign: "center",
                              fontWeight: 700,
                              fontSize: 24,
                              fontFamily: "Poppins",
                            }}
                          >
                            {product?.name}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              textAlign: "center",
                              fontSize: 16,
                              fontFamily: "Poppins",
                            }}
                          >
                            {product?.price}
                          </Typography>
                        </Box>

                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          sx={{ px: 2 }}
                        >
                          <Typography
                            sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                          >
                            Price
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              fontFamily: "Poppins",
                            }}
                          >
                            {new Intl.NumberFormat().format(
                              product.singleItemSellingPrice
                            )}
                          </Typography>
                        </Stack>

                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          sx={{ px: 2 }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontFamily: "Poppins",
                            }}
                          >
                            Available Quantity
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              fontFamily: "Poppins",
                            }}
                          >
                            {product.quantity
                              ? new Intl.NumberFormat().format(product.quantity)
                              : 0}
                          </Typography>
                        </Stack>

                        {product.lot && (
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ px: 2 }}
                          >
                            <Typography
                              sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                            >
                              Lot No
                            </Typography>
                            <Typography
                              component="span"
                              sx={{
                                fontFamily: "Poppins",
                              }}
                            >
                              {new Intl.NumberFormat().format(product.lot)}
                            </Typography>
                          </Stack>
                        )}

                        <Divider />
                      </CardContent>
                      <CardActions>
                        {product.quantity === 0 ? (
                          <Button
                            disabled
                            variant="contained"
                            fullWidth
                            disableRipple
                            sx={{
                              backgroundColor: "#f5f5f5",
                              "&:hover": {
                                backgroundColor: "#f5f5f5",
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "1.02rem",
                                color: "black",
                                mr: 2,
                                fontFamily: "Poppins",
                                fontWeight: "bold",
                              }}
                            >
                              Out of Stock
                            </Typography>
                          </Button>
                        ) : (
                          <Button
                            onClick={() => {
                              setOpen(true);
                              setSelectedProduct(product);
                            }}
                            variant="contained"
                            fullWidth
                            disableRipple
                            sx={{
                              backgroundColor: "#040F25",
                              "&:hover": {
                                backgroundColor: "transparent",
                                color: "#D52027",
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "1.02rem",
                                color: "inherit",
                                mr: 2,
                                fontFamily: "Poppins",
                                fontWeight: "bold",
                              }}
                            >
                              Buy Now
                            </Typography>
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
          </Grid>
        )}

        {open && (
          <BuyProductDetails
            open={open}
            handleClose={handleClose}
            selectedProduct={selectedProduct}
            getProducts={getProducts}
            handleApiResponse={handleApiResponse}
          />
        )}
      </Box>
    </div>
  );
};

export default Cards;
