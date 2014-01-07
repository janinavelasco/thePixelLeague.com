<?php
namespace ThePixelLeague\MainSite\Pages;

use Twig_TemplateInterface;

class HomePage
{
    private $template;

    public function __invoke()
    {
        return $this->template->render(array());
    }

    public function __construct(Twig_TemplateInterface $template)
    {

        $this->template = $template;
    }
}
