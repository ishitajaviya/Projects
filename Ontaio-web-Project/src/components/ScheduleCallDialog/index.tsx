/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import scStyles from "./style";
import CustGradientBtn from "components/CustGradientBtn";
import CustTextField from "components/CusTextField";
import axios from "axios";
import { InputAdornment } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import ConstantsHelper from "helpers/ConstantsHelper";
import { GOOGLE_SHEET_SCRIPT_URL, SCHEDULE_REDIRECT_URL } from "helpers/Config";

const ScheduleCallDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState("");
  const [intervalId, setIntervalId] = React.useState<any>(null);

  const onClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  //Submit Form Data Function
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNo: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .trim()
        .required("Name is required")
        .matches(ConstantsHelper.nameRegex, "Enter valid name"),
      email: yup
        .string()
        .trim()
        .email("Enter valid email")
        .matches(ConstantsHelper.emailIdRegex, "Enter valid email")
        .required("Email is required"),
      phoneNo: yup
        .string()
        .trim()
        .min(10, "Enter valid phone number")
        .max(10, "Enter valid phone number")
        .required("Phone number is required")
        .test("test-mobNo", '"Enter valid phone number', (val, context) => {
          if (val && val !== "") {
            const moNo: String = val ?? "";
            const onlyNums = moNo.replace(/[^0-9]/g, "");
            return ConstantsHelper.mobileNoRegex.test(onlyNums);
          } else return false;
        }),
    }),
    onSubmit: (values) => {
      const name = values.name;
      const email = values.email;
      const phoneNo = values.phoneNo;

      axios
        .get(
          `${GOOGLE_SHEET_SCRIPT_URL}?name=${name}&email=${email}&countryCode=${countryCode}&phoneNo=${phoneNo}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      onClose();
      window.open(SCHEDULE_REDIRECT_URL);
    },
  });

  const setScheduleCallInterval = () => {
    const scheduleCallInterval = setInterval(() => {
      setOpen(true);
    }, 1000 * 60 * 1);

    return scheduleCallInterval;
  };

  React.useEffect(() => {
    if (open) {
      if (intervalId) {
        clearInterval(intervalId);
      }
    } else {
      const scheduleCallInterval = setScheduleCallInterval();
      setIntervalId(scheduleCallInterval);
    }
    if (intervalId) {
      return () => clearInterval(intervalId);
    }
  }, [open]);

  React.useEffect(() => {
    const fetchGeolocationData = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountryCode(response.data.country_calling_code);
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
      }
    };

    fetchGeolocationData();
  }, []);

  return (
    <>
      <Dialog
        maxWidth="sm"
        open={open}
        sx={scStyles.dialog}
        onClose={() => {
          onClose();
        }}
      >
        <IconButton
          aria-label="close"
          onClick={() => {
            onClose();
          }}
          sx={scStyles.closeIconBtn}
        >
          <CloseIcon sx={{ color: "black", fontSize: "2rem" }} />
        </IconButton>
        <DialogContent sx={scStyles.dialogContent}>
          <Typography sx={scStyles.title}>
            Learn How to Grow Practice Revenue Using a Restaurant Digital Growth
            Program
          </Typography>
          <Typography sx={scStyles.desc}>
            Enter your info below to schedule a call with us to discuss how we
            can help grow your Marketing practice.
          </Typography>

          <React.Suspense fallback={<></>}>
            <CustTextField
              inputProps={{ tabIndex: "1" }}
              fullWidth
              id={"name"}
              type="text"
              placeholder="Enter your name"
              sx={{ mb: "1rem" }}
              value={formik.values.name}
              onChange={(e: any) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /[^A-Za-z ]/g,
                  ""
                );
                formik.handleChange(e);
              }}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <CustTextField
              inputProps={{ tabIndex: "2" }}
              fullWidth
              id={"email"}
              type="text"
              placeholder="Enter your email"
              sx={{ mb: "1rem" }}
              value={formik.values.email}
              onChange={(e: any) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /\s/g,
                  ""
                );
                formik.handleChange(e);
              }}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <CustTextField
              inputProps={{ tabIndex: "3" }}
              fullWidth
              type="text"
              placeholder="Enter your phone number"
              sx={{ mb: "1rem" }}
              id={"phoneNo"}
              value={formik.values.phoneNo}
              onChange={(e: any) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /\s/g,
                  ""
                );
                const phoneNo = e.currentTarget.value.replace(/[^0-9]/g, "");
                if (phoneNo?.length <= 10)
                  formik.setFieldValue("phoneNo", phoneNo);
              }}
              error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
              helperText={formik.touched.phoneNo && formik.errors.phoneNo}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ mr: "0.5rem !important" }}
                  >
                    {countryCode}
                  </InputAdornment>
                ),
              }}
            />
            <CustGradientBtn
              sx={{
                height: "50px !important",
                width: "100% !important",
                "& .container": {
                  height: "50px !important",
                  lineHeight: "50px !important",
                },
              }}
              type={1}
              title={"Schedule Your Free Demo"}
              onClick={() => {
                formik.handleSubmit();
              }}
            />
          </React.Suspense>
          <Typography sx={scStyles.subTitle}>
            We will never spam you. Your details are safe.
          </Typography>
          <Typography sx={scStyles.subDesc}>
            By clicking the button, you consent for us or our partners to
            contact you by email or phone with information about our services.
            We value your privacy and ensure your details are secure. For more
            information, please read our <a style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }} href="/privacy-policy">Privacy Policy </a> and{" "}
            <a style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }} href="/terms-of-sevices">Terms of Service</a>.
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ScheduleCallDialog;
