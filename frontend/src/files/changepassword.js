import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import './files.css'

function ChangePassword() {
    return (
        <div className="change_password" >
        <div>
        <h3>Change Password</h3>
            <br />
            <form>
              <TextField
                sx={{ width: 319 }}
                required
                id="outlined-required"
                name="email"
                label="Old Password"
              />
              <br />
              <br />
              <TextField
                sx={{ width: 319 }}
                id="outlined-password-input"
                required
                label="New Password"
                name="password"
                type="password"
                autoComplete="current-password"
              />
              <br /> <br />
              <Button type="submit" variant="contained">
                CHANGE PASSWORD
              </Button>
            </form>
        </div>
    </div>
    );
}

export default ChangePassword;