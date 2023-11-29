// Design a flexible OOP system to describe characters in an RPG game
// There are 4 Unique Characters which use Different Types of Attacking mechanisms and Defending mechanisms.
// Orges - fights with club and defends with shield
// Peons - fights with club and defends with shield
// Knights - fights with a Sword and defends with Armor
// Archer - fights with Bow and Arrow and has only his tunic to protect them
// All Characters can collect gold and this will always be the same for every new type of character
// At the end of this each character should be able to attack and defend and collect gold. If needed any character should be able to change his fighting style, say if a knight losing his sword, but finds a club he should be able to change his fighting mechanism to use the club
// Hint: To complete this assignment you will need multiple classes and interfaces and an Abstract class
// You can use our Final Rubber Ducky Walkthrough example as a guide


abstract class Character implements Attackable, Defendable {
    protected attackAbility: Attackable
    protected defendAbility: Defendable
    protected golds: number

    constructor(golds: number) {
        this.golds = golds
    }

    get gold(): number {
        return this.golds
    }

    collectGold(gold: number): void {
        this.golds += gold
    }

    setAttackAbility(attackAbility: Attackable): void {
        this.attackAbility = attackAbility
    }

    setDefendAbility(defendAbility: Defendable): void {
        this.defendAbility = defendAbility
    }

    attack(): void {
        this.attackAbility.attack()
    }

    defend(): void {
        this.defendAbility.defend()
    }
}

interface Attackable {
    attack(): void
}

interface Defendable {
    defend(): void
}

class AttackWithSword implements Attackable {
    attack(): void {
        console.log('Fights with a Sword')
    }
}

class AttackWithBowArrow implements Attackable {
    attack(): void {
        console.log('Fights with a Bow and Arrow')
    }
}

class AttackWithClub implements Attackable {
    attack(): void {
        console.log('Fights with a Club')
    }
}

class DefendWithShield implements Defendable {
    defend(): void {
        console.log('Defends with a Shield')
    }
}

class DefendWithArmor implements Defendable {
    defend(): void {
        console.log('Defends with an Armor')
    }
}

class DefendWithTunic implements Defendable {
    defend(): void {
        console.log('Defends with a Tunic')
    }
}

class Ogre extends Character {
    constructor(golds: number) {
        super(golds)
        this.attackAbility = new AttackWithClub()
        this.defendAbility = new DefendWithShield()
    }
}

class Peon extends Character {
    constructor(golds: number) {
        super(golds)
        this.attackAbility = new AttackWithClub()
        this.defendAbility = new DefendWithShield()
    }
}

class Knight extends Character {
    constructor(golds: number) {
        super(golds)
        this.attackAbility = new AttackWithSword()
        this.defendAbility = new DefendWithArmor()
    }
}

class Archer extends Character {
    constructor(golds: number) {
        super(golds)
        this.attackAbility = new AttackWithBowArrow()
        this.defendAbility = new DefendWithTunic()
    }
}
