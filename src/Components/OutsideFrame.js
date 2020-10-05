import React, { Fragment } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
// import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
// import Main from './Main';
// import Sidebar from './Sidebar';
import Footer from './Footer';
import PageRouter from './PageRouter';

const sections = [
    { title: '회사소개', url: '/company' },
    { title: '제품소개', url: '/product' },
    { title: '오시는길', url: '/contactus' },
];

export default function OutsideFrame() {
    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Yes, 한방" sections={sections} />
                <main>
                    <PageRouter />
                    {/* <MainFeaturedPost post={mainFeaturedPost} />
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
                    </Grid> */}
                </main>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </Fragment>
    );
}
