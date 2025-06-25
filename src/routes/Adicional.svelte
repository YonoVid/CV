<script lang="ts">
    import { complyFilter } from "$lib";
    import type { FilterList, PersonalData } from "$lib/types/generic";

    let { personal, filter }: { personal: PersonalData, filter: FilterList } = $props()
</script>

<div style="display: flex; flex-flow: column; padding: 0.5em 0 0.5em 0">
    <h5 style="backround-color:#FFF">Otras habilidades</h5>
    <div class="container">
        {#each personal.lenguage as lenguage}
            <b>{lenguage.name} - {lenguage.level}</b>
        {/each}
        {#each (personal.other || []).filter((entry)=>complyFilter(entry.tags, filter)) as skill}
            <b>{skill.data}</b>
        {/each}
    </div>
</div>

<style>
    h5{
        font-family: "Boldonse";
        padding: 0.5em 3em 0.5em 0.5em;
        margin: 0;
        border-radius: 0 1em 1em 0;
        background-color: #2E559682;
    }
    b{
        font-family: "Numans";
    }
    .container
    {
        background-color: #ffffffbb;
        border-radius: 0.5em 0.5em 0.5em 0.5em;
        padding: 1em 1em 1em 1em;
        display: flex;
        justify-content: space-evenly;
    }
</style>