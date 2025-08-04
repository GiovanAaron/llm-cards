import cardSet1 from '../data/cards-set-1.json';
import cardSet2 from '../data/cards-set-2.json';
import cardSet3 from '../data/cards-set-3.json';

export default function fetchCards() {
  return [...cardSet1, ...cardSet2, ...cardSet3]
}
