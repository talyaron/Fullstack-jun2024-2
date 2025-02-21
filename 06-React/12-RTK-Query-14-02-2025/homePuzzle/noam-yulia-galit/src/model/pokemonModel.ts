export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    cries: {
        latest: string;
        legacy: string;
    };
    forms: Form[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_abilities: any[];
    past_types: any[];
    species: NamedAPIResource;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

interface Ability {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
}

interface Form {
    name: string;
    url: string;
}

interface GameIndex {
    game_index: number;
    version: NamedAPIResource;
}

interface HeldItem {
    item: NamedAPIResource;
    version_details: VersionDetail[];
}

interface VersionDetail {
    rarity: number;
    version: NamedAPIResource;
}

interface Move {
    move: NamedAPIResource;
    version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
}

interface NamedAPIResource {
    name: string;
    url: string;
}

interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        };
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
        'official-artwork': {
            front_default: string | null;
            front_shiny: string | null;
        };
        showdown: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
    };
    versions: {
        'generation-i': GenerationISprites;
        'generation-ii': GenerationIISprites;
        'generation-iii': GenerationIIISprites;
        'generation-iv': GenerationIVSprites;
        'generation-v': GenerationVSprites;
        'generation-vi': GenerationVISprites;
        'generation-vii': GenerationVIISprites;
        'generation-viii': GenerationVIIISprites;
    };
}

interface GenerationISprites {
    'red-blue': {
        back_default: string;
        back_gray: string;
        back_transparent: string;
        front_default: string;
        front_gray: string;
        front_transparent: string;
    };
    yellow: {
        back_default: string;
        back_gray: string;
        back_transparent: string;
        front_default: string;
        front_gray: string;
        front_transparent: string;
    };
}

interface GenerationIISprites {
    crystal: {
        back_default: string;
        back_shiny: string;
        back_shiny_transparent: string;
        back_transparent: string;
        front_default: string;
        front_shiny: string;
        front_shiny_transparent: string;
        front_transparent: string;
    };
    gold: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        front_transparent: string;
    };
    silver: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        front_transparent: string;
    };
}

interface GenerationIIISprites {
    emerald: {
        front_default: string;
        front_shiny: string;
    };
    'firered-leafgreen': {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    };
    'ruby-sapphire': {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    };
}

interface GenerationIVSprites {
    'diamond-pearl': GenerationIVSpriteSet;
    'heartgold-soulsilver': GenerationIVSpriteSet;
    platinum: GenerationIVSpriteSet;
}

interface GenerationIVSpriteSet {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

interface GenerationVSprites {
    'black-white': {
        animated: GenerationIVSpriteSet;
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
}

interface GenerationVISprites {
    'omegaruby-alphasapphire': {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
    'x-y': {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
}

interface GenerationVIISprites {
    icons: {
        front_default: string | null;
        front_female: string | null;
    };
    'ultra-sun-ultra-moon': {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
}

interface GenerationVIIISprites {
    icons: {
        front_default: string | null;
        front_female: string | null;
    };
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
}

interface Type {
    slot: number;
    type: NamedAPIResource;
}