<script lang="ts">
    import { onMount } from "svelte"

    let ready: boolean = $state(false)
    let { children } = $props()

    onMount(() => ready = true)
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Boldonse&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Boldonse&family=Numans&display=swap" rel="stylesheet">

<div class="soft-blueprint" style="width: 100%; min-height:98vh; margin:0; padding: 0">
    <div class="boldonse-regular" style="width: 90%; margin: auto; padding: 2em 0 2em 0">
        {#if ready}
            {@render children()}
        {/if}
    </div>
</div>

    
<style>
    /* Pattern from https://projects.verou.me/css3patterns/#blueprint-grid */
    .soft-blueprint{
        background-color:rgb(217, 229, 239);
        background-image: linear-gradient(white 2px, transparent 2px),
        linear-gradient(90deg, white 2px, transparent 2px),
        linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
        background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
        background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px;
    }
</style>