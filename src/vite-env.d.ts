/// <reference types="vite/client" />

declare module "*.vue" {}

interface Settings {
	homeTeam: string;
	awayTeam: string;
}

type TopOrBottom = "top" | "bottom";

type Inning = {
	number: number;
	half: TopOrBottom;
};

type Count = {
	balls: number;
	strikes: number;
};

interface GameState {
	homeScore: number;
	awayScore: number;
	inning: Inning;
	count: Count;
	basesLoaded: (1 | 2 | 3)[];
	outs: number;
}
