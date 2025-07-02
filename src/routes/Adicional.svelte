<script lang="ts">
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    import { complyFilter } from "$lib";
    import type { FilterList, PersonalData } from "$lib/types/generic";

    let { animationDelay = 0, personal, filter }: { animationDelay?: number, personal: PersonalData, filter: FilterList } = $props()
    const others = (personal.other || []).filter((entry)=>complyFilter(entry.tags, filter))
</script>

<div style="display: flex; flex-flow: column; padding: 0.5em 0 0.5em 0">
    <div class="content" transition:fly={{delay: animationDelay, duration: 2000, easing: cubicOut, x: -50}}>
        <h5 class="content-title">
            Idiomas
        </h5>
        <div class="content-data">
            {#each personal.lenguage as lenguage}
                <b>{lenguage.name} ({lenguage.level})</b>
            {/each}
        </div>
    </div>
    {#if others.length > 0}
        <div class="content" transition:fly|global={{delay: animationDelay, duration: 2000, easing: cubicOut, x: -50}}>
            <h6 class="content-title">
                Otros conocimientos
            </h6>
            <div class="content-data" style="font-size: 0.7em">
                {#each others as skill}
                    <b>{skill.data}</b>
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    h5, h6{
        font-family: "Boldonse";
        padding: 0.5rem 3rem 0.5rem 0.5rem;
        margin: 0;
        border-radius: 0 1rem 1rem 0;
        background-color: #2E559682;
    }
    b{
        font-family: "Numans";
    }
    .content
    {
        display: flex;
        flex: 1;
    }
    .content-title
    {
        flex: 1;
    }
    .content-data
    {
        background-color: #ffffffbb;
        border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        display: flex;
        text-align: center;
        flex: 3;
        justify-content: space-evenly;
        font-size: 0.8em;
    }
</style>