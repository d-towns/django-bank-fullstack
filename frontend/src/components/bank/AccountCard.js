import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AccountCard = (props) => {
  return (
    <Box sx={{ minWidth: 375 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <div style={{ marginBottom: "10px" }}>
              <Typography sx={{ fontSize: 18, width: "100%" }} component="div">
                {props.account.account_number}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {props.account.account_id}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ mb: 1.5 }}>Current Balance:</Typography>
              <Typography sx={{ mb: 1.5 }}>
                ${props.account.current_balance}
              </Typography>
            </div>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button size="small">View Transactions</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default AccountCard;
