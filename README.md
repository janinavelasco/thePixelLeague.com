thePixelLeague.com
==================

I started this in Silex I don't know if that is actually what we want but It wasn't too bad just to set up a skeleton.

The Pages as in where the html would go would be in the templates/ directory. I made HomePage.twig you can look at http://twig.sensiolabs.org/doc/templates.html
to get a better idea of how to use the templates most of that stuff isn't nessecary to know for you guys. Basically just treat it like a
regular html file. 

I didn't make anything for CSS or JS but they would just be their own directories. I'm still thinking about a build system so there
is nothing like Pake or all that if you make a js file you need include them individually same with CSS. We don't have to end up using this
I was just bored so I thought I'd start us somewhere.

Backend Setup
-------------

Just clone it down run/install composer if you don't have it:

`curl -sS https://getcomposer.org/installer | php`
 
 then
 
 `php composer.phar install`.
 
 
 If that is all done set up a vhost ect.. and it should run.

Frontend Setup
--------------

Need: 
  Ruby, Rubygems, Sass, Compass, modular-scale
  
Run:
  npm install, bower install
  
Building: 
  Run grunt watch in the root directory to watch all sass and js files for 
  changes. Livereload is enabled.
