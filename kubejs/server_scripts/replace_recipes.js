ServerEvents.recipes(event => {
    event.remove({ id: 'quark:world/crafting/woodsets/ancient/vertical_ancient_planks' }) // Vertical Ashen Planks fix
    event.shaped(
        Item.of('quark:vertical_ancient_planks', 3),
        [
            'A',
            'A',
            'A'
        ],
        {
            A: 'quark:ancient_planks'
        }
    ).id('blueberryaero:vertical_ancient_planks')
    event.remove({ id: 'quark:world/crafting/woodsets/azalea/vertical_azalea_planks' }) // Vertical Azalea Planks fix
    event.shaped(
        Item.of('quark:vertical_azalea_planks', 3),
        [
            'Z',
            'Z',
            'Z'
        ],
        {
            Z: 'quark:azalea_planks'
        }
    ).id('blueberryaero:vertical_azalea_planks')
    event.remove({ id: 'yyzsbackpack:iron_backpack' }) // Iron Backpack crafting
    event.shaped(
        'yyzsbackpack:iron_backpack',
        [
            'LIL',
            'ICI',
            'LLL'
        ],
        {
            L: 'minecraft:leather',
            I: 'minecraft:iron_ingot',
            C: '#c:chests'
        }
    ).id('blueberryaero:iron_backpack')
    event.remove({ id: 'yyzsbackpack:gold_backpack' }) // Gold Backpack crafting
    event.shaped(
        'yyzsbackpack:gold_backpack',
        [
            'NGN',
            'GCG',
            'NNN'
        ],
        {
            N: 'naturalist:hide',
            G: 'minecraft:gold_ingot',
            C: '#c:chests'
        }
    ).id('blueberryaero:gold_backpack')
    event.remove({ id: 'yyzsbackpack:diamond_backpack' }) // Diamond Backpack crafting
    event.shaped(
        'yyzsbackpack:diamond_backpack',
        [
            'HDH',
            'DCD',
            'HHH'
        ],
        {
            H: 'mynethersdelight:hoglin_hide',
            D: 'minecraft:diamond',
            C: '#c:chests'
        }
    ).id('blueberryaero:diamond_backpack')
    event.remove({ id: 'yyzsbackpack:gold_backpack_smithing' }) // Gold Backpack smithing upgrade
    event.smithing(
        'yyzsbackpack:gold_backpack',
        'naturalist:hide',
        'yyzsbackpack:iron_backpack',
        'minecraft:gold_ingot'
    ).id('blueberryaero:gold_backpack_smithing')
    event.remove({ id: 'yyzsbackpack:diamond_backpack_smithing' }) // Diamond Backpack smithing upgrade
    event.smithing(
        'yyzsbackpack:diamond_backpack',
        'mynethersdelight:hoglin_hide',
        'yyzsbackpack:gold_backpack',
        'minecraft:diamond'
    ).id('blueberryaero:diamond_backpack_smithing')
    event.remove({ id: 'dndesires:crafting/handheld_drill' }) // Handheld Drill mechanical crafting
    event.recipes.create.mechanical_crafting(
        'dndesires:handheld_drill',
        [
            'BECD',
            ' RA '
        ],
        {
            A: 'create:andesite_alloy',
            B: 'create:brass_ingot',
            C: 'create:cogwheel',
            D: 'create:mechanical_drill',
            E: 'create_sa:steam_engine',
            R: 'create:brass_casing'
        }
    ).id('blueberryaero:handheld_drill')
    event.remove({ id: 'dndesires:crafting/handheld_saw' }) // Handheld Drill mechanical crafting
    event.recipes.create.mechanical_crafting(
        'dndesires:handheld_saw',
        [
            'AECS',
            ' RA '
        ],
        {
            A: 'create:andesite_alloy',
            C: 'create:cogwheel',
            E: 'create_sa:heat_engine',
            R: 'create:andesite_casing',
            S: 'create:mechanical_saw'
        }
    ).id('blueberryaero:handheld_saw')
});
