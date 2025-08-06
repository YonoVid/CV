<script lang="ts">
    import { slide } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    import type { ExperienceData } from "$lib/types/generic";

    let { title, animationDelay = 0, experiences }: 
        { title?: string, animationDelay?: number, experiences: ExperienceData[] } = $props()
</script>

<div style="display: flex; flex-flow: column; padding: 0.5em 0 0.5em 0">
    <h3 transition:slide={{delay: animationDelay, duration: 2000, easing: cubicOut, axis: "x"}} >
        { title || "Educación" }
    </h3>
    <div class="container" transition:slide={{delay: animationDelay + 2000, duration: 1000}} >
        {#each experiences as experience}
            <div class="title-container">
                <h4 style="flex-grow: 4; white-space:nowrap;">{experience.role.title} {experience.state?"-":""} {experience.state}</h4>
                
                <div style="width: 40%; display: flex; flex-flow: column; text-align: center">
                    <h5>{experience.institution}</h5>
                    <b>({experience.activeTime.startYear} - {experience.activeTime.endYear})</b>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    h3{
        font-family: "Boldonse";
        padding: 0.5em 3em 0.5em 0.5em;
        margin: 0;
        border-radius: 0 1em 1em 0;
        background-color: #2E559682;
        overflow: hidden;
        white-space: nowrap;
    }
    h4{
        font-family: "Boldonse";
        padding: 0.5em 3em 0.5em 0.5em;
        margin: 0;
        white-space:nowrap;
    }
    h5{
        font-family: "Boldonse";
        margin: 0;
        text-align: center;
        margin: auto;
    }
    b{
        font-family: "Numans";
    }
    .title-container
    {
        padding: 0.5em 1em 0.5em 1em;
        display: flex;
        justify-content: space-between;
    }
    .container
    {
        background-color: #ffffffbb;
        border-radius: 0.5em 0.5em 0.5em 0.5em;
    }
</style>