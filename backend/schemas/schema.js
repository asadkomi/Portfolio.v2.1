// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import about from "./about.js";
import skills from "./skills.js";
import experiences from "./experiences.js";
import workExperience from "./workExperience.js";
import portfolio from "./portfolio.js";
import testimonials from "./testimonials.js";
import contact from "./contact.js";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    about,
    skills,
    experiences,
    workExperience,
    portfolio,
    testimonials,
    contact,
  ]),
});
