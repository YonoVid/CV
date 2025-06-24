<script lang="ts">
    import mapIcon from "$lib/assets/map-pin.svg"
    import phoneIcon from "$lib/assets/smartphone.svg"
    import mailIcon from "$lib/assets/mail.svg"

    import { personal } from "$lib/data/static"
    import { formatPhone } from "$lib/index"
    import Socials from "./Socials.svelte";
    import Basic from "./Basic.svelte";

</script>


<div>
    <Basic {personal}/>
</div>
<footer>
    <p>
        {#each personal.social as social }
            <a href="{social.url}">{social.type}</a><br/>
        {/each}
    </p>
</footer>



<style>
    .compact{
        margin: 0;
        padding: 0;
    }
    h1{
        font-family: "Boldonse";
        padding: 0.5em 1em 0.5em 0.5em;
        margin: 0;
        border-radius: 0 1em 1em 0;
        background-color: #2E5596;
    }
    p, b, a{
        font-family: "Numans";
    }
    p > a, div > a
    {
        font-weight: bold;
        color: black;
        text-decoration: none;
    }
</style>
