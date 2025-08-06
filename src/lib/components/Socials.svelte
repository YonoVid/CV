<script lang="ts">
    import { fly } from "svelte/transition"

    import githubLogo from "$lib/assets/github.svg"
    import linkedinLogo from "$lib/assets/linkedin.svg"
    import type { SocialLink } from "$lib/types/generic";
    
    let { style, animationDelay, data }:{ style?: string, animationDelay?: number, data: SocialLink[] } = $props();

</script>


<div class="container" style="{style}" transition:fly={{x: -10, duration: 4000, delay: animationDelay || 1000}}>
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

<style>
    .container{
        display: flex;
        flex-direction:column;
        justify-content: space-evenly;
        padding: 0 0 0 0.5em;
    }
</style>