<script lang="ts">
    import { complyFilter } from "$lib";
    import type { FilterList, TagData } from "$lib/types/generic";

    let { skills, filter }: { skills: TagData[], filter: FilterList } = $props()
    let hard = skills.filter((skill)=>skill.tags.includes("Habilidad Dura"))
    let soft = skills.filter((skill)=>skill.tags.includes("Habilidad Blanda"))
</script>

<div style="display: flex; flex-flow: column; padding: 0.5em 0 0.5em 0">
    <h3 style="backround-color:#FFF">Habilidades</h3>
    <div class="container">
        <div class="category-container">
            {#each hard.filter((entry)=>complyFilter(entry.tags, filter)) as skill}
                <b>{skill.data}</b>
            {/each}
        </div>
        <div class="category-container" style="margin: 1em 0 0 0">
            {#each soft.filter((entry)=>complyFilter(entry.tags, filter)) as skill}
                <b>{skill.data}</b>
            {/each}
        </div>
    </div>
</div>

<style>
    h3{
        font-family: "Boldonse";
        padding: 0.5em 3em 0.5em 0.5em;
        margin: 0;
        border-radius: 0 1em 1em 0;
        background-color: #2E559682;
    }
    b{
        font-family: "Numans";
        text-align: center;
    }
    .container
    {
        background-color: #ffffffbb;
        border-radius: 0.5em 0.5em 0.5em 0.5em;
        padding: 1em 1em 1em 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .category-container
    {
        display: flex;
        justify-content: space-evenly;
    }
</style>