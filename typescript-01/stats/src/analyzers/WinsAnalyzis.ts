import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { MatchResult } from '../MatchResult';

export class WinsAnalyzis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (const match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) wins += 1;
      if (match[2] === this.team && match[5] === MatchResult.AwayWin) wins += 1;
    }

    return `Team ${this.team} won ${wins} times.`;
  }
}
