<?php
namespace ThePixelLeague\MainSite;

use Silex\Application as Application;
use Silex\Provider\TwigServiceProvider as TwigProvider;
use ThePixelLeague\MainSite\Pages\HomePage;


class Main
{
    public function __invoke()
    {
        $app = new Application();

        $app->register(new TwigProvider(), array(
            'twig.path' => __DIR__ . '/../../../templates'
        ));

        $app['Page.Home'] = function($app){
            $template = $app['twig']->loadTemplate('HomePage.twig');
            return new HomePage($template);
        };

        $app->get('/', $app['Page.Home']);

        $app->run();
    }
}
