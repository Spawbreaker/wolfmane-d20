export type Pack = 'newcomer' | 'braves' | 'seers' | 'mystics' | 'artisans' | 'striders';

export interface Ability {
  name: string;
  description: string;
  charges: number | 'passive';
  pack: Pack;
  key: string;
  isPackAbility?: true;
}

export const Abilities: Ability[] = [
  {
    name: 'Healer',
    description: 'You may spend charges to heal allies at a 1:1 ratio.',
    charges: 4,
    pack: 'newcomer',
    key: 'n1',
  },
  {
    name: 'Defender',
    description: 'On a successful roll, you may take the damage an ally would have taken',
    charges: 'passive',
    pack: 'newcomer',
    key: 'n2',
  },
  {
    name: 'Lucky',
    description: 'You may change a single roll of yours to a 20',
    charges: 1,
    pack: 'newcomer',
    key: 'n3',
  },
  {
    name: 'Counter',
    description: 'When taking damage, you may roll to try and strike back',
    charges: 2,
    pack: 'newcomer',
    key: 'n4',
  },
  {
    name: 'Fleet',
    description: 'Failure, as well as critical failure, chance is reduced by 1',
    charges: 'passive',
    pack: 'newcomer',
    key: 'n5',
  },
  {
    name: 'Brave',
    description: 'You may spend charges to deal extra damage at a 1:1 ratio',
    charges: 3,
    pack: 'braves',
    key: 'b1',
    isPackAbility: true,
  },
  {
    name: 'Bulwark',
    description: 'On a successful roll, you may choose an ally to defend. They take no damage, and you must roll again to determine how much damage you take.',
    charges: 'passive',
    pack: 'braves',
    key: 'b2',
  },
  {
    name: 'Raging Bull',
    description: 'Whenever you deal damage, you may take 1 damage. If you do, you deal an additional 2 damage to your target.',
    charges: 'passive',
    pack: 'braves',
    key: 'b3',
  },
  {
    name: 'Cleave',
    description: 'Whenever you deal damage, you may spend a charge to roll an extra attack against another adjacent target',
    charges: 3,
    pack: 'braves',
    key: 'b4',
  },
  {
    name: 'Bloody Brawler',
    description: 'Whenever you take damage, you deal 1 damage to the attacker',
    charges: 'passive',
    pack: 'braves',
    key: 'b5',
  },
  {
    name: 'Pack Tactics',
    description: 'Whenever an ally deals damage, you may choose not to roll and instead deal the same damage as your ally to any target enemy',
    charges: 2,
    pack: 'braves',
    key: 'b6',
  },
  {
    name: 'Victory Rush',
    description: 'Whenever a hostile creature you dealt damage to this round dies, you recover 1 HP. If you are already at max health, you add a +1 to your next roll instead',
    charges: 'passive',
    pack: 'braves',
    key: 'b7',
  }
];

export const NewcomerAbilitiesList = Abilities.filter(a => a.pack === 'newcomer');