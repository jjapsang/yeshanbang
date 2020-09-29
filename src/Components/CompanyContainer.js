import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
// import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundImage: 'url(http://samkwang21.net/images/sub_01_img1.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    // markdown: {
    //     ...theme.typography.body2,
    //     padding: theme.spacing(3, 0),
    //     margin: theme.spacing(3, 0),
    // },
}));

export default function CompanyContainer() {
    const classes = useStyles();

    return (
        <Fragment>
            <Paper className={classes.mainFeaturedPost}>
                {/* Increase the priority of the hero background image */}
                {<img style={{ width: '100%' }} src="/truffle_mushroom_1920.jpg" alt="truffle mushroom" />}

            </Paper>
            <Grid item xs={12} md={12}>
                <Typography variant="h6" gutterBottom>
                    Yes, 한방
                </Typography>
                <Divider />
                <Paper style={{ marginBottom: "50px", padding: "10px 10px 50px 10px" }}>
                    여기는 Yes, 한방 입니다.<br/>
                    인사말, 회사소개가 들어가는 영역입니다.<br/>
                </Paper>
            </Grid>
        </Fragment>

    );
}
