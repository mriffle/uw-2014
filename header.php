<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" class="no-js">
    <head>
        <title> <?php wp_title(' | ',TRUE,'right'); bloginfo('name'); ?> </title>
        <meta charset="utf-8">
        <meta name="description" content="<?php bloginfo('description', 'display'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="application-name" content="Washington"/>
        <meta name="msapplication-TileColor" content="#4b2e83"/>
	<meta name="msapplication-square70x70logo" content="assets/images/footer.jpg" />
	<meta name="msapplication-square150x150logo" content="assets/images/footer.jpg" />
	<meta name="msapplication-wide310x150logo" content="assets/images/footer.jpg" />
	<meta name="msapplication-square310x310logo" content="assets/images/footer.jpg" />
        <meta name="msapplication-notification" content="frequency=30;polling-uri=http://notifications.buildmypinnedsite.com/?feed=http://www.washington.edu/news/category/uw-and-the-community/feed/&amp;id=1;polling-uri2=http://notifications.buildmypinnedsite.com/?feed=http://www.washington.edu/news/category/uw-and-the-community/feed/&amp;id=2;polling-uri3=http://notifications.buildmypinnedsite.com/?feed=http://www.washington.edu/news/category/uw-and-the-community/feed/&amp;id=3;polling-uri4=http://notifications.buildmypinnedsite.com/?feed=http://www.washington.edu/news/category/uw-and-the-community/feed/&amp;id=4;polling-uri5=http://notifications.buildmypinnedsite.com/?feed=http://www.washington.edu/news/category/uw-and-the-community/feed/&amp;id=5; cycle=1"/>

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <?php wp_head(); ?>

        <!--[if lt IE 9]>
            <script src="<?php bloginfo("template_directory"); ?>/assets/ie/js/html5shiv.js" type="text/javascript"></script>
            <script src="<?php bloginfo("template_directory"); ?>/assets/ie/js/respond.js" type="text/javascript"></script>
            <link rel='stylesheet' href='<?php bloginfo("template_directory"); ?>/assets/ie/css/ie.css' type='text/css' media='all' />
        <![endif]-->

        <?php
        echo get_post_meta( get_the_ID() , 'javascript' , 'true' );
        echo get_post_meta( get_the_ID() , 'css' , 'true' );
        ?>

    </head>
    <!--[if lt IE 9]> <body <?php body_class('lt-ie9'); ?>> <![endif]-->
    <!--[if gt IE 8]><!-->
    <body <?php body_class(); ?> >
    <!--<![endif]-->

    <div id="uwsearcharea" aria-hidden="true" class="uw-search-bar-container"></div>

   <a role="banner" aria-label="main_content" id="main-content" href="#main_content" class='screen-reader-shortcut'>Skip to main content</a>

    <div id="uw-container">

    <div id="uw-container-inner">


    <?php get_template_part('thinstrip'); ?>

    <?php require( get_template_directory() . '/inc/template-functions.php' );
          uw_dropdowns(); ?>
