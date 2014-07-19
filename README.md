pr0stats
========

This is a script to fetch information about uploaded items from the website [pr0gramm.com](http://pr0gramm.com). It uses the pr0gramm API.

All analysis that are being performed by the creator of this repository are [published on the pr0gramm website](http://pr0gramm.com/user/pr0stats). Further information to each analysis can be found at the [pr0stats tumblr blog](http://pr0stats.tumblr.com). We plan to switch from the tumblr blog to github pages in order to avoid tumblr.

Analyses that were performed using this script can be found on [http://pr0stats.github.io/pr0stats](http://pr0stats.github.io/pr0stats).

Installation
============
    
Create a `mysql.php` file in the `src/` folder that contains your MySQL credentials. You can use [`mysql-sample.php`](mysql-sample.php) as blueprint.

    $mysql = array(
        'host' => 'localhost',
        'user' => 'user',
        'pass' => 'pass',
        'db'   => 'database'
    );

Create the `stats` table on your database.

    CREATE TABLE IF NOT EXISTS `pr0stats` (
        `id` int(11) unsigned NOT NULL,
        `user` varchar(60) NOT NULL,
        `mark` tinyint(1) NOT NULL,
        `promoted` int(11) unsigned NOT NULL,
        `up` int(11) unsigned NOT NULL,
        `down` int(11) unsigned NOT NULL,
        `created` int(11) unsigned NOT NULL,
        `fullsize` varchar(300) DEFAULT NULL,
        `source` varchar(300) DEFAULT NULL,
        `image` varchar(300) NOT NULL,
        `thumb` varchar(300) NOT NULL,
        `tags` text,
        `comments` int(11) NOT NULL,
        PRIMARY KEY (`id`),
        KEY `user` (`user`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

Now run the script `stats.php` (you have to run the script via [CLI](http://en.wikipedia.org/wiki/Command-line_interface)).

    php -q stats.php
    
You can add an `offset` parameter to start the script from a specified offset item id.

    php -q stats.php <offset>
    
Now you can perform SQL queries on your database, e.g.

    SELECT COUNT(DISTINCT(`user`)) FROM `pr0stats`

returns the amount of users that have contributed uploads to pr0gramm.com.