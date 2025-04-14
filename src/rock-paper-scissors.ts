export function play(player1: string, player2: string): number {
  const moves = ["rock", "paper", "scissors"];

 
  const move1 = player1.trim().toLowerCase();
  const move2 = player2.trim().toLowerCase();

  if (!moves.includes(move1) || !moves.includes(move2)) {
    throw new Error("Invalid move");
  }

  if (move1 === move2) {
    return 0; 
  }

  if (
    (move1 === "rock" && move2 === "scissors") ||
    (move1 === "scissors" && move2 === "paper") ||
    (move1 === "paper" && move2 === "rock")
  ) {
    return 1; 
  }

  return 2; 
}
