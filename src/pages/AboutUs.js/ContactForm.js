import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  ThemeProvider,
} from "@mui/material";
import theme from "../../themes/theme";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    bookNow: false,
    marketingEmails: false,
  });

  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      bookNow: false,
      marketingEmails: false,
    });
  };

  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "20px", border: "2px solid white" }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "white" }}
      >
        Contact Us
      </Typography>
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.bookNow}
                    onChange={handleInputChange}
                    name="bookNow"
                    color="primary"
                  />
                }
                label="I'm ready to book now"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.marketingEmails}
                    onChange={handleInputChange}
                    name="marketingEmails"
                    color="primary"
                  />
                }
                label="I want marketing emails"
              />
            </Grid>
            <Grid item xs={12} margin={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                margin={4}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    </Container>
  );
};

export default ContactForm;
