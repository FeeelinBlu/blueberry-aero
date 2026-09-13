ServerEvents.recipes(event => {
    event.remove({ id: 'create_ultimate_factory:compacting_coalblock' })
    event.remove({ id: 'create_ultimate_factory:mixing_gunpowder' })
    event.remove({ id: 'create_ultimate_factory:haunting_apple' })
    event.remove({ id: 'create_ultimate_factory:crushing_netherite' })
    event.remove({ id: 'create_ultimate_factory:crushing_blackstone' })
    event.remove({ id: 'create_ultimate_factory:crushing_scoria' })
    event.remove({ id: 'dndesires:dragon_breathing/chorus_fruit_from_apple' })
    event.remove({ id: 'create_aeronautics_toolgun:survival_structure_tool' })
    event.remove({ id: 'create_aeronautics_toolgun:magnetic_gun' })
    event.remove({ id: 'create_aeronautics_toolgun:portable_structure_container' })
});
