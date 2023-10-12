// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Divider, Grid, Stack, TextField } from "@mui/material";
import prodcutList from "./productData.json";
import { useState } from "react";

const Index = () => {
  // ** State
  const [productToBeSearched, setProductToBeSearched] = useState("");
  const [openPasswordField, setOpenPasswordField] = useState(false);

  const handleOpenPasswordField = () => {
    setOpenPasswordField(true);
  };
  console.log("product to be searched", productToBeSearched);
  return (
    <>
      <Box
        sx={{
          my: 2,
          p: 2,
          mr: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <TextField
          id="outlined-search"
          label="Search product Name"
          type="search"
          sx={{
            width: 500,
            "& .MuiOutlinedInput-root": {
              borderRadius: 5,
            },
          }}
          onChange={(event) => setProductToBeSearched(event.target.value)}
        />
        {openPasswordField ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <TextField
                id="outlined-search"
                label="Email"
                placeholder="Enter Email"
                type="email"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    width: "250px",
                  },
                }}
              />
              <TextField
                id="outlined-search"
                label="Password"
                placeholder="Enter Password"
                type="password"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    width: "250px",
                  },
                }}
              />

              <Button
                onClick={() => setOpenPasswordField(false)}
                sx={{
                  backgroundColor: "#D52027",
                  width: "100px",
                  px: 6,
                  color: "white",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#D52027",
                    boxShadow: 2,
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </>
        ) : (
          <Button
            onClick={handleOpenPasswordField}
            sx={{
              fontFamily: "Poppins",
              textTransform: "capitalize",
              color: "#D52027",
            }}
          >
            Show more details
          </Button>
        )}
      </Box>
      <Box
        sx={{
          height: 700,
          overflowY: "auto",
          p: 2,
        }}
      >
        <Grid container spacing={2}>
          {prodcutList &&
            prodcutList.data
              .filter((product) =>
                product.name
                  .toLowerCase()
                  .includes(productToBeSearched.toLowerCase())
              )
              .map((product, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ maxWidth: 365, marginBottom: 2 }}>
                    <CardContent>
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

                      <Stack direction="row" justifyContent="space-between">
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

                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontFamily: "Poppins",
                          }}
                        >
                          Quantity
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            fontFamily: "Poppins",
                          }}
                        >
                          {new Intl.NumberFormat().format(product.quantity)}
                        </Typography>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between">
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

                      <Divider />
                    </CardContent>
                    <CardActions>
                      <Button
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
                    </CardActions>
                  </Card>
                </Grid>
              ))}
        </Grid>
      </Box>
    </>
  );
};

export default Index;
