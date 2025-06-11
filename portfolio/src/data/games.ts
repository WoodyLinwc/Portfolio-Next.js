export interface Game {
    title: string;
    description: string;
    image: string;
    link: string;
    subtitle: string;
}

export const games: Game[] = [
    {
        title: "Space Invader",
        description:
            "🛰The objective of the game is to control a small spaceship at the bottom of the screen and shoot down rows of invading aliens that move side to side and gradually move closer to the player's spaceship.🚀",
        image: "/images/space.png",
        link: "https://woodylinwc.github.io/Space-Invaders",
        subtitle: "arcade-style shoot 'em up game",
    },
    {
        title: "Minesweeper",
        description:
            "🔎The objective of the game is to clear a board containing hidden mines without detonating any of them.💣",
        image: "/images/minesweeper.png",
        link: "https://woodylinwc.github.io/Minesweeper/",
        subtitle: "classic puzzle game",
    },
    {
        title: "Snake",
        description:
            "🐍The objective of the game is to achieve the highest score possible by eating as much food as possible without crashing into obstacles or the snake's own tail.🍎",
        image: "/images/snake.png",
        link: "https://woodylinwc.github.io/Snake",
        subtitle: "classic arcade-style game",
    },
    {
        title: "The Aviator",
        description:
            "🛫The objective is to fly as far as possible and stay away from the rock.🏅",
        image: "/images/plane.png",
        link: "https://woodylinwc.github.io/TheAviator",
        subtitle: "dodge obstacles game",
    },
];
