import { Button, Grid, Typography, TextField, Link } from "@mui/material";
import { Link as Routerlink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSigniIn,
} from "../../store/auth/thunks";
export const LoginPage = () => {
  const dispacht = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "enzoantilipi1@gmail.com",
    password: "123456",
  });
  //lo primero que hacemos en el useForm es escribie la forma que le queremos dar
  const onSubmit = (event) => {
    event.prevenDefault();

    console.log({ email, password });
    dispacht(checkingAuthentication);
  };

  const onGoogleSingIn = () => {
    console.log("onGoogleSingIn");
    dispacht(startGoogleSigniIn());
  };

  return (
    <AuthLayout title="Login ">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container sapacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSingIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={Routerlink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
