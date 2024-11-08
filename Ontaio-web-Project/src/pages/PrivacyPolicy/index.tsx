import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ppStyle from "./style";
import { Typography } from "@mui/material";

const Header = React.lazy(() => import("components/Header"));
const SubHeader = React.lazy(() => import("components/SubHeader"));
const Footer = React.lazy(() => import("components/Footer"));
const CustLoader = React.lazy(() => import("components/CustLoader"));

const PrivacyPolicy = () => {
  return (
    <React.Suspense fallback={<CustLoader />}>
      <Box sx={{ height: "100vh", width: "100vw", overflow: "auto" }}>
        <Header />
        <SubHeader title={"Privacy Policy"} updatedAt={"July 21th, 2024"} />
        <Box sx={ppStyle.container}>
          <Paper elevation={2} sx={ppStyle.subCon}>
            <Typography sx={ppStyle.text}>
              OntarioMediaGroupSWS, along with its subsidiaries and affiliates
              (together referred as "OntarioMediaGroupSWS", "the Company", "We", or "Us"),
              thanks you for visiting our website and mobile resources.
              This document explains the terms and conditions for using
              our digital Growth Program services designed for restaurant owners.
            </Typography>

            <Typography sx={[ppStyle.title, { my: "1rem" }]}>
              Who We Collect Personal Information From
            </Typography>
            <Typography sx={[ppStyle.text]}>
              We collect personal information from:
            </Typography>
            <ul>
              <Typography
                sx={[ppStyle.text, { display: "list-item", mt: "1rem" }]}
              >
                Visitors to and users of our online and mobile resources
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Our customers (Restaurant owners)
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Current members of our workforce and job applicants
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Third-party vendors and business partners
              </Typography>
            </ul>

            <Typography sx={[ppStyle.title, { my: "1rem" }]}>
              What We Collect
            </Typography>
            <Typography sx={[ppStyle.text]}>
              We collect two types of information:
            </Typography>
            <ul style={{ listStyleType: "decimal" }}>
              <Typography
                sx={[
                  ppStyle.text,
                  {
                    display: "list-item",
                    listStyleType: "decimal",
                  },
                ]}
              >
                Non-personal information (collected automatically): Device operating system, IP address, browser type, visit details.
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Personal information you voluntarily provide or that is
                collected automatically
              </Typography>
            </ul>
            <Typography sx={[ppStyle.title, { my: "1rem" }]}>
              Voluntarily Submitted Information
            </Typography>

            <Typography sx={[ppStyle.text]}>
              Types of personal information we collect include:
            </Typography>
            <ul>
              <Typography
                sx={[ppStyle.text, { display: "list-item", mt: "1rem" }]}
              >
                Identifiers (name, email address, physical address, phone
                number)
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Professional information (marketing practice details, services
                offered)
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Financial account information (for payment processing)
              </Typography>
            </ul>

            <Typography sx={[ppStyle.text]}>
              We use this information to:
            </Typography>
            <ul>
              <Typography
                sx={[ppStyle.text, { display: "list-item", mt: "1rem" }]}
              >
                Provide digital marketing services and process payments
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Communicate about our services and provide support
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Analyze and improve our Customers' online presence
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Send promotional materials (with consent)
              </Typography>
            </ul>

            <Typography sx={[ppStyle.title, { my: "1rem" }]}>
              Automatically Collected Information
            </Typography>
            <Typography sx={[ppStyle.text]}>We collect:</Typography>
            <ul>
              <Typography
                sx={[ppStyle.text, { display: "list-item", mt: "1rem" }]}
              >
                Domain name and IP address
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Browser and operating system type
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Date, time, and length of visit
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Pages visited and links clicked
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Referring websites
              </Typography>
            </ul>

            <Typography sx={[ppStyle.text, { my: "1rem" }]}>
              We use this information to improve our services and enhance user
              experience.
            </Typography>

            <Typography sx={[ppStyle.title, { my: "1rem" }]}>
              How We Protect Collected Personal Information
            </Typography>
            <Typography sx={[ppStyle.text]}>
              We implement reasonable security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or
              destruction.
            </Typography>

            <Typography sx={[ppStyle.title, { my: "1rem" }]}>
              Your Rights and Options
            </Typography>
            <Typography sx={[ppStyle.text]}>You have the right to:</Typography>
            <ul>
              <Typography
                sx={[ppStyle.text, { display: "list-item", mt: "1rem" }]}
              >
                Access, correct, or delete your personal information
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Opt-out of marketing communications
              </Typography>
              <Typography sx={[ppStyle.text, { display: "list-item" }]}>
                Manage cookie preferences through browser settings
              </Typography>
            </ul>

            <Typography sx={[ppStyle.title, { my: "1rem" }]}>
              Children's Privacy
            </Typography>
            <Typography sx={[ppStyle.text]}>
              Our services are not intended for children under 13. We do not
              knowingly collect personal information from children under 13.
            </Typography>

            <Typography sx={[ppStyle.title, { my: "1rem" }]}>
              Changes to This Privacy Statement
            </Typography>
            <Typography sx={[ppStyle.text]}>
              We reserve the right to update this privacy statement
              periodically. Please check our online resources for changes.
            </Typography>

            <Typography sx={[ppStyle.title, { my: "1rem" }]}>
              Contacting Us
            </Typography>
            <Typography sx={[ppStyle.text]}>
              If you have questions about our privacy practices, please contact
              us at:OntarioMediaGroupSWS
            </Typography>
            <Typography sx={[ppStyle.text]}>123 Maple Street</Typography>
            <Typography sx={[ppStyle.text]}>Winton, CA 95388</Typography>
            <Typography sx={[ppStyle.text]}>
              Email:{" "}
              <span style={{ textDecoration: "underline" }}>
                {" "}
                support@bizsws.com
              </span>
            </Typography>
            <Typography sx={[ppStyle.text]}>
              Phone: +1 (209)-519-5535
            </Typography>
            <Typography sx={[ppStyle.text, { mt: "1rem" }]}>
              By using our services or visiting our website, you agree to the
              terms of this Privacy Policy.
            </Typography>
          </Paper>
        </Box>
        <Footer />
      </Box>
    </React.Suspense>
  );
};

export default PrivacyPolicy;
