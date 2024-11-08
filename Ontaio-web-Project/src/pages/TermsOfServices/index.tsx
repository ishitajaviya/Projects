import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import tsStyle from "./style";
import { Typography } from "@mui/material";


const Header = React.lazy(() => import("components/Header"));
const SubHeader = React.lazy(() => import("components/SubHeader"));
const Footer = React.lazy(() => import("components/Footer"));
const CustLoader = React.lazy(() => import("components/CustLoader"));

const TermsOfServices = () => {
  return (
    <React.Suspense fallback={<CustLoader />}>
      <Box sx={{ height: "100vh", width: "100vw", overflow: "auto" }}>
        <Header />
        <SubHeader title={"Terms of Service"} updatedAt={"July 19th, 2024"} />
        <Box sx={tsStyle.container}>
          <Paper elevation={2} sx={tsStyle.subCon}>
            <Typography sx={tsStyle.text}>
              OntarioMediaGroupSWS, its subsidiaries, and affiliates (collectively,
              "OntarioMediaGroupSWS, " the "Company, " "We," or "Us") thank you for
              visiting our online and mobile resources. This document outlines
              the terms and conditions governing your use of our digital
              Growth program services for Restraurant owners.
            </Typography>

            <Typography sx={[tsStyle.title, { my: "1rem" }]}>
              1. Acceptance of Terms
            </Typography>
            <Typography sx={[tsStyle.text]}>
              By accessing or using our services, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do
              not use our services.
            </Typography>

            <Typography sx={[tsStyle.title, { my: "1rem" }]}>
              2. Services Description
            </Typography>
            <Typography sx={[tsStyle.text]}>
              OntarioMediaGroupSWS provides digital marketing services designed to
              enhance the online presence of Restaurant owners and attract more
              Customers. Our services may include, but are not limited to,
              website optimization, social media management, content creation,
              and online advertising strategies.
            </Typography>

            <Typography sx={[tsStyle.title, { my: "1rem" }]}>
              3. User Responsibilities
            </Typography>
            <Typography sx={[tsStyle.text]}>
              As a user of our services, you agree to:
            </Typography>
            <ul>
              <Typography
                sx={[tsStyle.text, { display: "list-item", mt: "1rem" }]}
              >
                Provide accurate and up-to-date information about your marketing
                practice
              </Typography>
              <Typography sx={[tsStyle.text, { display: "list-item" }]}>
                Use our services in compliance with all applicable laws and
                regulations
              </Typography>
              <Typography sx={[tsStyle.text, { display: "list-item" }]}>
                Maintain the confidentiality of your account information
              </Typography>
              <Typography sx={[tsStyle.text, { display: "list-item" }]}>
                Notify us immediately of any unauthorized use of your account
              </Typography>
            </ul>

            <Typography sx={[tsStyle.title, { my: "1rem" }]}>
              4. Intellectual Property
            </Typography>
            <Typography sx={[tsStyle.text]}>
              All content, materials, and tools provided as part of our services
              are the property of OntarioMediaGroupSWS and are protected by copyright
              and other intellectual property laws. You may not reproduce,
              distribute, or create derivative works without our express
              permission.
            </Typography>

            <Typography sx={[tsStyle.title, { my: "1rem" }]}>
              5. Payment and Subscription
            </Typography>
            <Typography sx={[tsStyle.text]}>
              Fees for our services are as outlined on our website or in your
              service agreement. By subscribing to our services, you agree to
              pay all applicable fees. Subscriptions will automatically renew
              unless cancelled as per our cancellation policy.
            </Typography>

            <Typography sx={[tsStyle.title, { my: "1rem" }]}>
              6. Cancellation and Refunds
            </Typography>
            <Typography sx={[tsStyle.text]}>
              To cancel your subscription, please contact us at{" "}
              <span style={{ textDecoration: "underline" }}>
                care@bizsws.com
              </span>
              . Refunds are provided as per our refund policy, which may vary
              depending on the specific service package.
            </Typography>

            <Typography sx={[tsStyle.title, { my: "1rem" }]}>
              7. Limitation of Liability
            </Typography>
            <Typography sx={[tsStyle.text]}>
              OntarioMediaGroupSWS is not liable for any indirect, incidental, special,
              or consequential damages resulting from the use or inability to
              use our services.
            </Typography>

            <Typography sx={[tsStyle.title, { my: "1rem" }]}>
              8. Privacy Policy
            </Typography>
            <Typography sx={[tsStyle.text]}>
              Your use of our services is also governed by our Privacy Policy,
              which can be found on our website.
            </Typography>

            <Typography sx={[tsStyle.title, { my: "1rem" }]}>
              9. Modifications to Terms
            </Typography>
            <Typography sx={[tsStyle.text]}>
              We reserve the right to modify these Terms of Service at any time.
              Continued use of our services after such modifications constitutes
              acceptance of the updated terms.
            </Typography>

            <Typography sx={[tsStyle.title, { my: "1rem" }]}>
              10. Governing Law
            </Typography>
            <Typography sx={[tsStyle.text]}>
              These Terms of Service are governed by the laws of the state where
              OntarioMediaGroupSWS is registered, without regard to its conflict of law
              provisions.
            </Typography>

            <Typography sx={[tsStyle.title, { my: "1rem" }]}>
              11. Contact Information
            </Typography>
            <Typography sx={[tsStyle.text]}>
              For any questions regarding these Terms of Service, please contact
              us at:
            </Typography>
            <ul>
              <Typography
                sx={[
                  tsStyle.text,
                  {
                    display: "list-item",
                  },
                ]}
              >
                Email:{" "}
                <span style={{ textDecoration: "underline" }}>
                  {" "}
                  support@bizsws.com
                </span>
              </Typography>
              <Typography sx={[tsStyle.text, { display: "list-item" }]}>
                Phone: +1 (209)-519-5535
              </Typography>
              <Typography sx={[tsStyle.text, { display: "list-item" }]}>
                Address: 123 Maple Street, Winton, CA 95388
              </Typography>
            </ul>

            <Typography sx={[tsStyle.text]}>
              By using our services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service.
            </Typography>
          </Paper>
        </Box>
        <Footer />
      </Box>
    </React.Suspense>
  );
};

export default TermsOfServices;
