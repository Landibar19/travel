// Footer.js
import React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Stack } from "@mui/material";

const Footer = () => {
  const footerSections = [
    {
      title: "About Us",
      links: ["About Company", "Our Team", "Mission and Vision"],
    },
    { title: "Contact Us", links: ["Contact Information", "Support", "Sales"] },
    {
      title: "Products/Services",
      links: ["Product A", "Product B", "Service A", "Service B"],
    },
    {
      title: "Resources",
      links: ["Blog", "Documentation", "FAQs", "Tutorials"],
    },
    {
      title: "Policies",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Refund Policy",
        "Cookie Policy",
      ],
    },
    {
      title: "Social Media",
      links: ["Twitter", "Facebook", "LinkedIn", "Instagram"],
    },
    {
      title: "Support",
      links: ["Help Center", "Customer Support", "Report a Bug"],
    },
    { title: "Newsletter", links: ["Subscribe", "Latest Updates", "Archive"] },
    {
      title: "Career",
      links: ["Job Openings", "Internships", "Employee Benefits"],
    },
    {
      title: "Community",
      links: ["Forums", "Events", "Contributor Guidelines"],
    },
    {
      title: "Accessibility",
      links: ["Accessibility Statement", "WCAG Compliance", "Feedback"],
    },
    {
      title: "Site Map",
      links: ["Home", "Products/Services", "Blog", "Contact Us"],
    },
  ];

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
      <Grid container spacing={3}>
        {footerSections.map((section, sectionIndex) => (
          <Grid item xs={12} sm={4} key={sectionIndex}>
            <Stack
              sx={{
                width: "70%",
                justifyContent: "left",
                alignItem: "flex-start",
              }}
            >
              <h3>{section.title}</h3>
              <List>
                {section.links.map((link, linkIndex) => (
                  <ListItem
                    key={linkIndex}
                    button
                    component="a"
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <ListItemText primary={link} />
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Footer;
