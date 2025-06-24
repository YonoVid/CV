<script lang="ts">
    import githubLogo from "$lib/assets/github.svg"
    import linkedinLogo from "$lib/assets/linkedin.svg"
    import type { SocialLink } from "$lib/types/generic";
    
    let { style, data }:{ style?: string, data: SocialLink[] } = $props();

</script>


<div style="{style? style: "display: flex; flex-direction:column; justify-content: space-evenly; padding: 0 0 0 0.5em"}">
    {#each data as social }
    <a href="{social.url}">
        {#if social.type == "Github"}
            <img width="10em" style="width:2em" src="{githubLogo}" alt="Github"/>
        {:else if social.type == "Linkedin"}
            <img width="10em" style="width:2em" src="{linkedinLogo}" alt="Linkedin"/>
        {/if}
    </a>
    {/each}
</div>