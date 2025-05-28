/* ---------- Interfaces avec “brand” pour les différencier ---------- */

/**
 * L’attribut `readonly __brand` sert uniquement à distinguer les deux
 * types : un objet MajorCredits ne pourra jamais être affecté à une
 * variable MinorCredits, et inversement.
 */
export interface MajorCredits {
  credits: number;
  readonly __brand: 'major';
}

export interface MinorCredits {
  credits: number;
  readonly __brand: 'minor';
}

/* -------------------- Fonctions utilitaires -------------------- */

/**
 * Additionne deux MajorCredits et renvoie un nouvel objet MajorCredits.
 */
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'major',                 // on garde la marque Major
  };
}

/**
 * Additionne deux MinorCredits et renvoie un nouvel objet MinorCredits.
 */
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minor',                 // on garde la marque Minor
  };
}

/* --------------------- Démo rapide --------------------- */
const math: MajorCredits  = { credits: 3, __brand: 'major' };
const physics: MajorCredits = { credits: 4, __brand: 'major' };
const pe: MinorCredits    = { credits: 1, __brand: 'minor' };
const art: MinorCredits   = { credits: 2, __brand: 'minor' };

console.log(sumMajorCredits(math, physics));   // { credits: 7, __brand: 'major' }
console.log(sumMinorCredits(pe, art));         // { credits: 3, __brand: 'minor' }
