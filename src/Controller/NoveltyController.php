<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NoveltyController extends AbstractController
{
    #[Route('/novelty', name: 'app_novelty')]
    public function index(): Response
    {
        return $this->render('novelty/index.html.twig', [
            'controller_name' => 'NoveltyController',
        ]);
    }
}
