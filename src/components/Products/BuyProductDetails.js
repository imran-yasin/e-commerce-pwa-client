import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

// ** Third Party Imports
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomizedDialogs = ({
  open,
  handleClose,
  selectedProduct,
  getProducts,
  handleApiResponse,
}) => {
  // ** States
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [singleItemSoldAtPrice, setSingleItemSoldAtPrice] = useState();
  const [errorMessage, setErrorMessage] = useState();

  // ** Functions
  const incrementQuantity = () => {
    if (quantity < selectedProduct.quantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      //** prevent zero and negative values*/
      setQuantity((prev) => prev - 1);
    }
  };

  console.log("singleItemSoldAtPrice", singleItemSoldAtPrice);

  const handleSellProduct = async () => {
    if (singleItemSoldAtPrice === undefined) {
      setErrorMessage("Single item sold at price is not required");
      return;
    }
    setLoading(true);
    let productData = {
      soldQuantity: quantity,
      singleItemPrice: selectedProduct.singleItemSellingPrice,
      singleItemSoldAtPrice: singleItemSoldAtPrice,
    };
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_HOST_API_KEY}/v1/products/sell?productId=${selectedProduct.id}`,
        productData,
        { Authorization: `Bearer ${localStorage.getItem("token")}` }
      );
      getProducts();
      handleClose();
      setLoading(false);
      handleApiResponse(response.data);
    } catch (error) {
      setLoading(false);
      handleClose();
      handleApiResponse(error.response.data);
    }
  };

  return (
    <div>
      <BootstrapDialog
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleClose(event, reason);
          }
        }}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Product Detail
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{ width: 300 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 14 }}
            >
              Quantity
            </Typography>
            <IconButton onClick={decrementQuantity}>
              <RemoveRoundedIcon />
            </IconButton>
            <TextField
              type="number"
              size="small"
              value={quantity}
              sx={{
                width: 80,
                "& input[type=number]": {
                  "-moz-appearance": "textfield",
                },
                "& input[type=number]::-webkit-outer-spin-button": {
                  "-webkit-appearance": "none",
                  margin: 0,
                },
                "& input[type=number]::-webkit-inner-spin-button": {
                  "-webkit-appearance": "none",
                  margin: 0,
                },
              }}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "") {
                  setQuantity(1);
                } else {
                  const numericValue = parseInt(val);
                  if (numericValue > selectedProduct.quantity) {
                    setQuantity(selectedProduct.quantity);
                  } else {
                    setQuantity(numericValue);
                  }
                }
              }}
              inputProps={{
                max: selectedProduct.quantity,
              }}
            />
            <IconButton onClick={incrementQuantity}>
              <AddRoundedIcon />
            </IconButton>
          </Box>
          <TextField
            fullWidth
            type="number"
            size="small"
            name="setSingleItemSoldAtPrice"
            label="Single item sold at price"
            onChange={(event) => setSingleItemSoldAtPrice(event.target.value)}
            sx={{
              my: 2,
              "& input[type=number]": {
                "-moz-appearance": "textfield",
              },
              "& input[type=number]::-webkit-outer-spin-button": {
                "-webkit-appearance": "none",
                margin: 0,
              },
              "& input[type=number]::-webkit-inner-spin-button": {
                "-webkit-appearance": "none",
                margin: 0,
              },
            }}
            error={errorMessage ? errorMessage : null}
            helperText={errorMessage ? errorMessage : null}
          />
          <Box sx={{ mt: 2 }}>
            <Box>
              <Typography
                sx={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 14 }}
              >
                Price of Single Item:{" "}
                {new Intl.NumberFormat().format(
                  selectedProduct.singleItemSellingPrice
                )}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: 14,
                  my: 1,
                }}
              >
                Total Price:{" "}
                {quantity === 0
                  ? 0
                  : new Intl.NumberFormat().format(
                      quantity * selectedProduct.singleItemSellingPrice
                    )}
              </Typography>
            </Box>
            {selectedProduct.quantity && (
              <Typography
                sx={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 14 }}
              >
                Available Quantity: {selectedProduct.quantity}
              </Typography>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSellProduct}
            sx={{
              width: "150px",
              backgroundColor: "#d52127",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#d52127",
              },
            }}
          >
            {loading ? (
              <CircularProgress size="1.6rem" sx={{ color: "white" }} />
            ) : (
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  color: "white",
                  fontSize: 18,
                  textTransform: "capitalize",
                }}
              >
                Buy
              </Typography>
            )}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default CustomizedDialogs;
