import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import dmStyle from "./style";
import { Typography } from "@mui/material";
import ColorsHelper from "helpers/ColorsHelper";

const Header = React.lazy(() => import("components/Header"));
const SubHeader = React.lazy(() => import("components/SubHeader"));
const Footer = React.lazy(() => import("components/Footer"));
const CustLoader = React.lazy(() => import("components/CustLoader"));

const DMCA = () => {
  return (
    <React.Suspense fallback={<CustLoader />}>
      <Box sx={{ height: "100vh", width: "100vw", overflow: "auto" }}>
        <Header />
        <SubHeader
          title={"Digital Millennium Copyright Act (DMCA) Policy"}
          updatedAt={"July 18th, 2024"}
        />
        <Box sx={dmStyle.container}>
          <Paper elevation={2} sx={dmStyle.subCon}>
            <Typography sx={dmStyle.text}>
              OntarioMediagroupSWS respects the intellectual property rights of others
              and expects its users to do the same. In accordance with the
              Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond
              expeditiously to claims of copyright infringement that are
              reported to our designated copyright agent.
            </Typography>
            <Typography
              sx={[
                dmStyle.text,
                {
                  textDecoration: "underLine",
                  color: ColorsHelper.skyBlue1,
                  mt: "1rem",
                },
              ]}
            >
              You can find more information about the DMCA at the U.S. Copyright
              Office’s official website.
            </Typography>

            <Typography sx={[dmStyle.title, { my: "1rem" }]}>
              DMCA Notice of Alleged Infringement
            </Typography>
            <Typography sx={[dmStyle.text]}>
              If you believe that your copyrighted work has been copied in a way
              that constitutes copyright infringement and is accessible on our
              website or services, please notify our copyright agent as set
              forth below. For your complaint to be valid under the DMCA, you
              must provide the following information in writing:
            </Typography>
            <ul style={{ listStyleType: "decimal" }}>
              <Typography
                sx={[dmStyle.text, { display: "list-item", mt: "1rem" }]}
              >
                An electronic or physical signature of a person authorized to
                act on behalf of the copyright owner;
              </Typography>
              <Typography sx={[dmStyle.text, { display: "list-item" }]}>
                Identification of the copyrighted work that you claim has been
                infringed;
              </Typography>
              <Typography sx={[dmStyle.text, { display: "list-item" }]}>
                Identification of the material that is claimed to be infringing
                and where it is located on our website or services;
              </Typography>
              <Typography sx={[dmStyle.text, { display: "list-item" }]}>
                Information reasonably sufficient to permit OntarioMediaGroupSWS  to
                contact you, such as your address, telephone number, and email
                address;
              </Typography>
              <Typography sx={[dmStyle.text, { display: "list-item" }]}>
                A statement that you have a good faith belief that use of the
                material in the manner complained of is not authorized by the
                copyright owner, its agent, or law; and
              </Typography>
              <Typography sx={[dmStyle.text, { display: "list-item" }]}>
                A statement, made under penalty of perjury, that the above
                information is accurate, and that you are the copyright owner or
                are authorized to act on behalf of the owner.
              </Typography>
            </ul>

            <Typography sx={[dmStyle.title, { my: "1rem" }]}>
              Submitting a DMCA Notice
            </Typography>
            <Typography sx={[dmStyle.text]}>
              DMCA notices should be sent to our designated copyright agent at:
              Email:{" "}
              <span style={{ textDecoration: "underline" }}>
                {" "}
                support@bizsws.com
              </span>
            </Typography>
            <Typography sx={[dmStyle.text]}>
              Address: 123 Maple Street, Winton, CA 95388
            </Typography>
            <Typography sx={[dmStyle.text]}>
              Phone: +1 (209)-519-5535
            </Typography>

            <Typography sx={[dmStyle.title, { my: "1rem" }]}>
              Counter-Notice Procedure
            </Typography>
            <Typography sx={[dmStyle.text]}>
              If you believe your content was wrongly removed due to a mistake
              or misidentification, you may submit a counter-notice to our
              designated agent. Your counter-notice must include:
            </Typography>

            <ul style={{ listStyleType: "decimal" }}>
              <Typography
                sx={[
                  dmStyle.text,
                  {
                    display: "list-item",
                    listStyleType: "decimal",
                  },
                ]}
              >
                Your physical or electronic signature.
              </Typography>
              <Typography sx={[dmStyle.text, { display: "list-item" }]}>
                Identification of the material removed and where it was
                previously located.
              </Typography>
              <Typography sx={[dmStyle.text, { display: "list-item" }]}>
                A statement under penalty of perjury that you have a good faith
                belief the material was removed by mistake or misidentification.
              </Typography>
              <Typography sx={[dmStyle.text, { display: "list-item" }]}>
                Your name, address, and telephone number, and a statement that
                you consent to the jurisdiction of the federal district court
                for the judicial district in which your address is located, or
                if outside the US, for any judicial district in which
                OntarioMediaGroupSWS  may be found, and that you will accept service of
                process from the person who provided the original DMCA
                notification or their agent.
              </Typography>
            </ul>

            <Typography sx={[dmStyle.title, { my: "1rem" }]}>
              Repeat Infringers
            </Typography>
            <Typography sx={[dmStyle.text]}>
              OntarioMediaGroupSWS  reserves the right to terminate accounts of repeat
              infringers. A repeat infringer is a user who has been notified of
              infringing activity more than twice and/or has had infringing
              material removed from our services more than twice.
            </Typography>

            <Typography sx={[dmStyle.title, { my: "1rem" }]}>
              Modifications to Policy
            </Typography>
            <Typography sx={[dmStyle.text]}>
              OntarioMediaGroupSWS  reserves the right to modify this DMCA Policy at any
              time. Changes will be effective upon posting to our website.For
              any questions regarding this DMCA Policy, please contact us at
              <span style={{ textDecoration: "underline" }}>
                {" "}
                support@bizsws.com
              </span>
            </Typography>
          </Paper>
        </Box>
        <Footer />
      </Box>
    </React.Suspense>
  );
};

export default DMCA;
