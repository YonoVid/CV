<script lang="ts">
    import { slide } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    import { complyFilter } from "$lib";
    import type { FilterList, TagData } from "$lib/types/generic";

    let { animationDelay = 0, skills, filter }: { animationDelay?: number, skills: TagData[], filter: FilterList } = $props()
    let hard = skills.filter((skill)=>skill.tags.includes("Habilidad Dura"))
    let soft = skills.filter((skill)=>skill.tags.includes("Habilidad Blanda"))
</script>

<div style="display: flex; flex-flow: column; padding: 0.5em 0 0.5em 0">
    <h3 transition:slide={{ delay: animationDelay, duration: 2000, easing: cubicOut, axis: "x"}}>
        Habilidades
    </h3>
    <div class="container" transition:slide={{delay: animationDelay + 2000, duration: 1000}}>
        <div class="container-item">
            <h4>Habilidades Duras</h4>
            <ul class="category-container">
                {#each hard.filter((entry)=>complyFilter(entry.tags, filter)) as skill}
                    <li>{skill.data}.</li>
                {/each}
            </ul>
        </div>
        <div class="container-item">
            <h4>Habilidades Blandas</h4>
            <ul class="category-container" style="margin: 1em 0 0 0">
                {#each soft.filter((entry)=>complyFilter(entry.tags, filter)) as skill}
                    <li>{skill.data}.</li>
                {/each}
            </ul>
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
    .container-item > h4{
        font-family: "Numans";
        text-align: center;
    }
    li {
        font-family: "Numans";
        text-align: justify;
    }
    .container
    {
        background-color: #ffffffbb;
        border-radius: 0.5em 0.5em 0.5em 0.5em;
        padding: 0 1em 0 0;
        display: flex;
        justify-content: space-evenly;
        font-size: 0.9em;
    }
    .container-item
    {
        flex: 1;
        margin: 0 0.5em 0 0.5em;
    }
    @media(max-width: 500px)
    {
        .container
        {
            flex-direction: column;
        }   
    }
</style>