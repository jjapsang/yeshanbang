import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import MLink from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        // justifyContent: 'space-between',
        justifyContent: 'space-around',
        overflowX: 'auto',
    },
    toolbarLink: {
        textDecoration: "none",
        fontSize: "15px",
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    title: {
        textDecoration: "none",
        color: "black",
        fontWeight: "bolder"
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const { sections, title } = props;

    return (
        <Fragment>
            <Toolbar className={classes.toolbar}>
                {/*<Button size="small">Subscribe</Button>*/}

                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    <MLink href="/" className={classes.title} style={{}}>
                        {title}
                    </MLink>
                </Typography>

                {/*<IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
                </Button>*/}
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            {
                sections.map((section, index) => (
                    <Link key={index} to={section.url} className={classes.toolbarLink}>
                        {section.title}
                    </Link>
                ))
            }
            </Toolbar>
        </Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
