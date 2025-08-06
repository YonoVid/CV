<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    import { defaultFilter, personal } from "$lib/data/static";
    import type { FilterList } from "$lib/types/generic";
    
    import Basic from "./Basic.svelte";
    import Job from "./Job.svelte";
    import Education from "./Education.svelte";
    import Adicional from "./Adicional.svelte";
    import Skill from "./Skill.svelte";

    let url: string
    let filter: FilterList = defaultFilter

    onMount(() => { url = window.location.href })
</script>

<div>
    <Basic personal={ personal } />
    <Job animationDelay = { 1000 } experiences = { personal.job ||  [] } filter = { filter } />
    <Skill animationDelay = { 1500 } skills = { personal.skill || [] } filter = { filter } />
    <Education animationDelay = { 2000 } experiences = { personal.education } />
    <Adicional animationDelay = { 5000 } personal = { personal } filter = { filter } />
</div>
<footer transition:fade={{delay: 6000, duration: 1000}}>
    <div style="display: flex; justify-content: flex-end; gap: 1em;">
        {#each personal.social as social }
            <a href="{social.url}">{social.type}</a><br/>
        {/each}
        <a href="{url}">Versión Web</a>
    </div>
</footer>

<style>
    a {
        font-family: "Numans";
        font-size: 0.5em;
    }
</style>