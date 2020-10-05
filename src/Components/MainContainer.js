import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    }
}));

export default function MainContainer(props) {
    const classes = useStyles();

    const mainFeaturedPost = {
        title: 'Yes, 한방',
        description: "산행을 통해 얻는 자연산 버섯, 산삼, 산약초..",
        description_detail: "그리고 건강",
        image: '/mountain.jpg',
        imgText: 'main image description',
        linkText: ''
    };

    const featuredPosts = [
        {
            title: '산삼',
            date: '2019.05.14',
            description: '강원도 자연산 산삼',
            image: '/sansam.jpeg',
            imageText: 'Image Text',
        },
        {
            title: 'Post title',
            date: 'Nov 11',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
        }
    ];

    // const posts = [post1, post2, post3];
    const posts = [];

    const sidebar = {
        title: 'About',
        description: 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
        archives: [
            { title: 'March 2020', url: '#' },
            { title: 'February 2020', url: '#' },
            { title: 'January 2020', url: '#' },
            { title: 'November 1999', url: '#' },
            { title: 'October 1999', url: '#' },
            { title: 'September 1999', url: '#' },
            { title: 'August 1999', url: '#' },
            { title: 'July 1999', url: '#' },
            { title: 'June 1999', url: '#' },
            { title: 'May 1999', url: '#' },
            { title: 'April 1999', url: '#' }
        ],
        social: [
            { name: 'GitHub', icon: GitHubIcon },
            { name: 'Twitter', icon: TwitterIcon },
            { name: 'Facebook', icon: FacebookIcon }
        ],
    };

    return(
        <Fragment>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
            {
                featuredPosts.map((post) => {
                    return (
                        <FeaturedPost key={post.title} post={post} />
                    )
                })
            }
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
                <Main title="From the firehose" posts={posts} />
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                />
            </Grid>
        </Fragment>
    )
}