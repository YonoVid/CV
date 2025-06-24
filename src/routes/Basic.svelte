<script lang="ts">
    import mapIcon from "$lib/assets/map-pin.svg"
    import phoneIcon from "$lib/assets/smartphone.svg"
    import mailIcon from "$lib/assets/mail.svg"
    import type { PersonalData } from "$lib/types/generic";
    
    import Socials from "./Socials.svelte";
    import { formatPhone } from "$lib";

    let { personal }: {personal: PersonalData} = $props()
</script>

<div style="display: flex; padding: 0">
    <h1 style="color: white; backround-color:#FFF">{personal.name}</h1>
    <Socials data={personal.social}/>
</div>
<div class="data">
    <div class="data-item">
        <img width="10em" src="{mapIcon}" alt="Map Icon"/>
        <b>{personal.region}</b>
    </div>
    <div class="data-item">
        <img width="10em" src="{phoneIcon}" alt="Phone Icon"/>
        <a href="tel:{personal.phone}">{formatPhone(personal.phone)}</a>
    </div>
    <div class="data-item">
        <img width="10em" src="{mailIcon}" alt="Mail Icon"/>
        <a href="mailto:{personal.email}">{personal.email}</a>
    </div>
</div>

<style>
    h1{
        font-family: "Boldonse";
        padding: 0.5em 1em 0.5em 0.5em;
        margin: 0;
        border-radius: 0 1em 1em 0;
        background-color: #2E5596;
    }
    b, a{
        font-family: "Numans";
    }
    div > a
    {
        font-weight: bold;
        color: black;
        text-decoration: none;
    }
    .data-item > a, .data-item > b{
        text-align: center;
        margin: auto;
    }
    .data-item > img
    {
        width: 2em;
        max-width: 2em;
    }
    .data-item{
        display: flex;
        flex: 1 1 0; 
        margin: 0.5em;
    }
    .data{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        background-color: #2e549682;
    }
</style>