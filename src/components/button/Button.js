import { Stack } from "@mui/material";

const Button = ({ children, ...props }) => (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.2}
      underline='none'
      fontWeight='400'
      sx={{
        cursor: "pointer",
      }}
      color={{color: "white",
      "&:hover": { color: "grey" }}}
      {...props}
    >
      {children}
    </Stack>
  )

  export default Button;