// Created By ND

import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";

const custTFComman = {
  fieldDiv: {
    div: {
      marginRight: "0rem",
    },
    input: {
      ...FontsHelper.font400,
      fontSize: "1rem",
      padding: "0.75rem 1rem",
      color: ColorsHelper.black,
    },
    fieldset: {
      borderRadius: "2rem",
      borderColor: "#05051899 !important",
    },
    textarea: {
      ...FontsHelper.font400,
      fontSize: "1rem",
      color: ColorsHelper.black,
    },
  },
};

const custTFStyles = {
  fieldMobInput: {
    div: {
      paddingLeft: "0rem",
      ...custTFComman.fieldDiv,
    },
  },
  fieldInput: {
    div: {
      ...custTFComman.fieldDiv,
    },
  },
};

export default custTFStyles;
