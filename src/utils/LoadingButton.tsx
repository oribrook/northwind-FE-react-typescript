import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";

export const LoadingButton = (props: any) => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      dir="rtl"
      {...props}
      onClick={async (e) => {
        setLoading(true);
        await props.onClick(e);
        await new Promise((x) => setTimeout(x, 500));
        setLoading(false);
      }}
    >
      {loading && (
        <CircularProgress
          size={16}
          color="inherit"
          sx={{
            marginInlineEnd: 1,
          }}
        />
      )}
      {loading ? props.loadingTxt || props.children : props.children}
    </Button>
  );
};
