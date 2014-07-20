pr0stats
========

This is a script to fetch information about uploaded items from the website [pr0gramm.com](http://pr0gramm.com). It uses the pr0gramm.com API (`http://pr0gramm.com/api/`). This script shall provide a way to access information on a contemporary web project and process it e.g. for scientific, research or even entertaining purposes.

There is a [project page](http://pr0stats.github.io/pr0stats) on github pages where we publish analyses based on information we fetched with this script. Some - but not all - of these analyses are also [published on pr0gramm.com](http://pr0gramm.com/user/pr0stats).

Feel free to [submit an issue](https://github.com/pr0stats/pr0stats/issues/new) or [create a pull request](https://github.com/pr0stats/pr0stats/compare/) if you find something that could be improved.

*pr0stats is not connected to, commissioned by or authorised by the operators of pr0gramm.com. We discourage excessive usage of this script as this might slow down the performance of the pr0gramm.com service.*

Table of contents
-----------------

* [Installation](#installation)
* [Usage](#usage)

Installation
============
    
Create a `mysql.php` file in the `src/` folder that contains your MySQL credentials. You can use [`mysql-sample.php`](mysql-sample.php) as blueprint.

    $mysql = array(
        'host' => 'localhost',
        'user' => 'user',
        'pass' => 'pass',
        'db'   => 'database'
    );

Create the `pr0stats` table on your database.

    CREATE TABLE `pr0stats` (
        `id` int(11) unsigned NOT NULL,
        `user` varchar(60) NOT NULL,
        `sf_level` tinyint(1) NOT NULL,
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
        KEY `sf_level` (`sf_level`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

Usage
=====

Now run the script `stats.php` (you have to run the script via [CLI](http://en.wikipedia.org/wiki/Command-line_interface)).

    php -q stats.php
    
You can add an `offset` parameter to start the script from a specified offset item id.

    php -q stats.php <offset>
    
Perform queries on fetched data
-------------------------------

Now you can perform SQL queries on your database, e.g.

    SELECT COUNT(DISTINCT(`user`)) FROM `pr0stats`

returns the amount of users that have contributed uploads to pr0gramm.com.
