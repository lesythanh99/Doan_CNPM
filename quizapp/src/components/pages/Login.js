import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
        
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
function Login() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <Paper>

                    </Paper>
                </Grid>
                <Grid item xs={3}>
                        <h1>Sign In</h1>
                        <form>
                            <Paper>
                            <TextField id="outlined-basic" label="User Name" variant="outlined"  fullWidth/>
                            </Paper>
                            <Paper>
                            <TextField id="outlined-basic" label="Password" variant="outlined"  fullWidth/>
                            </Paper>
                        </form>
                </Grid>
            </Grid>
        </div>
    );
}
export default Login;