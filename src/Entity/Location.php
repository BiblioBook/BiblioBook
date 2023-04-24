<?php

namespace App\Entity;

use App\Repository\LocationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LocationRepository::class)]
class Location
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $floor = null;

    #[ORM\Column(length: 50)]
    private ?string $room = null;

    #[ORM\Column(length: 5)]
    private ?string $shelfRow = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFloor(): ?int
    {
        return $this->floor;
    }

    public function setFloor(int $floor): self
    {
        $this->floor = $floor;

        return $this;
    }

    public function getRoom(): ?string
    {
        return $this->room;
    }

    public function setRoom(string $room): self
    {
        $this->room = $room;

        return $this;
    }

    public function getShelfRow(): ?string
    {
        return $this->shelfRow;
    }

    public function setShelfRow(string $shelfRow): self
    {
        $this->shelfRow = $shelfRow;

        return $this;
    }
}
