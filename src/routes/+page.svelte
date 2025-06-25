<script lang="ts">
    import { page } from "$app/stores"
    import { defaultFilter, personal } from "$lib/data/static"
    import type { FilterList } from "$lib/types/generic";
    
    import Basic from "./Basic.svelte";
    import Job from "./Job.svelte";
    import Education from "./Education.svelte";
    import Adicional from "./Adicional.svelte";
    import Skill from "./Skill.svelte";

    let filter: FilterList = defaultFilter
</script>

<div>
    <Basic { personal } />
    <Job experiences = { personal.job ||  [] } filter = { filter } />
    <Skill skills = { personal.skill || [] } filter = { filter } />
    <Education experiences = { personal.education } />
    <Adicional personal = { personal } filter = { filter } />
</div>
<footer>
    <div style="display: flex; justify-content: flex-end; gap: 1em;">
        {#each personal.social as social }
            <a href="{social.url}">{social.type}</a><br/>
        {/each}
    </div>
</footer>
