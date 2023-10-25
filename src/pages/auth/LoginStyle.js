export const loginContainer = {
  "&.MuiContainer-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
};

export const loginCard = {
  "&.MuiCard-root": {
    width: "35%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "10px",
    textAlign: "center",
    [`@media screen and (min-width: 320px)`]: {
      width: "100%",
    },
    [`@media screen and (min-width: 425px)`]: {
      width: "100%",
    },
    [`@media screen and (min-width: 600px)`]: {
      width: "50%",
    },
    [`@media screen and (min-width: 900px)`]: {
      width: "40%",
    },
    [`@media screen and (min-width: 1520px)`]: {
      width: "75%",
      height: "60%",
    },
  },
};

export const loginHeadingTextStyle = {
  "&.MuiTypography-root": {
    fontFamily: "Poppins-Light",
    fontStyle: "normal",
    fontSize: "22px",
    lineHeight: "45px",
    color: "#040f25",
    marginTop: "20px",
    marginBottom: "10px",
    [`@media screen and (min-width: 600px)`]: {
      fontSize: "22px",
    },
    [`@media screen and (min-width: 900px)`]: {
      fontSize: "22px",
    },
    [`@media screen and (min-width: 1520px)`]: {
      fontSize: "22px",
    },
  },
};

export const loginOtpHeadingTextStyle = {
  "&.MuiTypography-root": {
    fontFamily: "Poppins-SemiBold",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "45px",
    color: "#040f25",
    marginTop: "10px",
    marginBottom: "10px",
    [`@media screen and (min-width: 600px)`]: {
      fontSize: "30px",
    },
    [`@media screen and (min-width: 900px)`]: {
      fontSize: "20px",
    },
    [`@media screen and (min-width: 1520px)`]: {
      fontSize: "50px",
    },
  },
};

export const loginFieldDivBox = {
  "&.MuiBox-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
    [`@media screen and (min-width: 1520px)`]: {
      width: "80%",
    },
  },
};

export const loginInputField = {
  "&.MuiFormControl-root": {
    width: "100%",
    marginBottom: "10px",
    "& .MuiFormLabel-root": {
      fontFamily: "Poppins",
    },
    ".MuiInputBase-root": {
      fontFamily: "Poppins",
      fontSize: "15px",
      color: "#7D8EA3",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#7D8EA3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7D8EA3",
    },
  },
};

export const loginButton = {
  "&.MuiButtonBase-root": {
    fontFamily: "Poppins-semibold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "21.0411px",
    lineHeight: "24px",
    color: "#ffffff",
    backgroundColor: "#040F25",
    borderRadius: "10px ",
    width: "100%",
    height: "55px",
    marginTop: "10px",
  },
};

export const loginForgetPasswordTypography = {
  "&.MuiTypography-root": {
    color: "#040f25",
    fontFamily: "Poppins-semibold",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "22px",
    letterSpacing: "0.675px",
    textDecorationLine: "underline",
    marginTop: "20px",
    // [`@media screen and (min-width: 320px)`]: {
    //   width: "100%",
    // },
    // [`@media screen and (min-width: 425px)`]: {
    //   width: "80%",
    // },
    [`@media screen and (min-width: 600px)`]: {
      fontSize: "10px",
    },
    [`@media screen and (min-width: 900px)`]: {
      fontSize: "15px",
    },
    [`@media screen and (min-width: 1520px)`]: {
      fontSize: "25px",
    },
  },
};
